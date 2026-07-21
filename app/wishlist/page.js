"use client";

import Image from "next/image";
import Link from "next/link";

import { Trash2, ShoppingCart, Heart } from "lucide-react";

import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";



const translations = {

fr:{
title:"❤️ Mes favoris",
empty:"Votre liste de favoris est vide.",
button:"Découvrir les produits",
cart:"Panier"
},


en:{
title:"❤️ My Wishlist",
empty:"Your wishlist is empty.",
button:"Discover products",
cart:"Cart"
},


ar:{
title:"❤️ المفضلة",
empty:"قائمة المفضلة فارغة.",
button:"اكتشف المنتجات",
cart:"السلة"
}

};





export default function WishlistPage(){



const {
wishlist,
removeFromWishlist
}=useWishlist();



const {
addToCart
}=useCart();



const {language}=useLanguage();



const t = translations[language];







if(wishlist.length===0){


return (

<div
className="
min-h-screen
flex
items-center
justify-center
text-center
px-6
"
>


<div>


<Heart

size={60}

className="
mx-auto
mb-5
text-pink-500
fill-pink-100
"

/>



<h1
className="
text-4xl
font-bold
text-pink-500
mb-4
"
>

{t.title}

</h1>




<p className="text-gray-600 mb-6">

{t.empty}

</p>





<Link

href="/products"

className="
bg-pink-500
hover:bg-pink-600
text-white
px-6
py-3
rounded-xl
font-semibold
"

>

{t.button}

</Link>



</div>


</div>


);

}








return (


<div
dir={language==="ar" ? "rtl":"ltr"}

className="
max-w-7xl
mx-auto
px-6
py-12
"
>



<h1
className="
text-3xl
font-bold
text-pink-500
mb-8
"
>

{t.title}

</h1>






<div
className="
grid
sm:grid-cols-2
lg:grid-cols-4
gap-6
"
>


{

wishlist.map((product)=>(


<div

key={product.id}

className="
bg-white
rounded-3xl
overflow-hidden
shadow-sm
border
border-gray-100
hover:shadow-xl
transition
flex
flex-col
"

>




<div
className="
relative
h-64
w-full
"
>


<Image

src={product.image}

alt={product.name?.[language] || "Baby product"}

fill

className="
object-cover
"

/>


</div>







<div
className="
p-5
flex
flex-col
flex-1
"
>



<h2
className="
font-bold
text-lg
mb-3
"
>

{product.name?.[language]}

</h2>





<p
className="
text-xl
font-bold
text-pink-500
mb-5
"
>

{product.price} DT

</p>






<div
className="
flex
gap-3
mt-auto
"
>



<button

onClick={()=>addToCart(product)}

className="
flex-1
bg-pink-500
hover:bg-pink-600
text-white
py-2
rounded-xl
font-semibold
flex
justify-center
items-center
gap-2
"

>

<ShoppingCart size={18}/>

{t.cart}

</button>







<button

onClick={()=>removeFromWishlist(product.id)}

className="
w-12
bg-gray-100
hover:bg-red-100
rounded-xl
"

>

<Trash2
size={20}
className="text-red-500"
/>


</button>



</div>




</div>



</div>


))


}



</div>


</div>


);


}