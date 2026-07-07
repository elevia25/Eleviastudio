import Reveal from "./Reveal";
import StatCounter from "./StatCounter";

const stats = [
  {
    value: "3.4x",
    label: "average lift in organic search demand within two quarters",
  },
  {
    value: "128%",
    label: "average increase in brand recall after an identity relaunch",
  },
  {
    value: "46",
    label: "brand systems designed and shipped in the last three years",
  },
  { value: "92%", label: "of clients who return for a second campaign cycle" },
];

export default function Stats() {
  return (
    <section className="bg-ink px-6 py-32 text-paper md:px-10 md:py-37.5">
      <div className="mb-16 flex flex-wrap items-end justify-between gap-10 md:mb-20">
        <div>
          <Reveal>
            <div className="font-mono text-xs uppercase tracking-[0.14em] text-paper">
              Proof, not adjectives
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 max-w-[640px] font-display text-[34px] font-bold leading-[1.02] tracking-[-0.02em] md:text-[62px]">
              Momentum we can point to.
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.1} className="max-w-[340px] pb-1.5">
          <p className="text-[#B9B4A4]">
            Every engagement ships with a measurement plan, so results are a
            conversation, not a claim.
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 gap-px border border-line-light bg-line-light sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <StatCounter key={s.label} value={s.value} label={s.label} />
        ))}
      </div>
    </section>
  );
}
