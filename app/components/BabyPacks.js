"use client";

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { useLanguage } from "@/context/LanguageContext";



const packs = [

{
id:1,

title:{
fr:"Pack Naissance 👶",
en:"Birth Pack 👶",
ar:"حزمة الولادة 👶"
},

description:{
fr:"Les essentiels pour accueillir votre bébé.",
en:"Everything needed to welcome your baby.",
ar:"كل الأساسيات لاستقبال طفلك."
},

image:"/images/pack-naissance.jpg"

},


{
id:2,

title:{
fr:"Pack Sommeil 💤",
en:"Sleep Pack 💤",
ar:"حزمة النوم 💤"
},

description:{
fr:"Pyjamas, couvertures et accessoires confort.",
en:"Pajamas, blankets and comfort accessories.",
ar:"ملابس نوم، بطانيات وإكسسوارات مريحة."
},

image:"/images/pack-sommeil.jpg"

},


{
id:3,

title:{
fr:"Pack Cadeau 🎁",
en:"Gift Pack 🎁",
ar:"حزمة هدية 🎁"
},

description:{
fr:"Une idée cadeau parfaite pour bébé.",
en:"A perfect gift idea for your baby.",
ar:"فكرة هدية مثالية لطفلك."
},

image:"/images/pack-cadeau.jpg"

},


{
id:4,

title:{
fr:"Pack Sortie bébé 🚼",
en:"Baby Outing Pack 🚼",
ar:"حزمة الخروج للطفل 🚼"
},

description:{
fr:"Tout pour les sorties avec bébé.",
en:"Everything for baby outings.",
ar:"كل ما تحتاجه للخروج مع الطفل."
},

image:"/images/pack-sortie.jpg"

}

];





export default function BabyPacks(){


const {language}=useLanguage();



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

🎁 {language==="fr"
?"Packs bébé"
:
language==="en"
?"Baby Packs"
:
"حزم الأطفال"
}

</h2>




<p
className="
text-center
text-gray-600
mb-10
"
>

{
language==="fr"
?
"Des packs préparés spécialement pour vos besoins"
:
language==="en"
?
"Special packs prepared for your needs"
:
"حزم خاصة مجهزة حسب احتياجاتك"
}

</p>





<Swiper

modules={[Navigation,Autoplay]}

navigation

loop

grabCursor

autoplay={{
delay:2500,
disableOnInteraction:false
}}

spaceBetween={24}


breakpoints={{

0:{
slidesPerView:1
},

640:{
slidesPerView:2
},

1024:{
slidesPerView:3
}

}}

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


<div

className="
relative
h-64
w-full
"

>


<Image

src={pack.image}

alt={pack.title[language]}

fill

className="
object-cover
hover:scale-105
transition
duration-500
"

/>


</div>





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

{pack.title[language]}

</h3>




<p
className="
text-gray-600
text-sm
mb-5
"
>

{pack.description[language]}

</p>





<Link

href="/products"

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

{
language==="fr"
?
"Découvrir"
:
language==="en"
?
"Discover"
:
"اكتشف"
}

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