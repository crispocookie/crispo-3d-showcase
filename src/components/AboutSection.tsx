import flatlay from "@/assets/editorial-flatlay.jpg";
import packaging from "@/assets/packaging-lifestyle.jpg";
import brownie from "@/assets/double-chocolate-brownie.jpg";
import { Reveal } from "./Reveal";

export function AboutSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <p className="eyebrow">About Crispo</p>
          <h2 className="mt-3 font-display text-4xl leading-[1.05] font-medium text-primary sm:text-5xl">
            Baked With Purpose.
            <br />
            <span className="text-gold-foil">Made With Love.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            CRISPO COOKIES brings together indulgent flavors and wholesome ingredients to create
            cookies and brownies that feel special in every bite. From rich chocolate creations to
            floral, fruity and seed-packed cookies, every product is crafted with care and a passion
            for quality.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="scene-3d">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={flatlay}
              alt="Editorial flat lay of CRISPO cookies and brownies"
              width={1280}
              height={960}
              loading="lazy"
              className="col-span-2 h-56 w-full rounded-[2rem] object-cover shadow-lift sm:h-72"
            />
            <img
              src={packaging}
              alt="CRISPO lavender gift box with gold ribbon"
              width={1024}
              height={1024}
              loading="lazy"
              className="aspect-square w-full rounded-[1.75rem] object-cover shadow-soft transition-transform duration-700 hover:-translate-y-1.5"
            />
            <img
              src={brownie}
              alt="CRISPO double chocolate oats brownies"
              width={1024}
              height={1024}
              loading="lazy"
              className="aspect-square w-full rounded-[1.75rem] object-cover shadow-soft transition-transform duration-700 hover:-translate-y-1.5"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
