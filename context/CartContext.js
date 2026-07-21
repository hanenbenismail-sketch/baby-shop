"use client";


import {
createContext,
useState,
useContext,
useEffect
} from "react";



export const CartContext = createContext();



export function useCart(){

return useContext(CartContext);

}






export default function CartProvider({children}){


const [cart,setCart]=useState([]);

const [isCartOpen,setIsCartOpen]=useState(false);





// LOAD CART

useEffect(()=>{


if(typeof window !== "undefined"){


const saved = localStorage.getItem("baby-cart");


if(saved){

setCart(JSON.parse(saved));

}


}


},[]);








// SAVE CART

useEffect(()=>{


if(typeof window !== "undefined"){


localStorage.setItem(

"baby-cart",

JSON.stringify(cart)

);


}


},[cart]);









function openCart(){

setIsCartOpen(true);

}



function closeCart(){

setIsCartOpen(false);

}









function addToCart(product){



setCart(prevCart=>{



const exist = prevCart.find(item=>

item.id === product.id &&

item.selectedSize === product.selectedSize &&

item.selectedColor === product.selectedColor

);






if(exist){



return prevCart.map(item=>

item.id === product.id &&

item.selectedSize === product.selectedSize &&

item.selectedColor === product.selectedColor

?

{

...item,

quantity:item.quantity + 1

}

:

item


);



}







return [


...prevCart,


{

...product,

quantity:1

}


];




});




openCart();



}









function increaseQuantity(id){


setCart(prev=>

prev.map(item=>

item.id===id

?

{

...item,

quantity:item.quantity+1

}

:

item


)

);



}









function decreaseQuantity(id){


setCart(prev=>

prev

.map(item=>

item.id===id

?

{

...item,

quantity:item.quantity-1

}

:

item


)

.filter(item=>item.quantity>0)


);



}









function removeFromCart(id){


setCart(prev=>

prev.filter(item=>

item.id!==id

)


);


}









function clearCart(){


setCart([]);


if(typeof window !== "undefined"){

localStorage.removeItem("baby-cart");

}


closeCart();


}









function totalPrice(){


return cart.reduce(

(total,item)=>

total +

(item.price * item.quantity),

0

);


}









function cartCount(){


return cart.reduce(

(total,item)=>

total + item.quantity,

0

);


}









return (


<CartContext.Provider


value={{


cart,


addToCart,


removeFromCart,


increaseQuantity,


decreaseQuantity,


clearCart,


totalPrice,


cartCount,


isCartOpen,


openCart,


closeCart



}}


>


{children}


</CartContext.Provider>


);


}