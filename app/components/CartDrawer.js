"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";



const translations = {

fr:{
title:"🛒 Mon Panier",
empty:"Votre panier est vide",
price:"DT",
delete:"Supprimer",
total:"Total :",
view:"Voir le panier",
size:"Taille",
color:"Couleur"
},


en:{
title:"🛒 My Cart",
empty:"Your cart is empty",
price:"TND",
delete:"Remove",
total:"Total:",
view:"View cart",
size:"Size",
color:"Color"
},


ar:{
title:"🛒 سلتي",
empty:"السلة فارغة",
price:"د.ت",
delete:"حذف",
total:"المجموع:",
view:"عرض السلة",
size:"المقاس",
color:"اللون"
}

};





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



const {language}=useLanguage();


const t=translations[language];


const router=useRouter();





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

dir={language==="ar" ? "rtl":"ltr"}

className="
fixed
right-0
top-0
h-full
w-full
sm:w-[400px]
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
items-center
mb-6
"

>


<h2 className="
text-xl
font-bold
">

{t.title}

</h2>




<button

onClick={closeCart}

className="
text-3xl
text-gray-500
"

>

×


</button>


</div>






{

cart.length===0 ?


<p className="
text-gray-500
text-center
mt-10
">

{t.empty}

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



<div className="
relative
w-20
h-20
flex-shrink-0
">


<Image

src={item.image}

alt={
typeof item.name==="object"
?
item.name[language]
:
item.name
}

fill

className="
object-cover
rounded-xl
"

/>


</div>






<div className="flex-1">


<h3 className="
font-bold
text-gray-800
">

{

typeof item.name==="object"

?

item.name[language]

:

item.name

}

</h3>





<p className="
text-pink-500
font-bold
">

{item.price} {t.price}

</p>






{
item.selectedSize &&

<p className="
text-sm
text-gray-500
">

{t.size} :
{item.selectedSize}

</p>

}





{
item.selectedColor &&

<p className="
text-sm
text-gray-500
">

{t.color} :
{item.selectedColor}

</p>

}







<div className="
flex
items-center
gap-3
mt-3
">


<button

onClick={()=>decreaseQuantity(item.id)}

className="
w-8
h-8
rounded-full
bg-gray-100
"

>

-

</button>





<span className="
font-bold
">

{item.quantity}

</span>





<button

onClick={()=>increaseQuantity(item.id)}

className="
w-8
h-8
rounded-full
bg-pink-500
text-white
"

>

+

</button>



</div>






<p className="
font-semibold
mt-2
">

{item.price * item.quantity} {t.price}

</p>







<button

onClick={()=>removeFromCart(item.id)}

className="
text-red-500
text-sm
mt-2
"

>

{t.delete}

</button>



</div>



</div>


))


}








<div className="
mt-6
text-lg
font-bold
">

{t.total}


<span className="
text-pink-500
ml-2
">

{totalPrice()} {t.price}

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
text-white
py-3
rounded-xl
mt-5
font-bold
hover:bg-gray-800
transition
"

>

{t.view}

</button>






</div>



</>


);


}