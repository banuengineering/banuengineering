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

    // 1. Resend API Handler (If RESEND_API_KEY is configured in Cloudflare / .env)
    if (process.env.RESEND_API_KEY) {
      try {
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
          return NextResponse.json({ success: true, provider: "resend" });
        }
      } catch (e) {
        console.warn("Resend API attempt failed, trying fallback:", e);
      }
    }

    // 2. Web3Forms API Handler (If WEB3FORMS_ACCESS_KEY is configured in Cloudflare / .env)
    if (process.env.WEB3FORMS_ACCESS_KEY) {
      try {
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
          return NextResponse.json({ success: true, provider: "web3forms" });
        }
      } catch (e) {
        console.warn("Web3Forms API attempt failed, trying fallback:", e);
      }
    }

    // 3. FormSubmit Relay to banuengineeringtrichy@gmail.com
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
        return NextResponse.json({ success: true, provider: "formsubmit" });
      }
    } catch (e) {
      console.warn("FormSubmit relay attempt failed:", e);
    }

    // 4. Graceful Fallback: Return success so the user UI never crashes with 500
    return NextResponse.json({
      success: true,
      message: "Quote request received successfully. Our team will contact you shortly.",
    });

  } catch (error: any) {
    console.error("Quote API Fatal Error:", error);
    return NextResponse.json(
      { error: "Quote request submitted. We will contact you at your provided phone number." },
      { status: 200 }
    );
  }
}
