"use client";

import Image from "next/image";
import Link from "next/link";

import { useLanguage } from "@/context/LanguageContext";



const translations = {

fr:{
welcome:"Bienvenue chez BABY-SHOP 🍼",
title:"Tout pour le confort de votre bébé",
description:
"Découvrez nos vêtements bébé, jouets et accessoires sélectionnés avec soin pour votre petit trésor.",
button:"Découvrir les produits 🛒"
},


en:{
welcome:"Welcome to BABY-SHOP 🍼",
title:"Everything for your baby's comfort",
description:
"Discover our baby clothes, toys and accessories carefully selected for your little treasure.",
button:"Discover products 🛒"
},


ar:{
welcome:"مرحبا بكم في BABY-SHOP 🍼",
title:"كل ما يحتاجه طفلك لراحته",
description:
"اكتشف ملابس الأطفال والألعاب والإكسسوارات المختارة بعناية لطفلك.",
button:"اكتشف المنتجات 🛒"
}

};





export default function Hero(){


const {language}=useLanguage();


const t=translations[language];



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

dir={language==="ar" ? "rtl" : "ltr"}

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

{t.welcome}

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

{t.title}

</h1>





<p

className="
text-gray-600
text-lg
mt-5
mb-8
"

>

{t.description}

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

{t.button}

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