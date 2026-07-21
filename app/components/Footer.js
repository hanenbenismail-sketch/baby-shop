"use client";

import Image from "next/image";
import Link from "next/link";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  ShieldCheck,
  Truck,
  CreditCard
} from "lucide-react";


import { useLanguage } from "@/context/LanguageContext";



const translations = {

fr:{
description:
"Votre boutique en ligne spécialisée dans les produits bébé. Des articles de qualité pour le confort de votre bébé.",

navigation:"Navigation",
home:"Accueil",
products:"Produits",
categories:"Catégories",
cart:"Panier",

account:"Mon compte",
login:"Connexion",
register:"Créer un compte",
order:"Commande",

contact:"Contact",
tunisia:"Tunisie",
hours:"Lun - Sam : 08:00 - 18:00",

follow:"Suivez-nous",

security:"Sécurité",
payment:"Paiement sécurisé",
delivery:"Livraison rapide",
verified:"Produits vérifiés",

rights:"Tous droits réservés."
},


en:{
description:
"Your online store specialized in baby products. Quality items for your baby's comfort.",

navigation:"Navigation",
home:"Home",
products:"Products",
categories:"Categories",
cart:"Cart",

account:"My account",
login:"Login",
register:"Create account",
order:"Order",

contact:"Contact",
tunisia:"Tunisia",
hours:"Mon - Sat : 08:00 - 18:00",

follow:"Follow us",

security:"Security",
payment:"Secure payment",
delivery:"Fast delivery",
verified:"Verified products",

rights:"All rights reserved."
},



ar:{
description:
"متجرك الإلكتروني المتخصص في منتجات الأطفال. منتجات ذات جودة لراحة طفلك.",

navigation:"التنقل",
home:"الرئيسية",
products:"المنتجات",
categories:"الأصناف",
cart:"السلة",

account:"حسابي",
login:"تسجيل الدخول",
register:"إنشاء حساب",
order:"الطلب",

contact:"اتصل بنا",
tunisia:"تونس",
hours:"الإثنين - السبت : 08:00 - 18:00",

follow:"تابعنا",

security:"الأمان",
payment:"دفع آمن",
delivery:"توصيل سريع",
verified:"منتجات موثوقة",

rights:"جميع الحقوق محفوظة."
}

};






export default function Footer(){


const {language}=useLanguage();

const t=translations[language];



return (

<footer

dir={language==="ar" ? "rtl" : "ltr"}

className="
mt-16
rounded-t-3xl
bg-gradient-to-br
from-pink-50
via-white
to-blue-50
text-gray-700
"

>



<div

className="
max-w-7xl
mx-auto
px-6
py-12
grid
sm:grid-cols-2
lg:grid-cols-5
gap-10
"

>



{/* BRAND */}

<div>


<Link
href="/"
className="
flex
items-center
gap-3
mb-5
"
>


<Image

src="/images/logo.jpg"

alt="Baby Shop"

width={55}

height={55}

className="
rounded-full
shadow-md
"

/>


<div>

<h2 className="
text-2xl
font-extrabold
bg-gradient-to-r
from-pink-500
to-blue-500
bg-clip-text
text-transparent
">

BABY-SHOP

</h2>


<p className="text-xs text-gray-500">

Boutique bébé 🍼

</p>


</div>


</Link>



<p className="leading-7 text-gray-600">

{t.description}

</p>


</div>







{/* NAVIGATION */}

<div>


<h3 className="text-lg font-bold text-pink-500 mb-5">

{t.navigation}

</h3>



<ul className="space-y-3">


<li>
<Link href="/" className="hover:text-pink-500 transition">
{t.home}
</Link>
</li>


<li>
<Link href="/products" className="hover:text-pink-500 transition">
{t.products}
</Link>
</li>


<li>
<Link href="/categories" className="hover:text-pink-500 transition">
{t.categories}
</Link>
</li>


<li>
<Link href="/cart" className="hover:text-pink-500 transition">
{t.cart}
</Link>
</li>


</ul>


</div>








{/* ACCOUNT */}

<div>


<h3 className="text-lg font-bold text-blue-500 mb-5">

{t.account}

</h3>



<ul className="space-y-3">


<li>
<Link href="/login" className="hover:text-blue-500 transition">
{t.login}
</Link>
</li>


<li>
<Link href="/register" className="hover:text-blue-500 transition">
{t.register}
</Link>
</li>


<li>
<Link href="/checkout" className="hover:text-blue-500 transition">
{t.order}
</Link>
</li>


</ul>


</div>









{/* CONTACT */}

<div>


<h3 className="text-lg font-bold text-pink-500 mb-5">

{t.contact}

</h3>



<div className="space-y-4 text-sm">


<p className="flex items-center gap-3">

<MapPin size={18}/>

{t.tunisia}

</p>


<p className="flex items-center gap-3">

<Phone size={18}/>

+216 XX XXX XXX

</p>


<p className="flex items-center gap-3">

<Mail size={18}/>

contact@baby-shop.com

</p>


<p className="flex items-center gap-3">

<Clock size={18}/>

{t.hours}

</p>


</div>


</div>









{/* SOCIAL + SECURITY */}

<div>


<h3 className="text-lg font-bold text-blue-500 mb-5">

{t.follow}

</h3>



<div className="flex gap-3 mb-7">



<a
className="
w-10
h-10
rounded-full
bg-blue-500
text-white
flex
items-center
justify-center
hover:scale-110
transition
"
>

<span className="font-bold text-lg">
f
</span>

</a>




<a
className="
w-10
h-10
rounded-full
bg-pink-500
text-white
flex
items-center
justify-center
hover:scale-110
transition
"
>

<span className="font-bold text-lg">
◎
</span>

</a>




<a
className="
w-10
h-10
rounded-full
bg-green-500
text-white
flex
items-center
justify-center
hover:scale-110
transition
"
>

<MessageCircle size={20}/>

</a>


</div>







<h3 className="text-lg font-bold text-blue-500 mb-4">

{t.security}

</h3>



<div className="space-y-3 text-sm">


<p className="flex items-center gap-3">

<CreditCard size={18}/>

{t.payment}

</p>


<p className="flex items-center gap-3">

<Truck size={18}/>

{t.delivery}

</p>


<p className="flex items-center gap-3">

<ShieldCheck size={18}/>

{t.verified}

</p>


</div>



</div>



</div>






<div className="
border-t
border-gray-200
text-center
py-5
text-sm
text-gray-500
">

© {new Date().getFullYear()} BABY-SHOP.
{t.rights}

</div>



</footer>


);

}