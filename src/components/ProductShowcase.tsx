import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search } from "lucide-react";
import { ProductCard } from "./ProductCard";
import { SectionHeading } from "./Reveal";
import { products, searchProducts, type Category } from "@/data/products";

export function ProductShowcase({
  initialCategory = "cookies",
  lockCategory = false,
  eyebrow = "The Collection",
  title,
  subtitle,
}: {
  initialCategory?: Category;
  lockCategory?: boolean;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}) {
  const [category, setCategory] = useState<Category>(initialCategory);
  const [query, setQuery] = useState("");

  const list = useMemo(() => {
    const base = query.trim() ? searchProducts(query) : products;
    return base.filter((p) => p.category === category);
  }, [category, query]);

  return (
    <section id="collection" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
      <SectionHeading
        eyebrow={eyebrow}
        title={title ?? (category === "cookies" ? "Crispo Cookies" : "Crispo Brownies")}
        subtitle={subtitle}
      />

      <div className="mt-10 flex flex-col items-center gap-5">
        {lockCategory ? null : (
          <div
            role="tablist"
            aria-label="Product categories"
            className="relative inline-flex rounded-full border border-lavender/60 bg-card/70 p-1 shadow-soft"
          >
            {(["cookies", "brownies"] as Category[]).map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={category === c}
                onClick={() => setCategory(c)}
                className={`relative z-10 rounded-full px-7 py-2.5 text-[0.7rem] font-bold tracking-[0.2em] uppercase transition-colors duration-300 ${
                  category === c ? "text-primary-foreground" : "text-primary/70 hover:text-plum"
                }`}
              >
                {category === c ? (
                  <motion.span
                    layoutId="category-pill"
                    className="absolute inset-0 -z-10 rounded-full [background:var(--gradient-royal)]"
                    transition={{ type: "spring", stiffness: 320, damping: 30 }}
                  />
                ) : null}
                {c}
              </button>
            ))}
          </div>
        )}

        <label className="relative w-full max-w-sm">
          <span className="sr-only">Filter products</span>
          <Search
            className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-plum"
            aria-hidden
          />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filter by flavour, oats, seeds, kaju…"
            className="h-11 w-full rounded-full border border-lavender/60 bg-card/70 pr-4 pl-11 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-plum"
          />
        </label>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={category + query}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {list.length === 0 ? (
            <p className="col-span-full py-10 text-center text-sm text-muted-foreground">
              No {category} match your search.
            </p>
          ) : (
            list.map((p) => <ProductCard key={p.id} product={p} />)
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
