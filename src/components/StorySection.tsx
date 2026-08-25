import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { SectionHeading } from "./Reveal";
import { products } from "@/data/products";

const cravings = ["Chocolate", "Floral", "Tropical", "Nutritious", "Brownie"] as const;

export function StorySection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 [background:var(--gradient-cocoa)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          tone="dark"
          eyebrow="Choose Your Crave"
          title="Five moods. One box away."
          subtitle="Scroll through the CRISPO range and follow your craving."
        />

        <div className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4">
          {cravings.map((craving, i) => {
            const product = products.find((p) => p.craving === craving);
            if (!product) return null;
            return (
              <motion.div
                key={craving}
                initial={{ opacity: 0, y: 30, rotate: -1.5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="w-[78vw] shrink-0 snap-start sm:w-[19rem]"
              >
                <Link
                  to="/product/$productId"
                  params={{ productId: product.id }}
                  className="group block overflow-hidden rounded-[2rem] border border-gold/25 bg-espresso/40 transition-transform duration-500 hover:-translate-y-2"
                >
                  <img
                    src={product.images[0].src}
                    alt={product.images[0].alt}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="p-5">
                    <p className="text-[0.62rem] font-bold tracking-[0.24em] text-gold uppercase">
                      {craving}
                    </p>
                    <h3 className="mt-2 font-display text-2xl text-cream">{product.name}</h3>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
