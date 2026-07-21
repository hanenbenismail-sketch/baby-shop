"use client";

import { useLanguage } from "@/context/LanguageContext";



const reviews = [

{
id:1,

name:"Sonia B.",

city:"Tunis",

rating:5,

comment:{
fr:"Très satisfaite de la qualité des produits. Livraison rapide et excellent service.",
en:"Very satisfied with the product quality. Fast delivery and excellent service.",
ar:"راضية جداً عن جودة المنتجات. توصيل سريع وخدمة ممتازة."
}

},



{
id:2,

name:"Amira K.",

city:"Sfax",

rating:5,

comment:{
fr:"Les vêtements sont magnifiques et très confortables pour mon bébé.",
en:"The clothes are beautiful and very comfortable for my baby.",
ar:"الملابس رائعة ومريحة جداً لطفلي."
}

},




{
id:3,

name:"Mariem H.",

city:"Sousse",

rating:5,

comment:{
fr:"Je recommande Baby-Shop. Les prix sont intéressants et le service est parfait.",
en:"I recommend Baby-Shop. Good prices and perfect service.",
ar:"أنصح بـ Baby-Shop. الأسعار مناسبة والخدمة ممتازة."
}

}

];







const translations={

fr:{
title:"💬 Avis de nos clients",
subtitle:"Merci pour votre confiance ❤️"
},


en:{
title:"💬 Customer Reviews",
subtitle:"Thank you for your trust ❤️"
},


ar:{
title:"💬 آراء عملائنا",
subtitle:"شكراً على ثقتكم ❤️"
}

};








export default function Testimonials(){


const {language}=useLanguage();


const t=translations[language];




return (


<section

dir={language==="ar"?"rtl":"ltr"}

className="
py-16
bg-gradient-to-br
from-pink-50
via-white
to-blue-50
"

>


<div className="
max-w-7xl
mx-auto
px-6
">


<h2

className="
text-3xl
md:text-4xl
font-bold
text-center
text-gray-800
"

>

{t.title}

</h2>





<p

className="
text-center
text-gray-600
mt-3
mb-12
"

>

{t.subtitle}

</p>







<div

className="
grid
grid-cols-1
md:grid-cols-3
gap-8
"

>


{

reviews.map((review)=>(


<div

key={review.id}

className="
bg-white
rounded-3xl
p-8
shadow-md
hover:shadow-xl
transition
"

>


<div

className="
text-yellow-400
text-xl
mb-4
"

>

{"⭐".repeat(review.rating)}

</div>






<p

className="
text-gray-600
leading-7
italic
"

>

"{review.comment[language]}"


</p>







<div className="mt-6">


<h3

className="
font-bold
text-gray-800
"

>

{review.name}

</h3>




<span

className="
text-sm
text-gray-500
"

>

{review.city}

</span>



</div>




</div>


))


}



</div>






</div>


</section>


);


}