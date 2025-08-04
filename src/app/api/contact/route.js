import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const payload = await req.json();
  const { name, email, phone, message, serviceType } = payload;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    const mailOptions = {
      from: `${process.env.SMTP_EMAIL}`,
      to: `${process.env.SMTP_EMAIL}`,
      subject: `New Inquiry: ${serviceType}`,
      html: `
      <h2>New Contact Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Service Type:</strong> ${serviceType}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `,
    };

    await transporter
      .sendMail(mailOptions)
      .then((data) => {
        return NextResponse.json(
          { message: "Email sent successfully" },
          { status: 200 }
        );
      })
      .catch((error) => {
        console.error(error);
        return NextResponse.json(
          { message: "Error sending email" },
          { status: 500 }
        );
      });

    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating contact", error);
    return NextResponse.json(
      { message: "Error submitting form" },
      { status: 500 }
    );
  }
}
