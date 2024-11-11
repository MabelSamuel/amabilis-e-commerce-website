import React from "react";
import { IoMdClose } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { IoStarSharp } from "react-icons/io5";

const ProductModal = ({ items, closeModal, addToCart, addToWishList, decrementItemQuantity, incrementItemQuantity }) => {
  return (
    <div className="fixed top-0 left-0 inset-0 bg-black bg-opacity-75 z-[53] flex justify-center items-start overflow-y-auto" onClick={closeModal}>
      <div className="w-[70%] bg-white rounded-lg my-20 max-h-screen sm:w-full sm:max-h-full overflow-y-auto" onClick={(e)=> e.stopPropagation()}>
        <div className="flex flex-row-reverse border-b-2 p-2">
          <IoMdClose size={27} className="text-dark-gray hover:text-black" onClick={closeModal} />
        </div>
        <div className="flex m-2 sm:flex-col">
          <div className="w-2/5 h-96 sm:w-full sm:h-[31rem]">
            <img
              src={items.image}
              alt={items.title}
              className="h-full w-full p-5"
            />
          </div>
          <div className="w-3/5 sm:w-full overflow-y-auto">
            <h2 className="font-medium text-2xl mb-2">{items.title}</h2>
            <p className="text-red-500 text-2xl leading-10">${items.price}</p>
            <p>{items.description}</p>
            <div className="my-2 flex">
              <IoStarSharp size={20} className="inline mr-2 text-orange-600" />
              <span>{items.rating.rate}</span>
              <span className="ml-5 text-dark-gray">({items.rating.count})</span>
            </div>
            <div className="w-72 flex justify-between">
              <div className="border w-24 h-12 flex items-center">
                <button className="w-1/4 text-center"
                onClick={()=> decrementItemQuantity(items.id)}
                >-</button>
                <span className="w-1/2 text-center">{items.quantity}</span>
                <button className="w-1/4 text-center"
                onClick={()=> incrementItemQuantity(items.id)}
                >+</button>
              </div>
              <button
                className="bg-black text-white w-32 h-12 hover:bg-lilac"
                onClick={() => addToCart(items)}
              >
                Add to Cart
              </button>
              <div
                className="flex items-center justify-center"
                onClick={() => addToWishList(items)}
              >
                <CiHeart className="hover:text-lilac" size={25} />
              </div>
            </div>
            <div className="mt-4">
              <span>Categories: {items.category}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
