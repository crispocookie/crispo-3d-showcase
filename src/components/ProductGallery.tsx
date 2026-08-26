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
  const touchStart = useRef<number | null>(null);

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + images.length) % images.length),
    [images.length],
  );

  useEffect(() => {
    if (paused || images.length < 2) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(() => go(1), interval);
    return () => window.clearInterval(id);
  }, [paused, images.length, interval, go]);

  return (
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
  );
}
