// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
// import {
//   ArrowUpRight,
//   Megaphone,
//   PenTool,
//   Rocket,
//   Sparkles,
//   Zap,
// } from "lucide-react";

// const services = [
//   {
//     title: "Brand systems",
//     description:
//       "Identity design, tone of voice, and launch assets that feel unmistakably premium.",
//     icon: <PenTool className="h-5 w-5" />,
//   },
//   {
//     title: "Performance marketing",
//     description:
//       "Paid social, lifecycle flows, and conversion-focused creative built to scale fast.",
//     icon: <Megaphone className="h-5 w-5" />,
//   },
//   {
//     title: "Launch experiences",
//     description:
//       "High-converting websites and cinematic product storytelling for modern brands.",
//     icon: <Rocket className="h-5 w-5" />,
//   },
// ];

// const work = [
//   {
//     title: "Northstar Labs",
//     category: "Branding • Web Experience",
//     blurb:
//       "A futuristic launch site that turned a crypto-native product into a category leader.",
//     image:
//       "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1400&q=80",
//   },
//   {
//     title: "Lumen House",
//     category: "Strategy • Growth",
//     blurb:
//       "From identity to paid social, the brand now leads every room it enters.",
//     image:
//       "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1400&q=80",
//   },
//   {
//     title: "Aurelia Studio",
//     category: "Creative Direction • Commerce",
//     blurb:
//       "A tactile e-commerce story with motion-rich pages built to convert at luxury scale.",
//     image:
//       "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
//   },
// ];

// const process = [
//   {
//     step: "01",
//     title: "Discover",
//     description:
//       "We map the market, the audience, and the emotional trigger that makes your brand unforgettable.",
//   },
//   {
//     step: "02",
//     title: "Design",
//     description:
//       "Strategy, visuals, and product storytelling are fused into one clear and compelling system.",
//   },
//   {
//     step: "03",
//     title: "Launch",
//     description:
//       "We ship with speed, precision, and integrated growth loops that keep momentum alive.",
//   },
// ];

// const metrics = [
//   { value: "320%", label: "Average uplift" },
//   { value: "12", label: "Global launches" },
//   { value: "4.9/5", label: "Client satisfaction" },
// ];

// export default function Home() {
//   const heroRef = useRef<HTMLElement>(null);
//   const workRef = useRef<HTMLElement>(null);

//   const { scrollYProgress: heroProgress } = useScroll({
//     target: heroRef,
//     offset: ["start end", "end start"],
//   });
//   const heroY = useTransform(heroProgress, [0, 1], [0, 140]);
//   const heroOpacity = useTransform(heroProgress, [0, 0.45, 1], [1, 0.9, 0]);

//   const { scrollYProgress: workProgress } = useScroll({
//     target: workRef,
//     offset: ["start end", "end start"],
//   });
//   const workY = useTransform(workProgress, [0, 1], [-70, 70]);

//   return (
//     <main className="min-h-screen overflow-x-hidden bg-[#060606] text-[#f7f3ea]">
//       <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#060606]/70 backdrop-blur-xl">
//         <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
//           <a
//             href="#top"
//             className="text-lg font-semibold tracking-[0.3em] uppercase"
//           >
//             Elevia<span className="text-[#d2a36d]">.</span>
//           </a>
//           <div className="hidden items-center gap-8 text-[0.7rem] uppercase tracking-[0.24em] text-white/60 md:flex">
//             <a href="#services" className="transition hover:text-white">
//               Services
//             </a>
//             <a href="#work" className="transition hover:text-white">
//               Work
//             </a>
//             <a href="#stories" className="transition hover:text-white">
//               Stories
//             </a>
//             <a href="#process" className="transition hover:text-white">
//               Process
//             </a>
//           </div>
//           <a
//             href="#contact"
//             className="rounded-full border border-white/15 px-4 py-2 text-[0.7rem] uppercase tracking-[0.24em] transition hover:border-[#d2a36d] hover:text-[#d2a36d]"
//           >
//             Let&apos;s talk
//           </a>
//         </div>
//       </nav>

