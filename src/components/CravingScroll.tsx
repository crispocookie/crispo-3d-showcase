import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { SectionHeading } from "./Reveal";
import doubleChoc from "@/assets/double-chocolate-cookie.jpg";
import rose from "@/assets/rose-cookie.jpg";
import pineapple from "@/assets/pineapple-cookie.jpg";
import seed from "@/assets/dry-seed-cookie.jpg";
import kaju from "@/assets/kaju-brownie.jpg";

const cravings = [
  {
    craving: "Chocolate",
    product: "Double Chocolate Cookie / Brownie",
    id: "double-chocolate-cookie",
    src: doubleChoc,
    alt: "CRISPO double chocolate oat cookies",
  },
  {
    craving: "Floral",
    product: "Rose Cookie",
    id: "rose-cookie",
    src: rose,
    alt: "CRISPO rose oat cookies with rose petals",
  },
  {
    craving: "Tropical",
    product: "Pine Apple Cookie",
    id: "pine-apple-cookie",
    src: pineapple,
    alt: "CRISPO pineapple oat cookies",
  },
  {
    craving: "Nutrition",
    product: "Dry Seed Cookie",
    id: "dry-seed-cookies",
    src: seed,
    alt: "CRISPO four-seed oat cookies",
  },
  {
    craving: "Indulgence",
    product: "Kaju Oats Brownie",
    id: "kaju-oats-brownie",
    src: kaju,
    alt: "CRISPO kaju oats brownies with cashews",
  },
];

/** Scroll-revealed craving → product pairings. */
export function CravingScroll() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading
        eyebrow="Find Your Crispo"
        title="Every craving has a CRISPO answer."
      />

      <div className="mt-14 space-y-6">
        {cravings.map((c, i) => (
          <motion.div
            key={c.craving}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={`scene-3d grid items-center gap-6 rounded-[2rem] surface-card p-5 shadow-soft transition-shadow duration-500 hover:shadow-lift sm:grid-cols-[16rem_1fr] sm:p-6 ${
              i % 2 === 1 ? "sm:grid-cols-[1fr_16rem]" : ""
            }`}
          >
            <img
              src={c.src}
              alt={c.alt}
              width={1024}
              height={1024}
              loading="lazy"
              className={`h-56 w-full rounded-[1.5rem] object-cover shadow-soft sm:h-60 ${
                i % 2 === 1 ? "sm:order-2" : ""
              }`}
            />
            <div className={i % 2 === 1 ? "sm:order-1 sm:text-right" : ""}>
              <p className="eyebrow">Craving</p>
              <h3 className="mt-2 font-display text-4xl font-medium text-primary sm:text-5xl">
                {c.craving}
              </h3>
              <p className="mt-3 text-sm tracking-[0.08em] text-muted-foreground">{c.product}</p>
              <Link
                to="/product/$productId"
                params={{ productId: c.id }}
                className="mt-5 inline-flex text-[0.66rem] font-bold tracking-[0.2em] text-plum underline decoration-gold/70 decoration-2 underline-offset-4 transition-colors hover:text-primary"
              >
                VIEW PRODUCT
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
