import { useState } from "react";

export const useDisplayProductIcons = () => {
  // state to save the display of the product wishlist, addtocart and view icons
  const [isShow, setIsShow] = useState(null);

  // function to handle display of product wishlist, addtocart and view icons
  const handleShow = (productId) => {
    setIsShow(isShow === productId ? null: productId);
  };
  
  return {
    isShow,
    setIsShow,
    handleShow,
  };
};
