import React, { useContext } from "react";
import { WishListContext } from "../../context/WishListContext";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";

function WishList() {
  const {
    wishList,
    handleAddToCartWhileRemovingFromWishList,
    incrementItemQuantity,
    decrementItemQuantity,
    getTotalPriceForItem,
  } = useContext(WishListContext);
  return (
    <>
      {wishList.length === 0 ? (
        <div className=" flex justify-center items-center flex-col  ">
          <CiHeart size={100} />
          <p className=" text-2xl my-5 ">WishList is empty</p>
          <p className=" mb-3 font-medium ">PLease order your favorite items</p>
          <button className=" bg-black text-white hover:bg-lilac w-40 h-11 ">
            <Link to="/collection">Add Items</Link>
          </button>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className=" border border-collapse w-full md:w-[60rem] md:text-sm sm:w-[50rem] sm:text-sm ">
            {/* the header for the table */}
            <thead className=" bg-gray-200 ">
              <tr className=" h-11 ">
                <th className="w-[12.5%]">IMAGE</th>
                <th className="w-[30%]">PRODUCT NAME</th>
                <th className=" w-[12.5%]">UNIT PRICE</th>
                <th className=" w-[12.5%]">QTY</th>
                <th className=" w-[12.5%]">SUBTOTAL</th>
                <th className=" w-[12.5%]">ADD TO CART</th>
              </tr>
            </thead>
            {/* the body of the table */}
            <tbody>
              {wishList?.map((item) => (
                <tr key={item.id} className=" border ">
                  <td className=" h-40  w-[12.5%] ">
                    <img
                      src={item.image}
                      alt={item.title}
                      className=" h-full w-full object-contain p-8 "
                    />
                  </td>
                  <td className=" w-[30%] text-center ">{item.title}</td>
                  <td className=" w-[12.5%] text-center ">$ {item.price}</td>
                  <td className=" w-[12.5%] ">
                    <div className=" flex border ">
                      <button
                        className=" inline text-center cursor-pointer w-3/12 border-r "
                        onClick={() => decrementItemQuantity(item.id)}
                      >
                        -
                      </button>
                      <span className="w-1/2 text-center">{item.quantity}</span>
                      <button
                        className=" inline text-center cursor-pointer w-3/12 border-l "
                        onClick={() => incrementItemQuantity(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className=" w-[12.5%] text-center ">
                    ${getTotalPriceForItem(item)}
                  </td>
                  <td className=" w-[12.5%] text-center ">
                    {" "}
                    <button
                      className=" bg-lilac text-white hover:bg-black rounded-md p-2 text-sm "
                      onClick={() =>
                        handleAddToCartWhileRemovingFromWishList(item)
                      }
                    >
                      ADD TO CART
                    </button>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default WishList;
