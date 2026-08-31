import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { CartProvider } from "@/context/cart";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MobileOrderBar } from "@/components/MobileOrderBar";
import { ScrollToTop } from "@/components/ScrollToTop";

import Index from "./routes/index";
import AboutPage from "./routes/about";
import BrowniesPage from "./routes/brownies";
import ContactPage from "./routes/contact";
import CookiesPage from "./routes/cookies";
import PrivacyPage from "./routes/privacy";
import ProductPage from "./routes/product.$productId";
import TermsPage from "./routes/terms";
import WhyCrispoPage from "./routes/why-crispo";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

function Layout() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
      <WhatsAppButton />
      <MobileOrderBar />
      <Toaster position="top-center" richColors />
    </>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/brownies" element={<BrowniesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/cookies" element={<CookiesPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/why-crispo" element={<WhyCrispoPage />} />
              <Route path="/product/:productId" element={<ProductPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </QueryClientProvider>
  );
}

function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-xs font-bold tracking-[0.18em] text-primary-foreground transition-colors hover:bg-plum"
          >
            GO HOME
          </a>
        </div>
      </div>
    </div>
  );
}
