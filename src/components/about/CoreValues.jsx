import React from "react";
import { v4 } from "uuid";

function CoreValues() {
  const coreValue = [
    {
      title: "Our Vision",
      content:
        "To be a leading global destination where fashion, elegance, and technology converge, creating an unparalleled shopping experience that inspires and empowers our customers to express their unique style and embrace modern living.",
    },
    {
      title: "Our Mission",
      content:
        "At Amabilis, our mission is to curate a diverse and innovative selection of high-quality clothing, jewelry, and electronics that cater to the evolving needs and desires of our customers. We are committed to excellence, sustainability, and customer satisfaction, ensuring that every product and service we offer enhances the lives of those we serve.",
    },
    {
      title: "Our Goal",
      content:
        "Our goal is to continually expand our product range, embrace the latest trends, and foster a loyal community of satisfied customers. We strive to set new standards in the online retail space, offering an effortless shopping experience, exceptional value, and unparalleled quality.",
    },
  ];
  return (
    <div className=" flex my-20 gap-8 px-3 sm:flex-col ">
      {coreValue.map((value) => (
        <div key={v4()} className=" basis-2/6 ">
          <h4 className=" font-medium text-2xl mb-4 ">{value.title}</h4>
          <p>{value.content}</p>
        </div>
      ))}
    </div>
  );
}

export default CoreValues;
