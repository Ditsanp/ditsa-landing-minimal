import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (req: Request) => {
  const { name, email, projectBrief, phone } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: "ditsadigitalmarketing@gmail.com",
    subject: `New Project Inquiry from ${name}`,
    replyTo: email,
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Project Inquiry</title>
      </head>
      <body style="font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4;">
        <table cellpadding="0" cellspacing="0" style="width: 100%; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <tr>
            <td style="padding: 30px 0; text-align: center; background-color: #053D42";">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; text-transform: uppercase; letter-spacing: 2px;">New Project Inquiry</h1>
            </td>
          </tr>
          <tr>
            <td style="padding: 30px;">
              <h2 style="color: #053D42"; margin-top: 0; border-bottom: 2px solid #053D42"; padding-bottom: 10px;">Contact Information</h2>
              <table cellpadding="5" cellspacing="0" style="width: 100%;">
                <tr>
                  <td style="font-weight: bold; width: 100px;">Name:</td>
                  <td>${name}</td>
                </tr>
                <tr>
                  <td style="font-weight: bold;">Email:</td>
                  <td><a href="mailto:${email}" style="color: #053D42"; text-decoration: none;">${email}</a></td>
                </tr>
                <tr>
                  <td style="font-weight: bold;">Phone:</td>
                  <td><a href="tel:${phone}" style="color: #053D42"; text-decoration: none;">${phone}</a></td>
                </tr>
              </table>
              
              <h2 style="color: #053D42"; margin-top: 30px; border-bottom: 2px solid #053D42"; padding-bottom: 10px;">Project Brief</h2>
              <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; border-left: 5px solid #053D42";">
                <p style="margin: 0; line-height: 1.8;">${projectBrief}</p>
              </div>
              
              <div style="margin-top: 30px; padding: 20px; background-color: #e6f3ff; border-radius: 8px;">
                <p style="margin: 0; font-style: italic; color: #555;">This inquiry was submitted through ditsa.com.np website's contact form. Please respond promptly to discuss the project details further.</p>
              </div>
            </td>
          </tr>
          <tr>
            <td style="background-color: #053D42"; text-align: center; padding: 20px; color: #ffffff;">
              <p style="margin: 0; font-size: 14px;">&copy; ${new Date().getFullYear()} DITSA. All rights reserved.</p>
              <p style="margin: 10px 0 0; font-size: 12px;">
                <a href="https://ditsa.com.np" style="color: #ffffff; text-decoration: none;">ditsa.com.np</a> | 
              </p>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ status: "Ok" });
  } catch (error) {
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
};
