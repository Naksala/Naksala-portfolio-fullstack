import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Only allow requests from our own website.
app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173" }));
app.use(express.json({ limit: "10kb" }));

// Remember when each visitor last sent a message, to stop spam (one message per minute per IP).
const lastSent = new Map();
const WAIT_MS = 60 * 1000;

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

// Creates the mail transporter only when email settings exist.
function createTransporter() {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) return null;
  return nodemailer.createTransport({
    service: "gmail",
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
  });
}

const transporter = createTransporter();

// Sends the contact message. Three ways, picked from the .env settings:
//  1. Resend (HTTP API)  - works on free hosts such as Render, which block SMTP.
//  2. Gmail (SMTP)       - fine on your own computer or a paid host.
//  3. Neither            - the message is just printed in the terminal (testing).
async function deliverMessage({ name, email, message }) {
  const to = process.env.EMAIL_TO || process.env.EMAIL_USER;
  const subject = `Portfolio message from ${name}`;
  const text = `Name: ${name}\nEmail: ${email}\n\n${message}`;

  if (process.env.RESEND_API_KEY) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio <onboarding@resend.dev>",
        to: [to],
        reply_to: email,
        subject,
        text,
      }),
    });
    if (!response.ok) throw new Error(`Resend responded with ${response.status}`);
  } else if (transporter) {
    await transporter.sendMail({ from: process.env.EMAIL_USER, to, replyTo: email, subject, text });
  } else {
    console.log("New contact message (email not configured):", { name, email, message });
  }
}

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  // 1. Validate the input
  if (!name?.trim() || !message?.trim() || !isValidEmail(email || "")) {
    return res.status(400).json({ error: "Please fill in every field with valid details." });
  }
  if (name.length > 80 || message.length > 2000) {
    return res.status(400).json({ error: "Message is too long." });
  }

  // 2. Simple rate limit
  const now = Date.now();
  if (now - (lastSent.get(req.ip) || 0) < WAIT_MS) {
    return res.status(429).json({ error: "Please wait a minute before sending another message." });
  }
  lastSent.set(req.ip, now);

  // 3. Deliver the message
  try {
    await deliverMessage({ name, email, message });
    res.json({ ok: true });
  } catch (error) {
    console.error("Could not send email:", error.message);
    res.status(500).json({ error: "Could not send your message right now." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
