"use client";

import { createContext, useState } from "react";


export const CartContext = createContext();


export default function CartProvider({children}){


const [cart,setCart] = useState([]);



/* Ajouter produit */

function addToCart(product){


const exist = cart.find(
(item)=>item.id === product.id
);



if(exist){


setCart(

cart.map(item=>

item.id === product.id

?

{
...item,
quantity:item.quantity + 1
}

:

item

)

);


}

else{


setCart([

...cart,

{
...product,
quantity:1
}

]);


}


}



/* Modifier quantité */

function updateQuantity(id, quantity){


if(quantity <=0){

removeFromCart(id);

return;

}


setCart(

cart.map(item=>

item.id === id

?

{
...item,
quantity
}

:

item

)

);


}



/* Supprimer */

function removeFromCart(id){


setCart(

cart.filter(item=>item.id !== id)

);


}



/* Total */

function totalPrice(){


return cart.reduce(

(total,item)=>

total + item.price * item.quantity

,0);


}



return (

<CartContext.Provider

value={{

cart,

addToCart,

removeFromCart,

updateQuantity,

totalPrice

}}

>

{children}

</CartContext.Provider>


);


}