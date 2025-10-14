import React, { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact">
      <h2>Contact</h2>
      {submitted ? (
        <p>Thank you for reaching out! I will get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Name<br />
            <input type="text" name="name" required />
          </label>
          <br />
          <label>
            Email<br />
            <input type="email" name="email" required />
          </label>
          <br />
          <label>
            Message<br />
            <textarea name="message" rows="5" required />
          </label>
          <br />
          <input type="submit" value="Send Message" />
        </form>
      )}
    </section>
  );
}