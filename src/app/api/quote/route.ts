import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

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

    // Initialize SMTP transport
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587", 10),
      secure: process.env.SMTP_PORT === "465",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false, // Prevents issues with self-signed certs in shared hosting envs
      },
    });

    const selectedServiceLabel = service;

    // Construct the email template
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

    // Send transaction email
    await transporter.sendMail({
      from: process.env.SMTP_FROM || `"Banu Engineering Inquiry" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO,
      subject: `[Quote Request] ${selectedServiceLabel} - ${name}`,
      html: emailHtml,
      replyTo: email || undefined,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Nodemailer SMTP Error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to process quote request." },
      { status: 500 }
    );
  }
}
