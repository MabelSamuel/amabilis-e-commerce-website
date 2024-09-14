import React, {useContext} from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import { AddToCartContext } from "../context/AddToCartContext";
import { GrStatusGood } from "react-icons/gr";
import { WishListContext } from "../context/WishListContext";

function Root() {
  const { cartMessage } = useContext(AddToCartContext);
  const { wishListMessage } = useContext(WishListContext);
  return (
    <div className='min-h-fit'>
      <Header />
      <main>
      {cartMessage && (
        <div className="fixed top-12 left-1/2 transform -translate-x-1/2 px-4 py-2 w-fit rounded shadow-lg z-[57] flex justify-center items-center gap-2 bg-white ">
          <GrStatusGood className="text-green-500" />
          <p>{cartMessage}</p>
        </div>
      )}
      {wishListMessage && (
        <div className="fixed top-12 left-1/2 transform -translate-x-1/2 px-4 py-2 w-fit rounded shadow-lg z-[57] flex justify-center items-center gap-2 bg-white ">
          <GrStatusGood className="text-green-500" />
          <p>{wishListMessage}</p>
        </div>
      )}
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Root