import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ProductImage } from "@/data/products";

export function ProductGallery({
  images,
  interval = 4200,
  className = "",
  rounded = "rounded-3xl",
  showControls = true,
}: {
  images: ProductImage[];
  interval?: number;
  className?: string;
  rounded?: string;
  showControls?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const touchStart = useRef<number | null>(null);

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + images.length) % images.length),
    [images.length],
  );

  const openPreview = useCallback(() => {
    setPreviewOpen(true);
  }, []);

  const closePreview = useCallback(() => {
    setPreviewOpen(false);
  }, []);

  useEffect(() => {
    if (paused || images.length < 2) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(() => go(1), interval);
    return () => window.clearInterval(id);
  }, [paused, images.length, interval, go]);

  useEffect(() => {
    if (!previewOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setPreviewOpen(false);
      }
      if (event.key === "ArrowRight") {
        setIndex((i) => (i + 1 + images.length) % images.length);
      }
      if (event.key === "ArrowLeft") {
        setIndex((i) => (i - 1 + images.length) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [images.length, previewOpen]);

  const activeImage = images[index] ?? images[0];

  return (
    <>
      <div
        className={`group relative overflow-hidden ${rounded} bg-beige/60 ${className}`}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        onTouchStart={(e) => {
          const touch = e.touches[0];
          if (!touch) return;
          touchStart.current = touch.clientX;
          setPaused(true);
        }}
        onTouchEnd={(e) => {
          const start = touchStart.current;
          touchStart.current = null;
          setPaused(false);
          if (start === null) return;
          const touch = e.changedTouches[0];
          if (!touch) return;
          const delta = touch.clientX - start;
          if (Math.abs(delta) > 40) go(delta > 0 ? -1 : 1);
        }}
      >
        {images.map((img, i) => (
          <img
            key={`${img.src}-${i}`}
            src={img.src}
            alt={img.alt}
            loading={i === 0 ? "eager" : "lazy"}
            className={`h-full w-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              img.fit === "contain" ? "object-contain p-4" : "object-cover"
            } ${i === index ? "opacity-100" : "absolute inset-0 opacity-0"} ${
              i === index ? "scale-100" : "scale-105"
            }`}
            aria-hidden={i !== index}
          />
        ))}

        {showControls && images.length > 1 ? (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous image"
              className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-cream/85 p-2 text-primary opacity-0 shadow-soft transition-opacity duration-300 group-hover:opacity-100 focus-visible:opacity-100"
            >
              <ChevronLeft className="size-4" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next image"
              className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-cream/85 p-2 text-primary opacity-0 shadow-soft transition-opacity duration-300 group-hover:opacity-100 focus-visible:opacity-100"
            >
              <ChevronRight className="size-4" aria-hidden />
            </button>
          </>
        ) : null}

        {images.length > 0 ? (
          <button
            type="button"
            onClick={openPreview}
            aria-label="Preview current image"
            className="absolute bottom-3 left-3 z-10 inline-flex items-center gap-2 rounded-full border border-white/40 bg-cream/80 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-primary shadow-soft backdrop-blur-sm transition-transform duration-200 hover:-translate-y-0.5 hover:bg-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/80"
          >
            Preview
          </button>
        ) : null}

        {images.length > 1 ? (
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((img, i) => (
              <button
                key={`dot-${i}`}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show image ${i + 1}`}
                aria-current={i === index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-gold" : "w-1.5 bg-cream/70 hover:bg-cream"
                }`}
              />
            ))}
          </div>
        ) : null}
      </div>

      {previewOpen && activeImage ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1b1714]/80 p-4 backdrop-blur-sm transition-opacity duration-200"
          onClick={(event) => {
            if (event.target === event.currentTarget) closePreview();
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Product image preview"
        >
          <div className="relative max-h-[90vh] w-full max-w-5xl animate-[fadeIn_0.2s_ease-out]">
            <button
              type="button"
              onClick={closePreview}
              aria-label="Close preview"
              className="absolute -right-1 -top-1 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#2a201d]/90 text-lg text-white shadow-lg transition hover:bg-[#352b27] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/80"
            >
              ×
            </button>

            <div className="relative flex max-h-[90vh] items-center justify-center overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#f4efe8]/5 p-3 shadow-2xl sm:p-5">
              <img
                src={activeImage.src}
                alt={activeImage.alt}
                className="max-h-[80vh] w-auto max-w-full rounded-2xl object-contain"
                style={{ maxWidth: "90vw", maxHeight: "80vh" }}
              />

              {images.length > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={() => go(-1)}
                    aria-label="Previous image in preview"
                    className="absolute left-2 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#201b19]/70 text-white shadow-lg backdrop-blur-sm transition hover:bg-[#2a221f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/80 sm:left-4"
                  >
                    <ChevronLeft className="size-5" aria-hidden />
                  </button>
                  <button
                    type="button"
                    onClick={() => go(1)}
                    aria-label="Next image in preview"
                    className="absolute right-2 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#201b19]/70 text-white shadow-lg backdrop-blur-sm transition hover:bg-[#2a221f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/80 sm:right-4"
                  >
                    <ChevronRight className="size-5" aria-hidden />
                  </button>
                </>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
