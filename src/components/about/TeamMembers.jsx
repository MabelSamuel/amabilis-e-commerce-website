import React from "react";
import { Link } from "react-router-dom";
// images
import manager from "../../assets/manager.jpg";
import developer from "../../assets/developer.jpg";
import designer from "../../assets/designer.jpg";
import chairman from "../../assets/chairman.jpg";
// custom hooks
import { useDisplayProductIcons } from "../../hooks/useDisplayProductIcons";
// icons
import { IoLogoFacebook } from "react-icons/io5";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";

function TeamMembers() {
  const members = [
    {
      id: 1,
      image: manager,
      name: "Mr. Omari Davis",
      position: "Manager",
      socialMedia: {
        facebook: "https://www.facebook.com",
        twitter: "https://www.twitter.com",
        instagram: "https://www.instagram.com",
      },
    },
    {
      id: 2,
      image: developer,
      name: "Ms. Nia Thompson",
      position: "Developer",
      socialMedia: {
        facebook: "https://www.facebook.com",
        twitter: "https://www.twitter.com",
        instagram: "https://www.instagram.com",
      },
    },
    {
      id: 3,
      image: designer,
      name: "Ms. Kamaria Clark",
      position: "Designer",
      socialMedia: {
        facebook: "https://www.facebook.com",
        twitter: "https://www.twitter.com",
        instagram: "https://www.instagram.com",
      },
    },
    {
      id: 4,
      image: chairman,
      name: "Mr. Jabari Harris",
      position: "Chairman",
      socialMedia: {
        facebook: "https://www.facebook.com",
        twitter: "https://www.twitter.com",
        instagram: "https://www.instagram.com",
      },
    },
  ];

  const { isShow, setIsShow, handleShow } = useDisplayProductIcons();
  return (
    <>
      <div className="flex flex-col items-center pb-24">
        <h2 className=' font-semibold text-3xl pb-4 relative before:absolute before:bg-black before:content-[""] before:h-1 before:w-16 before:left-0 before:right-0 before:bottom-0 before:my-0 before:mx-auto '>
          Team Members
        </h2>
        <p className="pt-6 sm:text-center">
          Team members that give sustainability, quality and customer
          satisfaction
        </p>
      </div>
      <div className=" flex gap-6 sm:flex-col ">
        {members.map((member) => (
          <div key={member.id} className=" basis-1/4 ">
            <div
              className="h-80 relative sm:h-[30rem]"
              onMouseEnter={() => handleShow(member.id)}
              onMouseLeave={() => setIsShow(false)}
              onClick={() => handleShow(member.id)}
            >
              <img
                src={member.image}
                alt={member.name}
                className=" h-full w-full "
              />
              {isShow === member.id && (
                <div className="bg-white flex absolute top-2/4 z-20 justify-center w-full p-2 gap-2">
                  <a href={member.socialMedia.facebook} target="_blank">
                    <IoLogoFacebook className="size-6 text-[#1877F2] sm:size-9" />
                  </a>
                  <a href={member.socialMedia.twitter} target="_blank">
                    <AiFillTwitterCircle className="size-6 text-[#1DA1F2] sm:size-9" />
                  </a>
                  <a href={member.socialMedia.instagram} target="_blank">
                    <FaInstagramSquare className="size-6 text-[#E1306C] sm:size-9" />
                  </a>
                </div>
              )}
            </div>
            <div className="text-center p-4 bg-gray-500">
              <p className="font-medium text-xl">{member.name}</p>
              <p className="italic">{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default TeamMembers;
