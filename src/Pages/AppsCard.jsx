import React from "react";

const AppsCard = ({ produc }) => {
  const { title } = produc;
  return (
    <div className="bg-white w-[400px] p-2 mt-4 mx-auto rounded-xl shadow">
      <img
        className="rounded-xl"
        src="https://i.ibb.co.com/ZwZSqfJ/Frame-2147229054-2.png"
        alt=""
      />
      <h1 className="text-start font-semibold mt-2">Forest: {title}</h1>
      <div className="flex justify-between text-gray-500 text-sm mt-1">
        <p>ghj</p>
        <p>ghg</p>
      </div>
    </div>
  );
};

export default AppsCard;
