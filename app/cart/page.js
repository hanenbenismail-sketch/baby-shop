"use client";

import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";

import Image from "next/image";
import Link from "next/link";



const translations = {

fr:{
title:"🛒 Mon Panier",
empty:"Votre panier est vide",
remove:"Supprimer",
total:"Total",
checkout:"Passer la commande"
},


en:{
title:"🛒 My Cart",
empty:"Your cart is empty",
remove:"Remove",
total:"Total",
checkout:"Checkout"
},


ar:{
title:"🛒 سلتي",
empty:"السلة فارغة",
remove:"حذف",
total:"المجموع",
checkout:"إتمام الطلب"
}

};






export default function Cart(){


const {

cart,

removeFromCart,

increaseQuantity,

decreaseQuantity,

totalPrice

}=useCart();




const {language}=useLanguage();


const t=translations[language];





return (


<section

dir={language==="ar" ? "rtl":"ltr"}

className="
max-w-6xl
mx-auto
px-4
sm:px-6
py-12
"

>



<h1

className="
text-3xl
font-bold
mb-8
text-gray-800
"

>

{t.title}

</h1>






{

cart.length===0 ?


<div

className="
text-center
py-20
text-gray-500
text-xl
"

>

{t.empty}

</div>




:

<div className="space-y-5">


{


cart.map((item)=>(



<div

key={item.id}

className="
bg-white
rounded-3xl
border
border-gray-100
shadow-sm
p-5
flex
flex-col
sm:flex-row
items-center
gap-5
"

>





{/* IMAGE */}

<div

className="
relative
w-32
h-32
rounded-2xl
overflow-hidden
"

>


<Image

src={item.image}

alt={

typeof item.name==="object"

?

item.name[language]

:

item.name

}

fill

className="
object-cover
"

/>


</div>








{/* INFO */}


<div className="flex-1">


<h2

className="
font-bold
text-lg
text-gray-800
"

>


{

typeof item.name==="object"

?

item.name[language]

:

item.name

}


</h2>




<p

className="
text-pink-500
font-bold
text-xl
"

>

{item.price} TND

</p>



</div>









{/* QUANTITY */}



<div

className="
flex
items-center
gap-3
"

>


<button

onClick={()=>decreaseQuantity(item.id)}

className="
w-9
h-9
rounded-xl
bg-gray-100
font-bold
"

>

-

</button>






<span className="font-bold">

{item.quantity}

</span>






<button

onClick={()=>increaseQuantity(item.id)}

className="
w-9
h-9
rounded-xl
bg-pink-500
text-white
font-bold
"

>

+

</button>




</div>








{/* REMOVE */}



<button

onClick={()=>removeFromCart(item.id)}

className="
bg-red-500
hover:bg-red-600
text-white
px-4
py-2
rounded-xl
"

>

{t.remove}

</button>





</div>



))


}








{/* TOTAL */}



<div

className="
mt-8
flex
flex-col
items-end
gap-5
"

>



<div

className="
text-2xl
font-bold
"

>


{t.total} :


<span className="text-pink-500">

{totalPrice()} TND

</span>



</div>








<Link

href="/checkout"

className="
bg-pink-500
hover:bg-pink-600
text-white
px-8
py-3
rounded-xl
font-bold
"

>

{t.checkout}

</Link>






</div>






</div>



}




</section>



);


}