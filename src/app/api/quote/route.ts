import { NextResponse } from "next/server";

export const runtime = "edge";

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
    const recipientEmail = process.env.SMTP_TO || "banuengineeringtrichy@gmail.com";

    // 1. Resend API Handler (If RESEND_API_KEY is configured in Cloudflare)
    if (process.env.RESEND_API_KEY) {
      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.SMTP_FROM || "Banu Engineering Inquiry <onboarding@resend.dev>",
          to: [recipientEmail],
          subject: `[Quote Request] ${selectedServiceLabel} - ${name}`,
          html: `
            <h3>New Quote Request - Banu Engineering</h3>
            <p><strong>Client Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email || "Not provided"}</p>
            <p><strong>Location:</strong> ${location || "Not provided"}</p>
            <p><strong>Project Type:</strong> ${projectType}</p>
            <p><strong>Service:</strong> ${selectedServiceLabel}</p>
            <p><strong>Preferred Contact:</strong> ${contactMethod}</p>
            <p><strong>Requirements:</strong> ${requirements || "None"}</p>
          `,
          reply_to: email || undefined,
        }),
      });

      if (resendRes.ok) {
        return NextResponse.json({ success: true });
      }
    }

    // 2. Web3Forms API Handler (If WEB3FORMS_ACCESS_KEY is configured in Cloudflare)
    if (process.env.WEB3FORMS_ACCESS_KEY) {
      const web3Res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.WEB3FORMS_ACCESS_KEY,
          name,
          email: email || recipientEmail,
          phone,
          location,
          projectType,
          service: selectedServiceLabel,
          requirements,
          contactMethod,
          subject: `[Quote Request] ${selectedServiceLabel} - ${name}`,
        }),
      });

      if (web3Res.ok) {
        return NextResponse.json({ success: true });
      }
    }

    // 3. Direct Email Delivery via FormSubmit to banuengineeringtrichy@gmail.com
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
      return NextResponse.json({ success: true });
    }

    const errData = await formSubmitRes.json().catch(() => ({}));
    throw new Error(errData.message || "Failed to dispatch email notification.");

  } catch (error: any) {
    console.error("Quote API Error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to process quote request." },
      { status: 500 }
    );
  }
}
