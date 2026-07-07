const brands = [
  "Haliday",
  "Plinth",
  "Nostos",
  "Monarch Labs",
  "Vestry",
  "Kaira",
  "Driftwell",
  "Fern & Co",
];

function Track() {
  return (
    <span className="flex items-center gap-16">
      {brands.map((b) => (
        <span key={b} className="flex items-center gap-16">
          <b className="font-display font-semibold text-ink">{b}</b>
          <span className="text-[8px] text-cobalt">●</span>
        </span>
      ))}
    </span>
  );
}

export default function Marquee() {
  return (
    <div className="relative z-[2] overflow-hidden border-y border-line bg-paper py-5.5">
      <div className="marquee-track flex w-max gap-16 whitespace-nowrap font-display text-[15px] text-stone">
        <Track />
        <Track />
      </div>
    </div>
  );
}
