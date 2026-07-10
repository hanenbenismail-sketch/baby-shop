import Link from "next/link";

import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Features from "./components/Features";



export default function Home(){


return (

<div>



{/* HERO */}

<Hero />





{/* CATEGORIES */}

<Categories />





{/* FEATURES */}

<Features />







{/* PRODUCTS INTRO */}

<section
className="
max-w-7xl
mx-auto
px-6
py-16
text-center
"
>


<h2
className="
text-3xl
md:text-4xl
font-bold
text-gray-800
mb-4
"
>

🛍 Nos produits bébé

</h2>



<p
className="
text-gray-600
mb-8
"
>

Découvrez notre collection vêtements,
jouets et accessoires bébé.

</p>




<Link

href="/products"

className="
bg-pink-500
hover:bg-pink-600
text-white
px-8
py-3
rounded-full
font-semibold
transition
"

>

Voir tous les produits

</Link>



</section>







{/* LOCATION */}

<section
className="
max-w-7xl
mx-auto
px-6
pb-16
"
>


<h2
className="
text-3xl
font-bold
text-center
mb-8
"
>

📍 Localisation de notre boutique

</h2>




<div
className="
grid
md:grid-cols-2
gap-8
items-center
"
>





<div
className="
bg-white
shadow-lg
rounded-3xl
p-8
"
>


<h3
className="
text-2xl
font-bold
mb-4
"
>

🍼 Baby Shop

</h3>



<p className="mb-3">

📌 Adresse :
<br/>
Cité Chebbi, Tozeur, Tunisie

</p>



<p className="mb-3">

📞 Téléphone :
<br/>
+216 XX XXX XXX

</p>



<p className="mb-5">

🕘 Horaires :
<br/>
Lundi - Samedi : 08:00 - 18:00

</p>




<a

href="https://www.google.com/maps"

target="_blank"

className="
inline-block
bg-blue-500
text-white
px-6
py-3
rounded-full
hover:bg-blue-600
"

>

Ouvrir Google Maps 📍

</a>



</div>







<div>

<iframe

src="https://www.google.com/maps?q=Cité+Chebbi+Tozeur+Tunisie&output=embed"

width="100%"

height="350"

style={{
border:0,
borderRadius:"20px"
}}

loading="lazy"

allowFullScreen

></iframe>


</div>



</div>


</section>






</div>


)

}