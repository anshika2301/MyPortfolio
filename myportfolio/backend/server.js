import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve("./backend/.env") });
console.log("Loaded ENV:", {
  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_PASS: process.env.EMAIL_PASS ? "✅ Exists" : "❌ Missing"
});

import express from "express";
import cors from "cors";

import nodemailer from "nodemailer";
import { fileURLToPath } from "url";



const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// ----------------- Contact form API -----------------
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465, // secure SSL port
  secure: true, // use SSL
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

    await transporter.verify()
      .then(() => console.log("✅ SMTP connected"))
      .catch(err => console.error("❌ SMTP failed:", err));

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject:subject||`New message from ${name}`,
     // subject: subject || `New message from ${name}`,
      text:`From: ${name} <${email}>\n\n${message}`,
    });
//Sending Acknowledgment Email to the User
    await transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: email, // sender's email
  subject: "We received your message ✅",
  text: `Hello ${name},\n\nThank you for reaching out! We have received your message and will get back to you soon.\n\nYour Message:\n${message}\n\nBest regards,\nAnshika Verma`,
});

    res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Something went wrong." });
  }
});

// ----------------- Serve React Frontend in Production -----------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (process.env.NODE_ENV === "production") {
  const frontendPath = path.join(__dirname, "../dist");
  app.use(express.static(frontendPath));

  // Send index.html for any unknown route (SPA support)
  app.get("*", (req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
  });
}

// ----------------------------------------------------------------------

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
