import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import Features from "./components/Features";
import SpecialOffers from "./components/SpecialOffers";
import NewArrivals from "./components/NewArrivals";
import BabyPacks from "./components/BabyPacks";
import Testimonials from "./components/Testimonials";


export default function Home(){


return (


<div>


{/* HERO */}

<Hero />





{/* CATEGORIES */}

<Categories />

{/* SPECIALOFFRES */}

<SpecialOffers />


{/* NewArrivals */}

<NewArrivals />

{/* FEATURED PRODUCTS */}

<FeaturedProducts />


{/* BabyPacks */}

<BabyPacks />


{/*Testimonials */}

<Testimonials />


{/* FEATURES */}

<Features />








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
text-gray-800
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
border
border-gray-100
"
>


<h3
className="
text-2xl
font-bold
mb-4
text-pink-500
"
>

🍼 Baby-Shop

</h3>




<p className="mb-3 text-gray-600">

📌 Adresse :

<br/>

Cité Chebbi, Tozeur, Tunisie

</p>





<p className="mb-3 text-gray-600">

📞 Téléphone :

<br/>

+216 XX XXX XXX

</p>






<p className="mb-5 text-gray-600">

🕘 Horaires :

<br/>

Lundi - Samedi : 08:00 - 18:00

</p>







<a

href="https://www.google.com/maps"

target="_blank"

rel="noopener noreferrer"

className="
inline-flex
bg-gradient-to-r
from-blue-500
to-pink-500
text-white
px-6
py-3
rounded-full
font-bold
hover:scale-105
transition
shadow-md
"

>

Ouvrir Google Maps 📍

</a>





</div>









<div
className="
overflow-hidden
rounded-3xl
shadow-lg
"
>


<iframe

src="https://www.google.com/maps?q=Cité+Chebbi+Tozeur+Tunisie&output=embed"

width="100%"

height="350"

style={{
border:0
}}

loading="lazy"

allowFullScreen

></iframe>



</div>






</div>





</section>






</div>


);


}