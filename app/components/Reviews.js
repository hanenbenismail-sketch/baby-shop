"use client";

import Image from "next/image";
import { Star, BadgeCheck } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";


const reviews = [

{
name:"Sarah",
image:"/images/user1.jpg",

comment:{
fr:"Très satisfaite de la qualité des produits. Livraison rapide et service excellent.",
en:"Very satisfied with the product quality. Fast delivery and excellent service.",
ar:"راضية جداً عن جودة المنتجات. توصيل سريع وخدمة ممتازة."
},

rating:5
},


{
name:"Meriem",
image:"/images/user2.jpg",

comment:{
fr:"Les vêtements bébé sont magnifiques. Je recommande Baby-Shop.",
en:"Baby clothes are beautiful. I recommend Baby-Shop.",
ar:"ملابس الأطفال رائعة. أنصح بمتجر Baby-Shop."
},

rating:5
},


{
name:"Amine",
image:"/images/user3.jpg",

comment:{
fr:"Commande facile et produits conformes aux photos.",
en:"Easy ordering and products matching the photos.",
ar:"طلب سهل والمنتجات مطابقة للصور."
},

rating:4
}

];



const translations = {

fr:{
title:"Avis de nos clients ❤️",
subtitle:"Découvrez les expériences de nos clients satisfaits ⭐",
verified:"Client vérifié"
},


en:{
title:"Customer Reviews ❤️",
subtitle:"Discover the experiences of our satisfied customers ⭐",
verified:"Verified customer"
},


ar:{
title:"آراء عملائنا ❤️",
subtitle:"اكتشف تجارب عملائنا الراضين ⭐",
verified:"عميل موثق"
}

};



export default function Reviews(){

const {language}=useLanguage();

const t=translations[language];


return (

<section

dir={language==="ar"?"rtl":"ltr"}

className="
max-w-7xl
mx-auto
px-6
py-5
"

>


<h2

className="
text-xl
md:text-2xl
font-bold
text-center
text-gray-800
mb-1
"

>

{t.title}

</h2>



<p

className="
max-w-2xl
mx-auto
text-center
text-gray-500
text-xs
mb-5
"

>

{t.subtitle}

</p>



<div

className="
grid
md:grid-cols-3
gap-3
"

>


{
reviews.map((review,index)=>(


<div

key={index}

className="
bg-white
rounded-xl
border
border-gray-100
shadow-sm
p-3
hover:shadow-md
transition
"

>


<div

className="
flex
items-center
gap-2
mb-2
"

>


<Image

src={review.image}

alt={review.name}

width={35}

height={35}

className="
rounded-full
object-cover
"

/>



<div>

<h3 className="font-bold text-sm">

{review.name}

</h3>


<div

className="
flex
items-center
gap-1
text-green-500
text-[10px]
"

>

<BadgeCheck size={12}/>

{t.verified}

</div>


</div>


</div>



<div className="flex mb-2">

{
[1,2,3,4,5].map((star)=>(

<Star

key={star}

size={14}

className={
star <= review.rating
?
"fill-yellow-400 text-yellow-400"
:
"text-gray-300"
}

/>

))
}

</div>



<p

className="
text-gray-600
text-xs
leading-5
line-clamp-2
"

>

"{review.comment[language]}"

</p>


</div>


))

}


</div>


</section>


);

}