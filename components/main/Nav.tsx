const links = [
  { href: "#work", label: "Work" },
  { href: "#approach", label: "Approach" },
  { href: "#studio", label: "Studio" },
];

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-[500] mix-blend-difference">
      <div className="flex items-center justify-between px-6 py-5 md:px-10 md:py-6.5">
        <a
          href="#top"
          className="flex items-center gap-2 font-display text-xl font-bold tracking-[0.02em] text-paper"
        >
          <svg viewBox="0 0 24 24" className="h-5.5 w-5.5">
            <path
              d="M3,18 Q12,3 21,18"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.4}
              strokeLinecap="round"
            />
          </svg>
          Elevia
        </a>

        <nav className="flex items-center gap-9">
          <ul className="hidden list-none items-center gap-9 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group relative font-mono text-xs uppercase tracking-[0.08em] text-paper"
                >
                  {l.label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-paper transition-transform duration-400 ease-[cubic-bezier(.16,.84,.32,1)] group-hover:origin-left group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="rounded-full border border-paper px-4.5 py-2.5 font-mono text-[11px] uppercase tracking-[0.08em] text-paper"
          >
            Start a project
          </a>
        </nav>
      </div>
    </header>
  );
}
