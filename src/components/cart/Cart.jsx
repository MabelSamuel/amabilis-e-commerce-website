import React, { useContext } from "react";
import { AddToCartContext } from "../../context/AddToCartContext";
import { Link, useNavigate } from "react-router-dom";
// hooks
import { useProducts } from "../../hooks/useProducts";
// icons
import { MdOutlineCancel } from "react-icons/md";
import { RiShoppingBag2Line } from "react-icons/ri";
import CartTotal from "./CartTotal";
import CartCoupon from "./CartCoupon";
import CartTax from "./CartTax";

function Cart() {
  const navigate = useNavigate();
  const { error, isLoading } = useProducts();
  const {
    cart,
    removeFromCart,
    incrementItemQuantity,
    decrementItemQuantity,
    getTotalPriceForItem,
    getTotalPriceOfCart,
    clearCart,
  } = useContext(AddToCartContext);

  if (isLoading) {
    return <div>Data is loading</div>;
  }

  if (error) {
    return <p>Error: {error.message} </p>;
  }

  const handleNaviagtion = () => {
    navigate("/collection/grid");
  };

  const handleNavigationToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <>
      {cart.length === 0 ? (
        <div className=" flex justify-center items-center flex-col  ">
          <RiShoppingBag2Line size={100} />
          <p className=" text-2xl my-5 ">Cart is empty</p>
          <p className=" mb-3 font-medium ">PLease order your favorite items</p>
          <button className=" bg-black text-white hover:bg-lilac w-40 h-11 ">
            <Link to={"/collection"}>Add Items</Link>
          </button>
        </div>
      ) : (
        <>
          <p className=" mb-4 font-semibold text-xl ">Your cart items</p>
          <div className="overflow-x-auto">
            <table className=" border w-full md:w-[60rem] md:text-sm sm:w-[50rem] sm:text-sm ">
              {/* the header for the table */}
              <thead className=" bg-gray-200 ">
                <tr className=" h-11 ">
                  <th>IMAGE</th>
                  <th>PRODUCT NAME</th>
                  <th>UNIT PRICE</th>
                  <th>QTY</th>
                  <th>SUBTOTAL</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              {/* the body of the table */}
              <tbody>
                {cart?.map((item) => (
                  <tr key={item.id} className=" border ">
                    <td className=" h-40  w-[12.5%] ">
                      <img
                        src={item.image}
                        alt={item.title}
                        className=" h-full w-full object-contain p-8 "
                      />
                    </td>
                    <td className=" w-2/4 text-center ">{item.title}</td>
                    <td className=" w-[12.5%] text-center ">${item.price}</td>
                    <td className=" w-[12.5%] ">
                      <div className=" flex border ">
                        <button
                          className=" inline text-center cursor-pointer w-3/12 border-r "
                          onClick={() => decrementItemQuantity(item.id)}
                        >
                          -
                        </button>
                        <span className="w-1/2 text-center">
                          {item.quantity}
                        </span>
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
                    <td className=" w-[12.5%] ">
                      {" "}
                      <MdOutlineCancel
                        size={30}
                        onClick={() => removeFromCart(item.id)}
                        className="hover:text-lilac"
                      />{" "}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-10 flex justify-between sm:flex-col sm:text-sm">
            <button
              className="bg-gray-200 rounded-full py-4 px-10 uppercase font-medium hover:bg-lilac sm:mb-4"
              onClick={handleNaviagtion}
            >
              Continue Shopping
            </button>
            <button
              className="bg-gray-200 rounded-full py-4 px-10 uppercase font-medium hover:bg-lilac"
              onClick={clearCart}
            >
              Clear Shopping cart
            </button>
          </div>
          <div className="mt-12 flex gap-8 md:grid md:grid-cols-2 sm:flex-col">
            <CartTax />
            <CartCoupon />
            <CartTotal
              getTotalPriceOfCart={getTotalPriceOfCart}
              handleNavigationToCheckout={handleNavigationToCheckout}
            />
          </div>
        </>
      )}
    </>
  );
}

export default Cart;
