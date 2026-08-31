import { Instagram, Youtube } from "lucide-react";
import { SectionHeading } from "./Reveal";
import { BRAND } from "@/lib/brand";
import { ctaOutline, ctaPrimary } from "./cta";
import doubleChoc from "@/assets/double-chocolate-cookie.jpg";
import rose from "@/assets/rose-cookie.jpg";
import pineapple from "@/assets/pineapple-cookie.jpg";
import seed from "@/assets/dry-seed-cookie.jpg";
import kaju from "@/assets/kaju-brownie.jpg";
import brownie from "@/assets/double-chocolate-brownie.jpg";

const grid = [
  { src: doubleChoc, alt: "CRISPO double chocolate cookies" },
  { src: rose, alt: "CRISPO rose cookies with petals" },
  { src: pineapple, alt: "CRISPO pineapple cookies" },
  { src: seed, alt: "CRISPO dry seed cookies" },
  { src: brownie, alt: "CRISPO double chocolate oats brownies" },
  { src: kaju, alt: "CRISPO kaju oats brownies" },
];

export function SocialSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-28">
      <SectionHeading
        eyebrow="Follow the Crispo Journey"
        title="Behind every batch."
        subtitle={`${BRAND.instagramHandle} on Instagram · ${BRAND.youtubeHandle} on YouTube`}
      />

      <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {grid.map((img) => (
          <a
            key={img.src}
            href={BRAND.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl"
          >
            <img
              src={img.src}
              alt={img.alt}
              width={1024}
              height={1024}
              loading="lazy"
              className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-royal/0 text-cream opacity-0 transition-all duration-500 group-hover:bg-royal/45 group-hover:opacity-100">
              <Instagram className="size-7" aria-hidden />
            </span>
          </a>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <a
          href={BRAND.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={ctaPrimary}
        >
          <Instagram className="size-4" aria-hidden /> FOLLOW ON INSTAGRAM
        </a>
        <a href={BRAND.youtubeUrl} target="_blank" rel="noopener noreferrer" className={ctaOutline}>
          <Youtube className="size-4" aria-hidden /> WATCH OUR JOURNEY
        </a>
      </div>
    </section>
  );
}
