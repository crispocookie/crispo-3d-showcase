import doubleChoc from "@/assets/double-chocolate-cookie.jpg";
import doubleChoc2 from "@/assets/double-chocolate-cookie-2.jpg";
import rose from "@/assets/rose-cookie.jpg";
import rose2 from "@/assets/rose-cookie-2.jpg";
import pineapple from "@/assets/pineapple-cookie.jpg";
import pineapple2 from "@/assets/pineapple-cookie-2.jpg";
import seed from "@/assets/dry-seed-cookie.jpg";
import seed2 from "@/assets/dry-seed-cookie-2.jpg";
import allMix from "@/assets/all-mix-cookies.jpg";
import brownie from "@/assets/double-chocolate-brownie.jpg";
import brownie2 from "@/assets/double-chocolate-brownie-2.jpg";
import kaju from "@/assets/kaju-brownie.jpg";
import kaju2 from "@/assets/kaju-brownie-2.jpg";
import doubleChocolatePackaging from "@/assets/Double chocolate cookie.jpg";
import rosePackaging from "@/assets/Rose cookie.jpg";
import pineapplePackaging from "@/assets/Pineapple cookie.jpg";
import drySeedPackaging from "@/assets/dry seed cookie.jpg";
import allMixPackaging from "@/assets/all mix cookie.jpg";
import doubleChocolateBrowniePackaging from "@/assets/Double chocolate Otas brownie.jpg";
import doubleChoc3 from "@/assets/double-chocolate-cookie-3.jpg";
import rose3 from "@/assets/rose-cookie-3.jpg";
import pineapple3 from "@/assets/pineapple-cookie-3.jpg";
import seed3 from "@/assets/dry-seed-cookie-3.jpg";
import allMix2 from "@/assets/all-mix-cookie-2.jpg";
import allMix3 from "@/assets/all-mix-cookie-3.jpg";
import brownie3 from "@/assets/double-chocolate-brownie-3.jpg";
import kaju3 from "@/assets/kaju-brownie-3.jpg";
import kajuBrowniePackaging from "@/assets/Kaju Otas brownie.jpg";

export type Category = "cookies" | "brownies";

export type ProductImage = {
  src: string;
  alt: string;
  /** contain keeps packaging/product art undistorted; cover for lifestyle shots */
  fit?: "contain" | "cover";
};

export type Nutrition = {
  label: string;
  value: string;
};

export type Product = {
  id: string;
  name: string;
  category: Category;
  price: number; // selling price
  mrp: number; // MRP for display
  priceRange?: string;
  pack: string;
  packQuantity: string;
  weight: string;
  description: string;
  benefits: string[];
  nutrition: Nutrition[];
  images: [ProductImage, ...ProductImage[]];
  badge: string;
  theme: "chocolate" | "rose" | "tropical" | "seed" | "mix";
  craving: string;
  featured: boolean;
};

const ZERO = "100% ZERO MAIDHA";

