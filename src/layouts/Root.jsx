import React, {useContext} from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import { AddToCartContext } from "../context/AddToCartContext";
import { GrStatusGood } from "react-icons/gr";
import { WishListContext } from "../context/WishListContext";
import { ScrollToTop } from '../components/scroll-to-top/ScrollToTop';

function Root() {
  const { cartMessage } = useContext(AddToCartContext);
  const { wishListMessage } = useContext(WishListContext);
  return (
    <ScrollToTop>
    <div className='min-h-fit'>
      <Header />
      <main>
      {cartMessage && (
        <div className="fixed top-12 left-1/2 transform -translate-x-1/2 px-4 py-2 w-fit rounded shadow-lg z-[57] flex justify-center items-center gap-2 border-gray-500 text-white bg-lilac sm:w-full ">
          <GrStatusGood className="text-white" />
          <p>{cartMessage}</p>
        </div>
      )}
      {wishListMessage && (
        <div className="fixed top-12 left-1/2 transform -translate-x-1/2 px-4 py-2 w-fit rounded shadow-lg z-[57] flex justify-center items-center gap-2 border-gray-500 text-white bg-lilac sm:w-full ">
          <GrStatusGood className="text-white " />
          <p>{wishListMessage}</p>
        </div>
      )}
        <Outlet />
      </main>
      <Footer />
    </div>
    </ScrollToTop>
  )
}

export default Root