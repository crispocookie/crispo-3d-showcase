import { createFileRoute } from "@tanstack/react-router";
import { ContactSection } from "@/components/ContactSection";
import { SocialSection } from "@/components/SocialSection";

const title = "Contact CRISPO COOKIES — Order in Nellore";
const description =
  "Contact CRISPO COOKIES to order premium oat cookies and brownies in Nellore by phone, email or WhatsApp.";

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

function ContactPage() {
  return (
    <div className="pt-24">
      <h1 className="sr-only">Contact CRISPO COOKIES</h1>
      <ContactSection />
      <SocialSection />
    </div>
  );
}