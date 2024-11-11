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
import { Link, useOutletContext } from "react-router-dom";

function ProductGrid() {
  const filteredProducts = useOutletContext();

  const { isLoading, error, refetch } = useProducts();

  // custom hook to display the wishlist, cart and view icons
  const { isShow, setIsShow, handleShow } = useDisplayProductIcons();

  // custom hook to display product modal
  const { isProductModal, handleProductModal, closeProductModal } =
    useProductModal();

  const { addToCart, incrementItemQuantity, decrementItemQuantity } =
    useContext(AddToCartContext);
  const { addToWishList } = useContext(WishListContext);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-[60] flex justify-center items-center bg-white ">
        <div className="w-12 h-12 aspect-square rounded-full border-8 border-lilac border-t-transparent animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-white">
        <h1 className="text-3xl font-bold text-red-500 mb-4">
          Something went wrong
        </h1>
        <p className="text-gray-600 mb-6">Error: {error.message}</p>
        <button
          className="bg-lilac text-white py-2 px-4 rounded hover:bg-lilac-dark transition duration-300"
          onClick={() => refetch()}
        >
          Refresh Page
        </button>
      </div>
    );
  }

  return (
    <div className="h-fit grid grid-cols-3 gap-10 md:grid-cols-2 sm:grid-cols-1 sm:pb-4 ">
      {filteredProducts?.length > 0 ? (
        filteredProducts.map((items) => (
          <div
            key={items.id}
            className="h-[25rem] border shadow-md md:h-[35rem] sm:h-[35rem] "
          >
            <div
              className="h-[70%] relative md:h-4/5 sm:h-4/5"
              onMouseEnter={() => handleShow(items.id)}
              onMouseLeave={() => setIsShow(false)}
              onClick={() => handleShow(items.id)}
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
                    <button
                      className=" flex justify-center items-center cursor-pointer  "
                      onClick={() => addToWishList(items)}
                    >
                      {" "}
                      <CiHeart size={25} className="text-white" />{" "}
                    </button>
                  </div>
                  <div className=" bg-lilac w-2/4 h-full border-x border-slate-100 flex justify-center cursor-pointer hover:bg-black md:w-[70%] sm:w-[70%] ">
                    <button
                      className=" flex justify-center items-center text-white "
                      onClick={() => addToCart(items)}
                    >
                      {" "}
                      <PiShoppingCartFill className=" m-1 text-white " />
                      Add to Cart{" "}
                    </button>
                  </div>
                  <div className=" bg-lilac w-1/4 h-full flex justify-center cursor-pointer hover:bg-black md:w-[15%] sm:w-[15%] ">
                    <button
                      className=" flex justify-center items-center cursor-pointer text-white "
                      onClick={() => handleProductModal(items.id)}
                    >
                      {" "}
                      <GrFormView size={30} />{" "}
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className=" mt-6 p-2 sm:text-center ">
              <p className="hover:text-lilac relative group">
                <Link to={`/product-details/${items.id}`}>
                  {shortenLengthOfTitle(items.title)}
                </Link><span className="absolute top-full left-1/2 -ml-[7.125rem] hidden group-hover:inline-block w-full bg-lilac text-white text-center py-1 rounded-lg z-10 after:content-[''] after:absolute after:bottom-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-solid after:border-b-lilac after:border-x-transparent">{items.title}</span>
              </p>
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
        ))
      ) : (
        <div className="font-medium text-xl italic">No Products Found</div>
      )}
    </div>
  );
}

export default ProductGrid;
