import { motion } from "motion/react";
import allMix from "@/assets/all-mix-cookies.jpg";
import { Reveal } from "./Reveal";

const badges = [
  "100% ZERO MAIDHA",
  "MADE WITH OATS",
  "PREMIUM INGREDIENTS",
  "HANDCRAFTED",
  "MADE WITH LOVE",
];

export function BrandIntro() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-12 sm:px-6 sm:py-28 lg:grid-cols-2">
      <Reveal className="scene-3d order-2 lg:order-1">
        <div className="relative">
          <div className="absolute -inset-4 rounded-[3rem] bg-beige/60 blur-2xl" aria-hidden />
          <img
            src={allMix}
            alt="Assortment of CRISPO oat cookies on a plate"
            width={1024}
            height={1024}
            loading="lazy"
            className="relative aspect-square w-full rounded-[2.5rem] object-cover shadow-lift transition-transform duration-700 hover:[transform:rotateX(4deg)_rotateY(-4deg)]"
          />
        </div>
      </Reveal>

      <div className="order-1 lg:order-2">
        <Reveal>
          <p className="eyebrow">Our Story</p>
          <h2 className="mt-3 font-display text-4xl leading-[1.05] font-medium text-primary sm:text-5xl">
            A Little Crisp. <span className="text-gold-foil">A Lot of Love.</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            At CRISPO COOKIES, every bite is made to bring together great taste, quality ingredients
            and wholesome goodness. From indulgent chocolate cookies to fruity and nutritious
            creations, our cookies are crafted with care and baked to make every moment a little
            sweeter.
          </p>
        </Reveal>
        <ul className="mt-8 flex flex-wrap gap-2.5">
          {badges.map((b, i) => (
            <motion.li
              key={b}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="rounded-full border border-plum/25 bg-card/80 px-4 py-2 text-[0.62rem] font-bold tracking-[0.16em] text-primary shadow-soft"
            >
              {b}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
