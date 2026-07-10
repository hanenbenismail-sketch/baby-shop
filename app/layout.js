import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import CartProvider from "../context/CartContext";

export const metadata = {
  title: {
    default: "Baby Shop 🍼 | Boutique bébé en ligne",
    template: "%s | Baby Shop",
  },

  description:
    "Baby Shop Tunisie - Découvrez vêtements bébé, jouets, accessoires et produits de qualité pour le confort de votre bébé.",

  keywords: [
    "baby shop",
    "boutique bébé",
    "vêtements bébé",
    "jouets bébé",
    "accessoires bébé",
    "Tunisie",
  ],

  authors: [
    {
      name: "Baby Shop",
    },
  ],

  openGraph: {
    title: "Baby Shop 🍼",
    description: "Boutique en ligne spécialisée dans les produits bébé.",
    type: "website",
    locale: "fr_TN",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <CartProvider>
          <Navbar />
          <CartDrawer />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}