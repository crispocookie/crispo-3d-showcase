import { motion } from "motion/react";
import { Wheat } from "lucide-react";
import { Reveal } from "./Reveal";
import { BRAND } from "@/lib/brand";

const particles = [
  { left: "8%", top: "22%", size: 10, delay: 0 },
  { left: "20%", top: "68%", size: 7, delay: 0.6 },
  { left: "38%", top: "14%", size: 8, delay: 1.1 },
  { left: "62%", top: "74%", size: 9, delay: 0.3 },
  { left: "78%", top: "26%", size: 7, delay: 1.4 },
  { left: "90%", top: "58%", size: 11, delay: 0.9 },
];

/** Large, unmissable 100% ZERO MAIDHA statement section. */
export function ZeroMaidhaFeature({ copy }: { copy: string }) {
  return (
    <section className="relative overflow-hidden bg-[oklch(0.33_0.13_302)] py-14 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-10rem] left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-[oklch(0.78_0.13_85/0.16)] blur-3xl" />
        {particles.map((p, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-gold/60"
            style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
            animate={{ y: [0, -18, 0], opacity: [0.35, 0.9, 0.35] }}
            transition={{ duration: 6 + i, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6">
        <Reveal>
          <span className="inline-flex size-16 items-center justify-center rounded-2xl text-espresso shadow-gold [background:var(--gradient-gold)]">
            <Wheat className="size-7" aria-hidden />
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-8 font-display text-[3.2rem] leading-[0.95] font-medium text-cream sm:text-7xl lg:text-8xl">
            <span className="text-gold-foil">{BRAND.zeroMaidha}</span>
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-cream/75 sm:text-lg">
            {copy}
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {["100% pure oats", "No maida", "Protein packed", "No preservatives"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-gold/40 px-4 py-2 text-[0.62rem] font-bold tracking-[0.2em] text-cream/85 uppercase"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