//       <section
//         id="top"
//         ref={heroRef}
//         className="relative isolate min-h-screen overflow-hidden"
//       >
//         <motion.div
//           style={{ y: heroY, opacity: heroOpacity }}
//           className="absolute inset-0"
//         >
//           <img
//             src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1800&q=80"
//             alt="Cinematic creative studio environment"
//             className="h-full w-full object-cover opacity-35"
//           />
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(210,163,109,0.24),transparent_30%),linear-gradient(120deg,rgba(6,6,6,0.96),rgba(6,6,6,0.8))]" />
//         </motion.div>

//         <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-6 py-28 sm:px-8 lg:px-12">
//           <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//               className="max-w-3xl"
//             >
//               <p className="mb-6 text-[0.7rem] uppercase tracking-[0.34em] text-white/60">
//                 Branding • Strategy • Growth
//               </p>
//               <h1 className="text-5xl font-semibold leading-[0.9] tracking-[-0.03em] sm:text-6xl lg:text-8xl">
//                 We make brands feel inevitable.
//               </h1>
//               <p className="mt-8 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
//                 We craft emotive identities, cinematic launches, and growth
//                 systems that make ambitious companies impossible to ignore.
//               </p>
//               <div className="mt-10 flex flex-wrap gap-4">
//                 <a
//                   href="#contact"
//                   className="inline-flex items-center gap-2 rounded-full bg-[#f7f3ea] px-6 py-3 text-sm font-medium text-[#060606] transition hover:bg-[#d2a36d]"
//                 >
//                   Book a discovery call
//                   <ArrowUpRight className="h-4 w-4" />
//                 </a>
//                 <a
//                   href="#work"
//                   className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white/80 transition hover:border-[#d2a36d] hover:text-[#d2a36d]"
//                 >
//                   Explore our work
//                 </a>
//               </div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.9,
//                 delay: 0.15,
//                 ease: [0.16, 1, 0.3, 1],
//               }}
//               className="max-w-sm rounded-[2rem] border border-white/10 bg-white/8 p-6 backdrop-blur-xl"
//             >
//               <div className="mb-4 flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.24em] text-[#d2a36d]">
//                 <Sparkles className="h-4 w-4" />
//                 Cinematic, editorial craft
//               </div>
//               <p className="text-3xl font-semibold leading-tight sm:text-4xl">
//                 Launches that feel elegant, bold, and unmistakably premium.
//               </p>
//             </motion.div>
//           </div>

//           <div className="grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
//             {metrics.map((item) => (
//               <div key={item.label} className="py-3">
//                 <div className="text-3xl font-semibold text-[#d2a36d]">
//                   {item.value}
//                 </div>
//                 <div className="mt-1 text-sm uppercase tracking-[0.24em] text-white/55">
//                   {item.label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="border-y border-white/10 bg-[#0a0a0a]">
//         <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5 text-[0.68rem] uppercase tracking-[0.3em] text-white/45 sm:px-8 lg:px-12">
//           <span>Trusted by ambitious founders</span>
//           <div className="flex flex-wrap gap-4 sm:gap-6">
//             {["Notion", "Stripe", "Runway", "Airtable", "Framer"].map(
//               (name) => (
//                 <span key={name} className="opacity-80">
//                   {name}
//                 </span>
//               ),
//             )}
//           </div>
//         </div>
//       </section>

//       <section
//         id="services"
//         className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-28"
//       >
//         <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
//           <div>
//             <p className="mb-4 text-[0.7rem] uppercase tracking-[0.34em] text-white/50">
//               Services
//             </p>
//             <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
//               Everything your brand needs to look sharp, move fast, and grow
//               with intent.
//             </h2>
//           </div>
//           <p className="max-w-xl text-base leading-8 text-white/60">
//             We combine senior strategy, elegant visual systems, and
//             performance-minded execution into one streamlined partner.
//           </p>
//         </div>

//         <div className="grid gap-6 lg:grid-cols-3">
//           {services.map((service, index) => (
//             <motion.article
//               key={service.title}
//               initial={{ opacity: 0, y: 28 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.25 }}
//               transition={{
//                 duration: 0.7,
//                 delay: index * 0.12,
//                 ease: [0.16, 1, 0.3, 1],
//               }}
//               whileHover={{
//                 y: -8,
//                 scale: 1.01,
//                 borderColor: "rgba(210,163,109,0.4)",
//               }}
//               className="group rounded-[1.8rem] border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-7 shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
//             >
//               <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-[#d2a36d]/30 bg-[#d2a36d]/10 text-[#d2a36d]">
//                 {service.icon}
//               </div>
//               <h3 className="text-xl font-semibold">{service.title}</h3>
//               <p className="mt-3 text-sm leading-7 text-white/60">
//                 {service.description}
//               </p>
//               <div className="mt-8 inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.24em] text-white/45 transition group-hover:text-[#d2a36d]">
//                 Discover more
//                 <ArrowUpRight className="h-3.5 w-3.5" />
//               </div>
//             </motion.article>
//           ))}
//         </div>
//       </section>