export const products: Product[] = [
  {
    id: "double-chocolate-cookie",
    name: "Double Chocolate Cookie",
    category: "cookies",
    price: 219,
    mrp: 399,
    pack: "1 box",
    packQuantity: "6 cookies",
    weight: "300 grams",
    description:
      "Rich, indulgent and deeply chocolatey, our Double Chocolate Cookie is made with pure oats powder and loaded with chocolate goodness. A premium cookie crafted for chocolate lovers who want indulgence with wholesome ingredients.",
    benefits: [
      ZERO,
      "Pure oats goodness",
      "Made with 100% pure oats",
      "High-quality ingredients",
      "Protein packed",
      "No artificial flavors",
      "No preservatives",
      "Pure & wholesome",
    ],
    nutrition: [
      { label: "Protein / cookie", value: "4 g" },
      { label: "Weight / cookie", value: "50 g" },
      { label: "Calories / cookie", value: "235 kcal" },
    ],
    images: [
      { src: doubleChoc, alt: "Stack of CRISPO double chocolate oat cookies", fit: "cover" },
      { src: doubleChoc2, alt: "Close-up of a double chocolate cookie broken open", fit: "cover" },
      {
        src: doubleChocolatePackaging,
        alt: "CRISPO Double Chocolate Cookie packaging box with 5 cookies",
        fit: "contain",
      },
      {
        src: doubleChoc3,
        alt: "Double chocolate oat cookies with chocolate chunks on slate",
        fit: "cover",
      },
    ],
    badge: ZERO,
    theme: "chocolate",
    craving: "Chocolate",
    featured: true,
  },
  {
    id: "rose-cookie",
    name: "Rose Cookie",
    category: "cookies",
    price: 219,
    mrp: 399,
    pack: "1 box",
    packQuantity: "6 cookies",
    weight: "300 grams",
    description:
      "A delicate floral twist on a wholesome cookie. Our Rose Cookie is made with homemade rose syrup prepared with fresh rose petals, creating a naturally aromatic and beautifully distinctive flavor.",
    benefits: [
      "Homemade rose syrup",
      "Fresh rose petals",
      "Natural aroma",
      "Rich taste",
      ZERO,
      "Made with 100% oats powder",
      "No maida",
      "High-quality ingredients",
      "Protein packed",
      "No artificial flavors",
      "No preservatives",
      "Pure & wholesome",
    ],
    nutrition: [
      { label: "Protein / cookie", value: "3.5 g" },
      { label: "Weight / cookie", value: "50 g" },
      { label: "Calories / cookie", value: "220 kcal" },
    ],
    images: [
      { src: rose, alt: "CRISPO rose oat cookies with fresh rose petals", fit: "cover" },
      { src: rose2, alt: "Macro close-up of a rose cookie with dried petals", fit: "cover" },
      {
        src: rosePackaging,
        alt: "CRISPO Rose Cookie packaging box with 5 rose cookies",
        fit: "contain",
      },
      { src: rose3, alt: "Rose cookies styled with fresh rose petals on marble", fit: "cover" },
    ],
    badge: ZERO,
    theme: "rose",
    craving: "Floral",
    featured: true,
  },
  {
    id: "pine-apple-cookie",
    name: "Pineapple Cookie",
    category: "cookies",
    price: 219,
    mrp: 399,
    pack: "1 box",
    packQuantity: "6 cookies",
    weight: "300 grams",
    description:
      "A tropical, refreshing cookie crafted with homemade pineapple syrup and wholesome oats. Bright pineapple flavor meets a deliciously crisp cookie for a unique tropical experience.",
    benefits: [
      "Homemade pineapple syrup",
      "Prepared with care",
      ZERO,
      "Made with 100% oats powder",
      "High-quality ingredients",
      "Protein packed",
      "No artificial flavors",
      "No preservatives",
      "Pure & wholesome",
    ],
    nutrition: [
      { label: "Protein / cookie", value: "2 g" },
      { label: "Weight / cookie", value: "50 g" },
      { label: "Calories / cookie", value: "225 kcal" },
    ],
    images: [
      { src: pineapple, alt: "CRISPO pineapple oat cookies with fresh pineapple", fit: "cover" },
      { src: pineapple2, alt: "Close-up of a pineapple cookie broken in half", fit: "cover" },
      {
        src: pineapplePackaging,
        alt: "CRISPO Pine Apple Cookie packaging box with 5 pineapple cookies",
        fit: "contain",
      },
      {
        src: pineapple3,
        alt: "Golden pineapple cookies plated with fresh pineapple",
        fit: "cover",
      },
    ],
    badge: ZERO,
    theme: "tropical",
    craving: "Tropical",
    featured: true,
  },
  {
    id: "dry-seed-cookies",
    name: "Dry Seeds Cookie",
    category: "cookies",
    price: 219,
    mrp: 399,
    pack: "1 box",
    packQuantity: "4 cookies",
    weight: "300 grams",
    description:
      "A nutrient-rich cookie loaded with four powerful seeds for a satisfying combination of crunch, nutrition and taste. Crunchy. Nutritious. Satisfying.",
    benefits: [
      "Packed with 4 super seeds",
      "High in protein & healthy fats",
      "Perfect balance of taste & nutrition",
      "Guilt-free snack for any time",
      ZERO,
    ],
    nutrition: [
      { label: "Protein / cookie", value: "10 g" },
      { label: "Calories / cookie", value: "403 kcal" },
      { label: "Weight / cookie", value: "75 g" },
    ],
    images: [
      { src: seed, alt: "CRISPO dry seed cookies with bowls of seeds", fit: "cover" },
      { src: seed2, alt: "Macro close-up of a four-seed cookie", fit: "cover" },
      {
        src: drySeedPackaging,
        alt: "CRISPO Dry Seed Cookies packaging box with four seed cookies",
        fit: "contain",
      },
      {
        src: seed3,
        alt: "Stack of dry seed cookies with pumpkin, sunflower and flax seeds",
        fit: "cover",
      },
    ],
    badge: ZERO,
    theme: "seed",
    craving: "Nutritious",
    featured: true,
  },
  {
    id: "all-mix-cookies",
    name: "All Mix Cookies",
    category: "cookies",
    price: 179,
    mrp: 299,
    pack: "1 box",
    packQuantity: "4 cookies",
    weight: "200 grams",
    description:
      "A discovery box with a mix of CRISPO cookie flavors — the easiest way to find your favourite bite.",
    benefits: [ZERO, "A mix of CRISPO cookie flavors", "Made with oats", "Pure & wholesome"],
    nutrition: [{ label: "Pack", value: "4 cookies" }],
    images: [
      { src: allMix, alt: "Assortment of CRISPO cookie flavours on a plate", fit: "cover" },
      {
        src: allMix2,
        alt: "Close-up of four CRISPO cookie varieties on a ceramic plate",
        fit: "cover",
      },
      {
        src: allMixPackaging,
        alt: "CRISPO All Mix Cookies packaging box with four cookie flavours",
        fit: "contain",
      },
      {
        src: allMix3,
        alt: "All mix cookie assortment presented as a premium gift set",
        fit: "cover",
      },
    ],
    badge: ZERO,
    theme: "mix",
    craving: "Variety",
    featured: false,
  },
  {
    id: "double-chocolate-oats-brownie",
    name: "Double Chocolate Brownie",
    category: "brownies",
    price: 250,
    mrp: 499,
    pack: "1 box",
    packQuantity: "6 pieces",
    weight: "300 grams",
    description:
      "A rich, fudgy chocolate brownie crafted with oats and deep chocolate flavor. Crisp on the outside, fudgy inside and packed with irresistible chocolate goodness.",
    benefits: [ZERO, "Made with oats", "Deep chocolate flavor", "Pure & wholesome"],
    nutrition: [
      { label: "Protein / brownie", value: "4 g" },
      { label: "Weight / brownie", value: "50 g" },
      { label: "Calories / brownie", value: "203 kcal" },
    ],
    images: [
      { src: brownie, alt: "CRISPO double chocolate oats brownies stacked", fit: "cover" },
      { src: brownie2, alt: "Macro close-up of a fudgy chocolate brownie", fit: "cover" },
      {
        src: doubleChocolateBrowniePackaging,
        alt: "CRISPO Double Chocolate Oats Brownie packaging box",
        fit: "contain",
      },
      {
        src: brownie3,
        alt: "Fudgy double chocolate oats brownies with melting chocolate",
        fit: "cover",
      },
    ],
    badge: ZERO,
    theme: "chocolate",
    craving: "Brownie",
    featured: false,
  },
  {
    id: "kaju-oats-brownie",
    name: "Kaju Brownie",
    category: "brownies",
    price: 250,
    mrp: 499,
    pack: "1 box",
    packQuantity: "6 pieces",
    weight: "300 grams",
    description:
      "A rich and fudgy chocolate brownie combined with the delicious crunch of premium cashews and the wholesome goodness of oats.",
    benefits: [ZERO, "Premium cashews", "Made with oats", "Pure & wholesome"],
    nutrition: [
      { label: "Protein / brownie", value: "3.5 g" },
      { label: "Weight / brownie", value: "50 g" },
      { label: "Calories / brownie", value: "195 kcal" },
    ],
    images: [
      { src: kaju, alt: "CRISPO kaju oats brownies topped with cashews", fit: "cover" },
      { src: kaju2, alt: "Close-up of a cashew chocolate oats brownie", fit: "cover" },
      {
        src: kajuBrowniePackaging,
        alt: "CRISPO Kaju Oats Brownie packaging box with cashew brownies",
        fit: "contain",
      },
      { src: kaju3, alt: "Kaju oats brownies topped with whole roasted cashews", fit: "cover" },
    ],
    badge: ZERO,
    theme: "chocolate",
    craving: "Brownie",
    featured: true,
  },
];

