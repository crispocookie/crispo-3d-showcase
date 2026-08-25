import { Link } from "@tanstack/react-router";
import { Instagram, MessageCircle, Youtube } from "lucide-react";
import logoBadge from "@/assets/crispo-logo-badge.jpeg.asset.json";
import { BRAND, GENERAL_ENQUIRY, whatsappLink } from "@/lib/brand";

const nav = [
  { to: "/", label: "Home" },
  { to: "/cookies", label: "Cookies" },
  { to: "/brownies", label: "Brownies" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms" },
] as const;

export function Footer() {
  return (
    <footer className="[background:var(--gradient-royal)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logoBadge.url}
              alt="CRISPO COOKIES logo"
              width={64}
              height={64}
              loading="lazy"
              className="size-14 rounded-full object-contain"
            />
            <span className="font-display text-2xl text-cream">CRISPO COOKIES</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-cream/70">Made with love for every bite.</p>
          <p className="mt-6 text-[0.62rem] font-bold tracking-[0.22em] text-gold">
            {BRAND.zeroMaidha}
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-[0.62rem] font-bold tracking-[0.24em] text-gold uppercase">Explore</h2>
          <ul className="mt-4 space-y-2.5">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-sm text-cream/75 transition-colors hover:text-gold">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-[0.62rem] font-bold tracking-[0.24em] text-gold uppercase">Contact</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-cream/75">
            <li>
              <a href={`tel:${BRAND.phoneTel}`} className="transition-colors hover:text-gold">
                {BRAND.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${BRAND.email}`} className="transition-colors hover:text-gold">
                {BRAND.email}
              </a>
            </li>
            <li>{BRAND.address}</li>
            <li>FSSAI: {BRAND.fssai}</li>
          </ul>
          <div className="mt-5 flex gap-2.5">
            <a
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CRISPO on Instagram"
              className="rounded-full border border-cream/25 p-2.5 text-cream transition-colors hover:border-gold hover:text-gold"
            >
              <Instagram className="size-4" aria-hidden />
            </a>
            <a
              href={BRAND.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CRISPO on YouTube"
              className="rounded-full border border-cream/25 p-2.5 text-cream transition-colors hover:border-gold hover:text-gold"
            >
              <Youtube className="size-4" aria-hidden />
            </a>
            <a
              href={whatsappLink(GENERAL_ENQUIRY)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CRISPO on WhatsApp"
              className="rounded-full border border-cream/25 p-2.5 text-cream transition-colors hover:border-gold hover:text-gold"
            >
              <MessageCircle className="size-4" aria-hidden />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-cream/15 py-5 text-center text-xs text-cream/60">
        © 2026 CRISPO COOKIES. All Rights Reserved.
      </div>
    </footer>
  );
}
