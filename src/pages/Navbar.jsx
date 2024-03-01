import React from "react";

import { Button, Img, Line, List, SelectBox, Text } from "components";

export default function Navbar() {
  const nav = [
    { title: "Categories" },
    { title: "Website Builders" },
    { title: "Today's deals" },
  ];
  return (
    <>
      <header className="bg-blue_gray-900 w-full">
        <div className=" container mx-auto flex justify-center items-center">
          <div className=" flex md:flex-col flex-row md:gap-5 p-2 gap-28 justify-center items-center text-center w-[70rem]">
            <div className="bg-white-A700 flex border border-gray-300 border-solid  md:flex-1 flex-col items-start justify-start md:ml-[0] md:mt-0 rounded-lg w-1/4 md:w-full">
              <div className="flex border-0 items-center">
                <Img
                  className="h-6 ml-1 md:ml-[0] w-6"
                  src="images/img_image.svg"
                  alt="image"
                />
                <input type="text" className="border-0 w-40" />
              </div>
            </div>
            <ul className=" flex flex-row text-gray-400 gap-10">
              {nav.map((item, i) => (
                <li key={i}>{item.title}</li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
