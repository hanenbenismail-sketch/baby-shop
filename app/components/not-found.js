"use client";

import Link from "next/link";

import { useLanguage } from "@/context/LanguageContext";



const translations = {

fr:{
title:"Page introuvable",
text:"Désolé, la page que vous recherchez n'existe pas ou a été déplacée.",
button:"🏠 Retour à l'accueil"
},


en:{
title:"Page not found",
text:"Sorry, the page you are looking for does not exist or has been moved.",
button:"🏠 Back to home"
},


ar:{
title:"الصفحة غير موجودة",
text:"عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.",
button:"🏠 العودة للرئيسية"
}

};




export default function NotFound(){


const {language}=useLanguage();

const t=translations[language];



return (


<main

dir={language==="ar" ? "rtl":"ltr"}

className="
min-h-screen
flex
flex-col
items-center
justify-center
bg-pink-50
px-6
text-center
"

>


<h1

className="
text-8xl
font-extrabold
text-pink-500
"

>

404

</h1>





<h2

className="
mt-4
text-3xl
font-bold
text-gray-800
"

>

{t.title}

</h2>






<p

className="
mt-3
max-w-md
text-gray-600
"

>

{t.text}

</p>






<Link

href="/"

className="
mt-8
rounded-xl
bg-pink-500
px-6
py-3
text-white
font-semibold
transition
hover:bg-pink-600
"

>

{t.button}

</Link>




</main>


);


}