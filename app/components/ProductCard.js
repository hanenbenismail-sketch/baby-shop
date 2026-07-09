"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";


export default function ProductCard({product}){


const { addToCart } = useCart();


return (

<div className="card shadow h-100">


<div
style={{
height:"250px",
overflow:"hidden"
}}
>

<img

src={product.image}

className="card-img-top"

alt={product.name}

style={{
width:"100%",
height:"100%",
objectFit:"cover"
}}

/>

</div>



<div className="card-body">


<h5 className="card-title">
{product.name}
</h5>


<p className="text-primary fw-bold">
{product.price} TND
</p>


<p>
{product.description}
</p>



<div className="d-flex gap-2">


<button

onClick={() => addToCart(product)}

className="btn btn-success"

>

Ajouter au panier

</button>



<Link

href={`/product/${product.id}`}

className="btn btn-primary"

>

Voir détail

</Link>


</div>


</div>


</div>

)

}