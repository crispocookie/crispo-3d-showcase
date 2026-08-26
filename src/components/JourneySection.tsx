import { motion } from "motion/react";
import { SectionHeading } from "./Reveal";

const stages = [
  {
    n: "01",
    title: "QUALITY INGREDIENTS",
    text: "Carefully selected ingredients form the foundation of every creation.",
  },
  {
    n: "02",
    title: "CRAFTED WITH CARE",
    text: "Each product is prepared with attention to flavour, texture and quality.",
  },
  {
    n: "03",
    title: "BAKED TO PERFECTION",
    text: "Rich cookies and fudgy brownies made for an unforgettable bite.",
  },
  {
    n: "04",
    title: "MADE WITH LOVE",
    text: "Every CRISPO creation is made to bring a little more joy to your day.",
  },
];

export function JourneySection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading eyebrow="From Ingredients To Bite" title="How every CRISPO box happens." />
      <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stages.map((s, i) => (
          <motion.li
            key={s.n}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="scene-3d group relative rounded-3xl surface-card p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
          >
            <span className="font-display text-5xl text-gold">{s.n}</span>
            <h3 className="mt-4 text-sm font-bold tracking-[0.14em] text-primary">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
