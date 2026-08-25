import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/cart";

export function MobileOrderBar() {
  const { count, openCart, subtotal } = useCart();
  if (count === 0) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-lavender/50 bg-cream/95 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur-md sm:hidden">
      <button
        type="button"
        onClick={openCart}
        className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full text-xs font-bold tracking-[0.18em] text-primary-foreground [background:var(--gradient-royal)]"
      >
        <ShoppingBag className="size-4" aria-hidden /> VIEW BOX · {count} · ₹{subtotal}
      </button>
    </div>
  );
}
