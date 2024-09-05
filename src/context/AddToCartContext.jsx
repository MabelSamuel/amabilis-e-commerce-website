import { createContext, useEffect, useState } from "react";

export const AddToCartContext = createContext(null);

export const AddToCartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Update cartCount whenever cart changes
    const totalQuantity = cart.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setCartCount(totalQuantity);
  }, [cart]);

  const addToCart = (newItem) => {
    setCart((prevCart) => {
      const alreadyInCart = prevCart.find((item) => item.id === newItem.id);

      if (alreadyInCart) {
        return prevCart.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + (newItem.quantity || 1 ) }
            : item
        );
      } else {
        return [...prevCart, { ...newItem, quantity: newItem.quantity || 1 }];
      }
    });
    setCartCount((prevCartCount) => prevCartCount + 1);
  };

  function removeFromCart(id) {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    setCartCount((prevCartCount) => prevCartCount - 1);
  }

  // Function to increment item quantity
  function incrementItemQuantity(itemId) {
    setCart((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  // Function to decrement item quantity
  function decrementItemQuantity(itemId) {
    setCart((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }

  // Function to calculate total price for each item
  function getTotalPriceForItem(item) {
    return item.price * item.quantity;
  }

  // Function to calculate the total price of the whole cart
  function getTotalPriceOfCart() {
    return cart.reduce((total, item) => total + getTotalPriceForItem(item), 0);
  }

  // function to clear cart
  function clearCart() {
    setCart([]);
    setCartCount(0)
  }

  return (
    <AddToCartContext.Provider
      value={{
        cart,
        setCart,
        cartCount,
        setCartCount,
        addToCart,
        removeFromCart,
        incrementItemQuantity,
        decrementItemQuantity,
        getTotalPriceForItem,
        getTotalPriceOfCart,
        clearCart
      }}
    >
      {children}
    </AddToCartContext.Provider>
  );
};