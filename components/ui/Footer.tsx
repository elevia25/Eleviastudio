"use client";

import Image from "next/image";

const SERVICE_LINKS = ["Brand Strategy", "Visual Identity", "Digital Marketing", "Web Design", "Content & Film"];
const COMPANY_LINKS = ["About Us", "Our Work", "Process", "Careers", "Contact"];
const SOCIAL = ["Instagram", "LinkedIn", "Behance", "Twitter"];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg2)] pt-20 pb-10">
      <div className="mx-auto max-w-[1400px] px-8 lg:px-16">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <a href="/" style={{ cursor: "none" }} className="mb-6 inline-flex items-center">
              <Image src="/elevia_studio_logo.png" alt="Elevia Studio" width={180} height={55} className="h-10 w-auto object-contain" />
            </a>
            <p className="mb-7 max-w-[240px] text-[13px] font-[300] leading-[1.85] text-[var(--color-muted)]">
              Creative branding & marketing agency elevating brands through strategy, design, and digital craft.
            </p>
            <div className="flex gap-5">
              {SOCIAL.map((social) => (
                <a key={social} href="#" style={{ cursor: "none" }} className="text-[10px] font-[500] uppercase tracking-[.18em] text-[var(--color-muted)] transition-colors hover:text-[var(--color-gold)]">
                  {social.slice(0, 2)}
                </a>
              ))}
            </div>
          </div>

          {[
            ["Services", SERVICE_LINKS],
            ["Company", COMPANY_LINKS],
          ].map(([heading, links]) => (
            <div key={heading as string}>
              <h4 className="mb-6 text-[10px] font-[600] uppercase tracking-[.28em] text-[var(--color-gold)]">{heading}</h4>
              <ul className="space-y-3">
                {(links as string[]).map((link) => (
                  <li key={link}>
                    <a href="#" style={{ cursor: "none" }} className="text-[13px] font-[300] text-[var(--color-muted)] transition-colors hover:text-[var(--color-gold)]">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="mb-6 text-[10px] font-[600] uppercase tracking-[.28em] text-[var(--color-gold)]">Contact</h4>
            <div className="space-y-3 text-[13px] font-[300] text-[var(--color-muted)]">
              <p>hello@elevia.studio</p>
              <p>+91 98765 43210</p>
              <p className="leading-relaxed">
                Surat, Gujarat
                <br />
                India
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-[var(--color-border)] pt-7 md:flex-row">
          <p className="text-[10px] font-[400] uppercase tracking-[.15em] text-[var(--color-muted)]">
            © {new Date().getFullYear()} Elevia Studio. All rights reserved.
          </p>
          <p className="text-[10px] font-[400] uppercase tracking-[.15em] text-[var(--color-muted)]">
            Crafted with intention in India
          </p>
        </div>
      </div>
    </footer>
  );
}
