import { Link } from "react-router";
import useCards from "../Hooks/useCards";
import AppsCard from "./AppsCard";

const Home = () => {
  const { producCard, loading, error } = useCards();
  const featureCard = producCard.slice(0, 6);
  console.log(featureCard);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="text-center bg-[#f5f5f5]">
      <h1 className="text-7xl font-bold">
        We Build <br />
        <span className="bg-gradient-to-r from-[#733ce7] to-[#9f62f2] bg-clip-text text-transparent">
          Productive
        </span>{" "}
        Apps
      </h1>
      <p className="mt-4 text-gray-600 text-xl">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. <br /> Our goal is to turn your
        ideas into digital experiences that truly make an impact.
      </p>
      <div className="flex gap-2 mx-auto justify-center mt-4">
        <button className="btn btn-outline">
          <img src="https://i.ibb.co.com/gMffjfg7/Group.png" alt="" /> Google
          Play
        </button>
        <button className="btn btn-outline">
          <img src="https://i.ibb.co.com/QF2hbcK4/Group1.png" alt="" /> App
          Store
        </button>
      </div>
      <div className="text-center mt-10">
        <img
          src="https://i.ibb.co.com/pvj1341X/hero.png"
          alt=""
          className="inline-block h-[476px] w-auto"
        />
      </div>
      <div className="bg-gradient-to-r from-[#5a3ae8] to-[#9d61f2] p-10 md:p-20 text-center w-full">
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          Trusted by Millions, Built for You
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div>
            <h4 className="text-lg md:text-xl text-white">Total Downloads</h4>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white">
              29.6M
            </h1>
            <p className="text-base md:text-xl text-white">
              21% more than last month
            </p>
          </div>
          <div>
            <h4 className="text-lg md:text-xl text-white">Total Reviews</h4>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white">
              906K
            </h1>
            <p className="text-base md:text-xl text-white">
              46% more than last month
            </p>
          </div>
          <div>
            <h4 className="text-lg md:text-xl text-white">Active Apps</h4>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white">
              132+
            </h1>
            <p className="text-base md:text-xl text-white">
              31 more will Launch
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-5xl font-bold">Trending Apps</h1>
        <p className="text-[#627382] mt-4">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {featureCard?.map((produc) => (
          <AppsCard key={produc.id} produc={produc} />
        ))}
      </div>
      <div className="mt-7 h-10 ">
        <Link 
          to="/apps"
          className=" bg-gradient-to-r from-[#733ce7] to-[#9f62f2] text-white font-semibold px-4 py-3 rounded-xl"
        >
          Show All
        </Link>
        
      </div>
    </div>
  );
};

export default Home;
