import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// icons
import { IoIosSearch } from "react-icons/io";
import { IoIosContact } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { RiShoppingBag2Line } from "react-icons/ri";
// context
import { AddToCartContext } from "../../context/AddToCartContext";
import { useAuth } from "../../context/AuthContext";

function Icons() {
  const [isOpen, setIsOpen] = useState(null);
  const { isLoggedIn, user, logout } = useAuth();

  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const handleSearchQuery = () => {
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
    setSearchQuery("");
  };

  const { cartCount } = useContext(AddToCartContext);

  const handleDropDown = (dropdownName) => {
    setIsOpen((prev) => (prev === dropdownName ? null : dropdownName));
  };

  const handleDropdownClick = (e) => {
    e.stopPropagation();
  };

  const handleLogout = () => {
    logout(); 
    setIsOpen(null);
    navigate("/"); 
  };

  return (
    <ul className=" flex justify-between w-36 cursor-pointer sm:w-28 ">
      <li onClick={() => handleDropDown("search")}>
        {" "}
        <IoIosSearch
          size={25}
          className="hover:stroke-lilac stroke-1 relative"
        />
        {isOpen === "search" && (
          <div
            className="absolute bg-white shadow-md z-50 p-3.5 right-28 top-[5.75rem] min-w-60 sm:top-[4.2rem] sm:right-12"
            onClick={handleDropdownClick}
          >
            <form className="relative">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border border-gray-300 outline-0 py-1.5 px-6 w-full text-black bg-transparent transition-all duration-400 ease-in-out"
              />
              <button
                type="submit"
                onClick={handleSearchQuery}
                className="bg-lilac transition-all duration-400 ease-in-out absolute right-0 h-full w-10 pt-1.5 pb-0.5 px-2 text-white"
              >
                <IoIosSearch size={22} />
              </button>
            </form>
          </div>
        )}
      </li>
      <li>
        {!isLoggedIn ? (
          <IoIosContact
            size={25}
            className=" hover:stroke-lilac stroke-1 relative "
            onClick={() => handleDropDown("contact")}
          />
        ) : (
            <div className="flex items-center justify-center w-6 h-6 border-black border text-black rounded-full relative " onClick={()=> handleDropDown("my-account")}>{user?.username?.charAt(0).toUpperCase()}</div>
        )}
        {isOpen === "contact" && !isLoggedIn && (
          <div className=" absolute bg-white shadow-md pt-2 px-3 pb-3 text-left w-32 z-50 transition-all duration-300 ease-in flex items-center top-[5.75rem] sm:top-[4.2rem] sm:right-0 ">
            <ul className="text-sm *:mb-2">
              <li className="hover:text-lilac ">
                {" "}
                <NavLink
                  to="login-register/login"
                  className={({ isActive }) =>
                    isActive ? "text-lilac" : "text-black"
                  }
                >
                  Login
                </NavLink>{" "}
              </li>
              <li className="hover:text-lilac ">
                {" "}
                <NavLink
                  to="login-register/register"
                  className={({ isActive }) =>
                    isActive ? "text-lilac" : "text-black"
                  }
                >
                  Register
                </NavLink>{" "}
              </li>
            </ul>
          </div>
        )}
        {isOpen === "my-account" && isLoggedIn && (
          <div className="absolute bg-white shadow-md pt-2 px-3 pb-3 text-left w-32 z-50 transition-all duration-300 ease-in flex items-center top-[5.75rem] sm:top-[4.2rem] sm:right-0">
            <ul className="text-sm *:mb-2">
            <li className="hover:text-lilac ">
                {" "}
                <NavLink
                  to="/my-account"
                  className={({ isActive }) =>
                    isActive ? "text-lilac" : "text-black"
                  }
                >
                  My Account
                </NavLink>{" "}
              </li>
              <li className="hover:text-lilac " onClick={handleLogout}>
                Log Out
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
