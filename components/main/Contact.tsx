"use client";

import { useState } from "react";
import Reveal from "./Reveal";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="bg-ink px-6 py-32 text-paper md:px-10 md:py-37.5"
    >
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-20">
        <div>
          <Reveal>
            <div className="font-mono text-xs uppercase tracking-[0.14em] text-[#A99CC4]">
              Get in touch
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 mb-6 font-display text-[38px] font-bold leading-[1.02] tracking-[-0.02em] md:text-[80px]">
              Let&apos;s start <em className="font-body font-medium italic text-lime">your</em> arc.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mb-10 max-w-[400px] text-[#B9B4A4]">
              Tell us where the brand is today and where it needs to land. We
              reply within two business days with next steps, not a sales
              call.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex flex-col gap-2.5">
              <a
                href="mailto:hello@eleviastudio.co"
                className="font-display text-xl font-medium hover:text-lime"
              >
                hello@eleviastudio.co
              </a>
              <a
                href="tel:+12125550148"
                className="font-display text-xl font-medium hover:text-lime"
              >
                +1 (212) 555-0148
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          {submitted ? (
            <div className="flex h-full flex-col justify-center">
              <p className="font-display text-2xl font-bold">
                Brief received.
              </p>
              <p className="mt-3 max-w-[380px] text-[#B9B4A4]">
                We&apos;ll be in touch within two business days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6.5">
              <Field id="name" label="Name" type="text" required />
              <Field id="email" label="Email" type="email" required />
              <div>
                <label
                  htmlFor="budget"
                  className="mb-2.5 block font-mono text-[11px] uppercase tracking-[0.08em] text-[#8F8A7B]"
                >
                  Approximate budget
                </label>
                <select
                  id="budget"
                  className="w-full border-b border-line-light bg-transparent py-2 font-body text-lg text-paper outline-none transition-colors duration-300 focus:border-lime [&>option]:text-black"
                >
                  <option>Under $25k</option>
                  <option>$25k – $75k</option>
                  <option>$75k – $150k</option>
                  <option>$150k+</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2.5 block font-mono text-[11px] uppercase tracking-[0.08em] text-[#8F8A7B]"
                >
                  What are you trying to move?
                </label>
                <textarea
                  id="message"
                  rows={3}
                  className="w-full resize-none border-b border-line-light bg-transparent py-2 font-body text-lg text-paper outline-none transition-colors duration-300 focus:border-lime"
                />
              </div>
              <button
                type="submit"
                className="mt-2.5 w-fit rounded-full bg-lime px-7.5 py-4 font-mono text-xs uppercase tracking-[0.08em] text-ink"
              >
                Send the brief
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  type,
  required,
}: {
  id: string;
  label: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2.5 block font-mono text-[11px] uppercase tracking-[0.08em] text-[#8F8A7B]"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        className="w-full border-b border-line-light bg-transparent py-2 font-body text-lg text-paper outline-none transition-colors duration-300 focus:border-lime"
      />
    </div>
  );
}
