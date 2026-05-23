"use client";

const items = [
  "Brand Identity",
  "Performance Marketing",
  "Motion Design",
  "Web Design",
  "Content Strategy",
  "Growth Consulting",
  "SEO & Paid Ads",
  "Social Media",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div
      className="overflow-hidden py-4 whitespace-nowrap"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <div
        className="inline-block"
        style={{
          animation: "marquee 22s linear infinite",
        }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span
              className="text-xs tracking-[0.14em] uppercase mx-8 font-bold opacity-60"
              style={{
                fontFamily: "var(--font-syne)",
                color: "#f5f0e8",
              }}
            >
              {item}
            </span>
            <span
              className="text-xs font-bold opacity-100"
              style={{ color: "#c8f23a", fontFamily: "var(--font-syne)" }}
            >
              ✦
            </span>
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
