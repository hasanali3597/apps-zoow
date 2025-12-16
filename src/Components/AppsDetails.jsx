import { useParams } from "react-router";
import useCards from "../Hooks/useCards";

const AppsDetails = () => {
  const { id } = useParams();
  const { producCard, loading, error } = useCards();

  const produc = producCard.find((p) => p.id === parseInt(id));
  console.log(produc);
  if (loading) return <span>looding.....</span>;
  const { title, image, ratingAvg, reviews } = produc;

  return (
    <div className="bg-white mx-auto mt-6 rounded-xl shadow p-4 flex flex-col sm:flex-row items-center gap-4">
      <img
        src={image}
        alt="Forest App Icon"
        className="h-16 w-16 rounded-lg shadow"
      />
      <div className="flex-1 text-center sm:text-left">
        <h2 className="text-lg font-bold">Forest: {title}</h2>
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:gap-4 text-sm text-gray-600 mt-2">
          <p className="flex gap-2">
            <img
              className="w-[16px] h-[16px]"
              src="https://i.ibb.co.com/sdr6p5YY/icon-downloads.png"
              alt=""
            />{" "}
            <span className="font-semibold">{reviews}M</span>
          </p>
          <p className="flex gap-2">
            <img
              className="w-[16px] h-[16px]"
              src="https://i.ibb.co.com/JRH0zXx0/icon-ratings.png"
              alt=""
            />{" "}
            <span className="font-semibold">{ratingAvg}</span>
          </p>
          <p>
            Size: <span className="font-semibold">258 MB</span>
          </p>
        </div>
      </div>
      <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg mt-4 sm:mt-0">
        Uninstall
      </button>
    </div>
  );
};

export default AppsDetails;
