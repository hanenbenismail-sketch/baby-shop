"use client";


import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";



export default function Checkout(){



const {
cart,
totalPrice,
clearCart
}=useCart();



const router = useRouter();




const [form,setForm]=useState({

name:"",
phone:"",
address:"",
city:""

});



const [success,setSuccess]=useState(false);






function handleChange(e){


setForm({

...form,

[e.target.name]:e.target.value

});


}







function handleSubmit(e){


e.preventDefault();



if(!form.name || !form.phone || !form.address || !form.city){

alert("Veuillez remplir tous les champs");

return;

}




setSuccess(true);



clearCart();


}







if(success){


return (

<div className="
min-h-screen
flex
items-center
justify-center
px-6
">


<div className="
bg-white
shadow-xl
rounded-3xl
p-10
text-center
max-w-lg
">


<h1 className="
text-3xl
font-bold
text-green-600
mb-4
">

✅ Commande confirmée

</h1>



<p className="text-gray-600 mb-6">

Merci {form.name} !
Votre commande sera préparée rapidement.

</p>




<button

onClick={()=>router.push("/")}

className="
bg-pink-500
text-white
px-8
py-3
rounded-full
"

>

Retour accueil

</button>



</div>


</div>


);


}









return (

<section className="
max-w-6xl
mx-auto
px-6
py-12
">


<h1 className="
text-4xl
font-bold
text-center
mb-10
">

🛒 Finaliser la commande

</h1>






<div className="
grid
md:grid-cols-2
gap-10
">





{/* FORMULAIRE */}



<form

onSubmit={handleSubmit}

className="
bg-white
shadow-lg
rounded-3xl
p-8
"

>



<h2 className="
text-2xl
font-bold
mb-6
">

Informations client

</h2>




<input

name="name"

placeholder="Nom complet"

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

placeholder="Téléphone"

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

placeholder="Adresse"

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

placeholder="Ville"

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

Confirmer la commande

</button>





</form>










{/* RESUME */}



<div className="
bg-gray-50
rounded-3xl
p-8
"
>



<h2 className="
text-2xl
font-bold
mb-6
">

Résumé commande

</h2>






{

cart.length === 0 ?

<p>

Votre panier est vide

</p>


:

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





<div className="
mt-6
text-xl
font-bold
flex
justify-between
">


<span>

Total

</span>



<span className="text-pink-500">

{totalPrice()} DT

</span>



</div>





</div>





</div>



</section>


);


}