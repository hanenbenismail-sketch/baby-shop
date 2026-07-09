"use client";


import {useContext,useState} from "react";

import {CartContext} from "../../context/CartContext";



export default function Checkout(){


const {

cart,

totalPrice

}=useContext(CartContext);



const [customer,setCustomer]=useState({

name:"",

phone:"",

address:"",

city:"",

postal:""

});



const [success,setSuccess]=useState(false);



function handleChange(e){


setCustomer({

...customer,

[e.target.name]:e.target.value

});


}



function handleSubmit(e){

e.preventDefault();


setSuccess(true);


}



return (

<div className="container mt-5 mb-5">


<h1 className="text-center mb-5">

📦 Finaliser votre commande

</h1>



<div className="row">



{/* FORMULAIRE LIVRAISON */}


<div className="col-md-6">


<div className="card shadow p-4">


<h3>

🚚 Informations de livraison

</h3>



<form onSubmit={handleSubmit}>


<input

className="form-control mb-3"

name="name"

placeholder="Nom complet"

onChange={handleChange}

required

/>



<input

className="form-control mb-3"

name="phone"

placeholder="Téléphone"

onChange={handleChange}

required

/>



<input

className="form-control mb-3"

name="address"

placeholder="Adresse"

onChange={handleChange}

required

/>



<input

className="form-control mb-3"

name="city"

placeholder="Ville"

onChange={handleChange}

required

/>



<input

className="form-control mb-3"

name="postal"

placeholder="Code postal"

onChange={handleChange}

required

/>



<button

className="btn btn-success w-100"

>

Confirmer la commande

</button>



</form>


</div>


</div>





{/* RECAPITULATIF */}


<div className="col-md-6">


<div className="card shadow p-4">


<h3>

🛒 Votre commande

</h3>




{

cart.length===0

?

<p>
Votre panier est vide
</p>


:


cart.map(item=>(


<div

key={item.id}

className="border-bottom py-3"


>


<div className="d-flex justify-content-between">


<span>

{item.name}

</span>


<span>

{item.quantity} x {item.price} TND

</span>


</div>



</div>


))


}




<h4 className="mt-4 text-end">


Total :

{totalPrice()}

TND


</h4>



</div>


</div>



</div>




{


success &&


<div className="alert alert-success mt-4 text-center">


<h3>
✅ Commande confirmée !
</h3>


<p>

Merci {customer.name} pour votre commande.

</p>


<p>

Nous allons livrer à :

{customer.address}

</p>


</div>


}



</div>

)

}