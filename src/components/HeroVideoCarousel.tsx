import { useEffect, useRef, useState } from "react";
import video1 from "@/assets/crispo-hero-1.mp4.asset.json";
import video2 from "@/assets/crispo-hero-2.mp4.asset.json";

const clips = [video1.url, video2.url];

/**
 * Two-clip cinematic hero carousel with a soft crossfade.
 * Muted / looping-by-rotation / no native controls.
 */
export function HeroVideoCarousel({ className = "" }: { className?: string }) {
  const [active, setActive] = useState(0);
  const refs = useRef<Array<HTMLVideoElement | null>>([]);

  useEffect(() => {
    const el = refs.current[active];
    if (!el) return;
    el.currentTime = 0;
    void el.play().catch(() => undefined);
  }, [active]);

  // Fallback rotation in case an "ended" event never fires (looping media, codec quirks).
  useEffect(() => {
    const timer = window.setTimeout(() => setActive((i) => (i + 1) % clips.length), 14000);
    return () => window.clearTimeout(timer);
  }, [active]);

  return (
    <div
      className={`relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-lift ring-1 ring-cream/60 sm:aspect-square lg:aspect-auto lg:min-h-[34rem] xl:min-h-[38rem] ${className}`}
    >
      {clips.map((src, i) => (
        <video
          key={src}
          ref={(el) => {
            refs.current[i] = el;
          }}
          src={src}
          muted
          autoPlay={i === 0}
          playsInline
          preload="auto"
          controls={false}
          disablePictureInPicture
          onEnded={() => setActive((cur) => (cur === i ? (i + 1) % clips.length : cur))}
          className="absolute inset-0 size-full object-cover transition-opacity duration-1000 ease-out"
          style={{ opacity: active === i ? 1 : 0 }}
        />
      ))}

      {/* premium edge light, never over the subject centre */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[2.5rem] [background:linear-gradient(120deg,oklch(1_0_0/0.22)_0%,transparent_26%,transparent_84%,oklch(1_0_0/0.14)_100%)]"
      />

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {clips.map((src, i) => (
          <button
            key={src}
            type="button"
            aria-label={`Show hero video ${i + 1}`}
            onClick={() => setActive(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              active === i ? "w-6 bg-gold" : "w-1.5 bg-cream/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
