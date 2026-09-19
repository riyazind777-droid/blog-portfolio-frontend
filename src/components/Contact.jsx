import React, { useState } from "react";
import Footer from "./common/Footer";

function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    e.target.reset();
  };

  return (
    <div className="page-shell py-16">
      <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <span className="section-label">Contact</span>
          <h1 className="mt-5 text-5xl font-extrabold tracking-tight text-slate-50 md:text-7xl">
            Let’s build something <span className="text-orange-400">useful.</span>
          </h1>
          <p className="mt-6 max-w-md leading-7 text-slate-400">
            Have a project, freelance opportunity or developer role in mind? Send me a message.
          </p>
          <a
            href="https://github.com/riyazind777-droid"
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-block font-bold text-slate-200 hover:text-orange-400"
          >
            GitHub profile ↗
          </a>
        </div>

        <form onSubmit={handleSubmit} className="card rounded-3xl p-7 md:p-9">
          <div className="grid gap-5 md:grid-cols-2">
            <input required name="name" placeholder="Your name" className="field" />
            <input required type="email" name="email" placeholder="Email address" className="field" />
          </div>
          <input required name="subject" placeholder="Subject" className="field mt-5" />
          <textarea required name="message" rows="7" placeholder="Tell me about your project..." className="field mt-5 resize-none" />
          {sent && <p className="mt-4 text-sm font-semibold text-emerald-400">Message captured successfully. Connect the form to your email/API to receive it.</p>}
          <button className="button-style mt-5" type="submit">Send message →</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contact
