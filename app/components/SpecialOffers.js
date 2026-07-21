"use client";

import Image from "next/image";
import Link from "next/link";

import { useLanguage } from "@/context/LanguageContext";



const translations = {

fr:{
badge:"🔥 Offre spéciale",
title:"Jusqu'à -50% sur les produits bébé",
description:"Profitez de nos offres limitées : vêtements, jouets et accessoires pour votre bébé.",
discover:"Découvrir",
categories:"Voir catégories"
},


en:{
badge:"🔥 Special offer",
title:"Up to -50% on baby products",
description:"Enjoy our limited offers: clothes, toys and accessories for your baby.",
discover:"Discover",
categories:"View categories"
},


ar:{
badge:"🔥 عرض خاص",
title:"تخفيضات تصل إلى 50% على منتجات الأطفال",
description:"استفد من عروضنا المحدودة على الملابس والألعاب والإكسسوارات لطفلك.",
discover:"اكتشف المنتجات",
categories:"عرض الأصناف"
}

};







export default function SpecialOffers(){


const {language}=useLanguage();


const t=translations[language];




return (


<section

className="
py-16
bg-gradient-to-r
from-pink-50
to-blue-50
"

dir={language==="ar" ? "rtl":"ltr"}

>


<div

className="
max-w-7xl
mx-auto
px-6
"


>



<div

className="
grid
md:grid-cols-2
gap-10
items-center
bg-white
rounded-3xl
shadow-lg
p-8
overflow-hidden
"

>





{/* CONTENT */}


<div>



<span

className="
inline-block
bg-pink-500
text-white
px-4
py-2
rounded-full
text-sm
font-bold
mb-4
"

>

{t.badge}

</span>







<h2

className="
text-4xl
font-extrabold
text-gray-800
mb-4
"

>

{t.title}

</h2>







<p

className="
text-gray-600
text-lg
mb-6
"

>

{t.description}

</p>









<div

className="
flex
gap-4
flex-wrap
"

>



<Link

href="/products"

className="
bg-pink-500
hover:bg-pink-600
text-white
px-7
py-3
rounded-full
font-bold
transition
shadow-md
"

>

{t.discover}

</Link>








<Link

href="/categories"

className="
border
border-blue-400
text-blue-500
px-7
py-3
rounded-full
font-bold
hover:bg-blue-50
transition
"

>

{t.categories}

</Link>



</div>





</div>









{/* IMAGE */}



<div

className="
relative
h-72
md:h-96
overflow-hidden
rounded-3xl
"

>


<Image

src="/images/offer-baby.jpg"

alt="Special baby offer"

fill

priority

className="
object-cover
hover:scale-105
transition-transform
duration-500
"

/>


</div>






</div>



</div>



</section>


);


}