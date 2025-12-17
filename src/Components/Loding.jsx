import React from "react";

const Loding = () => {
  return (
    <div className="flex gap-4 justify-center items-center mt-20">
      <img
        className="w-[100px] animate-spin "
        src="https://i.ibb.co.com/93G8Dm0M/logo.png"
        alt=""
      />
      <h1 className="text-7xl font-bold text-[#1A34A7]">
        Loding<span className="animate-ping">....</span>
      </h1>
    </div>
  );
};

export default Loding;
