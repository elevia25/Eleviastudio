import Reveal from "./Reveal";

export default function Testimonial() {
  return (
    <section className="px-6 py-30 text-center md:py-42.5">
      <Reveal>
        <blockquote className="mx-auto mb-9 max-w-[960px] font-body text-[26px] italic leading-[1.3] font-normal md:text-[46px]">
          &quot;Elevia didn&apos;t just redesign our mark. They gave every
          person in the company the same sentence to describe what we do.&quot;
        </blockquote>
      </Reveal>
      <Reveal delay={0.08}>
        <cite className="font-mono text-[13px] uppercase not-italic tracking-[0.06em] text-stone">
          Reyna Cole — Co-founder, Haliday
        </cite>
      </Reveal>
    </section>
  );
}