//       <section
//         id="work"
//         ref={workRef}
//         className="border-t border-white/10 bg-[#0b0b0b] py-24 lg:py-28"
//       >
//         <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
//           <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
//             <div>
//               <p className="mb-4 text-[0.7rem] uppercase tracking-[0.34em] text-white/50">
//                 Selected work
//               </p>
//               <h2 className="text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
//                 Launches shaped for attention, trust, and momentum.
//               </h2>
//             </div>
//             <p className="max-w-xl text-base leading-8 text-white/60">
//               Each engagement balances storytelling and conversion to produce
//               work that feels refined and commercially sharp.
//             </p>
//           </div>

//           <div className="space-y-6">
//             {work.map((item, index) => (
//               <motion.article
//                 key={item.title}
//                 initial={{ opacity: 0, y: 32 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.2 }}
//                 transition={{
//                   duration: 0.8,
//                   delay: index * 0.1,
//                   ease: [0.16, 1, 0.3, 1],
//                 }}
//                 className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#101010] shadow-[0_25px_90px_rgba(0,0,0,0.24)]"
//               >
//                 <div className="absolute inset-0">
//                   <motion.img
//                     src={item.image}
//                     alt={item.title}
//                     style={{ y: workY }}
//                     className="h-full w-full object-cover opacity-45 transition duration-700 ease-out group-hover:scale-105 group-hover:opacity-60"
//                   />
//                 </div>
//                 <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,6,6,0.95),rgba(6,6,6,0.2))]" />
//                 <div className="relative z-10 flex flex-col justify-between gap-10 px-7 py-8 sm:px-10 lg:min-h-[340px] lg:flex-row lg:items-end lg:px-12 lg:py-12">
//                   <div className="max-w-xl">
//                     <p className="mb-3 text-[0.7rem] uppercase tracking-[0.28em] text-[#d2a36d]">
//                       {item.category}
//                     </p>
//                     <h3 className="text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
//                       {item.title}
//                     </h3>
//                     <p className="mt-4 max-w-lg text-sm leading-7 text-white/70 sm:text-base">
//                       {item.blurb}
//                     </p>
//                   </div>
//                   <a
//                     href="#contact"
//                     className="inline-flex items-center gap-2 self-start rounded-full border border-white/15 px-4 py-2 text-[0.72rem] uppercase tracking-[0.24em] text-white/80 transition hover:border-[#d2a36d] hover:text-[#d2a36d]"
//                   >
//                     View project
//                     <ArrowUpRight className="h-3.5 w-3.5" />
//                   </a>
//                 </div>
//               </motion.article>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section
//         id="process"
//         className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-28"
//       >
//         <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
//           <div>
//             <p className="mb-4 text-[0.7rem] uppercase tracking-[0.34em] text-white/50">
//               Process
//             </p>
//             <h2 className="text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
//               We keep the work elegant, clear, and moving.
//             </h2>
//             <p className="mt-6 max-w-xl text-base leading-8 text-white/60">
//               From the first strategic conversation to the final launch, every
//               step is built around clarity, momentum, and measurable growth.
//             </p>
//             <div className="mt-8 flex flex-wrap gap-6 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6">
//               <div>
//                 <div className="text-3xl font-semibold text-[#d2a36d]">
//                   7 days
//                 </div>
//                 <div className="mt-1 text-sm uppercase tracking-[0.24em] text-white/50">
//                   To kickoff
//                 </div>
//               </div>
//               <div>
//                 <div className="text-3xl font-semibold text-[#d2a36d]">
//                   24/7
//                 </div>
//                 <div className="mt-1 text-sm uppercase tracking-[0.24em] text-white/50">
//                   Active support
//                 </div>
//               </div>
//               <div>
//                 <div className="text-3xl font-semibold text-[#d2a36d]">
//                   100%
//                 </div>
//                 <div className="mt-1 text-sm uppercase tracking-[0.24em] text-white/50">
//                   Senior-led
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="space-y-4">
//             {process.map((item) => (
//               <motion.div
//                 key={item.step}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.2 }}
//                 transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
//                 className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6"
//               >
//                 <div className="mb-4 flex items-center justify-between">
//                   <span className="text-[0.7rem] uppercase tracking-[0.28em] text-[#d2a36d]">
//                     {item.step}
//                   </span>
//                   <Zap className="h-4 w-4 text-[#d2a36d]" />
//                 </div>
//                 <h3 className="text-xl font-semibold">{item.title}</h3>
//                 <p className="mt-3 text-sm leading-7 text-white/60">
//                   {item.description}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section
//         id="stories"
//         className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-28"
//       >
//         <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
//           <div>
//             <p className="mb-4 text-[0.7rem] uppercase tracking-[0.34em] text-white/50">
//               The stories behind the work
//             </p>
//             <h2 className="text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
//               Every project has a beginning, a challenge, and a breakthrough.
//             </h2>
//           </div>
//           <a
//             href="/stories"
//             className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-[0.7rem] uppercase tracking-[0.24em] text-white/80 transition hover:border-[#d2a36d] hover:text-[#d2a36d]"
//           >
//             Explore all stories
//             <ArrowUpRight className="h-4 w-4" />
//           </a>
//         </div>

