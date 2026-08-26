import { AboutSection } from "@/components/AboutSection";
import { BrandIntro } from "@/components/BrandIntro";
import { SocialSection } from "@/components/SocialSection";
import { PageHero } from "@/components/PageHero";
import { PageTransition } from "@/components/PageTransition";
import { ZeroMaidhaFeature } from "@/components/ZeroMaidhaFeature";
import { JourneySection } from "@/components/JourneySection";
import { VisualStory } from "@/components/VisualStory";
import { Reveal } from "@/components/Reveal";
import flatlay from "@/assets/editorial-flatlay.jpg";
import kaju from "@/assets/kaju-brownie.jpg";
import allMix from "@/assets/all-mix-cookies.jpg";
import brownie2 from "@/assets/double-chocolate-brownie-2.jpg";
import { useMeta } from "@/hooks/use-meta";

const title = "About CRISPO COOKIES — The Story Behind Crispo";
const description =
  "The story behind CRISPO COOKIES: a Nellore bakery crafting premium oat cookies and brownies with 100% ZERO MAIDHA, baked with purpose and made with love.";

export default function AboutPage() {
  useMeta({ title, description });

  return (
    <PageTransition>
      <div className="pt-24">
        <PageHero
          eyebrow="About Crispo"
          title="THE STORY BEHIND CRISPO"
          subtitle="Baked with purpose. Made with love."
          image={{ src: flatlay, alt: "Editorial flat lay of CRISPO cookies and brownies" }}
          secondaryImage={{ src: kaju, alt: "CRISPO kaju oats brownies topped with cashews" }}
        />

        <ZeroMaidhaFeature copy="Wholesome oat-based goodness crafted for delicious everyday indulgence." />

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
            <Reveal>
              <p className="eyebrow">Our Philosophy</p>
              <h2 className="mt-3 font-display text-4xl leading-[1.05] font-medium text-primary sm:text-5xl">
                Delicious food should also feel <span className="text-gold-foil">thoughtful.</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                At CRISPO COOKIES, we believe delicious food should also feel thoughtful. Every
                cookie and brownie is crafted with care, quality ingredients and a passion for
                creating flavours worth remembering.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="scene-3d">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={allMix}
                  alt="Assortment of CRISPO cookie flavours on a plate"
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="aspect-square w-full rounded-[1.75rem] object-cover shadow-lift transition-transform duration-700 hover:-translate-y-1.5"
                />
                <img
                  src={brownie2}
                  alt="Macro close-up of a fudgy CRISPO chocolate brownie"
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="mt-8 aspect-square w-full rounded-[1.75rem] object-cover shadow-soft transition-transform duration-700 hover:-translate-y-1.5"
                />
              </div>
            </Reveal>
          </div>
        </section>

        <JourneySection />
        <AboutSection />
        <VisualStory />
        <BrandIntro />
        <SocialSection />
      </div>
    </PageTransition>
  );
}
