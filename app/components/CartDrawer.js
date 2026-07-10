"use client";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";


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



const router = useRouter();




if(!isCartOpen) return null;




return (

<>


<div

onClick={closeCart}

className="
fixed
inset-0
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



<div
className="
flex
justify-between
mb-6
"
>


<h2
className="
text-xl
font-bold
"
>

🛒 Mon Panier

</h2>



<button

onClick={closeCart}

className="
text-2xl
"

>

×

</button>



</div>







{

cart.length === 0 ?


<p className="text-gray-500">

Votre panier est vide

</p>



:


cart.map(item=>(


<div

key={item.id}

className="
flex
gap-4
border-b
py-4
"

>



<img

src={item.image}

alt={item.name}

className="
w-20
h-20
object-cover
rounded
"

/>






<div className="flex-1">



<h3
className="
font-bold
"
>

{item.name}

</h3>





<p>

{item.price} TND

</p>







<div
className="
flex
gap-3
mt-2
items-center
"
>



<button

onClick={()=>decreaseQuantity(item.id)}

className="
w-7
h-7
rounded
bg-gray-100
"

>

-

</button>





<span className="font-bold">

{item.quantity}

</span>






<button

onClick={()=>increaseQuantity(item.id)}

className="
w-7
h-7
rounded
bg-pink-500
text-white
"

>

+

</button>




</div>







<button

onClick={()=>removeFromCart(item.id)}

className="
text-red-500
text-sm
mt-2
"

>

Supprimer

</button>




</div>






</div>


))


}








<div
className="
mt-6
font-bold
text-lg
"
>

Total :

<span className="text-pink-500">

 {totalPrice()} TND

</span>


</div>







<button

onClick={()=>{

closeCart();

router.push("/cart");

}}

className="
w-full
bg-black
hover:bg-gray-800
text-white
py-3
rounded-xl
mt-4
font-bold
transition
"

>

Voir le panier

</button>





</div>





</>


);


}