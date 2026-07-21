"use client";

import Image from "next/image";
import Link from "next/link";

import { Heart, Star } from "lucide-react";

import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useLanguage } from "@/context/LanguageContext";


const translations = {

fr:{
add:"🛒 Ajouter au panier",
detail:"Voir détail"
},

en:{
add:"🛒 Add to cart",
detail:"View details"
},

ar:{
add:"🛒 أضف إلى السلة",
detail:"عرض التفاصيل"
}

};



export default function ProductCard({product}){


const {addToCart}=useCart();


const {
addToWishlist,
removeFromWishlist,
isInWishlist
}=useWishlist();



const {language}=useLanguage();


const t=translations[language];


const liked=isInWishlist(product.id);





return (


<div

dir={language==="ar" ? "rtl":"ltr"}

className="
bg-white
rounded-3xl
overflow-hidden
shadow-sm
border
border-gray-100
hover:shadow-xl
transition
duration-300
h-full
flex
flex-col
"

>


{/* IMAGE */}

<div

className="
relative
w-full
h-64
overflow-hidden
"

>


<Image

src={product.image}

alt={product.name[language]}

fill

className="
object-cover
hover:scale-105
transition
duration-500
"

/>





{/* WISHLIST */}

<button

onClick={()=>{

if(liked){

removeFromWishlist(product.id);

}

else{

addToWishlist(product);

}

}}

className="
absolute
top-4
right-4
bg-white
w-10
h-10
rounded-full
flex
items-center
justify-center
shadow-md
hover:scale-110
transition
"

>


<Heart

size={22}

className={

liked

?

"fill-pink-500 text-pink-500"

:

"text-gray-400"

}

/>


</button>



</div>









{/* CONTENT */}


<div

className="
p-5
flex
flex-col
flex-1
"

>



<h3

className="
text-lg
font-bold
text-gray-800
mb-2
line-clamp-2
"

>

{product.name[language]}

</h3>






<p

className="
text-sm
text-gray-500
mb-4
line-clamp-2
"

>

{product.description[language]}

</p>









{/* PRICE + RATING */}


<div

className="
flex
justify-between
items-center
mb-5
"

>


<span

className="
text-xl
font-bold
text-pink-500
"

>

{product.price} DT

</span>







<div className="flex gap-1">


{

[1,2,3,4,5].map((star)=>(


<Star

key={star}

size={17}

className={

star <= (product.rating || 0)

?

"fill-yellow-400 text-yellow-400"

:

"text-gray-300"

}

/>


))

}


</div>



</div>









{/* BUTTONS */}



<div

className="
flex
flex-col
gap-3
mt-auto
"

>



<button

onClick={()=>addToCart(product)}

className="
w-full
bg-pink-500
hover:bg-pink-600
text-white
py-2
rounded-xl
font-semibold
transition
"

>

{t.add}

</button>







<Link

href={`/product/${product.id}`}

className="
w-full
bg-blue-500
hover:bg-blue-600
text-white
py-2
rounded-xl
text-center
font-semibold
transition
"

>

{t.detail}

</Link>





</div>






</div>





</div>


);


}