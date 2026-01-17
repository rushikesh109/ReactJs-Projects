import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getData = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${index}&limit=30`
      );

      setUserData(response.data);
    } catch (err) {
      setError("Failed to load images" , err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [index]);

  return (
    <div className="bg-black overflow-auto h-screen p-4 text-white">
      <div className="flex h-[82%] flex-wrap gap-4 p-2">
        {loading && (
          <h3 className="text-gray-300 text-xs m-auto font-semibold">
            Loading...
          </h3>
        )}

        {error && <p className="text-red-400">{error}</p>}

        {!loading &&
          userData.map((elem) => (
            <Card key={elem.id} elem={elem} />
          ))}
      </div>

      <div className="flex justify-center gap-6 items-center p-4">
        <button
          disabled={index === 1}
          className={`bg-amber-400 text-sm text-black rounded px-4 py-2 font-semibold
            ${index === 1 ? "opacity-50 cursor-not-allowed" : "active:scale-95"}`}
          onClick={() => setIndex(index - 1)}
        >
          Prev
        </button>

        <h4>Page {index}</h4>

        <button
          className="bg-amber-400 text-sm active:scale-95 text-black rounded px-4 py-2 font-semibold"
          onClick={() => setIndex(index + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
