import { motion } from "motion/react";
import { BadgeCheck, Heart, Leaf, ShieldCheck, Sparkles, Wheat } from "lucide-react";
import { SectionHeading } from "./Reveal";
import { BRAND } from "@/lib/brand";

const reasons = [
  {
    icon: Wheat,
    title: "100% ZERO MAIDHA",
    text: "Wholesome oat-based goodness without maida.",
  },
  {
    icon: Sparkles,
    title: "PREMIUM INGREDIENTS",
    text: "Carefully selected quality ingredients.",
  },
  { icon: Heart, title: "MADE WITH LOVE", text: "Every cookie and brownie is crafted with care." },
  {
    icon: Leaf,
    title: "NO ARTIFICIAL FLAVORS",
    text: "Simple, delicious and thoughtfully made.",
  },
  {
    icon: ShieldCheck,
    title: "NO PRESERVATIVES",
    text: "Freshly made products with a focus on quality.",
  },
  {
    icon: BadgeCheck,
    title: "PURE & WHOLESOME",
    text: "A balance of taste and wholesome ingredients.",
  },
];

export function WhyCrispo() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading eyebrow="Why Crispo?" title="Premium by intention, wholesome by recipe." />

      <div className="mt-8 grid sm:mt-14 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((r, i) => (
          <motion.article
            key={r.title}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="scene-3d group rounded-3xl surface-card p-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
          >
            <span className="inline-flex size-14 items-center justify-center rounded-2xl text-espresso shadow-gold transition-transform duration-500 group-hover:[transform:rotateY(18deg)_rotateX(-8deg)] [background:var(--gradient-gold)]">
              <r.icon className="size-6" aria-hidden />
            </span>
            <h3 className="mt-5 text-sm font-bold tracking-[0.14em] text-primary">{r.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
          </motion.article>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-4 rounded-3xl border border-gold/40 bg-card/70 px-6 py-5 text-center shadow-soft">
        <span className="text-[0.62rem] font-bold tracking-[0.24em] text-plum">FSSAI LICENCE</span>
        <span className="font-display text-2xl text-primary">{BRAND.fssai}</span>
      </div>
    </section>
  );
}
