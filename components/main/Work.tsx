import Reveal from "./Reveal";
import WorkItem from "./WorkItem";
import { HalidayArt, PlinthArt, NostosArt } from "./WorkArt";

export default function Work() {
  return (
    <section id="work" className="px-6 py-32 md:px-10 md:py-37.5">
      <div className="mb-16 flex flex-wrap items-end justify-between gap-10 md:mb-20">
        <div>
          <Reveal>
            <div className="font-mono text-xs uppercase tracking-[0.14em] text-stone">
              Selected work
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 max-w-[640px] font-display text-[34px] font-bold leading-[1.02] tracking-[-0.02em] md:text-[62px]">
              Three brands, three arcs.
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.1} className="max-w-[340px] pb-1.5">
          <p className="text-[#3a362e]">
            A sample of recent identity and growth engagements — case studies
            are illustrative composites for this preview.
          </p>
        </Reveal>
      </div>

      <div className="flex flex-col">
        <WorkItem
          art={<HalidayArt />}
          tags={["Identity", "Campaign", "Web"]}
          title="Haliday"
          description="Repositioning a mid-market hotel group as a design-led escape — new mark, tone of voice, and a booking site built to convert on story, not discounts."
        />
        <WorkItem
          art={<PlinthArt />}
          tags={["Identity", "Packaging"]}
          title="Plinth"
          description="A visual system for a direct-to-consumer furniture brand, built to feel handmade at scale — from wordmark to the unboxing sequence."
        />
        <WorkItem
          art={<NostosArt />}
          tags={["Campaign", "Social", "Film"]}
          title="Nostos"
          description='Launch campaign for a returning heritage snack brand — a media plan built around nostalgia without ever using the word "nostalgia."'
        />
      </div>
    </section>
  );
}
