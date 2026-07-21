"use client";

import { useLanguage } from "@/context/LanguageContext";


const translations = {

fr:{
title:"Contactez-nous",
desc:"Vous pouvez nous contacter pour toute information.",
name:"Votre nom",
email:"Votre email",
message:"Votre message",
send:"Envoyer",
address:"Adresse",
phone:"Téléphone"
},


en:{
title:"Contact us",
desc:"You can contact us for any information.",
name:"Your name",
email:"Your email",
message:"Your message",
send:"Send",
address:"Address",
phone:"Phone"
},


ar:{
title:"اتصل بنا",
desc:"يمكنك التواصل معنا لأي استفسار.",
name:"الاسم",
email:"البريد الإلكتروني",
message:"رسالتك",
send:"إرسال",
address:"العنوان",
phone:"الهاتف"
}

};





export default function Contact(){


const {language}=useLanguage();

const t=translations[language];



return (


<section

dir={language==="ar"?"rtl":"ltr"}

className="
max-w-7xl
mx-auto
px-6
py-16
"

>


<h1

className="
text-4xl
font-bold
text-center
text-pink-500
mb-4
"

>

{t.title}

</h1>




<p

className="
text-center
text-gray-600
mb-10
"

>

{t.desc}

</p>






<div

className="
grid
md:grid-cols-2
gap-8
"

>





{/* INFO */}


<div

className="
bg-pink-50
rounded-3xl
p-8
"

>


<h2

className="
text-2xl
font-bold
mb-6
"

>

🍼 Baby-Shop

</h2>



<p className="mb-4 text-gray-600">

📍 {t.address}

<br/>

Cité Chebbi, Tozeur, Tunisie

</p>




<p className="mb-4 text-gray-600">

📞 {t.phone}

<br/>

+216 XX XXX XXX

</p>




</div>







{/* FORM */}


<form

className="
bg-white
shadow-lg
rounded-3xl
p-8
border
border-gray-100
"

>


<input

type="text"

placeholder={t.name}

className="
w-full
border
rounded-xl
px-4
py-3
mb-4
outline-none
focus:ring-2
focus:ring-pink-300
"

/>





<input

type="email"

placeholder={t.email}

className="
w-full
border
rounded-xl
px-4
py-3
mb-4
outline-none
focus:ring-2
focus:ring-pink-300
"

/>






<textarea

placeholder={t.message}

rows="5"

className="
w-full
border
rounded-xl
px-4
py-3
mb-4
outline-none
focus:ring-2
focus:ring-pink-300
"

/>







<button

className="
w-full
bg-pink-500
hover:bg-pink-600
text-white
py-3
rounded-xl
font-bold
transition
"

>

{t.send}

</button>




</form>






</div>





</section>


);

}