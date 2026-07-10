
import Image from "next/image";
import Link from "next/link";


const packs = [

{
title:"Pack Naissance 👶",
description:"Les essentiels pour accueillir votre bébé.",
image:"/images/pack-naissance.jpg",
link:"/products"
},


{
title:"Pack Sommeil 💤",
description:"Pyjamas, couvertures et accessoires confort.",
image:"/images/pack-sommeil.jpg",
link:"/products"
},


{
title:"Pack Cadeau 🎁",
description:"Une idée cadeau parfaite pour bébé.",
image:"/images/pack-cadeau.jpg",
link:"/products"
},


{
title:"Pack Sortie bébé 🚼",
description:"Tout pour les sorties avec bébé.",
image:"/images/pack-sortie.jpg",
link:"/products"
}


];





export default function BabyPacks(){


return (


<section
className="
py-16
bg-blue-50
"
>


<div
className="
max-w-7xl
mx-auto
px-6
"
>





<h2
className="
text-3xl
md:text-4xl
font-bold
text-center
text-gray-800
mb-4
"
>

🎁 Packs bébé

</h2>





<p
className="
text-center
text-gray-600
mb-10
"
>

Des packs préparés spécialement pour vos besoins

</p>







<div
className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-8
"
>


{

packs.map((pack,index)=>(


<div

key={index}

className="
bg-white
rounded-3xl
overflow-hidden
border
border-gray-100
shadow-sm
hover:shadow-xl
transition
flex
flex-col
h-full
"

>


{/* IMAGE FIXE */}

<div
className="
relative
h-56
w-full
overflow-hidden
"
>


<Image

src={pack.image}

alt={pack.title}

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
text-xl
font-bold
text-gray-800
mb-3
"
>

{pack.title}

</h3>





<p
className="
text-gray-600
text-sm
line-clamp-2
mb-6
"
>

{pack.description}

</p>







<Link

href={pack.link}

className="
mt-auto
w-full
text-center
bg-pink-500
hover:bg-pink-600
text-white
py-3
rounded-xl
font-semibold
transition
"

>

Découvrir

</Link>





</div>





</div>


))


}



</div>





</div>


</section>


);


}
