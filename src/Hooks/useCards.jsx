import axios from "axios";
import { useEffect, useState } from "react";

const useCards = () => {
  const [producCard, setProducCard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("/products.json")
      .then((res) => setProducCard(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { producCard, loading, error };
};

export default useCards;
