import React, { useContext } from "react";
import { useProducts } from "../../hooks/useProducts";
import { IoStarSharp } from "react-icons/io5";
import { AddToCartContext } from "../../context/AddToCartContext";
import { useOutletContext } from "react-router-dom";

function ProductList() {
  const filteredProducts = useOutletContext();
  const { isLoading, error, refetch } = useProducts();

  const { addToCart } = useContext(AddToCartContext);

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
    <section className=" h-fit flex flex-col gap-10 mb-4">
      {filteredProducts?.length > 0 ? (
        filteredProducts.map((items) => (
          <div
            key={items.id}
            className=" h-[31rem] flex border shadow-md sm:flex-col sm:h-fit "
          >
            <div className="h-[31rem] w-[35%] border shadow-sm flex justify-center sm:w-full sm:h-[20rem] ">
              <img
                src={items.image}
                alt={items.title}
                className=" h-1/2 py-5 px-4 sm:h-full"
              />
            </div>
            <div className=" h-[31rem] w-[65%] py-5 mx-4 sm:w-full sm:pr-4 sm:h-fit ">
              <h2 className=" text-2xl mb-3 ">{items.title}</h2>
              <p className=" text-red-500 text-lg mb-2 ">${items.price}</p>
              <p className="mb-3 flex">
                <IoStarSharp
                  size={20}
                  className="inline mr-2 text-orange-500"
                />{" "}
                {items.rating.rate}
              </p>
              <p className=" mb-3 sm:text-sm ">{items.description}</p>
              <button
                onClick={() => addToCart(items)}
                className=" bg-black text-white w-32 h-12 hover:bg-lilac sm:text-sm sm:h-8 "
              >
                ADD TO CART
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="font-medium text-xl italic">No Products Found</div>
      )}
    </section>
  );
}

export default ProductList;
