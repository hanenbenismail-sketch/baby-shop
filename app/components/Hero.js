"use client";

import Image from "next/image";
import Link from "next/link";


export default function Hero(){


return (

<section
className="
max-w-7xl
mx-auto
px-6
py-12
"
>


<div
className="
bg-gradient-to-r
from-pink-100
via-white
to-blue-100
rounded-3xl
overflow-hidden
flex
flex-col
md:flex-row
items-center
justify-between
p-8
md:p-12
gap-8
"
>



{/* TEXT */}


<div
className="
max-w-xl
"
>


<p
className="
text-pink-500
font-semibold
mb-3
"
>
Bienvenue chez BABY-SHOP 🍼
</p>



<h1
className="
text-4xl
md:text-6xl
font-extrabold
text-gray-800
leading-tight
"
>

Tout pour le confort
de votre bébé

</h1>



<p
className="
text-gray-600
text-lg
mt-5
mb-8
"
>

Découvrez nos vêtements bébé,
jouets et accessoires sélectionnés
avec soin pour votre petit trésor.

</p>





<Link

href="/products"

className="
inline-block
bg-pink-500
hover:bg-pink-600
text-white
font-semibold
px-8
py-3
rounded-full
transition
shadow-lg
"

>

Découvrir les produits 🛒

</Link>



</div>







{/* IMAGE */}


<div
className="
relative
w-full
md:w-1/2
h-[300px]
md:h-[450px]
"
>


<Image

src="/images/baby-banner.jpg"

alt="Baby Shop"

fill

priority

className="
object-cover
rounded-3xl
"

 />



</div>





</div>


</section>

);


}