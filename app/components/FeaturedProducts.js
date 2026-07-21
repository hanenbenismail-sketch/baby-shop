"use client";

import Link from "next/link";

import ProductsCarousel from "./ProductsCarousel";
import products from "@/app/data/products";

import { useLanguage } from "@/context/LanguageContext";



const translations = {

fr:{
title:"⭐ Produits populaires",
desc:"Découvrez nos meilleurs produits bébé",
button:"Voir tous les produits"
},


en:{
title:"⭐ Popular Products",
desc:"Discover our best baby products",
button:"View all products"
},


ar:{
title:"⭐ المنتجات الأكثر شعبية",
desc:"اكتشف أفضل منتجات الأطفال",
button:"عرض كل المنتجات"
}

};





export default function FeaturedProducts(){


const {language}=useLanguage();


const t=translations[language];



const featured = products

.filter(product=>product.featured)

.slice(0,8);





return (


<section

dir={language==="ar" ? "rtl":"ltr"}

className="
bg-pink-50
py-16
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

{t.title}

</h2>





<p

className="
text-center
text-gray-600
mb-10
"

>

{t.desc}

</p>







<ProductsCarousel

products={featured}

/>







<div

className="
text-center
mt-10
"

>


<Link


href="/products"


className="
inline-flex
bg-gradient-to-r
from-pink-500
to-blue-500
text-white
px-8
py-3
rounded-full
font-bold
shadow-lg
hover:scale-105
transition
"

>


{t.button}


</Link>



</div>






</div>


</section>


);


}