import React from "react";
import { useState, useContext } from "react";
// custom hook
import { useProducts } from "../../hooks/useProducts";
import { useProductModal } from "../../hooks/useProductModal";
// react icons
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartFill } from "react-icons/pi";
import { GrFormView } from "react-icons/gr";
// context
import { AddToCartContext } from "../../context/AddToCartContext";
import { WishListContext } from "../../context/WishListContext";
// utility
import { shortenLengthOfTitle } from "../../utility/shortenLengthOfTitle";
import { useDisplayProductIcons } from "../../hooks/useDisplayProductIcons";
// components
import ProductModal from "./ProductModal";

function ProductGrid() {
  const { products, isLoading, error } = useProducts();

  // custom hook to display the wishlist, cart and view icons
  const { isShow, setIsShow, handleShow } = useDisplayProductIcons();

  // custom hook to display product modal
  const { isProductModal, handleProductModal, closeProductModal } =
    useProductModal();

  const { addToCart, incrementItemQuantity, decrementItemQuantity } = useContext(AddToCartContext);
  const { addToWishList } = useContext(WishListContext);

  if (isLoading) {
    return <div>Data is loading</div>;
  }

  if (error) {
    return <p>Error: {error.message} </p>;
  }

  return (
    <div className="h-fit grid grid-cols-3 gap-10 md:grid-cols-2 sm:grid-cols-1 sm:pb-4 ">
      {products.map((items) => (
        <div key={items.id} className="h-[25rem] border shadow-md md:h-[35rem] sm:h-[35rem] ">
          <div
            className="h-[70%] relative md:h-4/5 sm:h-4/5"
            onMouseEnter={() => handleShow(items.id)}
            onMouseLeave={() => setIsShow(false)}
            onClick={() => setIsShow(false)}
          >
            <img
              src={items.image}
              alt={items.title}
              className=" w-full h-full md:p-4 sm: p-5 "
            />
            {/* <img
                src={items.image}
                alt={items.title}
                className=" object-cover w-full h-full absolute top-0 left-0 invisible opacity-0 translate-x-[100%] "
              /> */}
            {isShow === items.id && (
              <div className=" z-50 flex absolute bottom-0 w-full h-12 ">
                <div className=" bg-lilac w-1/4 h-full flex justify-center hover:bg-black md:w-[15%] sm:w-[15%] ">
                  <div
                    className=" flex justify-center items-center cursor-pointer  "
                    onClick={() => addToWishList(items)}
                  >
                    {" "}
                    <CiHeart size={25} className="text-white" />{" "}
                  </div>
                </div>
                <div className=" bg-lilac w-2/4 h-full border-x border-slate-100 flex justify-center cursor-pointer hover:bg-black md:w-[70%] sm:w-[70%] ">
                  <div
                    className=" flex justify-center items-center text-white "
                    onClick={() => addToCart(items)}
                  >
                    {" "}
                    <PiShoppingCartFill className=" m-1 text-white " />
                    Add to Cart{" "}
                  </div>
                </div>
                <div className=" bg-lilac w-1/4 h-full flex justify-center cursor-pointer hover:bg-black md:w-[15%] sm:w-[15%] ">
                  <div
                    className=" flex justify-center items-center cursor-pointer text-white "
                    onClick={() => handleProductModal(items.id)}
                  >
                    {" "}
                    <GrFormView size={30} />{" "}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className=" mt-6 p-2 sm:text-center ">
            <p>{shortenLengthOfTitle(items.title)}</p>
            <p className=" text-center pt-1 ">${items.price}</p>
          </div>
          {isProductModal === items.id && (
            <ProductModal
              items={items}
              closeModal={closeProductModal}
              addToCart={addToCart}
              addToWishList={addToWishList}
              decrementItemQuantity={decrementItemQuantity}
              incrementItemQuantity={incrementItemQuantity}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;
