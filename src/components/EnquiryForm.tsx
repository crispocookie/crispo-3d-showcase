import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";
import { products } from "@/data/products";
import { BRAND, whatsappLink } from "@/lib/brand";
import { ctaWhatsapp } from "./cta";

const field =
  "mt-2 h-12 w-full rounded-2xl border border-lavender/60 bg-cream/70 px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-plum";
const label = "text-[0.62rem] font-bold tracking-[0.2em] text-plum uppercase";

/** Premium enquiry form that composes a WhatsApp message — no backend submission. */
export function EnquiryForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    product: "",
    message: "",
  });

  const set = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = [
      `Hello ${BRAND.name}!`,
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Product: ${form.product || "Not specified"}`,
      `Message: ${form.message}`,
    ].join("\n");
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  };

  return (
    <section className="mx-auto max-w-4xl px-4 pb-20 sm:px-6 sm:pb-28">
      <Reveal>
        <form
          onSubmit={onSubmit}
          className="rounded-[2.5rem] border border-lavender/50 bg-card/85 p-7 shadow-lift sm:p-12"
        >
          <p className="eyebrow">Enquiry Form</p>
          <h2 className="mt-3 font-display text-3xl font-medium text-primary sm:text-4xl">
            Tell us what you'd love to taste.
          </h2>

          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            <div>
              <label className={label} htmlFor="ef-name">
                Name
              </label>
              <input
                id="ef-name"
                required
                value={form.name}
                onChange={set("name")}
                placeholder="Your name"
                className={field}
              />
            </div>
            <div>
              <label className={label} htmlFor="ef-phone">
                Phone Number
              </label>
              <input
                id="ef-phone"
                required
                type="tel"
                value={form.phone}
                onChange={set("phone")}
                placeholder="+91"
                className={field}
              />
            </div>
            <div>
              <label className={label} htmlFor="ef-email">
                Email
              </label>
              <input
                id="ef-email"
                type="email"
                value={form.email}
                onChange={set("email")}
                placeholder="you@email.com"
                className={field}
              />
            </div>
            <div>
              <label className={label} htmlFor="ef-product">
                Product Interested In
              </label>
              <select id="ef-product" value={form.product} onChange={set("product")} className={field}>
                <option value="">Select a product</option>
                {products.map((p) => (
                  <option key={p.id} value={p.name}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className={label} htmlFor="ef-message">
                Message
              </label>
              <textarea
                id="ef-message"
                rows={4}
                value={form.message}
                onChange={set("message")}
                placeholder="Quantity, delivery date, gifting ideas…"
                className={`${field} h-auto py-3`}
              />
            </div>
          </div>

          <button type="submit" className={`${ctaWhatsapp} mt-9 w-full sm:w-auto`}>
            <MessageCircle className="size-4" aria-hidden /> SEND ENQUIRY
          </button>
          <p className="mt-4 text-xs text-muted-foreground">
            Your enquiry opens in WhatsApp so we can reply instantly.
          </p>
        </form>
      </Reveal>
    </section>
  );
}
