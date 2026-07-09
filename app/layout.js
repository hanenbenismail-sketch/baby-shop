import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartProvider from "../context/CartContext";

export const metadata = {
  title: "Baby Shop",
  description: "Boutique en ligne produits bébé",
};


export default function RootLayout({children}) {

return (

<html lang="fr">

<body>

<Navbar/>

<CartProvider>

<main className="container mt-4">

{children}

</main>

</CartProvider>


<Footer/>


</body>

</html>

);

}