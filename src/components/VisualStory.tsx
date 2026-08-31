import { Reveal, SectionHeading } from "./Reveal";
import doubleChoc from "@/assets/double-chocolate-cookie.jpg";
import rose from "@/assets/rose-cookie.jpg";
import pineapple from "@/assets/pineapple-cookie.jpg";
import seed from "@/assets/dry-seed-cookie.jpg";
import brownie from "@/assets/double-chocolate-brownie.jpg";
import kaju from "@/assets/kaju-brownie.jpg";
import packaging from "@/assets/packaging-lifestyle.jpg";

const tiles = [
  {
    src: doubleChoc,
    alt: "CRISPO double chocolate oat cookies",
    span: "sm:col-span-3 sm:row-span-2",
    h: "h-72 sm:h-[26rem]",
  },
  {
    src: rose,
    alt: "CRISPO rose oat cookies with rose petals",
    span: "sm:col-span-3",
    h: "h-56 sm:h-[12.5rem]",
  },
  {
    src: pineapple,
    alt: "CRISPO pineapple oat cookies",
    span: "sm:col-span-2",
    h: "h-52 sm:h-[12.5rem]",
  },
  { src: seed, alt: "CRISPO dry seed cookies", span: "sm:col-span-1", h: "h-52 sm:h-[12.5rem]" },
  {
    src: brownie,
    alt: "CRISPO double chocolate oats brownies",
    span: "sm:col-span-2",
    h: "h-56 sm:h-64",
  },
  {
    src: kaju,
    alt: "CRISPO kaju oats brownies with cashews",
    span: "sm:col-span-2",
    h: "h-56 sm:h-64",
  },
  {
    src: packaging,
    alt: "CRISPO lavender gift box with gold ribbon",
    span: "sm:col-span-2",
    h: "h-56 sm:h-64",
  },
];

export function VisualStory() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-28">
      <SectionHeading
        eyebrow="Crispo Visual Story"
        title="A closer look at every CRISPO creation."
      />
      <div className="mt-8 grid sm:mt-14 gap-4 sm:grid-cols-6">
        {tiles.map((t, i) => (
          <Reveal key={t.alt} delay={i * 0.05} className={`scene-3d ${t.span}`}>
            <img
              src={t.src}
              alt={t.alt}
              width={1024}
              height={1024}
              loading="lazy"
              className={`w-full ${t.h} rounded-[1.75rem] object-cover shadow-soft transition-all duration-700 hover:-translate-y-2 hover:shadow-lift`}
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
