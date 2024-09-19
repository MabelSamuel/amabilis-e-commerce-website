import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";
import { shortenLengthOfTitleInHomePage } from "../../utility/shortenLengthOfTitle";
import { useDisplayProductIcons } from "../../hooks/useDisplayProductIcons";
import { useProductModal } from "../../hooks/useProductModal";
// icons
import { PiShoppingCartFill } from "react-icons/pi";
import { GrFormView } from "react-icons/gr";
import { CiHeart } from "react-icons/ci";
import { AddToCartContext } from "../../context/AddToCartContext";
import { WishListContext } from "../../context/WishListContext";
import ProductModal from "../collection/ProductModal";

const SearchResult = () => {
  const { products = [], isLoading, error, refetch } = useProducts();
  // custom hook to display the wishlist, cart and view icons
  const { isShow, setIsShow, handleShow } = useDisplayProductIcons();

  // custom hook to display product modal
  const { isProductModal, handleProductModal, closeProductModal } =
    useProductModal();
  const { addToCart } = useContext(AddToCartContext);
  const { addToWishList } = useContext(WishListContext);
  const query = new URLSearchParams(useLocation().search).get("query") || "";
  const matchingProducts = Array.isArray(products)
    ? products.filter(
        (product) =>
          product.title?.toLowerCase().includes(query.toLowerCase()) ||
          product.category?.toLowerCase().includes(query.toLowerCase())
      )
    : [];
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
    <div className="m-6 p-10 shadow-sm border">
      <h2 className="font-medium text-2xl">Search Results for "{query}"</h2>
      <div className="grid grid-cols-5 gap-8 mt-6 md:grid-cols-2 sm:grid-cols-1">
        {matchingProducts.length > 0 ? (
          matchingProducts.map((product) => (
            <div
              key={product.id}
              className="border shadow-md p-2 w-56 h-96 md:h-fit md:w-full sm:h-fit sm:w-full "
            >
              <div
                className="h-3/5 relative shadow-sm md:h-[27rem] sm:h-[27rem] "
                onMouseEnter={() => handleShow(product.id)}
                onMouseLeave={() => setIsShow(false)}
                onClick={() => handleShow(product.id)}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className=" p-5 w-full h-full sm:object-contain "
                />
                {isShow === product.id && (
                  <div className=" flex absolute top-2/4 w-full justify-center ">
                    <button
                      className="size-8 flex justify-center items-center bg-lilac rounded-full mr-2 hover:bg-black md:size-12 sm:size-12"
                      onClick={() => addToCart(product)}
                    >
                      <PiShoppingCartFill className="text-white size-5 md:size-8 sm:size-8 " />
                    </button>
                    <button
                      className="size-8 flex justify-center items-center bg-lilac rounded-full mr-2 hover:bg-black md:size-12 sm:size-12"
                      onClick={() => handleProductModal(product.id)}
                    >
                      <GrFormView className="text-white size-5 md:size-10 sm:size-10" />
                    </button>
                    <button
                      className="size-8 flex justify-center items-center bg-lilac rounded-full hover:bg-black md:size-12 sm:size-12"
                      onClick={() => addToWishList(product)}
                    >
                      <CiHeart className="text-white size-5 md:size-10 sm:size-10" />
                    </button>
                  </div>
                )}
                {isProductModal === product.id && (
                  <ProductModal
                    items={product}
                    closeModal={closeProductModal}
                    addToCart={addToCart}
                    addToWishList={addToWishList}
                  />
                )}
              </div>
              <div className=" mt-6 ">
                <p>{shortenLengthOfTitleInHomePage(product.title)}</p>
                <p>$ {product.price}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No Products Found</p>
        )}
      </div>
    </div>
  );
};

export default SearchResult;
