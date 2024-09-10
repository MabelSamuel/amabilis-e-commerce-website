import React, {useContext} from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import { AddToCartContext } from "../context/AddToCartContext";
import { GrStatusGood } from "react-icons/gr";

function Root() {
  const { cartMessage } = useContext(AddToCartContext);
  return (
    <div className='min-h-fit'>
      <Header />
      <main>
      {cartMessage && (
        <div className="fixed top-0 right-1/2 px-4 py-2 w-fit text-center border-lilac rounded shadow-lg z-[57] flex justify-center items-center gap-1 ">
          <GrStatusGood className="text-green-500" />
          <p>{cartMessage}</p>
        </div>
      )}
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Root