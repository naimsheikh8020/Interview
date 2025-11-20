import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  const [inputs, setInputs] = useState("");
  const [result, setResult] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const fetchData = async () => {
    const data = await fetch(
      `https://dummyjson.com/recipes/search?q=${inputs}`
    );
    const jsonData = await data.json();
    setResult(jsonData?.recipes || []);
  };

  useEffect(() => {
    fetchData();
  }, [inputs]);

  return (
    <div className="w-full flex flex-col items-center mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        Auto Complete Search Bar
      </h2>

      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Search Recipe Here..."
          value={inputs}
          onChange={(e) => setInputs(e.target.value)}
          onFocus={()=>setShowResults(true)}
          onBlur={()=>setShowResults(false)}
          className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white shadow-md border border-gray-200
                        focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all 
                        placeholder-gray-400 text-gray-700 outline-none"
        />
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          size={20}
        />
      </div>

      {/* Results Dropdown */}
      {showResults && (
        <div className="w-full max-w-md bg-white shadow-md mt-3 rounded-xl p-3 max-h-[30vh] overflow-y-auto">
          {result.length > 0 ? (
            result.map((item, index) => (
              <p
                key={index}
                className="py-2 px-3 hover:bg-gray-100 rounded-lg cursor-pointer"
              >
                {item.name}
              </p>
            ))
          ) : (
            <p className="text-gray-500 text-center py-2">
              No results found...
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
