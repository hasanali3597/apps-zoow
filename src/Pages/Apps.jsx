import React, { useState } from "react";
import useCards from "../Hooks/useCards";
import AppsCard from "./AppsCard";

const Apps = () => {
  const { producCard, loading, error } = useCards();
  const [search, setSearch] = useState("");
  console.log(producCard);
  const tram = search.trim().toLowerCase();
  const searchApps = tram
    ? producCard.filter((produc) => produc.title.toLowerCase().includes(tram))
    : producCard;
  console.log(searchApps);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <div className="bg-[#f5f5f5]">
      <div className=" text-center mt-4 container mx-auto">
        <h1 className=" text-5xl font-bold  ">Our All Applications</h1>
        <p className=" text-[#627382] text-xl mt-2 ">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className=" flex justify-between mt-4 container mx-auto">
        <h1 className="text-2xl font-semibold">({searchApps.length}) Apps Found</h1>
        <label className="input">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Serarch Apps"
          />
        </label>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {searchApps?.map((produc) => (
          <AppsCard key={produc.id} produc={produc} />
        ))}
      </div>
    </div>
  );
};

export default Apps;
