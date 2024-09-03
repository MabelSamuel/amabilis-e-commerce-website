import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function LoginAndRegisterPage() {
  return (
    <section className=" flex flex-col justify-center items-center p-48 md:px-8 md:py-16 sm:px-4 sm:py-16 ">
      <div className=" flex mb-10 ">
        <div className=' relative before:absolute before:bg-[hsl(0,100%,3%)] before:content-[""] before:h-5 before:w-[0.0625rem] before:bottom-1 before:-right-[0.125rem] '>
          <NavLink
            to="login"
            className={({ isActive }) =>
              isActive
                ? "text-lilac font-bold text-2xl"
                : "text-black font-bold text-2xl"
            }
          >
            <p className="mx-5">Login</p>
          </NavLink>
        </div>
        <div className="">
          <NavLink
            to="register"
            className={({ isActive }) =>
              isActive
                ? "text-lilac font-bold text-2xl"
                : "text-black font-bold text-2xl"
            }
          >
            {" "}
            <p className="mx-5">Register</p>{" "}
          </NavLink>
        </div>
      </div>
      <Outlet />
    </section>
  );
}

export default LoginAndRegisterPage;
