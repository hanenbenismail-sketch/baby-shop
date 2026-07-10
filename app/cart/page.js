"use client";

import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";


export default function Cart(){


const {

cart,

removeFromCart,

updateQuantity,

totalPrice

}=useContext(CartContext);




return (


<section
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

🛒 Mon Panier

</h1>





{

cart.length === 0 ?


<div
className="
text-center
py-20
text-gray-500
text-xl
"
>

Votre panier est vide

</div>



:


<div
className="
space-y-5
"
>



{

cart.map(item=>(


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

alt={item.name}

fill

className="
object-cover
"

/>


</div>






{/* INFO */}


<div
className="
flex-1
"
>


<h2
className="
font-bold
text-lg
text-gray-800
"
>

{item.name}

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

onClick={()=>updateQuantity(
item.id,
item.quantity-1
)}

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

onClick={()=>updateQuantity(
item.id,
item.quantity+1
)}

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
transition
"

>

Supprimer

</button>




</div>


))


}







{/* TOTAL + CHECKOUT */}


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
text-gray-800
"
>

Total :

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
transition
"

>

Passer la commande

</Link>




</div>






</div>


}



</section>


);


}