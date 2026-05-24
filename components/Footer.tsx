import Link from "next/link";

const footerServices = [
  "Brand Identity",
  "Web Design",
  "Performance Marketing",
  "SEO & Content",
  "Social Media",
];
const footerCompany = ["About Us", "Our Work", "Process", "Careers", "Blog"];

export default function Footer() {
  return (
    <footer
      className="border-t px-12 pt-16 pb-8"
      style={{
        backgroundColor: "#0a0a0a",
        color: "#f5f0e8",
        borderColor: "rgba(255,255,255,0.08)",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div>
          <div
            className="font-extrabold text-[1.6rem] tracking-tight mb-4"
            style={{ fontFamily: "Syne, serif" }}
          >
            VEK<span style={{ color: "#d84f2a" }}>T</span>OR
          </div>
          <p
            className="text-[0.88rem] leading-relaxed font-light max-w-[260px]"
            style={{
              color: "rgba(255,255,255,0.4)",
              fontFamily: "var(--font-dm-sans)",
            }}
          >
            A full-service marketing agency building brands that command
            attention and drive growth.
          </p>
        </div>

        {/* Services */}
        <div>
          <div
            className="text-[0.75rem] tracking-[0.14em] uppercase mb-5 font-bold"
            style={{
              color: "rgba(255,255,255,0.35)",
              fontFamily: "var(--font-syne)",
            }}
          >
            Services
          </div>
          <ul className="list-none space-y-3">
            {footerServices.map((s) => (
              <li key={s}>
                <Link
                  href="#services"
                  className="text-[0.88rem] font-light no-underline transition-colors duration-200 hover:text-[#c8f23a]"
                  style={{
                    color: "rgba(255,255,255,0.6)",
                    fontFamily: "var(--font-dm-sans)",
                  }}
                >
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <div
            className="text-[0.75rem] tracking-[0.14em] uppercase mb-5 font-bold"
            style={{
              color: "rgba(255,255,255,0.35)",
              fontFamily: "var(--font-syne)",
            }}
          >
            Company
          </div>
          <ul className="list-none space-y-3">
            {footerCompany.map((s) => (
              <li key={s}>
                <Link
                  href="#"
                  className="text-[0.88rem] font-light no-underline transition-colors duration-200 hover:text-[#c8f23a]"
                  style={{
                    color: "rgba(255,255,255,0.6)",
                    fontFamily: "var(--font-dm-sans)",
                  }}
                >
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div
            className="text-[0.75rem] tracking-[0.14em] uppercase mb-5 font-bold"
            style={{
              color: "rgba(255,255,255,0.35)",
              fontFamily: "var(--font-syne)",
            }}
          >
            Contact
          </div>
          <ul className="list-none space-y-3">
            {[
              "hello@vektor.agency",
              "+91 98765 43210",
              "Ahmedabad, India",
            ].map((s) => (
              <li
                key={s}
                className="text-[0.88rem] font-light"
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <p
          className="text-[0.78rem] tracking-[0.06em]"
          style={{ color: "rgba(255,255,255,0.25)", fontFamily: "var(--font-dm-sans)" }}
        >
          © 2025 VEKTOR Agency. All rights reserved.
        </p>
        <div className="flex gap-5">
          {["Instagram", "LinkedIn", "Twitter", "Behance"].map((s) => (
            <Link
              key={s}
              href="#"
              className="text-[0.78rem] tracking-[0.08em] uppercase no-underline transition-colors duration-200 hover:text-[#c8f23a]"
              style={{
                color: "rgba(255,255,255,0.3)",
                fontFamily: "var(--font-dm-sans)",
              }}
            >
              {s}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
