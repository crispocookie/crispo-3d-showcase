import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, MessageCircle, Phone, ShieldCheck, Youtube } from "lucide-react";
import { motion } from "motion/react";
import { ContactSection } from "@/components/ContactSection";
import { SocialSection } from "@/components/SocialSection";
import { PageHero } from "@/components/PageHero";
import { PageTransition } from "@/components/PageTransition";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Reveal } from "@/components/Reveal";
import { BRAND, GENERAL_ENQUIRY, whatsappLink } from "@/lib/brand";
import { ctaGold, ctaOutline, ctaWhatsapp } from "@/components/cta";
import packaging from "@/assets/packaging-lifestyle.jpg";
import kaju2 from "@/assets/kaju-brownie-2.jpg";

const title = "Contact CRISPO COOKIES — Order in Nellore";
const description =
  "Let's talk CRISPO. Call, email or WhatsApp CRISPO COOKIES in Nellore to order premium oat cookies and brownies, or send an enquiry.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const details = [
  { icon: Phone, label: "Phone", value: BRAND.phoneDisplay },
  { icon: Mail, label: "Email", value: BRAND.email },
  { icon: MapPin, label: "Location", value: BRAND.address },
  { icon: ShieldCheck, label: "Food Licence", value: `FSSAI: ${BRAND.fssai}` },
];

function ContactPage() {
  return (
    <PageTransition>
      <div className="pt-24">
        <PageHero
          eyebrow="Contact"
          title="LET'S TALK CRISPO"
          subtitle="Have a question, want to place an order, or simply want to know more? We'd love to hear from you."
          image={{ src: packaging, alt: "CRISPO lavender gift box with gold ribbon" }}
          secondaryImage={{ src: kaju2, alt: "Close-up of a CRISPO kaju oats brownie" }}
          showZeroMaidha={false}
          actions={
            <>
              <a href={`tel:${BRAND.phoneTel}`} className={ctaGold}>
                <Phone className="size-4" aria-hidden /> CALL NOW
              </a>
              <a href={`mailto:${BRAND.email}`} className={ctaOutline}>
                <Mail className="size-4" aria-hidden /> EMAIL US
              </a>
            </>
          }
        />

        <section className="mx-auto max-w-7xl px-4 pb-6 sm:px-6">
          <dl className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {details.map((d, i) => (
              <Reveal key={d.label} delay={i * 0.06}>
                <div className="scene-3d h-full rounded-2xl surface-card p-6 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                  <dt className="flex items-center gap-2 text-[0.62rem] font-bold tracking-[0.2em] text-plum uppercase">
                    <d.icon className="size-4" aria-hidden /> {d.label}
                  </dt>
                  <dd className="mt-2 break-words font-display text-xl text-primary">{d.value}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </section>

        {/* WhatsApp CTA */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[oklch(0.33_0.13_302)] px-6 py-16 text-center shadow-lift sm:px-14">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute -top-24 left-1/2 size-[26rem] -translate-x-1/2 rounded-full bg-[oklch(0.78_0.13_85/0.16)] blur-3xl" />
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="absolute size-2.5 rounded-full bg-gold/60"
                  style={{ left: `${18 + i * 30}%`, top: `${25 + i * 18}%` }}
                  animate={{ y: [0, -16, 0], opacity: [0.4, 0.9, 0.4] }}
                  transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
                />
              ))}
            </div>
            <div className="relative">
              <p className="eyebrow text-gold">WhatsApp</p>
              <h2 className="mt-3 font-display text-4xl leading-[1.02] font-medium text-cream sm:text-6xl">
                ORDER OR ENQUIRE
                <br />
                <span className="text-gold-foil">ON WHATSAPP</span>
              </h2>
              <p className="mt-5 font-display text-2xl text-cream/85">{BRAND.phoneDisplay}</p>
              <a
                href={whatsappLink(GENERAL_ENQUIRY)}
                target="_blank"
                rel="noopener noreferrer"
                className={`${ctaWhatsapp} mt-8`}
              >
                <MessageCircle className="size-4" aria-hidden /> CHAT WITH CRISPO
              </a>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <a
                  href={BRAND.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center gap-2 rounded-full border border-gold/50 px-6 text-xs font-bold tracking-[0.18em] text-cream transition-colors hover:bg-cream/10"
                >
                  <Instagram className="size-4" aria-hidden /> FOLLOW ON INSTAGRAM
                </a>
                <a
                  href={BRAND.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center gap-2 rounded-full border border-gold/50 px-6 text-xs font-bold tracking-[0.18em] text-cream transition-colors hover:bg-cream/10"
                >
                  <Youtube className="size-4" aria-hidden /> WATCH ON YOUTUBE
                </a>
              </div>
            </div>
          </div>
        </section>

        <EnquiryForm />
        <ContactSection />
        <SocialSection />
      </div>
    </PageTransition>
  );
}