//         <div className="grid gap-8 lg:grid-cols-2">
//           <motion.article
//             initial={{ opacity: 0, y: 28 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.25 }}
//             transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
//             className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent shadow-[0_25px_90px_rgba(0,0,0,0.24)]"
//           >
//             <div className="absolute inset-0">
//               <img
//                 src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80"
//                 alt="Northstar Labs story"
//                 className="h-full w-full object-cover opacity-40 transition duration-700 group-hover:scale-105 group-hover:opacity-60"
//               />
//             </div>
//             <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(6,6,6,0.95),rgba(6,6,6,0.3))]" />
//             <div className="relative z-10 flex flex-col justify-end gap-6 px-6 py-8 sm:px-8 lg:min-h-[380px] lg:px-10 lg:py-10">
//               <div>
//                 <p className="mb-3 text-[0.7rem] uppercase tracking-[0.28em] text-[#d2a36d]">
//                   Web Experience • Branding
//                 </p>
//                 <h3 className="text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
//                   Northstar Labs
//                 </h3>
//                 <p className="mt-3 text-sm leading-6 text-white/70">
//                   How we transformed a crypto-native product into a category
//                   leader through immersive web storytelling and premium brand
//                   positioning that captured institutional trust.
//                 </p>
//               </div>
//               <div className="flex items-center gap-4">
//                 <div className="space-y-1">
//                   <div className="text-2xl font-semibold text-[#d2a36d]">
//                     287%
//                   </div>
//                   <div className="text-[0.65rem] uppercase tracking-[0.2em] text-white/40">
//                     Increase in signups
//                   </div>
//                 </div>
//                 <div className="space-y-1">
//                   <div className="text-2xl font-semibold text-[#d2a36d]">
//                     Top 3
//                   </div>
//                   <div className="text-[0.65rem] uppercase tracking-[0.2em] text-white/40">
//                     Category ranking
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.article>

//           <motion.article
//             initial={{ opacity: 0, y: 28 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.25 }}
//             transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
//             className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent shadow-[0_25px_90px_rgba(0,0,0,0.24)]"
//           >
//             <div className="absolute inset-0">
//               <img
//                 src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80"
//                 alt="Lumen House story"
//                 className="h-full w-full object-cover opacity-40 transition duration-700 group-hover:scale-105 group-hover:opacity-60"
//               />
//             </div>
//             <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(6,6,6,0.95),rgba(6,6,6,0.3))]" />
//             <div className="relative z-10 flex flex-col justify-end gap-6 px-6 py-8 sm:px-8 lg:min-h-[380px] lg:px-10 lg:py-10">
//               <div>
//                 <p className="mb-3 text-[0.7rem] uppercase tracking-[0.28em] text-[#d2a36d]">
//                   Strategy • Growth • Paid Social
//                 </p>
//                 <h3 className="text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
//                   Lumen House
//                 </h3>
//                 <p className="mt-3 text-sm leading-6 text-white/70">
//                   From fragmented brand identity to integrated positioning. We
//                   built a cohesive narrative across identity, content, and paid
//                   channels that positioned them as industry leaders.
//                 </p>
//               </div>
//               <div className="flex items-center gap-4">
//                 <div className="space-y-1">
//                   <div className="text-2xl font-semibold text-[#d2a36d]">
//                     432%
//                   </div>
//                   <div className="text-[0.65rem] uppercase tracking-[0.2em] text-white/40">
//                     ROI on paid spend
//                   </div>
//                 </div>
//                 <div className="space-y-1">
//                   <div className="text-2xl font-semibold text-[#d2a36d]">
//                     6 months
//                   </div>
//                   <div className="text-[0.65rem] uppercase tracking-[0.2em] text-white/40">
//                     To profitability
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.article>
//         </div>
//       </section>

