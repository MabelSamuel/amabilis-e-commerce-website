import React, { useContext } from "react";
import { useProducts } from "../../hooks/useProducts";
import { IoStarSharp } from "react-icons/io5";
import { AddToCartContext } from "../../context/AddToCartContext";

function ProductList() {
  const { products, isLoading, error } = useProducts();

  const { addToCart } = useContext(AddToCartContext);

  if (isLoading) {
    return <div>Data is loading</div>;
  }

  if (error) {
    return <p>Error: {error.message} </p>;
  }
  return (
    <section className=" h-fit flex flex-col gap-10 mb-4">
      {products.map((items) => (
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
              <IoStarSharp size={20} className="inline mr-2 text-orange-500" />{" "}
              {items.rating.rate}
            </p>
            <p className=" mb-3 sm:text-sm ">{items.description}</p>
            <button
              onClick={()=>addToCart(items)}
              className=" bg-black text-white w-32 h-12 hover:bg-lilac sm:text-sm sm:h-8 "
            >
              ADD TO CART
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}

export default ProductList;
