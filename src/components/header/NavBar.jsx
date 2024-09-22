import React, { useState } from "react";
import Title from "../company-name/Title";
import { NavLink } from "react-router-dom";
import Icons from "./Icons";
import { v4 } from "uuid";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

function NavBar() {
  // state to manage the visisbility of the menu
  const [isVisible, setIsVisible] = useState(false);

  // function to handle visiblity
  const toggleMenuVisibility = () => {
    setIsVisible((prevIsVisible) => !prevIsVisible);
  };

  const navSection = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Collection",
      link: "/collection",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ];
  return (
    <header className="flex items-center justify-between px-20 py-7 border-b sticky top-0 z-[51] bg-white md:px-2 sm:px-2 sm:py-4">
      <Title />
      <ul className="flex w-2/5 justify-between md:hidden sm:hidden ">
        {navSection.map((nav) => (
          <li key={v4()}>
            <NavLink
              to={nav.link}
              className={({ isActive }) =>
                isActive
                  ? " font-medium text-[0.9375rem] text-lilac "
                  : " font-medium text-[0.9375rem] text-black "
              }
            >
              {nav.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className=" md:flex md:w-48 md:justify-between sm:w-36 sm:flex sm:justify-between">
        <Icons />
        <div className=" hidden md:flex sm:flex ">
          {!isVisible ? (
            <GiHamburgerMenu size={25} onClick={toggleMenuVisibility} />
          ) : (
            <MdClose size={25} onClick={toggleMenuVisibility} />
          )}
        </div>
      </div>
      {isVisible && (
        <ul className=" md:w-full md:block md:absolute md:bg-white md:top-[5.785rem] md:left-0 sm:absolute sm:w-full sm:bg-gray-200 sm:top-16 sm:left-0 ">
          {navSection.map((nav) => (
            <li key={v4()} className=" md:border-b-2 md:p-4 sm:border-b-2 sm:border-white sm:p-4 ">
              <NavLink to={nav.link} 
              className={({ isActive }) => (
                isActive
                  ? " font-medium text-[0.9375rem] text-lilac md:uppercase sm:uppercase "
                  : " font-medium text-[0.9375rem] text-black md:uppercase sm:uppercase "
              )}
              onClick={toggleMenuVisibility}>
                {nav.title}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export default NavBar;
