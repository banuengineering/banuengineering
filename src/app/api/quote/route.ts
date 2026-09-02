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

    // Construct formatted email HTML content
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

    // 1. Resend API Handler
    if (process.env.RESEND_API_KEY) {
      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.SMTP_FROM || "Banu Engineering Inquiry <onboarding@resend.dev>",
          to: [process.env.SMTP_TO || "admin@banuengineering.com"],
          subject: `[Quote Request] ${selectedServiceLabel} - ${name}`,
          html: emailHtml,
          reply_to: email || undefined,
        }),
      });

      if (!resendRes.ok) {
        const errText = await resendRes.text();
        throw new Error(`Resend API Error: ${errText}`);
      }

      return NextResponse.json({ success: true });
    }

    // 2. Web3Forms API Handler
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
          email,
          phone,
          location,
          projectType,
          service: selectedServiceLabel,
          requirements,
          contactMethod,
          subject: `[Quote Request] ${selectedServiceLabel} - ${name}`,
        }),
      });

      if (!web3Res.ok) {
        const errText = await web3Res.text();
        throw new Error(`Web3Forms API Error: ${errText}`);
      }

      return NextResponse.json({ success: true });
    }

    // Fallback response for logging
    console.log("Quote Request Received (Edge):", { name, phone, email, service, location });
    return NextResponse.json({ success: true, message: "Quote request logged successfully." });

  } catch (error: any) {
    console.error("Quote API Error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to process quote request." },
      { status: 500 }
    );
  }
}
