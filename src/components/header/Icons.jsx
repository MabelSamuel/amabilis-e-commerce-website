import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
// icons
import { IoIosSearch } from "react-icons/io";
import { IoIosContact } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { RiShoppingBag2Line } from "react-icons/ri";
// context
import { AddToCartContext } from "../../context/AddToCartContext";

function Icons() {
  const [isOpen, setIsOpen] = useState(null);

  const { cartCount } = useContext(AddToCartContext);

  const handleDropDown = (dropdownName) => {
    setIsOpen((prev) => (prev === dropdownName ? null : dropdownName));
  };

  const handleDropdownClick = (e) =>{
    e.stopPropagation()
  }

  return (
    <ul className=" flex justify-between w-36 cursor-pointer sm:w-28 ">
      <li onClick={() => handleDropDown("search")}>
          {" "}
          <IoIosSearch
            size={25}
            className="hover:stroke-lilac stroke-1 relative"
          />
        {isOpen === "search" && (
          <div className="absolute bg-white shadow-md z-50 p-3.5 right-28 top-[5.75rem] min-w-60"
          onClick={handleDropdownClick}
          >
            <form className="relative">
              <input
                type="text"
                placeholder="Search"
                className="border border-gray-300 outline-0 py-1.5 px-6 w-full text-black bg-transparent transition-all duration-400 ease-in-out"
              />
              <button
                type="submit"
                className="bg-lilac transition-all duration-400 ease-in-out absolute right-0 h-full w-10 pt-1.5 pb-0.5 px-2 text-white"
              >
                <IoIosSearch size={22} />
              </button>
            </form>
          </div>
        )}
      </li>
      <li onClick={() => handleDropDown("contact")}>
        {" "}
          <IoIosContact
            size={25}
            className=" hover:stroke-lilac stroke-1 relative "
          />{" "}
        {isOpen === "contact" && (
          <div className=" absolute bg-white shadow-md pt-2 px-3 pb-3 text-left w-32 z-50 transition-all duration-300 ease-in flex items-center ">
            <ul className="text-sm">
              <li className="hover:text-lilac ">
                {" "}
                <NavLink to="login-register/login">Login</NavLink>{" "}
              </li>
              <li className="hover:text-lilac ">
                {" "}
                <NavLink to="login-register/register">Register</NavLink>{" "}
              </li>
              <li className=" hover:text-lilac ">
                {" "}
                <NavLink to="wishlist">Wishlist</NavLink>{" "}
              </li>
              <li className="hover:text-lilac ">
                {" "}
                <NavLink>My Account</NavLink>{" "}
              </li>
            </ul>
          </div>
        )}
      </li>
      <li>
        {" "}
        <NavLink
          to={"/wishlist"}
          className={({ isActive }) =>
            isActive ? " text-lilac " : " text-black "
          }
        >
          {" "}
          <CiHeart size={25} />{" "}
        </NavLink>{" "}
      </li>
      <li className=" relative ">
        {" "}
        <NavLink
          to={"/cart"}
          className={({ isActive }) =>
            isActive ? " text-lilac " : " text-black "
          }
        >
          {" "}
          <RiShoppingBag2Line size={25} />{" "}
          <span className=" absolute bg-lilac w-5 h-5 rounded-[100%] top-[-0.56rem] right-[-0.6rem] text-white text-sm text-center ">
            {cartCount}
          </span>{" "}
        </NavLink>
      </li>
    </ul>
  );
}

export default Icons;
