"use client";

import { useLanguage } from "@/context/LanguageContext";



const translations = {

fr:{
title:"Pourquoi choisir Baby Shop ?",

features:[

{
icon:"🚚",
title:"Livraison rapide",
text:"Recevez vos produits bébé en toute simplicité."
},

{
icon:"⭐",
title:"Qualité garantie",
text:"Des articles choisis avec soin pour bébé."
},

{
icon:"🔒",
title:"Paiement sécurisé",
text:"Vos achats sont protégés et fiables."
}

]

},



en:{
title:"Why choose Baby Shop?",

features:[

{
icon:"🚚",
title:"Fast Delivery",
text:"Receive your baby products easily."
},

{
icon:"⭐",
title:"Guaranteed Quality",
text:"Carefully selected items for your baby."
},

{
icon:"🔒",
title:"Secure Payment",
text:"Your purchases are protected and reliable."
}

]

},



ar:{
title:"لماذا تختار Baby Shop؟",

features:[

{
icon:"🚚",
title:"توصيل سريع",
text:"استلم منتجات طفلك بكل سهولة."
},

{
icon:"⭐",
title:"جودة مضمونة",
text:"منتجات مختارة بعناية لطفلك."
},

{
icon:"🔒",
title:"دفع آمن",
text:"مشترياتك محمية وموثوقة."
}

]

}

};







export default function Features(){



const {language}=useLanguage();


const t=translations[language];





return (


<section

dir={language==="ar" ? "rtl":"ltr"}

className="
py-12
bg-pink-50
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
text-center
text-3xl
font-bold
text-gray-800
mb-8
"

>

{t.title}

</h2>







<div

className="
grid
grid-cols-1
md:grid-cols-3
gap-5
"

>


{

t.features.map((item,index)=>(


<div

key={index}

className="
bg-white
rounded-2xl
p-5
text-center
shadow-sm
hover:shadow-lg
transition
"

>


<div

className="
text-4xl
mb-3
"

>

{item.icon}

</div>





<h3

className="
font-bold
text-lg
text-gray-800
mb-2
"

>

{item.title}

</h3>






<p

className="
text-sm
text-gray-500
leading-relaxed
"

>

{item.text}

</p>




</div>


))


}


</div>





</div>


</section>


);


}