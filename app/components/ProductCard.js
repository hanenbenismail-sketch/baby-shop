"use client";


import Image from "next/image";
import Link from "next/link";

import { useCart } from "@/context/CartContext";



export default function ProductCard({product}){


const { addToCart } = useCart();



return (


<div
className="
bg-white
rounded-3xl
overflow-hidden
shadow-sm
border
border-gray-100
hover:shadow-xl
transition
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
h-56
sm:h-64
"
>


<Image

src={product.image}

alt={product.name}

fill

className="
object-cover
hover:scale-105
transition
duration-300
"

/>


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
line-clamp-1
"
>

{product.name}

</h3>





<p
className="
text-sm
text-gray-500
mb-3
line-clamp-2
"
>

{product.description}

</p>







<div
className="
flex
justify-between
items-center
mb-4
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



<span
className="
text-yellow-500
"
>

{"⭐".repeat(product.rating || 0)}

</span>



</div>









<div
className="
flex
flex-col
sm:flex-row
gap-3
mt-auto
"
>



<button

onClick={()=>addToCart(product)}

className="
bg-pink-500
hover:bg-pink-600
text-white
py-2
px-4
rounded-xl
transition
font-semibold
"

>

🛒 Ajouter

</button>






<Link

href={`/product/${product.id}`}

className="
bg-blue-500
hover:bg-blue-600
text-white
py-2
px-4
rounded-xl
text-center
transition
font-semibold
"

>

Voir détail

</Link>





</div>





</div>





</div>


);


}