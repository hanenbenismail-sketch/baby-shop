"use client";

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";


const packs = [

{
id:1,
title:"Pack Naissance 👶",
description:"Les essentiels pour accueillir votre bébé.",
image:"/images/pack-naissance.jpg",
link:"/products"
},

{
id:2,
title:"Pack Sommeil 💤",
description:"Pyjamas, couvertures et accessoires confort.",
image:"/images/pack-sommeil.jpg",
link:"/products"
},

{
id:3,
title:"Pack Cadeau 🎁",
description:"Une idée cadeau parfaite pour bébé.",
image:"/images/pack-cadeau.jpg",
link:"/products"
},

{
id:4,
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







<Swiper

modules={[Navigation,Autoplay]}

navigation={true}

loop={true}

grabCursor={true}

autoplay={{

delay:2500,

disableOnInteraction:false

}}

spaceBetween={24}


breakpoints={

{

0:{
slidesPerView:1
},

640:{
slidesPerView:2
},

1024:{
slidesPerView:3
}

}

}

>





{
packs.map((pack)=>(


<SwiperSlide key={pack.id}>


<div

className="
bg-white
rounded-3xl
overflow-hidden
border
border-gray-100
shadow-sm
hover:shadow-xl
transition
h-full
"

>


{/* IMAGE */}

<div

className="
relative
h-64
w-full
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
duration-500
"

/>


</div>







{/* CONTENT */}

<div

className="
p-5
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
mb-5
"

>

{pack.description}

</p>







<Link

href={pack.link}

className="
block
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


</SwiperSlide>


))

}




</Swiper>





</div>


</section>


);


}