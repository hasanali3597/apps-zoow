import React from "react";

const AppsCard = ({ produc }) => {
  const { title, image, ratingAvg, downloads } = produc;
  return (
    <div className="bg-white w-[400px] p-4 mt-4 mx-auto rounded-xl shadow">
      <img
        className="rounded-xl mx-auto h-[200px] w-full "
        src={image}
        alt=""
      />
      <h1 className="text-start font-semibold mt-2">Forest: {title}</h1>
      <div className="flex flex-col sm:flex-row justify-between text-gray-500 text-sm mt-2 gap-2">
  <p className="flex gap-2 items-center border border-gray-300 rounded-lg px-3 py-1 bg-white shadow-sm">
    <img
      className="h-4 w-4"
      src="https://i.ibb.co.com/sdr6p5YY/icon-downloads.png"
      alt=""
    />
    {downloads}M
  </p>

  <p className="flex gap-2 items-center border border-gray-300 rounded-lg px-3 py-1 bg-white shadow-sm">
    <img
      className="h-4 w-4"
      src="https://i.ibb.co.com/JRH0zXx0/icon-ratings.png"
      alt=""
    />
    {ratingAvg}
  </p>
</div>
    </div>
  );
};

export default AppsCard;
