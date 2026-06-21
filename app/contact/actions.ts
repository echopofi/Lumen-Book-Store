"use server";

import nodemailer from "nodemailer";

export async function sendContactMessage(_prevState: unknown, formData: FormData) {
  const smtpEmail = process.env.SMTP_EMAIL?.trim();
  const smtpPassword = process.env.SMTP_PASSWORD?.trim();
  const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL?.trim();

  if (!smtpEmail || !smtpPassword || !receiverEmail) {
    console.error("Missing email env vars:", {
      SMTP_EMAIL: !!smtpEmail,
      SMTP_PASSWORD: !!smtpPassword,
      CONTACT_RECEIVER_EMAIL: !!receiverEmail,
    });
    return { error: "Email service is not configured." };
  }

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { error: "All fields are required." };
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: smtpEmail,
      pass: smtpPassword,
    },
  });

  try {
    await transporter.sendMail({
      from: smtpEmail,
      to: receiverEmail,
      subject: `New Contact Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    return { success: true };
  } catch (err) {
    console.error("SMTP send failed. Full error:", err);
    if (err instanceof Error) {
      console.error("Error message:", err.message);
    }
    return { error: "Failed to send message, please try again." };
  }
}