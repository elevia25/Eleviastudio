import Reveal from "./Reveal";

const steps = [
  {
    num: "01",
    title: "Discover",
    desc: "Rapid immersion into the business, the category, and the customer's actual language — not the language on the last deck.",
  },
  {
    num: "02",
    title: "Define",
    desc: "A positioning and message architecture the whole company can repeat from memory, without needing the slides in front of them.",
  },
  {
    num: "03",
    title: "Design",
    desc: "Identity, voice, and interface systems built to flex across every surface — not a logo file and a wish of good luck.",
  },
  {
    num: "04",
    title: "Deploy",
    desc: "Campaigns, content, and a measurement loop so the second quarter compounds on the first instead of starting over.",
  },
];

export default function Approach() {
  return (
    <section
      id="approach"
      className="bg-plum px-6 py-32 text-paper md:px-10 md:py-37.5"
    >
      <div className="mb-16 flex flex-wrap items-end justify-between gap-10 md:mb-20">
        <div>
          <Reveal>
            <div className="font-mono text-xs uppercase tracking-[0.14em] text-[#A99CC4]">
              How we work
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 max-w-[640px] font-display text-[34px] font-bold leading-[1.02] tracking-[-0.02em] md:text-[62px]">
              One process, run in order — every time.
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.1} className="max-w-[340px] pb-1.5">
          <p className="text-[#C9C2D6]">
            Four stages, always in this sequence, because skipping one is the
            most common reason rebrands don&apos;t stick.
          </p>
        </Reveal>
      </div>

      <div className="flex flex-col">
        {steps.map((s, i) => (
          <Reveal key={s.num} delay={i * 0.05}>
            <div className="grid grid-cols-1 gap-3.5 border-t border-line-light py-9 last:border-b sm:grid-cols-[110px_1fr] md:grid-cols-[110px_1fr_1fr] md:gap-10">
              <div className="font-mono text-base text-lime">{s.num}</div>
              <div className="font-display text-[22px] font-bold tracking-[-0.02em] md:text-[32px]">
                {s.title}
              </div>
              <div className="max-w-[460px] text-[#C9C2D6]">{s.desc}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
