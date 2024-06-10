"use server";
import nodemailer from "nodemailer";

export async function FormSubmit(prevState: any, formData: any) {
  const res = await fetch("../api/post-form-data", {
    method: "POST",
    body: formData,
  });

  const data = await res.json();
  if (data.data) {
    const formData = data.data;
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    });

    if (!process.env.EMAIL) return prevState;

    const content = `Hello ${formData.name} <br /><br />
      Thank you for contacting us. We will contact you soon.<br /><br />
      Best regards, <br /><br />
      Loniewski02
    `;

    const info = await transporter.sendMail({
      from: process.env.EMAIL,
      to: formData.email,
      subject: "Designo - contact form ✔",
      html: content,
    });

    await new Promise((resolve, reject) => {
      transporter.sendMail(info, (err) => {
        if (err) {
          console.error("there was an error: ", err);
          reject(err);
        } else {
          resolve(null);
        }
      });
    });
  }
  return data;
}
