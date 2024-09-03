import React from "react";
import SupportLayout from "./SupportLayout";
import { Ri24HoursFill } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { RiExchangeDollarFill } from "react-icons/ri";

function Support() {
  return (
    <SupportLayout>
      <div className=" flex md:text-sm sm:flex-col sm:text-sm ">
        <div className=" px-[0.9rem] ">
          <div className=' mb-7 relative text-center before:absolute before:bg-[rgb(213,212,212)] before:content-[""] before:h-[3.8rem] before:w-[0.062rem] before:top-2/4 before:right-[-0.875rem] before:translate-y-[-50%] sm:before:hidden '>
            <div className="flex justify-center ">
              <TbTruckDelivery size={50} className="  " />
            </div>
            <h5 className=" text-[1.125rem] my-4 ">Free Shipping</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed</p>
          </div>
        </div>

        <div className=" px-[0.9rem] ">
          <div className=' mb-7 relative text-center before:absolute before:bg-[#d5d4d4] before:content-[""] before:h-[3.8rem] before:w-[0.062rem] before:top-2/4 before:right-[-0.875rem] before:translate-y-[-50%] sm:before:hidden '>
            <div className="flex justify-center ">
              <Ri24HoursFill size={50} className="  " />
            </div>
            <h5 className=" text-[1.125rem] my-4 fo ">Support 24/7</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed</p>
          </div>
        </div>

        <div className=" px-[0.9rem] ">
          <div className=' mb-7 relative text-center '>
            <div className="flex justify-center ">
              <RiExchangeDollarFill size={50} className="  " />
            </div>
            <h5 className=" text-[1.125rem] my-4 fo ">Money Return</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed</p>
          </div>
        </div>
      </div>
    </SupportLayout>
  );
}

export default Support;
