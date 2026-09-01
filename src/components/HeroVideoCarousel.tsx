import { useEffect, useRef, useState } from "react";
import video1 from "@/assets/crispo-hero-1.mp4";
import video2 from "@/assets/crispo-hero-2.mp4";

const clips = [video1, video2];

/**
 * Full-bleed cinematic hero background.
 * Two-clip rotation with a soft crossfade.
 * Muted / autoplay / no native controls — fills the entire hero.
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
      aria-hidden
      className={`relative aspect-video w-full shrink-0 overflow-hidden sm:absolute sm:inset-0 sm:aspect-auto ${className}`}
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
          className="absolute inset-0 size-full object-contain object-center transition-opacity duration-[1400ms] ease-out sm:object-cover"
          style={{ opacity: active === i ? 1 : 0 }}
        />
      ))}

      {/* clip indicator dots */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {clips.map((src, i) => (
          <button
            key={src}
            type="button"
            aria-label={`Show hero video ${i + 1}`}
            onClick={() => setActive(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              active === i ? "w-6 bg-gold" : "w-1.5 bg-cream/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
