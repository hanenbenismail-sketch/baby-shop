"use client";


import {useParams} from "next/navigation";
import {useContext} from "react";

import {CartContext} from "../../../context/CartContext";

import products from "../../data/products";



export default function ProductDetails(){


const params = useParams();


const {addToCart}=useContext(CartContext);



const product = products.find(

(item)=> item.id === params.id

);



if(!product){

return (

<h2 className="text-danger">

Produit introuvable

</h2>

)

}



return (

<div className="row mt-5">


<div className="col-md-6">


<img

src={product.image}

alt={product.name}

className="rounded shadow"

style={{

width:"100%",

height:"450px",

objectFit:"cover"

}}

/>


</div>




<div className="col-md-6">


<h1>

{product.name}

</h1>


<h3 className="text-primary">

{product.price} TND

</h3>


<h5>

Catégorie : {product.category}

</h5>


<p>

{product.description}

</p>



<button

className="btn btn-success"

onClick={()=>addToCart(product)}

>

Ajouter au panier 🛒

</button>


</div>


</div>

)

}