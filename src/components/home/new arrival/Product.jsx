import React, { useContext } from "react";
// layout
import ProductLayout from "./ProductLayout";
// component
import NewArrival from "./NewArrival";
import ProductModal from "../../collection/ProductModal";
// custom hook
import { useProducts } from "../../../hooks/useProducts";
import { useDisplayProductIcons } from "../../../hooks/useDisplayProductIcons";
import { useProductModal } from "../../../hooks/useProductModal";
// utility
import { shortenLengthOfTitleInHomePage } from "../../../utility/shortenLengthOfTitle";
// icons
import { PiShoppingCartFill } from "react-icons/pi";
import { GrFormView } from "react-icons/gr";
import { CiHeart } from "react-icons/ci";
// context
import { AddToCartContext } from "../../../context/AddToCartContext";
import { WishListContext } from '../../../context/WishListContext'


function Product() {
  const { products, isLoading, error } = useProducts();

  // custom hook to display the wishlist, cart and view icons
  const { isShow, setIsShow, handleShow } = useDisplayProductIcons();

  // custom hook to display product modal
  const { isProductModal, handleProductModal, closeProductModal } =
    useProductModal();

  const { addToCart } = useContext(AddToCartContext);
  const { addToWishList } = useContext(WishListContext);

  if (isLoading) {
    return <div>Data is loading</div>;
  }

  if (error) {
    return <p>Error: {error.message} </p>;
  }

  return (
    <ProductLayout>
      <NewArrival />
      <div className="h-fit grid grid-cols-5 gap-10 md:grid-cols-2 sm:grid-cols-1 ">
        {products.slice(0, 10).map((items) => (
          <div key={items.id} className="h-96 md:h-fit sm:h-fit ">
            <div
              className="h-3/5 relative border shadow-sm md:h-[27rem] sm:h-[27rem] "
              onMouseEnter={() => handleShow(items.id)}
              onMouseLeave={() => setIsShow(false)}
              onClick={() => handleShow(items.id)}
            >
              <img
                src={items.image}
                alt={items.title}
                className=" p-5 w-full h-full sm:object-contain "
              />
              {/* <img
                src={items.image}
                alt={items.title}
                className=" object-cover w-full h-full absolute top-0 left-0 invisible opacity-0 translate-x-[100%] "
              /> */}
              {isShow === items.id && (
                <div className=" flex absolute top-2/4 w-full justify-center ">
                  <button
                    className="size-8 flex justify-center items-center bg-lilac rounded-full mr-2 hover:bg-black md:size-12 sm:size-12"
                    onClick={() => addToCart(items)}
                  >
                    <PiShoppingCartFill className="text-white size-5 md:size-8 sm:size-8 " />
                  </button>
                  <button
                    className="size-8 flex justify-center items-center bg-lilac rounded-full mr-2 hover:bg-black md:size-12 sm:size-12"
                    onClick={() => handleProductModal(items.id)}
                  >
                    <GrFormView className="text-white size-5 md:size-10 sm:size-10" />
                  </button>
                  <button className="size-8 flex justify-center items-center bg-lilac rounded-full hover:bg-black md:size-12 sm:size-12"
                  onClick={()=> addToWishList(items)}
                  >
                    <CiHeart className="text-white size-5 md:size-10 sm:size-10" />
                  </button>
                </div>
              )}
              {isProductModal === items.id && (
                <ProductModal
                  items={items}
                  closeModal={closeProductModal}
                  addToCart={addToCart}
                  addToWishList={addToWishList}
                />
              )}
            </div>
            <div className=" mt-6 ">
              <p>{shortenLengthOfTitleInHomePage(items.title)}</p>
              <p>$ {items.price}</p>
            </div>
          </div>
        ))}
      </div>
    </ProductLayout>
  );
}

export default Product;
