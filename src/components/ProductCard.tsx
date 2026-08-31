import { Link } from "react-router-dom";
import { ShoppingBag, MessageCircle, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { ProductGallery } from "./ProductGallery";
import { badgeZero } from "./cta";
import { useCart } from "@/context/cart";
import { whatsappLink } from "@/lib/brand";
import { productOrderMessage, type Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  const { add, openCart } = useCart();

  return (
    <article className="group scene-3d relative flex h-full flex-col overflow-hidden rounded-2xl surface-card transition-all duration-500 hover:-translate-y-2 hover:shadow-lift sm:rounded-3xl">
      <span
        className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent transition-colors duration-500 group-hover:border-gold/60 sm:rounded-3xl"
        aria-hidden
      />
      <div className="relative">
        <ProductGallery
          images={product.images}
          rounded="rounded-t-2xl sm:rounded-t-3xl"
          className="aspect-square [transform:translateZ(0)] transition-transform duration-700 group-hover:scale-[1.03] group-hover:[transform:rotateX(3deg)_rotateY(-3deg)]"
        />
        <span
          className={`${badgeZero} absolute top-2 left-2 scale-90 origin-top-left shadow-soft sm:top-3 sm:left-3 sm:scale-100`}
        >
          {product.badge}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-3 sm:p-5">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
          <h3 className="font-display text-base leading-tight text-primary sm:text-2xl">
            {product.name}
          </h3>
          <div className="flex shrink-0 items-baseline gap-1.5 sm:items-center sm:gap-2">
            <span className="font-display text-base font-semibold text-plum sm:text-xl">
              ₹{product.price}
            </span>
            <span className="text-xs line-through text-muted-foreground sm:text-sm">
              ₹{product.mrp}
            </span>
          </div>
        </div>
        <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-muted-foreground sm:mt-2 sm:text-sm">
          {product.description}
        </p>

        <dl className="mt-3 hidden grid-cols-2 gap-2 text-[0.7rem] sm:mt-4 sm:grid">
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

        <p className="mt-2 text-[0.65rem] text-muted-foreground sm:hidden">
          {product.packQuantity} · {product.weight}
        </p>

        <div className="mt-auto grid gap-1.5 pt-3 sm:gap-2 sm:pt-5">
          <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={() => {
                add(product.id);
                toast.success(`${product.name} added to your box`);
                openCart();
              }}
              aria-label={`Add ${product.name} to cart`}
              className="inline-flex h-9 items-center justify-center gap-1.5 rounded-full px-2 text-[0.58rem] font-bold tracking-[0.1em] text-primary-foreground transition-transform hover:-translate-y-0.5 [background:var(--gradient-royal)] sm:h-11 sm:gap-2 sm:text-[0.68rem] sm:tracking-[0.14em]"
            >
              <ShoppingBag className="size-3.5 shrink-0 sm:size-4" aria-hidden />
              <span className="hidden xs:inline sm:inline">ADD</span>
              <span className="hidden sm:inline">&nbsp;TO CART</span>
            </button>
            <a
              href={whatsappLink(productOrderMessage(product))}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Order ${product.name} on WhatsApp`}
              className="inline-flex h-9 items-center justify-center gap-1.5 rounded-full bg-[oklch(0.63_0.17_150)] px-2 text-[0.58rem] font-bold tracking-[0.1em] text-white transition-transform hover:-translate-y-0.5 sm:h-11 sm:gap-2 sm:text-[0.68rem] sm:tracking-[0.14em]"
            >
              <MessageCircle className="size-3.5 shrink-0 sm:size-4" aria-hidden />
              <span className="hidden xs:inline sm:inline">CHAT</span>
              <span className="hidden sm:inline">&nbsp;</span>
            </a>
          </div>
          <Link
            to={`/product/${product.id}`}
            className="inline-flex h-8 items-center justify-center gap-1 rounded-full border border-plum/30 text-[0.58rem] font-bold tracking-[0.1em] text-primary transition-colors hover:border-gold hover:text-plum sm:h-10 sm:gap-1.5 sm:text-[0.68rem] sm:tracking-[0.14em]"
          >
            VIEW DETAILS <ArrowRight className="size-3 sm:size-3.5" aria-hidden />
          </Link>
        </div>
      </div>
    </article>
  );
}
