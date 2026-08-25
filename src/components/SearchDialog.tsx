import { Link } from "@tanstack/react-router";
import { Search, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { productPrice, searchProducts, products } from "@/data/products";

export function SearchDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setQuery("");
      const id = window.setTimeout(() => inputRef.current?.focus(), 80);
      return () => window.clearTimeout(id);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const results = useMemo(() => (query.trim() ? searchProducts(query) : products), [query]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-start justify-center p-4 pt-20 sm:pt-28">
      <button
        type="button"
        aria-label="Close search"
        onClick={onClose}
        className="absolute inset-0 bg-espresso/45"
      />
      <div
        role="dialog"
        aria-label="Search products"
        className="relative w-full max-w-xl overflow-hidden rounded-3xl bg-card shadow-lift animate-reveal"
      >
        <div className="flex items-center gap-3 border-b border-border px-5 py-4">
          <Search className="size-5 text-plum" aria-hidden />
          <label className="sr-only" htmlFor="crispo-search">
            Search cookies and brownies
          </label>
          <input
            id="crispo-search"
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search chocolate, rose, pine apple, seeds, kaju, oats…"
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="rounded-full p-1.5 text-primary transition-colors hover:bg-secondary"
          >
            <X className="size-5" aria-hidden />
          </button>
        </div>
        <ul className="max-h-[60vh] overflow-y-auto p-2">
          {results.length === 0 ? (
            <li className="px-4 py-8 text-center text-sm text-muted-foreground">
              No products match “{query}”.
            </li>
          ) : (
            results.map((p) => (
              <li key={p.id}>
                <Link
                  to="/product/$productId"
                  params={{ productId: p.id }}
                  onClick={onClose}
                  className="flex items-center gap-4 rounded-2xl px-3 py-2.5 transition-colors hover:bg-secondary"
                >
                  <img
                    src={p.images[0].src}
                    alt={p.images[0].alt}
                    width={64}
                    height={64}
                    loading="lazy"
                    className="size-14 rounded-xl object-cover"
                  />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate font-display text-lg text-primary">
                      {p.name}
                    </span>
                    <span className="block text-xs text-muted-foreground capitalize">
                      {p.category} · {p.packQuantity}
                    </span>
                  </span>
                  <span className="text-sm font-semibold text-primary">{productPrice(p)}</span>
                </Link>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
