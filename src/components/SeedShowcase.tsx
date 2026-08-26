import { motion } from "motion/react";
import { Reveal, SectionHeading } from "./Reveal";
import seed from "@/assets/dry-seed-cookie.jpg";
import seed2 from "@/assets/dry-seed-cookie-2.jpg";

const seeds = ["Watermelon Seeds", "Flax Seeds", "Pumpkin Seeds", "Sunflower Seeds"];

const stats = [
  { label: "Protein / cookie", value: "10 g" },
  { label: "Weight / cookie", value: "75 g" },
  { label: "Calories / cookie", value: "403" },
  { label: "Pack", value: "4 cookies" },
];

export function SeedShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading
        eyebrow="Dry Seed Cookies"
        title="Four super seeds. One serious cookie."
        subtitle="Crunchy, nutritious and satisfying — ₹350 for a box of 4 cookies."
      />

      <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
        <Reveal className="scene-3d">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={seed}
              alt="CRISPO dry seed cookies with bowls of seeds"
              width={1024}
              height={1024}
              loading="lazy"
              className="col-span-2 h-64 w-full rounded-[2rem] object-cover shadow-lift sm:h-80"
            />
            <img
              src={seed2}
              alt="Macro close-up of a four-seed cookie"
              width={1024}
              height={1024}
              loading="lazy"
              className="col-span-2 h-44 w-full rounded-[1.75rem] object-cover shadow-soft transition-transform duration-700 hover:-translate-y-1.5 sm:h-52"
            />
          </div>
        </Reveal>

        <div>
          <div className="grid grid-cols-2 gap-4">
            {seeds.map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl border border-gold/40 bg-card/80 px-5 py-6 text-center shadow-soft"
              >
                <span className="font-display text-2xl text-primary">{s.split(" ")[0]}</span>
                <p className="mt-1 text-[0.6rem] font-bold tracking-[0.2em] text-plum uppercase">
                  Seeds
                </p>
              </motion.div>
            ))}
          </div>

          <dl className="mt-6 grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-secondary/60 p-5">
                <dt className="text-[0.58rem] font-bold tracking-[0.18em] text-plum uppercase">
                  {s.label}
                </dt>
                <dd className="mt-1 font-display text-2xl text-primary">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
