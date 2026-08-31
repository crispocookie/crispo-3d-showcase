import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ProductGallery } from "./ProductGallery";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  const navigate = useNavigate();

  const openProduct = () => navigate(`/product/${product.id}`);

  return (
    <article
      role="link"
      tabIndex={0}
      onClick={openProduct}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openProduct();
        }
      }}
      className="group scene-3d relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-border/50 bg-card/80 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/80 sm:rounded-3xl"
    >
      <span
        className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent transition-colors duration-300 group-hover:border-gold/50 sm:rounded-3xl"
        aria-hidden
      />

      <div className="relative">
        <ProductGallery
          images={product.images}
          rounded="rounded-t-2xl sm:rounded-t-3xl"
          showControls={false}
          className="aspect-square [transform:translateZ(0)] transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-2.5 sm:p-3.5">
        <h3 className="line-clamp-2 min-h-[2.5em] font-display text-sm leading-tight text-primary sm:text-lg">
          {product.name}
        </h3>

        <div className="flex items-center gap-1.5 text-[0.72rem] sm:text-sm">
          <span className="font-display text-base font-semibold text-plum sm:text-lg">
            ₹{product.price}
          </span>
          <span className="text-[0.68rem] line-through text-muted-foreground sm:text-xs">
            ₹{product.mrp}
          </span>
        </div>

        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            openProduct();
          }}
          className="mt-auto inline-flex h-8 items-center justify-center gap-1 rounded-full border border-plum/30 bg-white/60 text-[0.58rem] font-bold tracking-[0.12em] text-primary transition-colors hover:border-gold hover:text-plum focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/80 sm:h-9 sm:text-[0.62rem]"
        >
          VIEW DETAILS <ArrowRight className="size-3 sm:size-3.5" aria-hidden />
        </button>
      </div>
    </article>
  );
}
