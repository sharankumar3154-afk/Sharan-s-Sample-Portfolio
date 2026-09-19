import { useState } from 'react';

function Contact() {
  const [messageSent, setMessageSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setMessageSent(true);
  }

  return (
    <section id="contact" className="section contact">
      <div>
        <p className="eyebrow">CONTACT</p>
        <h2>Let&apos;s build something useful.</h2>
        <p>
          Have a project, internship or full-time opportunity? Send a message and
          I&apos;ll get back to you.
        </p>

        <div className="contact-links">
          <a href="mailto:hello@example.com">✉ sharankumar3154@gmail.com</a>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            ⌘ GitHub
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            in LinkedIn
          </a>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <input required placeholder="Your name" />
        <input required type="email" placeholder="Email address" />
        <textarea required rows="5" placeholder="Tell me about your project…" />
        <button className="btn primary">Send message</button>
        {messageSent && (
          <p className="success">Thanks! Your message has been received.</p>
        )}
      </form>
    </section>
  );
}

export default Contact;
