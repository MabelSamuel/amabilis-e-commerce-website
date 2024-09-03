import React from "react";
import { useNavigate } from "react-router-dom";
// images
import jewelry from "../../assets/earrings.jpg";
import bag from "../../assets/malebag.jpg";
import tv from "../../assets/tv.jpg";
// key
import { v4 } from "uuid";
// icons
import { FaRegArrowAltCircleRight } from "react-icons/fa";

function BannerImages() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/collection/grid");
  };
  const images = [
    {
      image: jewelry,
      title: "Earrings",
    },
    {
      image: bag,
      title: "School Bags",
    },
    {
      image: tv,
      title: "Television",
    },
  ];
  return (
    <div className=" flex mt-20 gap-8 px-3 sm:flex-col ">
      {images.map((img) => (
        <div key={v4()} className=" basis-2/6 h-64 relative md:h-32 sm:h-40 ">
          <img src={img.image} alt={img.title} className=" h-full w-full " />
          <div className=" absolute top-0 left-0 p-12 md:p-1 ">
            <h3 className=" font-semibold text-3xl text-yellow-400 md:text-xl ">
              {img.title}
            </h3>
            <p className=" mb-12 md:mb-6 ">
              Starting at <span className=" italic text-yellow-400 ">$100</span>
            </p>
            <FaRegArrowAltCircleRight onClick={handleClick} className=" size-8 text-yellow-400 hover:text-lilac " />
          </div>
        </div>
      ))}
    </div>
  );
}

export default BannerImages;
