import { Link } from "@tanstack/react-router";
import { ShoppingBag, MessageCircle, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { ProductGallery } from "./ProductGallery";
import { badgeZero } from "./cta";
import { useCart } from "@/context/cart";
import { whatsappLink } from "@/lib/brand";
import { productOrderMessage, productPrice, type Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  const { add, openCart } = useCart();

  return (
    <article className="group scene-3d relative flex h-full flex-col overflow-hidden rounded-3xl surface-card transition-all duration-500 hover:-translate-y-2 hover:shadow-lift">
      <span
        className="pointer-events-none absolute inset-0 rounded-3xl border border-transparent transition-colors duration-500 group-hover:border-gold/60"
        aria-hidden
      />
      <div className="relative">
        <ProductGallery
          images={product.images}
          rounded="rounded-t-3xl"
          className="aspect-square [transform:translateZ(0)] transition-transform duration-700 group-hover:scale-[1.03] group-hover:[transform:rotateX(3deg)_rotateY(-3deg)]"
        />
        <span className={`${badgeZero} absolute top-3 left-3 shadow-soft`}>{product.badge}</span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-2xl leading-tight text-primary">{product.name}</h3>
          <span className="shrink-0 font-display text-xl text-plum">{productPrice(product)}</span>
        </div>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>

        <dl className="mt-4 grid grid-cols-2 gap-2 text-[0.7rem]">
          <div className="rounded-xl bg-secondary/70 px-3 py-2">
            <dt className="text-muted-foreground">Pack</dt>
            <dd className="font-semibold text-primary">{product.packQuantity}</dd>
          </div>
          <div className="rounded-xl bg-secondary/70 px-3 py-2">
            <dt className="text-muted-foreground">Weight</dt>
            <dd className="font-semibold text-primary">{product.weight}</dd>
          </div>
          {product.nutrition.slice(0, 2).map((n) => (
            <div key={n.label} className="rounded-xl bg-secondary/70 px-3 py-2">
              <dt className="text-muted-foreground">{n.label}</dt>
              <dd className="font-semibold text-primary">{n.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-5 grid gap-2">
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => {
                add(product.id);
                toast.success(`${product.name} added to your box`);
                openCart();
              }}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full text-[0.68rem] font-bold tracking-[0.14em] text-primary-foreground transition-transform hover:-translate-y-0.5 [background:var(--gradient-royal)]"
            >
              <ShoppingBag className="size-4" aria-hidden /> ADD TO CART
            </button>
            <a
              href={whatsappLink(productOrderMessage(product))}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[oklch(0.63_0.17_150)] text-[0.68rem] font-bold tracking-[0.14em] text-white transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="size-4" aria-hidden /> WHATSAPP
            </a>
          </div>
          <Link
            to="/product/$productId"
            params={{ productId: product.id }}
            className="inline-flex h-10 items-center justify-center gap-1.5 rounded-full border border-plum/30 text-[0.68rem] font-bold tracking-[0.14em] text-primary transition-colors hover:border-gold hover:text-plum"
          >
            VIEW DETAILS <ArrowRight className="size-3.5" aria-hidden />
          </Link>
        </div>
      </div>
    </article>
  );
}