//       <section
//         id="contact"
//         className="border-t border-white/10 bg-[#0a0a0a] py-24 lg:py-28"
//       >
//         <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
//           <div className="rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(210,163,109,0.18),transparent_36%),linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-8 sm:p-10 lg:p-12">
//             <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
//               <div className="max-w-2xl">
//                 <p className="mb-4 text-[0.7rem] uppercase tracking-[0.34em] text-[#d2a36d]">
//                   Ready when you are
//                 </p>
//                 <h2 className="text-3xl font-semibold tracking-[-0.02em] sm:text-4xl lg:text-5xl">
//                   Let&apos;s build something unforgettable.
//                 </h2>
//                 <p className="mt-6 text-base leading-8 text-white/65">
//                   Whether you need a bold brand refresh or a launch site that
//                   converts from day one, we’re ready to shape the next chapter.
//                 </p>
//               </div>
//               <a
//                 href="mailto:hello@elevia.studio"
//                 className="inline-flex items-center gap-2 rounded-full bg-[#f7f3ea] px-6 py-3 text-sm font-medium text-[#060606] transition hover:bg-[#d2a36d]"
//               >
//                 hello@elevia.studio
//                 <ArrowUpRight className="h-4 w-4" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       <footer className="border-t border-white/10 bg-[#060606]">
//         <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 text-sm text-white/45 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
//           <p>© 2026 Elevia Studio. Crafted for modern brands.</p>
//           <div className="flex flex-wrap gap-5 uppercase tracking-[0.24em]">
//             <a href="#services" className="transition hover:text-white">
//               Services
//             </a>
//             <a href="#work" className="transition hover:text-white">
//               Work
//             </a>
//             <a href="/stories" className="transition hover:text-white">
//               Stories
//             </a>
//             <a href="#contact" className="transition hover:text-white">
//               Contact
//             </a>
//           </div>
//         </div>
//       </footer>
//     </main>
//   );
// }
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowUpRight,
  Megaphone,
  PenTool,
  Rocket,
  Sparkles,
  Zap,
} from "lucide-react";

const services = [
  {
    title: "Brand systems",
    description:
      "Identity design, tone of voice, and launch assets that feel unmistakably premium.",
    icon: <PenTool className="h-5 w-5" />,
  },
  {
    title: "Performance marketing",
    description:
      "Paid social, lifecycle flows, and conversion-focused creative built to scale fast.",
    icon: <Megaphone className="h-5 w-5" />,
  },
  {
    title: "Launch experiences",
    description:
      "High-converting websites and cinematic product storytelling for modern brands.",
    icon: <Rocket className="h-5 w-5" />,
  },
];

const work = [
  {
    title: "Northstar Labs",
    category: "Branding • Web Experience",
    blurb:
      "A futuristic launch site that turned a crypto-native product into a category leader.",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Lumen House",
    category: "Strategy • Growth",
    blurb:
      "From identity to paid social, the brand now leads every room it enters.",
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Aurelia Studio",
    category: "Creative Direction • Commerce",
    blurb:
      "A tactile e-commerce story with motion-rich pages built to convert at luxury scale.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
  },
];

const process = [
  {
    step: "01",
    title: "Discover",
    description:
      "We map the market, the audience, and the emotional trigger that makes your brand unforgettable.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Strategy, visuals, and product storytelling are fused into one clear and compelling system.",
  },
  {
    step: "03",
    title: "Launch",
    description:
      "We ship with speed, precision, and integrated growth loops that keep momentum alive.",
  },
];

