"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  Search,
  ShoppingCart,
  Heart,
  User,
  Menu,
  X
} from "lucide-react";


import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useLanguage } from "@/context/LanguageContext";

import LanguageSwitcher from "./LanguageSwitcher";



export default function Navbar(){


const router = useRouter();

const [search,setSearch]=useState("");

const [menuOpen,setMenuOpen]=useState(false);



const {
 cart,
 openCart,
 cartCount
}=useCart();



const {
 wishlist
}=useWishlist();



const {
 t
}=useLanguage();





function handleSearch(){


if(search.trim()){

router.push(
`/products?search=${encodeURIComponent(search)}`
);

}else{

router.push("/products");

}

}





return (

<header

className="
bg-white/95
backdrop-blur-md
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

px-4
sm:px-6
lg:px-8

py-3

flex
items-center
justify-between

gap-6

"

>




{/* LOGO */}


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

alt="Baby Shop"

width={50}

height={50}

className="
rounded-full
object-cover
shadow-md

group-hover:scale-105
transition
"

/>



<div className="flex flex-col">


<h1

className="
text-xl
lg:text-2xl

font-extrabold

tracking-wide

bg-gradient-to-r
from-pink-500
to-blue-400

bg-clip-text
text-transparent
"

>

BABY-SHOP

</h1>


<span

className="
text-xs
text-gray-500
"

>

Boutique bébé 🍼

</span>


</div>


</Link>










{/* MENU */}


<div

className="
hidden
md:flex

items-center

gap-10

font-medium

text-gray-700

flex-1

justify-center

"

>


<Link
href="/"

className="
hover:text-pink-500
transition
"

>

{t.navbar.home}

</Link>




<Link
href="/products"

className="
hover:text-pink-500
transition
"

>

{t.navbar.products}

</Link>




<Link
href="/categories"

className="
hover:text-pink-500
transition
"

>

{t.navbar.categories}

</Link>



</div>









{/* ACTIONS */}


<div

className="
hidden
md:flex

items-center

gap-4

"

>





{/* SEARCH */}


<div

className="
relative

w-56
lg:w-64

"

>


<input

value={search}

onChange={(e)=>setSearch(e.target.value)}

onKeyDown={(e)=>{

if(e.key==="Enter") handleSearch();

}}

placeholder="Search..."

className="
w-full

rounded-full

border

px-4
py-2
pr-10

text-sm

outline-none

focus:ring-2
focus:ring-pink-300

"

/>



<button

onClick={handleSearch}

className="
absolute
right-3
top-2

hover:text-pink-500

"

>

<Search size={18}/>

</button>


</div>








{/* WISHLIST */}


<Link href="/wishlist">


<div className="relative">


<Heart

size={22}

className="
hover:text-pink-500
transition
"

/>


{

wishlist?.length>0 &&

<span

className="
absolute

-top-2
-right-2

w-5
h-5

rounded-full

bg-pink-500

text-white

text-xs

flex
items-center
justify-center

"

>

{wishlist.length}

</span>


}


</div>


</Link>










{/* CART */}


<button

onClick={openCart}

className="relative"

>


<ShoppingCart

size={22}

className="
hover:text-pink-500
transition
"

/>


{

cartCount()>0 &&

<span

className="
absolute

-top-2
-right-2

w-5
h-5

rounded-full

bg-pink-500

text-white

text-xs

flex
items-center
justify-center

"

>

{cartCount()}

</span>


}



</button>








{/* USER */}


<Link href="/login">

<User

size={22}

className="
hover:text-pink-500
transition
"

/>


</Link>






{/* LANGUAGE */}


<LanguageSwitcher />




</div>







{/* MOBILE BUTTON */}


<button

className="
md:hidden
"

onClick={()=>setMenuOpen(!menuOpen)}

>

{

menuOpen ?

<X/>

:

<Menu/>

}


</button>



</nav>







{/* MOBILE MENU */}


{

menuOpen &&

<div

className="
md:hidden

border-t

px-6

py-5

bg-white

flex

flex-col

gap-4

"

>


<Link href="/">

{t.navbar.home}

</Link>


<Link href="/products">

{t.navbar.products}

</Link>


<Link href="/categories">

{t.navbar.categories}

</Link>





<div

className="
flex
items-center
gap-5
pt-3
"

>

<Link href="/wishlist">
<Heart/>
</Link>


<button onClick={openCart}>
<ShoppingCart/>
</button>


<Link href="/login">
<User/>
</Link>


</div>



<LanguageSwitcher />



</div>

}



</header>

);


}