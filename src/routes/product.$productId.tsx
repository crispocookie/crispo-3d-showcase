import { Link, useParams } from "react-router-dom";
import { ArrowLeft, MessageCircle, Minus, Plus, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { ProductGallery } from "@/components/ProductGallery";
import { ProductCard } from "@/components/ProductCard";
import { badgeZero, ctaGold, ctaWhatsapp } from "@/components/cta";
import { useCart } from "@/context/cart";
import { getProduct, productOrderMessage, productPrice, relatedProducts } from "@/data/products";
import { whatsappLink } from "@/lib/brand";
import { useMeta } from "@/hooks/use-meta";

export default function ProductPage() {
  const { productId } = useParams<{ productId: string }>();
  const product = productId ? getProduct(productId) : undefined;

  const title = product
    ? `${product.name} — CRISPO COOKIES`
    : "Product Unavailable — CRISPO COOKIES";
  const description = product
    ? `${product.description} Order ${product.packQuantity} from CRISPO COOKIES.`
    : "This CRISPO COOKIES product is currently unavailable.";

  useMeta({ title, description });

  const { add, openCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <ProductNotFound />;
  }

  const related = relatedProducts(product);

  const addToCart = () => {
    add(product.id, quantity);
    toast.success(`${product.name} added to your box`);
    openCart();
  };

  return (
    <article className="pt-28 pb-20 sm:pt-32">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <div className="scene-3d">
          <ProductGallery
            images={product.images}
            rounded="rounded-[2.5rem]"
            className="aspect-square shadow-lift"
          />
        </div>

        <div className="lg:sticky lg:top-28">
          <Link
            to={product.category === "cookies" ? "/cookies" : "/brownies"}
            className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.16em] text-plum uppercase"
          >
            <ArrowLeft className="size-4" aria-hidden /> Back to {product.category}
          </Link>
          <span className={`${badgeZero} mt-8`}>{product.badge}</span>
          <h1 className="mt-5 font-display text-5xl leading-[0.98] font-medium text-primary sm:text-6xl">
            {product.name}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            {product.description}
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl bg-secondary/70 p-4">
              <p className="text-[0.62rem] font-bold tracking-[0.18em] text-plum uppercase">
                Price
              </p>
              <p className="mt-1 font-display text-2xl text-primary">{productPrice(product)}</p>
            </div>
            <div className="rounded-2xl bg-secondary/70 p-4">
              <p className="text-[0.62rem] font-bold tracking-[0.18em] text-plum uppercase">Pack</p>
              <p className="mt-1 font-display text-2xl text-primary">{product.packQuantity}</p>
            </div>
            <div className="rounded-2xl bg-secondary/70 p-4">
              <p className="text-[0.62rem] font-bold tracking-[0.18em] text-plum uppercase">
                Weight
              </p>
              <p className="mt-1 font-display text-2xl text-primary">{product.weight}</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <div className="flex h-12 items-center rounded-full border border-border bg-card">
              <button
                type="button"
                onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                aria-label={`Decrease quantity of ${product.name}`}
                className="px-4 text-primary transition-colors hover:text-plum"
              >
                <Minus className="size-4" aria-hidden />
              </button>
              <span className="min-w-8 text-center text-sm font-bold text-primary">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((value) => value + 1)}
                aria-label={`Increase quantity of ${product.name}`}
                className="px-4 text-primary transition-colors hover:text-plum"
              >
                <Plus className="size-4" aria-hidden />
              </button>
            </div>
            <button type="button" onClick={addToCart} className={ctaGold}>
              <ShoppingBag className="size-4" aria-hidden /> ADD TO CART
            </button>
            <a
              href={whatsappLink(productOrderMessage(product, quantity))}
              target="_blank"
              rel="noopener noreferrer"
              className={ctaWhatsapp}
            >
              <MessageCircle className="size-4" aria-hidden /> ORDER ON WHATSAPP
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {product.nutrition.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-lavender/50 bg-card/70 p-4"
              >
                <p className="text-[0.62rem] font-bold tracking-[0.18em] text-plum uppercase">
                  {item.label}
                </p>
                <p className="mt-1 font-display text-2xl text-primary">{item.value}</p>
              </div>
            ))}
          </div>

          <ul className="mt-8 flex flex-wrap gap-2">
            {product.benefits.map((benefit) => (
              <li
                key={benefit}
                className="rounded-full border border-plum/25 bg-card/80 px-4 py-2 text-[0.62rem] font-bold tracking-[0.14em] text-primary"
              >
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6">
        <h2 className="font-display text-4xl text-primary">More to crave</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </article>
  );
}

function ProductNotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 pt-36 pb-24 text-center sm:px-6">
      <h1 className="font-display text-5xl text-primary">Product unavailable</h1>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        This CRISPO COOKIES product could not be found. Browse the current collection instead.
      </p>
      <Link to="/cookies" className={`${ctaGold} mt-8`}>
        EXPLORE COOKIES
      </Link>
    </div>
  );
}
