import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { BRAND } from "@/lib/brand";

export type PageHeroImage = {
  src: string;
  alt: string;
};

/**
 * Premium hero used by the secondary pages (Cookies / About / Why Crispo / Contact).
 * Pointer tilt + scroll parallax, soft gold light reflections, no overlay on the product.
 */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  secondaryImage,
  actions,
  showZeroMaidha = true,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle: string;
  image: PageHeroImage;
  secondaryImage?: PageHeroImage;
  actions?: ReactNode;
  showZeroMaidha?: boolean;
}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [scroll, setScroll] = useState(0);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onMove = (e: PointerEvent) => {
      if (frame.current !== null) return;
      frame.current = window.requestAnimationFrame(() => {
        frame.current = null;
        setTilt({
          x: (e.clientX / window.innerWidth - 0.5) * 2,
          y: (e.clientY / window.innerHeight - 0.5) * 2,
        });
      });
    };
    const onScroll = () => setScroll(window.scrollY);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
      if (frame.current !== null) window.cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <section className="relative overflow-hidden pt-10 pb-14 sm:pt-16 sm:pb-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-32 -left-24 size-[24rem] rounded-[46%_54%_38%_62%/58%_42%_58%_42%] bg-lavender/60"
          style={{ transform: `translate3d(${tilt.x * 12}px, ${tilt.y * 10 - scroll * 0.05}px, 0)` }}
        />
        <div
          className="absolute -right-28 bottom-[-5rem] size-[26rem] rounded-[58%_42%_55%_45%/45%_58%_42%_55%] bg-lavender/50"
          style={{
            transform: `translate3d(${tilt.x * -14}px, ${tilt.y * -8 - scroll * 0.03}px, 0)`,
          }}
        />
        <div className="absolute top-1/4 left-1/2 size-[30rem] -translate-x-1/2 rounded-full bg-beige/70 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr]">
        <div className="animate-rise text-center lg:text-left">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1 className="mt-4 font-display text-5xl leading-[0.98] font-medium text-primary sm:text-6xl lg:text-[4.4rem]">
            {title}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground lg:mx-0">
            {subtitle}
          </p>
          {showZeroMaidha ? (
            <span className="mt-7 inline-flex items-center gap-2 rounded-full border border-gold/60 bg-cream/85 px-5 py-2 text-[0.68rem] font-bold tracking-[0.26em] text-espresso shadow-gold">
              {BRAND.zeroMaidha}
            </span>
          ) : null}
          {actions ? (
            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">{actions}</div>
          ) : null}
        </div>

        <div className="scene-3d relative">
          <div
            className="relative"
            style={{
              transform: `perspective(1200px) rotateY(${tilt.x * 5}deg) rotateX(${-tilt.y * 4}deg) translate3d(0, ${-scroll * 0.05}px, 0)`,
              transition: "transform 220ms ease-out",
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              width={1024}
              height={1024}
              className="aspect-square w-full rounded-[2.5rem] object-cover shadow-lift"
            />
            {/* light reflection – sits on the frame edge, never covers the product centre */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-[2.5rem] [background:linear-gradient(120deg,oklch(1_0_0/0.28)_0%,transparent_28%,transparent_82%,oklch(1_0_0/0.16)_100%)]"
            />
            {secondaryImage ? (
              <img
                src={secondaryImage.src}
                alt={secondaryImage.alt}
                width={512}
                height={512}
                loading="lazy"
                className="absolute -bottom-8 -left-6 hidden size-40 rounded-[1.75rem] border border-cream/70 object-cover shadow-lift sm:block"
                style={{ transform: `translate3d(${tilt.x * -10}px, ${tilt.y * -6}px, 0)` }}
              />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
