import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";

import CartProvider from "@/context/CartContext";
import { LanguageProvider } from "@/context/LanguageContext";
import { WishlistProvider } from "@/context/WishlistContext";

import LanguageLayout from "./components/LanguageLayout";





export const metadata = {


title:{

default:"Baby Shop 🍼 | Boutique bébé en ligne",

template:"%s | Baby Shop"

},



description:
"Baby Shop Tunisie - Découvrez vêtements bébé, jouets et accessoires bébé.",



keywords:[

"Baby Shop",

"boutique bébé Tunisie",

"vêtements bébé",

"jouets bébé",

"accessoires bébé",

"produits bébé"

],



openGraph:{


title:"Baby Shop 🍼",

description:
"Boutique en ligne spécialisée dans les produits bébé.",


type:"website",


locale:"fr_TN"


},



robots:{


index:true,

follow:true

}



};






export const viewport = {

width:"device-width",

initialScale:1

};







export default function RootLayout({children}){


return (


<html

lang="fr"

suppressHydrationWarning

>


<body

className="
min-h-screen
bg-white
antialiased
"

>



<CartProvider>


<LanguageProvider>


<WishlistProvider>



<LanguageLayout>


<Navbar />


<CartDrawer />



<main>

{children}

</main>



<Footer />



</LanguageLayout>



</WishlistProvider>


</LanguageProvider>


</CartProvider>



</body>



</html>



);


}