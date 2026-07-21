"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";


const translations = {

fr:{
title:"🛒 Finaliser la commande",
empty:"Votre panier est vide 🛒",
products:"Voir les produits",
info:"Informations client",
summary:"Résumé commande",
name:"Nom complet",
phone:"Téléphone",
address:"Adresse",
city:"Ville",
button:"Continuer vers paiement",
total:"Total",
error:"Veuillez remplir tous les champs"
},


en:{
title:"🛒 Complete your order",
empty:"Your cart is empty 🛒",
products:"View products",
info:"Customer information",
summary:"Order summary",
name:"Full name",
phone:"Phone",
address:"Address",
city:"City",
button:"Continue to payment",
total:"Total",
error:"Please fill all fields"
},


ar:{
title:"🛒 إتمام الطلب",
empty:"السلة فارغة 🛒",
products:"عرض المنتجات",
info:"معلومات العميل",
summary:"ملخص الطلب",
name:"الاسم الكامل",
phone:"الهاتف",
address:"العنوان",
city:"المدينة",
button:"متابعة الدفع",
total:"المجموع",
error:"يرجى ملء جميع الحقول"
}

};



export default function Checkout(){


const {
cart,
totalPrice
}=useCart();


const router=useRouter();


const {language}=useLanguage();


const t=translations[language];



const [form,setForm]=useState({

name:"",
phone:"",
address:"",
city:""

});





function handleChange(e){

setForm({

...form,

[e.target.name]:e.target.value

});

}




function handleSubmit(e){

e.preventDefault();


if(
!form.name ||
!form.phone ||
!form.address ||
!form.city
){

alert(t.error);

return;

}



localStorage.setItem(
"customer",
JSON.stringify(form)
);



router.push("/payment");


}






if(cart.length===0){


return (

<div
className="
min-h-screen
flex
items-center
justify-center
px-6
"
>


<div className="text-center">


<h1
className="
text-3xl
font-bold
mb-5
"
>

{t.empty}

</h1>



<button

onClick={()=>router.push("/products")}

className="
bg-pink-500
text-white
px-8
py-3
rounded-xl
font-bold
"

>

{t.products}

</button>



</div>


</div>

);

}







return (


<section

dir={language==="ar" ? "rtl":"ltr"}

className="
max-w-6xl
mx-auto
px-4
sm:px-6
py-12
"

>



<h1
className="
text-4xl
font-bold
text-center
mb-10
"
>

{t.title}

</h1>






<div
className="
grid
md:grid-cols-2
gap-10
"
>







<form

onSubmit={handleSubmit}

className="
bg-white
shadow-lg
rounded-3xl
p-8
border
"

>


<h2
className="
text-2xl
font-bold
mb-6
"
>

{t.info}

</h2>






<input

name="name"

placeholder={t.name}

value={form.name}

onChange={handleChange}

className="
w-full
border
rounded-xl
p-3
mb-4
"

/>






<input

name="phone"

placeholder={t.phone}

value={form.phone}

onChange={handleChange}

className="
w-full
border
rounded-xl
p-3
mb-4
"

/>






<input

name="address"

placeholder={t.address}

value={form.address}

onChange={handleChange}

className="
w-full
border
rounded-xl
p-3
mb-4
"

/>






<input

name="city"

placeholder={t.city}

value={form.city}

onChange={handleChange}

className="
w-full
border
rounded-xl
p-3
mb-6
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
"

>

{t.button}

</button>



</form>










<div
className="
bg-gray-50
rounded-3xl
p-8
border
"
>



<h2
className="
text-2xl
font-bold
mb-6
"
>

{t.summary}

</h2>





{

cart.map(item=>(


<div

key={item.id}

className="
flex
justify-between
border-b
py-3
"

>

<span>

{item.name?.[language]} × {item.quantity}

</span>


<span>

{item.price * item.quantity} DT

</span>


</div>


))

}







<div
className="
mt-6
flex
justify-between
text-xl
font-bold
"
>


<span>

{t.total}

</span>


<span
className="
text-pink-500
"
>

{totalPrice()} DT

</span>


</div>





</div>






</div>



</section>


);

}