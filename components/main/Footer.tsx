export default function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-line-light bg-ink px-6 py-8 font-mono text-[11px] uppercase tracking-[0.04em] text-stone md:px-10">
      <div>Elevia Studio — Brooklyn, NY</div>
      <div className="flex gap-6.5">
        <a href="#" className="hover:text-lime">
          Instagram
        </a>
        <a href="#" className="hover:text-lime">
          LinkedIn
        </a>
        <a href="#" className="hover:text-lime">
          X
        </a>
      </div>
      <div>© 2026 Elevia Studio</div>
    </footer>
  );
}
