import { Mail, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { SectionHeading } from "./Reveal";
import { BRAND, GENERAL_ENQUIRY, whatsappLink } from "@/lib/brand";
import { ctaGold, ctaOutline, ctaWhatsapp } from "./cta";

export function ContactSection() {
  const details = [
    { icon: Phone, label: "Phone", value: BRAND.phoneDisplay },
    { icon: Mail, label: "Email", value: BRAND.email },
    { icon: MapPin, label: "Address", value: BRAND.address },
    { icon: ShieldCheck, label: "Food Licence", value: BRAND.fssai },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
      <div className="overflow-hidden rounded-[2.5rem] border border-lavender/50 bg-card/80 p-8 shadow-lift sm:p-14">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Make Your Next Bite Special"
          subtitle="Order a box, ask a question or plan a gift hamper — we reply on WhatsApp."
        />

        <dl className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {details.map((d) => (
            <div key={d.label} className="rounded-2xl bg-secondary/60 p-5">
              <dt className="flex items-center gap-2 text-[0.62rem] font-bold tracking-[0.2em] text-plum uppercase">
                <d.icon className="size-4" aria-hidden /> {d.label}
              </dt>
              <dd className="mt-2 break-words font-display text-xl text-primary">{d.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href={`tel:${BRAND.phoneTel}`} className={ctaGold}>
            <Phone className="size-4" aria-hidden /> CALL US
          </a>
          <a href={`mailto:${BRAND.email}`} className={ctaOutline}>
            <Mail className="size-4" aria-hidden /> EMAIL US
          </a>
          <a
            href={whatsappLink(GENERAL_ENQUIRY)}
            target="_blank"
            rel="noopener noreferrer"
            className={ctaWhatsapp}
          >
            <MessageCircle className="size-4" aria-hidden /> WHATSAPP US
          </a>
        </div>
      </div>
    </section>
  );
}
