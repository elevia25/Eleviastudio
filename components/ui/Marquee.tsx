"use client";

const ITEMS = [
  "Brand Strategy",
  "Visual Identity",
  "Digital Marketing",
  "Web Design & Dev",
  "Content Creation",
  "Social Media",
  "Brand Storytelling",
  "Packaging Design",
];

export default function Marquee() {
  const all = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div className="overflow-hidden border-y border-[var(--color-border)] bg-[var(--color-surface)] py-5">
      <div className="mq items-center gap-16">
        {all.map((text, i) => (
          <span key={`${text}-${i}`} className="shrink-0">
            {i % 2 === 1 ? (
              <span className="mx-2 text-base text-[var(--color-gold)]">✦</span>
            ) : (
              <span className="text-[12px] font-[500] uppercase tracking-[.22em] text-[var(--color-muted)] transition-colors hover:text-[var(--color-white)]">
                {text}
              </span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
