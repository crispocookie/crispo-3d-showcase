import { BRAND } from "@/lib/brand";
import { useMeta } from "@/hooks/use-meta";

const title = "Privacy Policy — CRISPO COOKIES";
const description =
  "Privacy policy for CRISPO COOKIES, including how order enquiries and contact details are handled.";

export default function PrivacyPage() {
  useMeta({ title, description });

  return (
    <article className="mx-auto max-w-3xl px-4 pt-32 pb-20 sm:px-6">
      <p className="eyebrow">Privacy</p>
      <h1 className="mt-3 font-display text-5xl leading-tight text-primary">Privacy Policy</h1>
      <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
        <p>
          CRISPO COOKIES uses contact information shared through phone, email or WhatsApp only to
          respond to enquiries, confirm orders and support customer communication.
        </p>
        <p>
          We do not sell personal information. Order details may be retained where needed for basic
          business records, customer support and legal compliance.
        </p>
        <p>
          For privacy questions, contact {BRAND.email} or call {BRAND.phoneDisplay}.
        </p>
      </div>
    </article>
  );
}
