import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  
  const body = await req.json();
  const { name, email, message, subject } = body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.ADMIN_EMAIL,
      pass: process.env.ADMIN_PASSWORD, 
    },
  });

  try {
    // Send to yourself
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.ADMIN_EMAIL}>`,
      to: process.env.ADMIN_EMAIL,
      subject: subject,
      html: `
        <h3>New Contact Request</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
    });

    // Send acknowledgment to user
    await transporter.sendMail({
      from: `"Your Name/Company" <${process.env.ADMIN_EMAIL}>`,
      to: email,
      subject: '✅ We Received Your Message!',
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for reaching out. We've received your message and will get back to you shortly.</p>
        <br/>
        <p>Best regards,<br/>Avinash</p>
        <p>+91 9892583723</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email Error:', error);
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
  }
}

export async function GET() {
  try {
    return Response.json({ message: 'Aviansh' });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}