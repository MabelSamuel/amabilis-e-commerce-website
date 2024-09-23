import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";
import { IoStarSharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { AddToCartContext } from "../../context/AddToCartContext";
import { WishListContext } from "../../context/WishListContext";
import { TiSocialFacebook, TiSocialPinterest } from "react-icons/ti";
import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { shortenLengthOfTitleInHomePage } from "../../utility/shortenLengthOfTitle";
import { useDisplayProductIcons } from "../../hooks/useDisplayProductIcons";
import { PiShoppingCartFill } from "react-icons/pi";
import { GrFormView } from "react-icons/gr";
import ProductModal from "../collection/ProductModal";
import { useProductModal } from "../../hooks/useProductModal";

const ProductDetails = () => {
  const { id } = useParams();
  const {
    products,
    isLoading,
    error,
    refetch,
    incrementProductQuantity,
    decrementProductQuantity,
  } = useProducts();
  const productDetails = products?.find((item) => item.id === Number(id));
  const relatedProducts = products?.filter(
    (item) =>
      item.category === productDetails.category && item !== productDetails
  );

  // custom hook to display the wishlist, cart and view icons
  const { isShow, setIsShow, handleShow } = useDisplayProductIcons();

  // custom hook to display product modal
  const { isProductModal, handleProductModal, closeProductModal } =
    useProductModal();

  const { addToCart } = useContext(AddToCartContext);
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
    <>
      {productDetails && (
        <div className=" flex gap-8 h-[43rem] md:h-fit sm:flex-col sm:h-fit">
          <div className="basis-1/2 border p-8 h-full md:h-96 sm:w-full sm:h-[35rem] sm:basis-0 ">
            <img
              src={productDetails.image}
              alt={productDetails.title}
              className="h-full w-full"
            />
          </div>
          <div className="basis-1/2 sm:basis-0">
            <div className="border-b mb-8 pb-8">
              <h2 className="font-medium text-3xl mb-4">
                {productDetails.title}
              </h2>
              <p className="text-red-500 text-2xl mb-4">
                ${productDetails.price}
              </p>
              <div className="mb-4 flex">
                <IoStarSharp
                  size={20}
                  className="inline mr-2 text-orange-600"
                />
                <span>{productDetails.rating.rate}</span>
                <span className="border-l pl-5 ml-5 mr-1">
                  {productDetails.rating.count}
                </span>
                <span>Reviews</span>
              </div>
              <p>{productDetails.description}</p>
            </div>
            <div className="w-72 flex justify-between sm:w-full">
              <div className="border w-24 h-12 flex items-center">
                <button
                  className="w-1/4 text-center"
                  onClick={() => decrementProductQuantity(productDetails.id)}
                >
                  -
                </button>
                <span className="w-1/2 text-center">
                  {productDetails.quantity}
                </span>
                <button
                  className="w-1/4 text-center"
                  onClick={() => incrementProductQuantity(productDetails.id)}
                >
                  +
                </button>
              </div>
              <button
                className="bg-black text-white w-32 h-12 hover:bg-lilac"
                onClick={() => addToCart(productDetails)}
              >
                Add to Cart
              </button>
              <div
                className="flex items-center justify-center"
                onClick={() => addToWishList(productDetails)}
              >
                <CiHeart className="hover:text-lilac" size={25} />
              </div>
            </div>
            <div className="mt-4">
              <span>Categories: {productDetails.category}, Minimal</span>
            </div>
            <div className="mt-4">
              <span>Tags: Fashion, Electronic, Furniture</span>
            </div>
            <div className=" mt-14 text-center sm:mt-7">
              <ul className=" flex ">
                <li className=" mx-[0.625rem] hover:text-lilac ">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TiSocialFacebook size={20} />
                  </a>
                </li>
                <li className=" mx-[0.625rem] hover:text-lilac ">
                  <a href="https://www.pinterest.com" target="_blank">
                    <TiSocialPinterest size={20} />
                  </a>
                </li>
                <li className=" mx-[0.625rem] hover:text-lilac ">
                  <a href="https://www.twitter.com" target="_blank">
                    <FaXTwitter size={20} />
                  </a>
                </li>
                <li className=" mx-[0.625rem] hover:text-lilac ">
                  <a href="https://www.instagram.com" target="_blank">
                    <FaInstagram size={20} />
                  </a>
                </li>
                <li className=" mx-[0.625rem] hover:text-lilac ">
                  <a href="https://www.linkedIn.com" target="_blank">
                    <FaLinkedinIn size={20} className="bg-white" />
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      <div>
        <div className="my-[3.75rem] text-center">
          <h2 className='text-3xl font-semibold mb-4 pb-4 relative before:content-[""] before:bg-black before:w-20 before:h-[0.125rem] before:absolute before:left-[22rem] before:top-4 after:content-[""] after:bg-black after:w-20 after:h-[0.125rem] after:absolute after:right-[22rem] after:top-4 md:before:left-32 md:after:right-32 sm:before:w-7 sm:after:w-7 sm:mb-4 sm:before:left-4 sm:after:right-4'>
            Related Products
          </h2>
        </div>
        <div className="grid gap-8 grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
          {relatedProducts.map((item) => (
            <div key={item.id} className="h-fit">
              <div
                className="relative h-80 border p-4"
                onMouseEnter={() => handleShow(item.id)}
                onMouseLeave={() => setIsShow(false)}
                onClick={() => handleShow(item.id)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full"
                />
                {isShow === item.id && (
                  <div className=" z-50 flex absolute left-0 bottom-0 w-full h-12 ">
                    <div className=" bg-lilac w-1/4 h-full flex justify-center hover:bg-black md:w-[15%] sm:w-[15%] ">
                      <button
                        className=" flex justify-center items-center cursor-pointer  "
                        onClick={() => addToWishList(item)}
                      >
                        {" "}
                        <CiHeart size={25} className="text-white" />{" "}
                      </button>
                    </div>
                    <div className=" bg-lilac w-2/4 h-full border-x border-slate-100 flex justify-center cursor-pointer hover:bg-black md:w-[70%] sm:w-[70%] ">
                      <button
                        className=" flex justify-center items-center text-white "
                        onClick={() => addToCart(item)}
                      >
                        {" "}
                        <PiShoppingCartFill className=" m-1 text-white " />
                        Add to Cart{" "}
                      </button>
                    </div>
                    <div className=" bg-lilac w-1/4 h-full flex justify-center cursor-pointer hover:bg-black md:w-[15%] sm:w-[15%] ">
                      <button
                        className=" flex justify-center items-center cursor-pointer text-white "
                        onClick={() => handleProductModal(item.id)}
                      >
                        {" "}
                        <GrFormView size={30} />{" "}
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div className="text-center mt-4">
                <p className="hover:text-lilac mb-2">
                  <Link to={`/product-details/${item.id}`}>
                    {shortenLengthOfTitleInHomePage(item.title)}
                  </Link>
                </p>
                <p>${item.price}</p>
              </div>
              {isProductModal === item.id && (
                <ProductModal
                  items={item}
                  closeModal={closeProductModal}
                  addToCart={addToCart}
                  addToWishList={addToWishList}
                  decrementItemQuantity={decrementProductQuantity}
                  incrementItemQuantity={incrementProductQuantity}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
