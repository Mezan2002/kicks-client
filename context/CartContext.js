/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { createContext, useContext, useEffect, useState } from "react";

/**
 * CartContext provides a centralized state management system for the shopping bag.
 * It handles adding, removing, updates to quantities and sizes, and persistence via localStorage.
 */
const CartContext = createContext();

/**
 * CartProvider wraps the application to provide global cart state.
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - Child components.
 */
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Hydrate cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("kicks_cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart from localStorage", e);
      }
    }
  }, []);

  // Sync cart to localStorage on every change
  useEffect(() => {
    localStorage.setItem("kicks_cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, selectedSize, selectedColor) => {
    setCart((prevCart) => {
      // Check if item already exists with same size/color
      const existingItemIndex = prevCart.findIndex(
        (item) =>
          item.id === product.id &&
          item.selectedSize === selectedSize &&
          item.selectedColor === selectedColor,
      );

      if (existingItemIndex > -1) {
        const newCart = [...prevCart];
        newCart[existingItemIndex].quantity += 1;
        return newCart;
      }

      return [
        ...prevCart,
        { ...product, selectedSize, selectedColor, quantity: 1 },
      ];
    });
  };

  const removeFromCart = (productId, selectedSize, selectedColor) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) =>
          !(
            item.id === productId &&
            item.selectedSize === selectedSize &&
            item.selectedColor === selectedColor
          ),
      ),
    );
  };

  const updateQuantity = (productId, selectedSize, selectedColor, quantity) => {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (
          item.id === productId &&
          item.selectedSize === selectedSize &&
          item.selectedColor === selectedColor
        ) {
          return { ...item, quantity: Math.max(1, quantity) };
        }
        return item;
      });
    });
  };

  const updateSize = (productId, oldSize, selectedColor, newSize) => {
    setCart((prevCart) => {
      const itemToUpdateIndex = prevCart.findIndex(
        (item) =>
          item.id === productId &&
          item.selectedSize === oldSize &&
          item.selectedColor === selectedColor,
      );

      if (itemToUpdateIndex === -1) return prevCart;

      const updatedCart = [...prevCart];
      const itemToUpdate = {
        ...updatedCart[itemToUpdateIndex],
        selectedSize: newSize,
      };

      // Check if another item with the same product ID, NEW size, and same color already exists
      const existingItemIndex = updatedCart.findIndex(
        (item, index) =>
          index !== itemToUpdateIndex &&
          item.id === productId &&
          item.selectedSize === newSize &&
          item.selectedColor === selectedColor,
      );

      if (existingItemIndex > -1) {
        // Merge them
        updatedCart[existingItemIndex].quantity += itemToUpdate.quantity;
        updatedCart.splice(itemToUpdateIndex, 1);
      } else {
        // Just update the size
        updatedCart[itemToUpdateIndex] = itemToUpdate;
      }

      return updatedCart;
    });
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        updateSize,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
