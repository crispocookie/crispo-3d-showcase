import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "./Reveal";
import { ProductCard } from "./ProductCard";
import { featuredProducts } from "@/data/products";

export function FeaturedCarousel() {
  const track = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <section className="py-12 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            align="left"
            eyebrow="Most Loved"
            title="Crispo Favourites"
            subtitle="The bites our customers reach for first."
          />
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Scroll favourites left"
              className="rounded-full border border-plum/30 bg-card/70 p-3 text-primary transition-colors hover:border-gold"
            >
              <ChevronLeft className="size-4" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Scroll favourites right"
              className="rounded-full border border-plum/30 bg-card/70 p-3 text-primary transition-colors hover:border-gold"
            >
              <ChevronRight className="size-4" aria-hidden />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={track}
        className="no-scrollbar mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-4 sm:mt-10 sm:gap-6 sm:px-6"
      >
        {featuredProducts.map((p) => (
          <div key={p.id} className="w-[46vw] shrink-0 snap-start sm:w-[22rem]">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </section>
  );
}
