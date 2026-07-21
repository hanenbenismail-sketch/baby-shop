"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";



const translations = {

fr:{
title:"💳 Paiement",
method:"Méthode de paiement",
delivery:"💵 Paiement à la livraison",
card:"💳 Carte bancaire",
confirm:"Confirmer paiement",
summary:"Résumé",
total:"Total",
success:"✅ Paiement confirmé",
thanks:"Merci pour votre commande. Votre colis sera préparé rapidement.",
home:"Retour accueil",
empty:"Votre panier est vide"
},


en:{
title:"💳 Payment",
method:"Payment method",
delivery:"💵 Cash on delivery",
card:"💳 Bank card",
confirm:"Confirm payment",
summary:"Summary",
total:"Total",
success:"✅ Payment confirmed",
thanks:"Thank you for your order. Your package will be prepared soon.",
home:"Back home",
empty:"Your cart is empty"
},


ar:{
title:"💳 الدفع",
method:"طريقة الدفع",
delivery:"💵 الدفع عند الاستلام",
card:"💳 البطاقة البنكية",
confirm:"تأكيد الدفع",
summary:"الملخص",
total:"المجموع",
success:"✅ تم تأكيد الدفع",
thanks:"شكراً على طلبك. سيتم تجهيز طلبك بسرعة.",
home:"العودة للرئيسية",
empty:"السلة فارغة"
}

};






export default function Payment(){



const {
cart,
totalPrice,
clearCart
}=useCart();



const router=useRouter();


const {language}=useLanguage();


const t=translations[language];




const [paymentMethod,setPaymentMethod]=useState("delivery");


const [success,setSuccess]=useState(false);






function handlePayment(){


if(cart.length===0) return;


setSuccess(true);


clearCart();


}







if(success){


return (

<div

dir={language==="ar"?"rtl":"ltr"}

className="
min-h-screen
flex
items-center
justify-center
px-6
"

>


<div

className="
bg-white
shadow-xl
rounded-3xl
p-10
text-center
max-w-lg
"

>


<h1

className="
text-3xl
font-bold
text-green-600
mb-4
"

>

{t.success}

</h1>



<p

className="
text-gray-600
mb-6
"

>

{t.thanks}

</p>





<button

onClick={()=>router.push("/")}

className="
bg-pink-500
hover:bg-pink-600
text-white
px-8
py-3
rounded-xl
font-bold
"

>

{t.home}

</button>



</div>



</div>


);


}






return (


<section

dir={language==="ar"?"rtl":"ltr"}

className="
max-w-5xl
mx-auto
px-6
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






{

cart.length===0 &&

<p className="
text-center
text-red-500
mb-6
">

{t.empty}

</p>

}






<div

className="
grid
md:grid-cols-2
gap-10
"

>





<div

className="
bg-white
rounded-3xl
shadow-lg
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

{t.method}

</h2>






<label

className="
flex
items-center
gap-3
border
rounded-xl
p-4
mb-4
cursor-pointer
"

>


<input

type="radio"

checked={paymentMethod==="delivery"}

onChange={()=>setPaymentMethod("delivery")}

/>


<span>

{t.delivery}

</span>


</label>







<label

className="
flex
items-center
gap-3
border
rounded-xl
p-4
cursor-pointer
"

>


<input

type="radio"

checked={paymentMethod==="card"}

onChange={()=>setPaymentMethod("card")}

/>


<span>

{t.card}

</span>


</label>








<button

disabled={cart.length===0}

onClick={handlePayment}

className="
w-full
mt-8
bg-pink-500
hover:bg-pink-600
disabled:bg-gray-300
text-white
py-3
rounded-xl
font-bold
transition
"

>

{t.confirm}

</button>






</div>









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

{item.name} × {item.quantity}

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