"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";


export default function Payment(){


const {
cart,
totalPrice,
clearCart
}=useCart();


const router = useRouter();



const [paymentMethod,setPaymentMethod]=useState("delivery");


const [success,setSuccess]=useState(false);





function handlePayment(){


setSuccess(true);

clearCart();


}






if(success){


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

✅ Paiement confirmé

</h1>



<p
className="
text-gray-600
mb-6
"
>

Merci pour votre commande.

Votre colis sera préparé rapidement.

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

Retour accueil

</button>



</div>


</div>


);


}






return (


<section
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

💳 Paiement

</h1>






<div
className="
grid
md:grid-cols-2
gap-10
"
>






{/* PAYMENT OPTIONS */}



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

Méthode de paiement

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

value="delivery"

checked={paymentMethod==="delivery"}

onChange={(e)=>setPaymentMethod(e.target.value)}

/>


<span>

💵 Paiement à la livraison

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

value="card"

checked={paymentMethod==="card"}

onChange={(e)=>setPaymentMethod(e.target.value)}

/>


<span>

💳 Carte bancaire

</span>


</label>







<button

onClick={handlePayment}

className="
w-full
mt-8
bg-pink-500
hover:bg-pink-600
text-white
py-3
rounded-xl
font-bold
transition
"

>

Confirmer paiement

</button>




</div>









{/* SUMMARY */}



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

Résumé

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

Total

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