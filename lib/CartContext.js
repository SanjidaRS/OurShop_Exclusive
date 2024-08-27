// lib/CartContext.js
// import { assert } from "oracledb/lib/errors";
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    console.log(cart);
    // alert("Product added to cart");
  };

  const removeFromCart = (productName) => {
    // console.log(productId);
    setCart((prevCart) => prevCart.filter((item) => item.name !== productName));
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, getCartTotal }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}