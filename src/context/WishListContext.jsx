import { createContext, useContext, useState } from "react";
import { AddToCartContext } from "./AddToCartContext";

export const WishListContext = createContext(null);

export const WishListContextProvider = ({children}) => {
  const [ wishList, setWishList ] = useState([]);
  const { addToCart }  =useContext(AddToCartContext)

  const addToWishList = (newItem) =>{
    setWishList((prevWishList) => {
      const alreadyInWishList = prevWishList.find((item)=>(item.id === newItem.id));

      if (alreadyInWishList) {
        return prevWishList.map((item)=>
        item.id === newItem.id 
        ? { ...item, quantity: item.quantity + 1 }
        : item
        )
      }else{
        return [...prevWishList, {...newItem, quantity: 1}]
      }
    })
  };

  // Function to increment item quantity
  function incrementItemQuantity(itemId) {
    setWishList((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  // Function to decrement item quantity
  function decrementItemQuantity(itemId) {
    setWishList((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }

  // Function to calculate total price for each item
  function getTotalPriceForItem(item) {
    return Number((item.price * item.quantity).toFixed(2));
  }

  const removeFromWishList = (id) =>{
    const updatedWishList = wishList.filter( item => item.id !== id);
    setWishList(updatedWishList)
  };

  const handleAddToCartWhileRemovingFromWishList = (item) =>{
    addToCart(item)
    removeFromWishList(item.id)
  }
  return <WishListContext.Provider value={{ wishList, addToWishList, incrementItemQuantity, decrementItemQuantity, handleAddToCartWhileRemovingFromWishList, getTotalPriceForItem }}>
    {children}
  </WishListContext.Provider>
}
