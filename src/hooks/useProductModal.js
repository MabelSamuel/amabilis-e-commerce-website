import { useState } from "react";

export const useProductModal = () =>{
    // state to save the display of product modal
  const [isProductModal, setIsProductModal] = useState(null);

  // function to handle display of product modal when you click on view button
  const handleProductModal = (productId) => {
    setIsProductModal((prev) => (prev === productId ? null : productId));
  };

  const closeProductModal = () =>{
    setIsProductModal(null)
  };

  return {
    isProductModal,
    handleProductModal,
    closeProductModal
  };
}