import React from "react";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className=" px-4 py-6 border w-1/4 md:w-full sm:w-full ">
      <div className=" mr-8 ">
        <h4 className=" font-medium leading-6 ">Search</h4>
        <form action="" className=" mb-12 mt-6 relative ">
          <input
            type="text"
            placeholder="Search here..."
            className=" bg-none bg-repeat bg-scroll bg-transparent bg-[0%] border border-solid border-gray-500 text-black h-11 py-1 pr-14 pl-5 w-full outline-lilac  "
          />
          <button className=" bg-none bg-repeat bg-scroll bg-transparent bg-[0%] border-gray-500 px-4 border-l absolute right-0 top-1/4  text-xl ">
            {" "}
            <IoIosSearch />{" "}
          </button>
        </form>

        <h4 className=" font-medium leading-6 mb-8 ">Refine By</h4>
        <div className=" relative pb-4 ">
          <input type="checkbox" />
          <Link to={"#"} className=" ml-8 ">
            On Sale{" "}
            <span className=" bg-lilac w-8 h-5 font-medium leading-5 rounded-3xl float-right text-center ">
              4
            </span>
          </Link>
        </div>
        <div className=" relative pb-4 ">
          <input type="checkbox" />
          <Link to={"#"} className=" ml-8 ">
            New{" "}
            <span className=" bg-lilac w-8 h-5 font-medium leading-5 rounded-3xl float-right text-center ">
              4
            </span>
          </Link>
        </div>
        <div className=" relative ">
          <input type="checkbox" />
          <Link to={"#"} className=" ml-8 ">
            In Stock{" "}
            <span className=" bg-lilac w-8 h-5 font-medium leading-5 rounded-3xl float-right text-center ">
              4
            </span>
          </Link>
        </div>

        <div className=" mt-11 ">
          <h4 className=" font-medium leading-6 ">Filter By Price</h4>
          <div className=" mt-3 ">
            <input type="range" min="0" max="100" className="w-full" />
          </div>
        </div>

        <div className=" mt-12 ">
          <h4 className=" font-medium leading-6 mb-5 ">Colour</h4>
          <div className=" relative pb-4 ">
            <input type="checkbox" />
            <Link to={"#"} className=" ml-8 ">
              Green{" "}
              <span className=" bg-lilac w-8 h-5 font-medium leading-5 rounded-3xl float-right text-center ">
                4
              </span>
            </Link>
          </div>
          <div className=" relative pb-4 ">
            <input type="checkbox" />
            <Link to={"#"} className=" ml-8 ">
              Cream{" "}
              <span className=" bg-lilac w-8 h-5 font-medium leading-5 rounded-3xl float-right text-center ">
                4
              </span>
            </Link>
          </div>
          <div className=" relative pb-4 ">
            <input type="checkbox" />
            <Link to={"#"} className=" ml-8 ">
              Blue{" "}
              <span className=" bg-lilac w-8 h-5 font-medium leading-5 rounded-3xl float-right text-center ">
                4
              </span>
            </Link>
          </div>
          <div className=" relative ">
            <input type="checkbox" />
            <Link to={"#"} className=" ml-8 ">
              Black{" "}
              <span className=" bg-lilac w-8 h-5 font-medium leading-5 rounded-3xl float-right text-center ">
                4
              </span>
            </Link>
          </div>
        </div>

        <div className=" mt-10 ">
          <h4 className=" font-medium leading-6 mb-8 ">Refine By</h4>
          <div className=" relative pb-4 ">
            <input type="checkbox" />
            <Link to={"#"} className=" ml-8 ">
              XL{" "}
            </Link>
          </div>
          <div className=" relative pb-4 ">
            <input type="checkbox" />
            <Link to={"#"} className=" ml-8 ">
              L{" "}
            </Link>
          </div>
          <div className=" relative pb-4 ">
            <input type="checkbox" />
            <Link to={"#"} className=" ml-8 ">
              SM{" "}
            </Link>
          </div>
          <div className=" relative pb-4 ">
            <input type="checkbox" />
            <Link to={"#"} className=" ml-8 ">
              XXL{" "}
            </Link>
          </div>
        </div>

        <div className=" mt-12 ">
          <h4 className=" font-medium leading-6 mb-6 ">Tag</h4>
          <Link
            to={"#"}
            className=" mr-2 mb-4 bg-dark-gray hover:bg-lilac inline-block pt-2 pb-3 px-4 rounded-[3.125rem] "
          >
            Clothing
          </Link>
          <Link
            to={"#"}
            className=" mr-2 mb-4 bg-dark-gray hover:bg-lilac inline-block pt-2 pb-3 px-4 rounded-[3.125rem] "
          >
            Accessories
          </Link>
          <Link
            to={"#"}
            className=" mr-2 mb-4 bg-dark-gray hover:bg-lilac inline-block pt-2 pb-3 px-4 rounded-[3.125rem] "
          >
            For men
          </Link>
          <Link
            to={"#"}
            className=" mr-2 mb-4 bg-dark-gray hover:bg-lilac inline-block pt-2 pb-3 px-4 rounded-[3.125rem] "
          >
            Women
          </Link>
          <Link
            to={"#"}
            className=" mr-2 mb-4 bg-dark-gray hover:bg-lilac inline-block pt-2 pb-3 px-4 rounded-[3.125rem] "
          >
            Electronics
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
