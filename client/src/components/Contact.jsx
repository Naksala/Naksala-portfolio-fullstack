import { useState } from "react";
import Section from "./Section.jsx";
import { profile } from "../data/profile.js";

// Empty in development (the Vite proxy handles it). Set VITE_API_URL after deploying the server.
const API_URL = import.meta.env.VITE_API_URL || "";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error("Request failed");

      setForm({ name: "", email: "", message: "" });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section id="contact" number="05" title="Contact">
      <div className="two-column">
        <div>
          <p>I am open to research collaborations, teaching and software roles. Send me a message and I will reply as soon as I can.</p>
          <p><a href={`mailto:${profile.email}`}>{profile.email}</a></p>
          <p><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
          <p><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a></p>
        </div>

        <form className="card form" onSubmit={handleSubmit}>
          <label>
            Name
            <input name="name" value={form.name} onChange={handleChange} required maxLength={80} />
          </label>
          <label>
            Email
            <input name="email" type="email" value={form.email} onChange={handleChange} required />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" value={form.message} onChange={handleChange} required maxLength={2000} />
          </label>
          <button className="button primary" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending..." : "Send message"}
          </button>
          {status === "sent" && <p className="notice ok">Thank you, your message has been sent.</p>}
          {status === "error" && <p className="notice bad">Something went wrong. Please email me directly.</p>}
        </form>
      </div>
    </Section>
  );
}
