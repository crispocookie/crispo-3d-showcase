import { MessageCircle } from "lucide-react";
import { BRAND, GENERAL_ENQUIRY, whatsappLink } from "@/lib/brand";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink(GENERAL_ENQUIRY)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with CRISPO on WhatsApp at ${BRAND.phoneDisplay}`}
      className="group fixed right-4 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-50 flex items-center gap-0 rounded-full bg-[oklch(0.63_0.17_150)] p-3.5 text-white shadow-lift transition-all duration-300 hover:gap-2 hover:pr-5 sm:right-6 sm:bottom-6"
    >
      <span className="absolute inset-0 rounded-full animate-pulse-ring" aria-hidden />
      <MessageCircle className="size-6 shrink-0" aria-hidden />
      <span className="max-w-0 overflow-hidden text-sm font-semibold whitespace-nowrap opacity-0 transition-all duration-300 group-hover:max-w-[10rem] group-hover:opacity-100">
        Chat with CRISPO
      </span>
    </a>
  );
}