const metrics = [
  { value: "320%", label: "Average uplift" },
  { value: "12", label: "Global launches" },
  { value: "4.9/5", label: "Client satisfaction" },
];

// Reusable premium ease curve
const premiumEase = [0.25, 1, 0.5, 1];

// Alternate Side Scroll Reveal Variants
const scrollRevealLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: premiumEase },
  },
};

const scrollRevealRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: premiumEase },
  },
};

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const workRef = useRef<HTMLElement>(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const heroY = useTransform(heroProgress, [0, 1], [0, 140]);
  const heroOpacity = useTransform(heroProgress, [0, 0.45, 1], [1, 0.9, 0]);

  const { scrollYProgress: workProgress } = useScroll({
    target: workRef,
    offset: ["start end", "end start"],
  });
  const workY = useTransform(workProgress, [0, 1], [-70, 70]);

  return (
    // Note: Added scroll-smooth to ensure base programmatic scrolls layer nicely
    <main className="min-h-screen overflow-x-hidden bg-[#060606] text-[#f7f3ea] scroll-smooth">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#060606]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
          <a
            href="#top"
            className="text-lg font-semibold tracking-[0.3em] uppercase"
          >
            Elevia<span className="text-[#d2a36d]">.</span>
          </a>
          <div className="hidden items-center gap-8 text-[0.7rem] uppercase tracking-[0.24em] text-white/60 md:flex">
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#work" className="transition hover:text-white">
              Work
            </a>
            <a href="#stories" className="transition hover:text-white">
              Stories
            </a>
            <a href="#process" className="transition hover:text-white">
              Process
            </a>
          </div>
          <a
            href="#contact"
            className="rounded-full border border-white/15 px-4 py-2 text-[0.7rem] uppercase tracking-[0.24em] transition hover:border-[#d2a36d] hover:text-[#d2a36d]"
          >
            Let&apos;s talk
          </a>
        </div>
      </nav>

      <section
        id="top"
        ref={heroRef}
        className="relative isolate min-h-screen overflow-hidden"
      >
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1800&q=80"
            alt="Cinematic creative studio environment"
            className="h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(210,163,109,0.24),transparent_30%),linear-gradient(120deg,rgba(6,6,6,0.96),rgba(6,6,6,0.8))]" />
        </motion.div>

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-6 py-28 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            {/* Hero Section coming smoothly from below */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: premiumEase }}
              className="max-w-3xl"
            >
              <p className="mb-6 text-[0.7rem] uppercase tracking-[0.34em] text-white/60">
                Branding • Strategy • Growth
              </p>
              <h1 className="text-5xl font-semibold leading-[0.9] tracking-[-0.03em] sm:text-6xl lg:text-8xl">
                We make brands feel inevitable.
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                We craft emotive identities, cinematic launches, and growth
                systems that make ambitious companies impossible to ignore.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#f7f3ea] px-6 py-3 text-sm font-medium text-[#060606] transition hover:bg-[#d2a36d]"
                >
                  Book a discovery call
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white/80 transition hover:border-[#d2a36d] hover:text-[#d2a36d]"
                >
                  Explore our work
                </a>
              </div>
            </motion.div>

            {/* Sidebar teaser coming from below with slight delay */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.1,
                delay: 0.15,
                ease: premiumEase,
              }}
              className="max-w-sm rounded-[2rem] border border-white/10 bg-white/8 p-6 backdrop-blur-xl"
            >
              <div className="mb-4 flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.24em] text-[#d2a36d]">
                <Sparkles className="h-4 w-4" />
                Cinematic, editorial craft
              </div>
              <p className="text-3xl font-semibold leading-tight sm:text-4xl">
                Launches that feel elegant, bold, and unmistakably premium.
              </p>
            </motion.div>
          </div>

          <div className="grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
            {metrics.map((item) => (
              <div key={item.label} className="py-3">
                <div className="text-3xl font-semibold text-[#d2a36d]">
                  {item.value}
                </div>
                <div className="mt-1 text-sm uppercase tracking-[0.24em] text-white/55">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0a0a0a]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5 text-[0.68rem] uppercase tracking-[0.3em] text-white/45 sm:px-8 lg:px-12">
          <span>Trusted by ambitious founders</span>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            {["Notion", "Stripe", "Runway", "Airtable", "Framer"].map(
              (name) => (
                <span key={name} className="opacity-80">
                  {name}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      <section
        id="services"
        className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-4 text-[0.7rem] uppercase tracking-[0.34em] text-white/50">
              Services
            </p>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
              Everything your brand needs to look sharp, move fast, and grow
              with intent.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-white/60">
            We combine senior strategy, elegant visual systems, and
            performance-minded execution into one streamlined partner.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: premiumEase,
              }}
              whileHover={{
                y: -8,
                scale: 1.01,
                borderColor: "rgba(210,163,109,0.4)",
              }}
              className="group rounded-[1.8rem] border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-7 shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
            >
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-[#d2a36d]/30 bg-[#d2a36d]/10 text-[#d2a36d]">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/60">
                {service.description}
              </p>
              <div className="mt-8 inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.24em] text-white/45 transition group-hover:text-[#d2a36d]">
                Discover more
                <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section
        id="work"
        ref={workRef}
        className="border-t border-white/10 bg-[#0b0b0b] py-24 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-4 text-[0.7rem] uppercase tracking-[0.34em] text-white/50">
                Selected work
              </p>
              <h2 className="text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
                Launches shaped for attention, trust, and momentum.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-white/60">
              Each engagement balances storytelling and conversion to produce
              work that feels refined and commercially sharp.
            </p>
          </div>

          <div className="space-y-6">
            {work.map((item, index) => (
              <motion.article
                key={item.title}
                // Alternates entry behavior (Left vs Right) based on item index
                variants={
                  index % 2 === 0 ? scrollRevealLeft : scrollRevealRight
                }
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#101010] shadow-[0_25px_90px_rgba(0,0,0,0.24)]"
              >
                <div className="absolute inset-0">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    style={{ y: workY }}
                    className="h-full w-full object-cover opacity-45 transition duration-700 ease-out group-hover:scale-105 group-hover:opacity-60"
                  />
                </div>
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,6,6,0.95),rgba(6,6,6,0.2))]" />
                <div className="relative z-10 flex flex-col justify-between gap-10 px-7 py-8 sm:px-10 lg:min-h-[340px] lg:flex-row lg:items-end lg:px-12 lg:py-12">
                  <div className="max-w-xl">
                    <p className="mb-3 text-[0.7rem] uppercase tracking-[0.28em] text-[#d2a36d]">
                      {item.category}
                    </p>
                    <h3 className="text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
                      {item.title}
                    </h3>
                    <p className="mt-4 max-w-lg text-sm leading-7 text-white/70 sm:text-base">
                      {item.blurb}
                    </p>
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 self-start rounded-full border border-white/15 px-4 py-2 text-[0.72rem] uppercase tracking-[0.24em] text-white/80 transition hover:border-[#d2a36d] hover:text-[#d2a36d]"
                  >
                    View project
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="process"
        className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="mb-4 text-[0.7rem] uppercase tracking-[0.34em] text-white/50">
              Process
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
              We keep the work elegant, clear, and moving.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/60">
              From the first strategic conversation to the final launch, every
              step is built around clarity, momentum, and measurable growth.
            </p>
            <div className="mt-8 flex flex-wrap gap-6 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6">
              <div>
                <div className="text-3xl font-semibold text-[#d2a36d]">
                  7 days
                </div>
                <div className="mt-1 text-sm uppercase tracking-[0.24em] text-white/50">
                  To kickoff
                </div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-[#d2a36d]">
                  24/7
                </div>
                <div className="mt-1 text-sm uppercase tracking-[0.24em] text-white/50">
                  Active support
                </div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-[#d2a36d]">
                  100%
                </div>
                <div className="mt-1 text-sm uppercase tracking-[0.24em] text-white/50">
                  Senior-led
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                // Alternating side slide-ins for step layout
                variants={
                  index % 2 === 0 ? scrollRevealRight : scrollRevealLeft
                }
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-[0.7rem] uppercase tracking-[0.28em] text-[#d2a36d]">
                    {item.step}
                  </span>
                  <Zap className="h-4 w-4 text-[#d2a36d]" />
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/60">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="stories"
        className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-4 text-[0.7rem] uppercase tracking-[0.34em] text-white/50">
              The stories behind the work
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
              Every project has a beginning, a challenge, and a breakthrough.
            </h2>
          </div>
          <a
            href="/stories"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-[0.7rem] uppercase tracking-[0.24em] text-white/80 transition hover:border-[#d2a36d] hover:text-[#d2a36d]"
          >
            Explore all stories
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Alternating layout for Stories items */}
          <motion.article
            variants={scrollRevealLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent shadow-[0_25px_90px_rgba(0,0,0,0.24)]"
          >
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80"
                alt="Northstar Labs story"
                className="h-full w-full object-cover opacity-40 transition duration-700 group-hover:scale-105 group-hover:opacity-60"
              />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(6,6,6,0.95),rgba(6,6,6,0.3))]" />
            <div className="relative z-10 flex flex-col justify-end gap-6 px-6 py-8 sm:px-8 lg:min-h-[380px] lg:px-10 lg:py-10">
              <div>
                <p className="mb-3 text-[0.7rem] uppercase tracking-[0.28em] text-[#d2a36d]">
                  Web Experience • Branding
                </p>
                <h3 className="text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
                  Northstar Labs
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  How we transformed a crypto-native product into a category
                  leader through immersive web storytelling and premium brand
                  positioning that captured institutional trust.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="space-y-1">
                  <div className="text-2xl font-semibold text-[#d2a36d]">
                    287%
                  </div>
                  <div className="text-[0.65rem] uppercase tracking-[0.2em] text-white/40">
                    Increase in signups
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-semibold text-[#d2a36d]">
                    Top 3
                  </div>
                  <div className="text-[0.65rem] uppercase tracking-[0.2em] text-white/40">
                    Category ranking
                  </div>
                </div>
              </div>
            </div>
          </motion.article>

          <motion.article
            variants={scrollRevealRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent shadow-[0_25px_90px_rgba(0,0,0,0.24)]"
          >
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80"
                alt="Lumen House story"
                className="h-full w-full object-cover opacity-40 transition duration-700 group-hover:scale-105 group-hover:opacity-60"
              />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(6,6,6,0.95),rgba(6,6,6,0.3))]" />
            <div className="relative z-10 flex flex-col justify-end gap-6 px-6 py-8 sm:px-8 lg:min-h-[380px] lg:px-10 lg:py-10">
              <div>
                <p className="mb-3 text-[0.7rem] uppercase tracking-[0.28em] text-[#d2a36d]">
                  Strategy • Growth • Paid Social
                </p>
                <h3 className="text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
                  Lumen House
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  From fragmented brand identity to integrated positioning. We
                  built a cohesive narrative across identity, content, and paid
                  channels that positioned them as industry leaders.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="space-y-1">
                  <div className="text-2xl font-semibold text-[#d2a36d]">
                    432%
                  </div>
                  <div className="text-[0.65rem] uppercase tracking-[0.2em] text-white/40">
                    ROI on paid spend
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-semibold text-[#d2a36d]">
                    6 months
                  </div>
                  <div className="text-[0.65rem] uppercase tracking-[0.2em] text-white/40">
                    To profitability
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      <section
        id="contact"
        className="border-t border-white/10 bg-[#0a0a0a] py-24 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          {/* Premium bouncing introduction context */}
          <motion.div
            initial={{ opacity: 0, y: 70, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 14,
              mass: 1.2,
              restDelta: 0.001,
            }}
            className="rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(210,163,109,0.18),transparent_36%),linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-8 sm:p-10 lg:p-12"
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="mb-4 text-[0.7rem] uppercase tracking-[0.34em] text-[#d2a36d]">
                  Ready when you are
                </p>
                <h2 className="text-3xl font-semibold tracking-[-0.02em] sm:text-4xl lg:text-5xl">
                  Let&apos;s build something unforgettable.
                </h2>
                <p className="mt-6 text-base leading-8 text-white/65">
                  Whether you need a bold brand refresh or a launch site that
                  converts from day one, we’re ready to shape the next chapter.
                </p>
              </div>
              <a
                href="mailto:hello@elevia.studio"
                className="inline-flex items-center gap-2 rounded-full bg-[#f7f3ea] px-6 py-3 text-sm font-medium text-[#060606] transition hover:bg-[#d2a36d]"
              >
                hello@elevia.studio
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#060606]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 text-sm text-white/45 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <p>© 2026 Elevia Studio. Crafted for modern brands.</p>
          <div className="flex flex-wrap gap-5 uppercase tracking-[0.24em]">
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#work" className="transition hover:text-white">
              Work
            </a>
            <a href="/stories" className="transition hover:text-white">
              Stories
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}