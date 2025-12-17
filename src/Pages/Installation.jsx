import React, { useEffect, useState } from "react";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("high");

  useEffect(() => {
    const data = localStorage.getItem("installedApps");
    if (data) {
      setInstalledApps(JSON.parse(data));
    }
  }, []);

  const handleUninstall = (id) => {
    const updatedApps = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updatedApps);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
    alert("App uninstalled successfully ❌");
  };
  const sortedApps = [...installedApps].sort((a, b) => {
    if (sortOrder === "high") {
      return b.ratingAvg - a.ratingAvg;
    } else {
      return a.ratingAvg - b.ratingAvg;
    }
  });

  return (
    <div className="mx-auto mt-6 space-y-6">
      <h1 className="text-2xl font-bold text-center">
        Installed Apps {installedApps.length}
      </h1>
      <div className="flex text-right">
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="high">Rating: High → Low</option>
          <option value="low">Rating: Low → High</option>
        </select>
      </div>

      {sortedApps.length > 0 ? (
        sortedApps.map((app) => (
          <div
            key={app.id}
            className="bg-white rounded-xl shadow p-4 flex flex-col sm:flex-row items-center gap-4"
          >
            <img
              src={app.image}
              alt={app.title}
              className="h-16 w-16 rounded-lg shadow"
            />
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-lg font-bold">{app.title}</h2>
              <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-sm text-gray-600 mt-2">
                <p className="flex items-center gap-1">
                  <img
                    src="https://i.ibb.co.com/sdr6p5YY/icon-downloads.png"
                    className="w-4 h-4"
                    alt="downloads"
                  />
                  <span className="font-semibold">{app.reviews}M</span>
                </p>
                <p className="flex items-center gap-1">
                  <img
                    src="https://i.ibb.co.com/JRH0zXx0/icon-ratings.png"
                    className="w-4 h-4"
                    alt="rating"
                  />
                  <span className="font-semibold">{app.ratingAvg}</span>
                </p>
                <p>
                  Size: <span className="font-semibold">258MB</span>
                </p>
              </div>
            </div>
            <button
              onClick={() => handleUninstall(app.id)}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg mt-4 sm:mt-0"
            >
              Uninstall
            </button>
          </div>
        ))
      ) : (
        <div className="text-center bg-gray-100 rounded-xl p-6 shadow">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
            alt="No apps"
            className="mx-auto h-20 w-20 mb-4 opacity-70"
          />
          <h2 className="text-lg font-semibold text-gray-700">
            No apps installed yet
          </h2>
          <p className="text-gray-500 mt-2">
            Install some apps to see them listed here.
          </p>
        </div>
      )}
    </div>
  );
};

export default Installation;
