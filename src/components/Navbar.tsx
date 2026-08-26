import { Link, NavLink } from "react-router-dom";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Logo } from "./Logo";
import { SearchDialog } from "./SearchDialog";
import { useCart } from "@/context/cart";
import { BRAND, GENERAL_ENQUIRY, whatsappLink } from "@/lib/brand";
import { ctaPrimary } from "./cta";

const links = [
  { to: "/", label: "Home" },
  { to: "/cookies", label: "Cookies" },
  { to: "/brownies", label: "Brownies" },
  { to: "/about", label: "About" },
  { to: "/why-crispo", label: "Why Crispo" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { count, openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-lavender/40 bg-cream/85 py-2 backdrop-blur-md shadow-soft"
            : "py-4"
        }`}
      >
        <nav
          aria-label="Main"
          className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6"
        >
          <Logo compact={scrolled} />

          <ul className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    `relative text-[0.78rem] font-semibold tracking-[0.14em] uppercase transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:transition-transform after:duration-300 hover:text-plum hover:after:scale-x-100 ` +
                    (isActive
                      ? "text-plum after:scale-x-100 after:bg-gold"
                      : "text-primary/80 after:scale-x-0 after:bg-gold")
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search products"
              className="rounded-full p-2.5 text-primary transition-colors hover:bg-secondary"
            >
              <Search className="size-5" aria-hidden />
            </button>
            <button
              type="button"
              onClick={openCart}
              aria-label={`Open cart, ${count} item${count === 1 ? "" : "s"}`}
              className="relative rounded-full p-2.5 text-primary transition-colors hover:bg-secondary"
            >
              <ShoppingBag className="size-5" aria-hidden />
              {count > 0 ? (
                <span className="absolute -top-0.5 -right-0.5 flex size-5 items-center justify-center rounded-full bg-plum text-[0.6rem] font-bold text-cream">
                  {count}
                </span>
              ) : null}
            </button>
            <a
              href={whatsappLink(GENERAL_ENQUIRY)}
              target="_blank"
              rel="noopener noreferrer"
              className={`${ctaPrimary} hidden h-10 px-5 sm:inline-flex`}
            >
              ORDER NOW
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="rounded-full p-2.5 text-primary transition-colors hover:bg-secondary lg:hidden"
            >
              <Menu className="size-5" aria-hidden />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            className="fixed inset-0 z-[65] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 [background:var(--gradient-royal)]"
              initial={{ clipPath: "circle(0% at 92% 6%)" }}
              animate={{ clipPath: "circle(140% at 92% 6%)" }}
              exit={{ clipPath: "circle(0% at 92% 6%)" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            />
            <div className="relative flex h-full flex-col px-6 pt-6">
              <div className="flex items-center justify-end">
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="rounded-full p-2.5 text-cream"
                >
                  <X className="size-6" aria-hidden />
                </button>
              </div>
              <ul className="mt-8 space-y-1">
                {links.map((l, i) => (
                  <motion.li
                    key={l.to}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.06, duration: 0.4 }}
                  >
                    <Link
                      to={l.to}
                      onClick={() => setMenuOpen(false)}
                      className="block border-b border-cream/15 py-4 font-display text-3xl text-cream"
                    >
                      {l.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-auto pb-10">
                <a
                  href={whatsappLink(GENERAL_ENQUIRY)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[oklch(0.63_0.17_150)] text-xs font-bold tracking-[0.18em] text-white"
                >
                  ORDER ON WHATSAPP
                </a>
                <p className="mt-4 text-center text-xs tracking-[0.2em] text-cream/60">
                  {BRAND.phoneDisplay}
                </p>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
