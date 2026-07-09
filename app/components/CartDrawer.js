"use client";

import { useCart } from "@/context/CartContext";


export default function CartDrawer(){


const {

cart,

isCartOpen,

closeCart,

removeFromCart,

increaseQuantity,

decreaseQuantity,

totalPrice

}=useCart();



if(!isCartOpen) return null;



return (

<>


<div

onClick={closeCart}

className="
fixed inset-0
bg-black/40
z-40
"

/>



<div

className="
fixed
right-0
top-0
h-full
w-[380px]
bg-white
z-50
p-6
shadow-xl
overflow-y-auto
"

>


<div className="flex justify-between mb-6">

<h2 className="text-xl font-bold">
🛒 Mon Panier
</h2>


<button

onClick={closeCart}

className="text-2xl"

>
×
</button>


</div>



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
flex gap-4
border-b
py-4
"

>


<img

src={item.image}

className="
w-20
h-20
object-cover
rounded
"

/>



<div>

<h3 className="font-bold">
{item.name}
</h3>


<p>
{item.price} TND
</p>


<div className="flex gap-3 mt-2">


<button
onClick={()=>decreaseQuantity(item.id)}
>
-
</button>


<span>
{item.quantity}
</span>


<button
onClick={()=>increaseQuantity(item.id)}
>
+
</button>


</div>


<button

onClick={()=>removeFromCart(item.id)}

className="
text-red-500
text-sm
"

>
Supprimer
</button>


</div>



</div>


))

}



<div className="mt-6 font-bold">

Total : {totalPrice()} TND

</div>


<button

className="
w-full
bg-black
text-white
py-3
rounded-xl
mt-4
"

>

Voir le panier

</button>


</div>


</>

);


}