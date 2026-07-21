"use client";

import { createContext, useContext, useEffect, useState } from "react";


const WishlistContext = createContext();



export function WishlistProvider({children}){


const [wishlist,setWishlist] = useState([]);



/* Load wishlist from localStorage */

useEffect(()=>{


const savedWishlist = localStorage.getItem("baby-wishlist");


if(savedWishlist){

setWishlist(JSON.parse(savedWishlist));

}


},[]);





/* Save wishlist */

useEffect(()=>{


localStorage.setItem(
"baby-wishlist",
JSON.stringify(wishlist)
);


},[wishlist]);







/* Add product */

function addToWishlist(product){


const exists = wishlist.find(
(item)=>item.id === product.id
);



if(!exists){


setWishlist([
...wishlist,
product
]);


}


}







/* Remove product */

function removeFromWishlist(id){


setWishlist(

wishlist.filter(
(item)=>item.id !== id
)

);


}







/* Check product */

function isInWishlist(id){


return wishlist.some(
(item)=>item.id === id
);


}







/* Clear all */

function clearWishlist(){


setWishlist([]);


}







return (

<WishlistContext.Provider


value={{

wishlist,

addToWishlist,

removeFromWishlist,

isInWishlist,

clearWishlist

}}


>


{children}


</WishlistContext.Provider>


);


}







export function useWishlist(){


return useContext(WishlistContext);


}