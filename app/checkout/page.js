"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";


export default function Checkout(){


const {
cart,
totalPrice
}=useCart();



const router = useRouter();



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

alert("Veuillez remplir tous les champs");

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


<div
className="
text-center
"
>


<h1
className="
text-3xl
font-bold
text-gray-800
mb-5
"
>

Votre panier est vide 🛒

</h1>



<button

onClick={()=>router.push("/products")}

className="
bg-pink-500
hover:bg-pink-600
text-white
px-8
py-3
rounded-xl
font-bold
transition
"

>

Voir les produits

</button>



</div>


</div>

);


}







return (


<section
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
text-gray-800
"
>

🛒 Finaliser la commande

</h1>






<div
className="
grid
md:grid-cols-2
gap-10
"
>






{/* FORMULAIRE */}



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

Informations client

</h2>






<input

type="text"

name="name"

required

placeholder="Nom complet"

value={form.name}

onChange={handleChange}

className="
w-full
border
rounded-xl
p-3
mb-4
outline-none
focus:ring-2
focus:ring-pink-300
"

/>






<input

type="tel"

name="phone"

required

placeholder="Téléphone"

value={form.phone}

onChange={handleChange}

className="
w-full
border
rounded-xl
p-3
mb-4
outline-none
focus:ring-2
focus:ring-pink-300
"

/>






<input

type="text"

name="address"

required

placeholder="Adresse"

value={form.address}

onChange={handleChange}

className="
w-full
border
rounded-xl
p-3
mb-4
outline-none
focus:ring-2
focus:ring-pink-300
"

/>






<input

type="text"

name="city"

required

placeholder="Ville"

value={form.city}

onChange={handleChange}

className="
w-full
border
rounded-xl
p-3
mb-6
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

Continuer vers paiement

</button>




</form>









{/* RESUME */}



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

Résumé commande

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



<span
className="
font-semibold
"
>

{item.price * item.quantity} DT

</span>



</div>


))


}







<div
className="
mt-6
text-xl
font-bold
flex
justify-between
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