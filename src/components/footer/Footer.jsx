import React from "react";
import Title from "../company-name/Title";
import { v4 } from "uuid";
import BackToTopButton from "../scroll-to-top-button/BackToTopButton";

function Footer() {
  const section = [
    {
      title: "ABOUT US",
      items: ["About us", "Store location", "Contact", "Orders tracking"],
    },
    {
      title: "USEFUL LINKS",
      items: ["Returns", "Support Policy", "Size guide", "FAQs"],
    },
    {
      title: "FOLLOW US",
      items: ["Facebook", "Twitter", "Instagram", "Youtube"],
    },
  ];

  return (
    <footer className=" w-full bg-light-gray py-24 px-20 md:h-fit md:px-8 sm:h-fit sm:py-12 sm:px-4 ">
      <div className=" max-w-7xl mx-auto grid grid-cols-5 md:grid-cols-3 md:gap-y-8 sm:grid-cols-1 sm:gap-y-8 ">
        <div className="flex flex-col justify-center md:justify-start">
          <Title />
          <p className="text-gray-500 md:text-sm sm:text-sm sm:mt-2">© 2024 Amabilis.</p>
          <p className="text-gray-500 md:text-sm ">All Rights Reserved</p>
        </div>
        {section.map((sect) => (
          <div key={v4()}>
            <h4 className=" font-medium ">{sect.title}</h4>
            <ul>
              {sect.items.map((item) => (
                <li
                  key={v4()}
                  className=" mt-4 text-gray-500 hover:text-lilac cursor-pointer transition-all duration-300 ease-in-out md:text-sm sm:text-sm "
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className=" md:col-span-2 ">
          <h4 className=" font-medium ">SUBSCRIBE</h4>
          <p className="mt-4 md:text-sm sm:text-sm">
            Get E-mail updates about our latest shop and special offers.
          </p>
          <input
            type="email"
            placeholder="Enter your email here..."
            className=" w-full block bg-inherit focus:outline-none py-3 border-b-2 md:text-sm sm:text-sm "
          />
          <input
            type="submit"
            value={"SUBSCRIBE"}
            className="mt-2 border-b-2 border-gray-400 hover:text-lilac hover:border-lilac transition-all duration-300 ease-in-out md:text-sm sm:text-sm "
          />
        </div>
      </div>
      <BackToTopButton/>
    </footer>
  );
}

export default Footer;
