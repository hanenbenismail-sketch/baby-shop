"use client";

import { createContext, useState, useContext } from "react";


export const CartContext = createContext();


export function useCart() {
  return useContext(CartContext);
}


export default function CartProvider({ children }) {


  const [cart, setCart] = useState([]);

  const [isCartOpen, setIsCartOpen] = useState(false);



  function openCart() {
    setIsCartOpen(true);
  }


  function closeCart() {
    setIsCartOpen(false);
  }



  function addToCart(product) {


    const exist = cart.find(
      item => item.id === product.id
    );


    if (exist) {


      setCart(
        cart.map(item =>
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


    } else {


      setCart([
        ...cart,
        {
          ...product,
          quantity:1
        }
      ]);


    }


    openCart();

  }




  function increaseQuantity(id) {


    setCart(
      cart.map(item =>
        item.id === id
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




  function decreaseQuantity(id) {


    setCart(
      cart
      .map(item =>
        item.id === id
        ?
        {
          ...item,
          quantity:item.quantity - 1
        }
        :
        item
      )
      .filter(item => item.quantity > 0)
    );

  }




  function removeFromCart(id) {


    setCart(
      cart.filter(
        item => item.id !== id
      )
    );


  }




  function totalPrice() {


    return cart.reduce(
      (total,item)=>
      total + item.price * item.quantity,
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

      totalPrice,

      isCartOpen,

      openCart,

      closeCart

    }}

    >

      {children}

    </CartContext.Provider>

  );


}