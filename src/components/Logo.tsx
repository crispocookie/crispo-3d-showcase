import { Link } from "react-router-dom";
import crispoLogo from "@/assets/crispo-logo.png";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="CRISPO COOKIES home">
      <img
        src={crispoLogo}
        alt="CRISPO COOKIES logo"
        width={96}
        height={96}
        className={`rounded-full object-contain shadow-soft transition-all duration-500 ${
          compact ? "size-10" : "size-12 sm:size-14"
        }`}
      />
      <span className="leading-none">
        <span
          className={`block font-display font-semibold tracking-tight text-primary transition-all duration-500 ${
            compact ? "text-lg" : "text-xl sm:text-2xl"
          }`}
        >
          Crispo
        </span>
        <span className="mt-0.5 block text-[0.55rem] font-bold tracking-[0.35em] text-gold-foil">
          COOKIES
        </span>
      </span>
    </Link>
  );
}
