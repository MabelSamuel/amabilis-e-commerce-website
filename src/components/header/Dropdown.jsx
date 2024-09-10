import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { v4 } from "uuid";


function Dropdown() {
  const languageAndCurrency = [
    {
      title: "English",
      items: ["Arabic", "Bangla", "Hindi", "Spanish"],
    },
    {
      title: "USD",
      items: ["Taka (BDT)", "Naira (NGN)", "Riyal (SAR)", "Rupee (INR)"],
    },
  ];

  const [isOpen, setIsOpen] = useState(null);

  const handleDropdown = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  return (
    <div className=" h-14 leading-4 text-sm flex justify-between px-16 text-gray-500 border-b sm:flex-col sm:items-center sm:h-fit sm:py-3 sm:px-4">
      <div className="flex items-center h-full ">
        {languageAndCurrency.map((el, index) => (
          <div key={v4()} className=" relative border-r-2 mr-4 sm:mr-2 ">
            <Link
              to="#"
              onClick={() => handleDropdown(index)}
              className="hover:text-lilac transition-all duration-300 ease-in flex items-center mr-4"
            >
              {el.title}
              <IoIosArrowDown className="inline-block ml-1 sm:ml-2" />
            </Link>
            {isOpen === index && (
              <div className="absolute bg-white shadow-md left-0 top-full pt-2 px-3 pb-3 text-left w-32 z-[52] transition-all duration-300 ease-in flex items-center">
                <ul>
                  {el.items.map((item) => (
                    <li key={v4()} className="hover:text-lilac">
                      <Link to="#" className="block py-1 px-2">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
        <div>Call Us 3965410</div>
      </div>
      <div className="flex h-full items-center sm:mt-4">
        <p>
          Free delivery on order over <span className="text-red-500">$200</span>{" "}
        </p>
      </div>
    </div>
  );
}

export default Dropdown;
