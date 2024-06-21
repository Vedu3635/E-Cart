import React, { createContext, useState, useContext, useEffect } from "react";
import { ProductContext } from "./product-contex";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const fetchedData = useContext(ProductContext);
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : getDefaultCart();
  });

  useEffect(() => {
    !cartItems ? setCartItems(getDefaultCart()) : {};
  }, [fetchedData.dataall]);

  const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < fetchedData.dataall.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };

  useEffect(() => {
    // Save cart items to local storage whenever they change
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      let itemAmount = fetchedData.dataall.find((e) => e.id === Number(itemId));
      if (itemAmount) {
        totalAmount += cartItems[itemId] * itemAmount.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