export const featuredOrder = [
  "double-chocolate-cookie",
  "rose-cookie",
  "pine-apple-cookie",
  "dry-seed-cookies",
  "kaju-oats-brownie",
];

export const featuredProducts = featuredOrder
  .map((id) => products.find((p) => p.id === id))
  .filter((p): p is Product => Boolean(p));

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function relatedProducts(product: Product): Product[] {
  const sameCategory = products.filter(
    (p) => p.id !== product.id && p.category === product.category,
  );
  const others = products.filter((p) => p.id !== product.id && p.category !== product.category);
  return [...sameCategory, ...others].slice(0, 3);
}

export function searchProducts(query: string): Product[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const keywords: Record<string, string[]> = {
    "double-chocolate-cookie": ["chocolate", "cookie", "oats", "choco", "double"],
    "rose-cookie": ["rose", "floral", "cookie", "oats", "petals"],
    "pine-apple-cookie": ["pine apple", "pineapple", "tropical", "cookie", "oats", "fruit"],
    "dry-seed-cookies": [
      "seed",
      "seeds",
      "dry seed",
      "protein",
      "cookie",
      "oats",
      "pumpkin",
      "flax",
      "sunflower",
      "watermelon",
    ],
    "all-mix-cookies": ["mix", "variety", "cookie", "all mix", "oats"],
    "double-chocolate-oats-brownie": ["brownie", "chocolate", "oats", "fudgy"],
    "kaju-oats-brownie": ["kaju", "cashew", "brownie", "chocolate", "oats"],
  };
  return products.filter((p) => {
    const bag = [p.name, p.category, p.description, ...(keywords[p.id] ?? [])]
      .join(" ")
      .toLowerCase();
    return bag.includes(q);
  });
}

export function productPrice(product: Product): string {
  return `₹${product.price}`;
}

export function getSellingPrice(product: Product): number {
  return product.price;
}

export function getMRP(product: Product): number {
  return product.mrp;
}

export function formatPrice(amount: number): string {
  return `₹${amount}`;
}

export function productOrderMessage(product: Product, quantity = 1): string {
  return [
    "Hello CRISPO COOKIES! I would like to order:",
    `Product: ${product.name}`,
    `Pack: ${product.packQuantity} / ${product.weight}`,
    `Quantity: ${quantity} box`,
    `Price: ₹${product.price} (MRP: ₹${product.mrp})`,
  ].join("\n");
}
