export const BRAND = {
  name: "CRISPO COOKIES",
  phoneDisplay: "+91 75698 31560",
  phoneTel: "+917569831560",
  whatsapp: "917569831560",
  email: "ccrispocookies@gmail.com",
  address: "Nellore",
  fssai: "20126182000873",
  instagramHandle: "@rahul.bites",
  instagramUrl: "https://www.instagram.com/rahul.bites",
  youtubeHandle: "@Rahul-Bites",
  youtubeUrl: "https://www.youtube.com/@Rahul-Bites",
  zeroMaidha: "100% ZERO MAIDHA",
} as const;

export function whatsappLink(message: string): string {
  return `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const GENERAL_ENQUIRY =
  "Hello CRISPO COOKIES! I would like to enquire about your cookies and brownies.";
