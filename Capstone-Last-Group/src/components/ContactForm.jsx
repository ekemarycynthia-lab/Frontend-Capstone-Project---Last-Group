import { useState } from "react";

const FORM_ENDPOINT = "https://whitebricks.com/tsacademy.php";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault(); // the browser's built-in validation has already passed
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, { method: "POST", body: new FormData(form) });
      if (!res.ok) throw new Error("HTTP " + res.status);
      form.reset();
      setStatus("success");
    } catch (err) {
      console.error("Form submit failed:", err);
      setStatus("error");
    }
  };

  return (
    <section id="contact">
      <h2>Have Questions About Planetary Science?</h2>
      <p>Interested in learning more about space, astronomy, or how planetary data is collected and analyzed? Reach out and we'll get back to you.</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name*</label>
        <input type="text" id="name" name="name" placeholder="Full name" required />

        <label htmlFor="email">Email*</label>
        <input type="email" id="email" name="email" placeholder="example@email.com" required />

        <label htmlFor="tel">Phone Number*</label>
        <input type="tel" id="tel" name="tel" placeholder="Please enter a valid phone number." required maxLength={11} pattern="[0-9]{11}" title="Enter an 11-digit phone number" />

        <label htmlFor="message">Message*</label>
        <textarea id="message" name="message" placeholder="Enter your message" required maxLength={100}></textarea>

        <input type="submit" value={status === "sending" ? "Sending..." : "Submit"} disabled={status === "sending"} />
      </form>

      {status === "success" && (
        <p role="status" style={{ marginTop: "1rem", fontWeight: 600, color: "#1a7a3a" }}>
          Thanks! Your message has been sent.
        </p>
      )}
      {status === "error" && (
        <p role="alert" style={{ marginTop: "1rem", fontWeight: 600, color: "#b3261e" }}>
          Something went wrong. Please try again.
        </p>
      )}
    </section>
  );
}