import React, { useState, useEffect } from "react";

import useCards from "../Hooks/useCards";
import { useParams } from "react-router";

const AppsDetails = () => {
  const { id } = useParams();
  const { producCard, loading } = useCards();
  const [isInstalled, setIsInstalled] = useState(false);

  const produc = producCard.find((p) => p.id === parseInt(id));
  useEffect(() => {
    const existing = JSON.parse(localStorage.getItem("installedApps")) || [];
    const alreadyAdded = existing.find((item) => item.id === parseInt(id));
    if (alreadyAdded) {
      setIsInstalled(true);
    }
  }, [id]);

  if (loading) {
    return <span>Loading.....</span>;
  }

  if (!produc) {
    return <span>App not found</span>;
  }

  const { title, image, ratingAvg, reviews } = produc;
  const handleInstall = () => {
    const existing = JSON.parse(localStorage.getItem("installedApps")) || [];

    const alreadyAdded = existing.find((item) => item.id === produc.id);

    let updated;
    if (!alreadyAdded) {
      updated = [...existing, produc];
      alert("App added successfully ✅");
    } else {
      updated = existing;
      alert("App already installed ⚠️");
    }

    localStorage.setItem("installedApps", JSON.stringify(updated));

    setIsInstalled(true);
  };

  return (
    <div className="bg-white mx-auto mt-6 rounded-xl shadow p-4 flex flex-col sm:flex-row items-center gap-4">
      <img src={image} alt="App Icon" className="h-16 w-16 rounded-lg shadow" />
      <div className="flex-1 text-center sm:text-left">
        <h2 className="text-lg font-bold">{title}</h2>
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:gap-4 text-sm text-gray-600 mt-2">
          <p className="flex gap-2">
            <img
              className="w-[16px] h-[16px]"
              src="https://i.ibb.co.com/sdr6p5YY/icon-downloads.png"
              alt="downloads"
            />
            <span className="font-semibold">{reviews}M</span>
          </p>
          <p className="flex gap-2">
            <img
              className="w-[16px] h-[16px]"
              src="https://i.ibb.co.com/JRH0zXx0/icon-ratings.png"
              alt="rating"
            />
            <span className="font-semibold">{ratingAvg}</span>
          </p>
          <p>
            Size: <span className="font-semibold">258 MB</span>
          </p>
        </div>
      </div>
      <button
        onClick={handleInstall}
        disabled={isInstalled}
        className={`${
          isInstalled
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-green-500 hover:bg-green-600"
        } text-white font-semibold px-4 py-2 rounded-lg mt-4 sm:mt-0`}
      >
        {isInstalled ? "Installed" : "Install"}
      </button>
    </div>
  );
};

export default AppsDetails;