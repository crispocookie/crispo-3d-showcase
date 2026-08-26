import { createFileRoute } from "@tanstack/react-router";
import { BRAND } from "@/lib/brand";

const title = "Terms — CRISPO COOKIES Orders";
const description =
  "Terms for ordering CRISPO COOKIES premium oat cookies and brownies, including availability, confirmation and delivery details.";

export const Route = createFileRoute("/terms")({
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
  component: TermsPage,
});

function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 pt-32 pb-20 sm:px-6">
      <p className="eyebrow">Terms</p>
      <h1 className="mt-3 font-display text-5xl leading-tight text-primary">Terms of Order</h1>
      <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
        <p>
          Product availability, delivery timing and final order totals are confirmed directly by
          CRISPO COOKIES after you contact us through WhatsApp, phone or email.
        </p>
        <p>
          Prices and pack details shown on the website are for customer reference and may be updated
          based on availability, custom orders or delivery requirements.
        </p>
        <p>
          For questions about an order, contact {BRAND.email} or call {BRAND.phoneDisplay}.
        </p>
      </div>
    </article>
  );
}