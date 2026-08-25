import { Link } from "@tanstack/react-router";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { cartWhatsappMessage, useCart } from "@/context/cart";
import { whatsappLink } from "@/lib/brand";
import { productPrice } from "@/data/products";

export function CartDrawer() {
  const { isOpen, closeCart, items, subtotal, setQuantity, remove, count } = useCart();

  return (
    <div
      className={`fixed inset-0 z-[60] ${isOpen ? "" : "pointer-events-none"}`}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        aria-label="Close cart"
        onClick={closeCart}
        className={`absolute inset-0 bg-espresso/45 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        tabIndex={isOpen ? 0 : -1}
      />
      <aside
        role="dialog"
        aria-label="Shopping cart"
        className={`absolute top-0 right-0 flex h-full w-full max-w-md flex-col bg-card shadow-lift transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex items-center justify-between border-b border-border px-5 py-4">
          <h2 className="flex items-center gap-2 text-xl text-primary">
            <ShoppingBag className="size-5" aria-hidden /> Your Box
            <span className="text-sm text-muted-foreground">({count})</span>
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="rounded-full p-2 text-primary transition-colors hover:bg-secondary"
            tabIndex={isOpen ? 0 : -1}
          >
            <X className="size-5" aria-hidden />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <p className="mt-10 text-center text-sm text-muted-foreground">
              Your box is empty. Add a cookie or brownie to begin.
            </p>
          ) : (
            <ul className="space-y-4">
              {items.map(({ product, quantity }) => (
                <li key={product.id} className="flex gap-4 rounded-2xl surface-card p-3">
                  <img
                    src={product.images[0].src}
                    alt={product.images[0].alt}
                    width={96}
                    height={96}
                    loading="lazy"
                    className="size-20 rounded-xl object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-display text-lg text-primary">{product.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {product.packQuantity} · {product.weight}
                    </p>
                    <div className="mt-2 flex items-center gap-3">
                      <div className="flex items-center rounded-full border border-border">
                        <button
                          type="button"
                          onClick={() => setQuantity(product.id, quantity - 1)}
                          aria-label={`Decrease quantity of ${product.name}`}
                          className="p-1.5 text-primary transition-colors hover:text-plum"
                          tabIndex={isOpen ? 0 : -1}
                        >
                          <Minus className="size-4" aria-hidden />
                        </button>
                        <span className="min-w-6 text-center text-sm font-semibold">{quantity}</span>
                        <button
                          type="button"
                          onClick={() => setQuantity(product.id, quantity + 1)}
                          aria-label={`Increase quantity of ${product.name}`}
                          className="p-1.5 text-primary transition-colors hover:text-plum"
                          tabIndex={isOpen ? 0 : -1}
                        >
                          <Plus className="size-4" aria-hidden />
                        </button>
                      </div>
                      <span className="text-sm font-semibold text-primary">
                        {productPrice(product)}
                      </span>
                      <button
                        type="button"
                        onClick={() => remove(product.id)}
                        aria-label={`Remove ${product.name}`}
                        className="ml-auto rounded-full p-1.5 text-muted-foreground transition-colors hover:text-destructive"
                        tabIndex={isOpen ? 0 : -1}
                      >
                        <Trash2 className="size-4" aria-hidden />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <footer className="border-t border-border px-5 py-4">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>Subtotal</span>
            <span className="font-semibold text-primary">₹{subtotal}</span>
          </div>
          <div className="mt-1 flex items-center justify-between text-base">
            <span className="font-display text-xl text-primary">Total</span>
            <span className="font-semibold text-primary">₹{subtotal}</span>
          </div>
          <div className="mt-4 grid gap-2">
            <a
              href={whatsappLink(cartWhatsappMessage(items, subtotal))}
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled={items.length === 0}
              onClick={(e) => {
                if (items.length === 0) e.preventDefault();
              }}
              className={`inline-flex h-12 items-center justify-center rounded-full bg-[oklch(0.63_0.17_150)] text-sm font-bold tracking-wide text-white transition-transform hover:-translate-y-0.5 ${
                items.length === 0 ? "pointer-events-none opacity-50" : ""
              }`}
              tabIndex={isOpen ? 0 : -1}
            >
              PROCEED TO WHATSAPP ORDER
            </a>
            <Link
              to="/cookies"
              onClick={closeCart}
              className="inline-flex h-11 items-center justify-center rounded-full border border-border text-sm font-semibold text-primary transition-colors hover:bg-secondary"
              tabIndex={isOpen ? 0 : -1}
            >
              Continue shopping
            </Link>
          </div>
        </footer>
      </aside>
    </div>
  );
}
