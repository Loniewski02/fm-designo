"use server";
import nodemailer from "nodemailer";

export async function FormSubmit(prevState: any, formData: any) {
  const res = await fetch(`${process.env.URL}`, {
    method: "POST",
    body: formData,
  });

  const data = await res.json();
  if (!data) return prevState;

  const name = formData.get("name");
  const email = formData.get("email");
  if (!process.env.EMAIL || !process.env.PASS) return prevState;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });

  const content = `Hello ${name} <br /><br />
      Thank you for contacting us. We will contact you soon.<br /><br />
      Best regards, <br />
      <i>Loniewski02</i>
    `;

  const info = {
    from: process.env.EMAIL,
    to: email,
    subject: "Designo - contact form ✔",
    html: content,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(info, (err) => {
      if (err) {
        console.error("Error: ", err);
        reject(err);
      } else {
        resolve(null);
      }
    });
  });

  return data;
}
