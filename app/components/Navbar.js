"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";


export default function Navbar() {

const [search, setSearch] = useState("");
  const { cart, openCart } = useCart();

  const [menuOpen, setMenuOpen] = useState(false);


  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );



  return (

    <header
      className="
      bg-white
      shadow-sm
      sticky
      top-0
      z-50
      "
    >


      <nav
        className="
        max-w-7xl
        mx-auto
        px-6
        py-4
        flex
        items-center
        justify-between
        "
      >


        {/* Logo */}

{/* Logo */}

<Link
href="/"
className="
flex
items-center
gap-3
group
"
>

<Image
src="/images/logo.jpg"
alt="Baby Shop Logo"
width={55}
height={55}
className="
rounded-full
object-cover
shadow-md
group-hover:scale-105
transition
"
/>


<div className="flex flex-col">


<span
className="
text-2xl
font-extrabold
tracking-wider
bg-gradient-to-r
from-pink-500
to-blue-400
bg-clip-text
text-transparent
"
>
BABY-SHOP
</span>


<span
className="
text-xs
text-gray-500
font-medium
"
>
Boutique bébé 🍼
</span>


</div>


</Link>

        {/* Desktop Menu */}

        <div
          className="
          hidden
          md:flex
          items-center
          gap-8
          text-gray-700
          font-medium
          "
        >

          <Link
            href="/"
            className="hover:text-pink-500"
          >
            Accueil 
          </Link>


          <Link
            href="/products"
            className="hover:text-pink-500"
          >
            Produits
          </Link>


          <Link
            href="/categories"
            className="hover:text-pink-500"
          >
            Catégories
          </Link>




        </div>




        {/* Actions */}

        <div
          className="
          flex
          items-center
          gap-5
          "
        >


          {/* Search */}{/* Search */}

<div
className="
hidden
md:flex
items-center
relative
max-w-md
mx-6
"
>

<span
className="
absolute
left-4
text-gray-400
"
>
🔍
</span>


<input

type="text"

placeholder="Rechercher un produit..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

className="
w-full
pl-10
pr-4
py-2
rounded-full
border
border-gray-200
outline-none
focus:ring-2
focus:ring-pink-300
"

/>


</div>


          {/* Cart */}

          <button

            onClick={openCart}

            className="
            relative
            text-2xl
            hover:scale-110
            transition
            "

          >

            🛒


            {
              cartCount > 0 && (

                <span
                  className="
                  absolute
                  -top-3
                  -right-3
                  bg-pink-500
                  text-white
                  text-xs
                  font-bold
                  w-5
                  h-5
                  rounded-full
                  flex
                  items-center
                  justify-center
                  "
                >

                  {cartCount}

                </span>

              )
            }


          </button>




          {/* User */}

          <Link
            href="/login"
            className="
            text-xl
            hover:scale-110
            transition
            "
          >
            👤
          </Link>



          {/* Mobile Menu Button */}

          <button

            onClick={() => setMenuOpen(!menuOpen)}

            className="
            md:hidden
            text-2xl
            "
          >

            ☰

          </button>


        </div>


      </nav>



      {/* Mobile Menu */}

      {
        menuOpen && (

          <div
            className="
            md:hidden
            border-t
            px-6
            py-4
            flex
            flex-col
            gap-4
            bg-white
            "
          >

            <Link href="/">
              Home
            </Link>


            <Link href="/products">
              Products
            </Link>


            <Link href="/categories">
              Categories
            </Link>


          </div>

        )
      }


    </header>

  );

}