import React from "react";
import "remixicon/fonts/remixicon.css";

const PageLeftContent = () => {
  return (
    <div className="w-1/3 h-full flex justify-between flex-col p-2">
      <div>
        <h2 className="font-bold sm:text-2xl text-xl/8 lg:text-6xl tracking-widest ">
          Prespective <br /> consumer <br />
          segmentation
        </h2>
        <p className="mt-6 text-2xl max-w-2xl text-gray-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
          tempora dolorum debitis ut maiores praesentium non suscipit, nihil
          asperiores vero.
        </p>
      </div>
      <div className="text-4xl sm:text-6xl font-semibold">
        <i className="ri-arrow-right-up-line"></i>
      </div>
    </div>
  );
};

export default PageLeftContent;
