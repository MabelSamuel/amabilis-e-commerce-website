import React from "react";

const CartTotal = ({ getTotalPriceOfCart, handleNavigationToCheckout }) => {
  return (
    <div className="border w-1/3 px-8 py-10 bg-gray-200 rounded-md md:w-full md:col-span-2 sm:w-full sm:text-sm sm:px-4">
      <h3 className="text-lg font-medium mb-8">Cart Total</h3>
      <div className="flex justify-between mb-4 border-b border-black pb-4">
        <p>Total Products</p>
        <p>${getTotalPriceOfCart()}</p>
      </div>
      <div
        className="border-b border-black
         pb-4"
      >
        <p className="mb-4">Total Shipping</p>
        <div className="flex justify-between">
          <div>
            <input type="checkbox" name="standardShipping" />
            <label htmlFor="standardShipping">Standard</label>
          </div>
          <span>$20.00</span>
        </div>
        <div className="flex justify-between">
          <div>
            <input type="checkbox" name="expressShipping" />
            <label htmlFor="expressShipping">Express</label>
          </div>
          <span>$30.00</span>
        </div>
      </div>
      <div className="flex justify-between py-4 text-lilac text-xl">
        <h2 className=" ">Grand Total</h2>
        <p>${getTotalPriceOfCart()}</p>
      </div>
      <button
        onClick={handleNavigationToCheckout}
        className="uppercase bg-lilac w-full rounded-full py-4 text-white font-medium hover:bg-black"
      >
        Proceed to checkout
      </button>
    </div>
  );
};

export default CartTotal;