"use client";


import {useContext} from "react";

import {CartContext} from "../../context/CartContext";



export default function Cart(){


const {

cart,

removeFromCart,

updateQuantity,

totalPrice

}=useContext(CartContext);



return (

<div>


<h1 className="mb-4">

🛒 Mon Panier

</h1>



{

cart.length===0

?

<h3>
Votre panier est vide
</h3>


:


cart.map(item=>(


<div

className="card mb-3"

key={item.id}

>


<div className="card-body row align-items-center">


<div className="col-md-3">


<img

src={item.image}

className="img-fluid"

style={{
height:"120px",
objectFit:"cover"
}}

/>


</div>



<div className="col-md-3">


<h5>

{item.name}

</h5>


<p>

{item.price} TND

</p>


</div>



<div className="col-md-3">


<button

className="btn btn-secondary"

onClick={()=>updateQuantity(

item.id,

item.quantity-1

)}

>

-

</button>


<span className="mx-3">

{item.quantity}

</span>


<button

className="btn btn-primary"

onClick={()=>updateQuantity(

item.id,

item.quantity+1

)}

>

+

</button>


</div>



<div className="col-md-3">


<button

className="btn btn-danger"

onClick={()=>removeFromCart(item.id)}

>

Supprimer

</button>


</div>


</div>


</div>


))


}



<h3 className="text-end mt-4">

Total : {totalPrice()} TND

</h3>



</div>

)

}