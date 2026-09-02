import { NextResponse } from "next/server";

export const runtime = "edge";

// Edge TLS SMTP Client for Cloudflare Workers (smtp.gmail.com:465)
async function sendEdgeSmtpEmail({
  host,
  port,
  user,
  pass,
  from,
  to,
  subject,
  html,
}: {
  host: string;
  port: number;
  user: string;
  pass: string;
  from: string;
  to: string;
  subject: string;
  html: string;
}) {
  // Dynamically import cloudflare:sockets (supported on Cloudflare Edge Workers)
  // @ts-ignore
  const { connect } = await import("cloudflare:sockets");
  const socket = connect({ hostname: host, port }, { secureTransport: "on" });
  const writer = socket.writable.getWriter();
  const reader = socket.readable.getReader();
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  async function readLine() {
    const { value } = await reader.read();
    return value ? decoder.decode(value) : "";
  }

  async function sendCmd(cmd: string) {
    await writer.write(encoder.encode(cmd + "\r\n"));
    return await readLine();
  }

  // 1. Read initial 220 banner
  await readLine();

  // 2. EHLO handshake
  await sendCmd(`EHLO ${host}`);

  // 3. Base64 AUTH LOGIN
  await sendCmd("AUTH LOGIN");
  await sendCmd(btoa(user));
  await sendCmd(btoa(pass.replace(/\s+/g, ""))); // Clean app password spaces

  // 4. Envelope setup
  await sendCmd(`MAIL FROM:<${user}>`);
  await sendCmd(`RCPT TO:<${to}>`);

  // 5. Email DATA payload
  await sendCmd("DATA");

  const mimeMessage = [
    `From: ${from}`,
    `To: ${to}`,
    `Subject: ${subject}`,
    `MIME-Version: 1.0`,
    `Content-Type: text/html; charset=utf-8`,
    ``,
    html,
    `.`,
  ].join("\r\n");

  const res = await sendCmd(mimeMessage);

  try {
    await sendCmd("QUIT");
    writer.releaseLock();
    reader.releaseLock();
    socket.close();
  } catch (e) { }

  return res;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, location, projectType, service, requirements, contactMethod } = body;

    // Basic validation
    if (!name || !phone || !service) {
      return NextResponse.json(
        { error: "Name, phone, and service type are required fields." },
        { status: 400 }
      );
    }

    const selectedServiceLabel = service;
    const smtpUser = process.env.SMTP_USER || "banuengineeringtrichy@gmail.com";
    const smtpPass = process.env.SMTP_PASSWORD || "hqzydbgqlweryhnx";
    const recipientEmail = process.env.SMTP_TO || "banuengineeringtrichy@gmail.com";

    // Construct email HTML
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; padding: 20px; border-radius: 8px;">
        <h2 style="color: #020c1b; border-bottom: 2px solid #c5a880; padding-bottom: 10px;">New Website Quote Request</h2>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
          <tr>
            <td style="padding: 8px; font-weight: bold; width: 35%; border-bottom: 1px solid #eee;">Client Name:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Phone Number:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="tel:${phone}">${phone}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Email Address:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${email ? `<a href="mailto:${email}">${email}</a>` : "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Location:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${location || "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Project Type:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${projectType}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Service Category:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; color: #bf953f;">${selectedServiceLabel}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Preferred Contact:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${contactMethod}</td>
          </tr>
        </table>
        
        <div style="margin-top: 20px;">
          <h4 style="margin-bottom: 8px; color: #020c1b; border-bottom: 1px solid #eee; padding-bottom: 5px;">Project Details / Requirements:</h4>
          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #c5a880; border-radius: 4px; font-style: italic; white-space: pre-wrap;">${requirements ? requirements : "No specific requirements detailed."}</div>
        </div>
        
        <footer style="margin-top: 30px; font-size: 0.8rem; color: #666; text-align: center; border-top: 1px solid #eee; padding-top: 15px;">
          This inquiry was sent automatically via the contact form on the Banu Engineering Website.
        </footer>
      </div>
    `;

    // 1. Direct Edge Sockets Gmail SMTP (Primary Handler)
    let smtpErrorDetails = "";
    try {
      await sendEdgeSmtpEmail({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: parseInt(process.env.SMTP_PORT || "465", 10),
        user: smtpUser,
        pass: smtpPass,
        from: process.env.SMTP_FROM || `Banu Engineering Website <${smtpUser}>`,
        to: recipientEmail,
        subject: `[New Website Quote] ${selectedServiceLabel} - ${name}`,
        html: emailHtml,
      });

      return NextResponse.json({ success: true, method: "gmail_smtp_edge" });
    } catch (edgeError: any) {
      smtpErrorDetails = edgeError?.message || String(edgeError);
      console.warn("Edge Sockets SMTP direct send failed, trying HTTP backup:", smtpErrorDetails);
    }

    // 2. HTTP Relay Backup (FormSubmit)
    try {
      const formSubmitRes = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          _subject: `[New Website Quote Request] ${selectedServiceLabel} - ${name}`,
          _template: "table",
          _captcha: "false",
          "Client Name": name,
          "Phone Number": phone,
          "Email Address": email || "Not provided",
          "Project Location": location || "Not provided",
          "Project Type": projectType,
          "Service Category": selectedServiceLabel,
          "Preferred Contact Method": contactMethod,
          "Requirements / Specifications": requirements || "No specific details provided.",
        }),
      });

      if (formSubmitRes.ok) {
        return NextResponse.json({ success: true, method: "formsubmit_backup" });
      }
    } catch (e: any) {
      console.warn("HTTP backup failed:", e);
    }

    // If both fail, return an error status so the issue is surfaced instead of hidden
    return NextResponse.json(
      { error: `Email dispatch failed. SMTP error: ${smtpErrorDetails || "Connection refused"}` },
      { status: 500 }
    );

  } catch (error: any) {
    console.error("Quote API Error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to process quote request." },
      { status: 500 }
    );
  }
}
