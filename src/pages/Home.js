import React, { useState } from "react";
import searchIcon from "../assets/svgs/search-icon.svg";
import emptyIcon from "../assets/svgs/empty.svg";
import getCityWeather from "../root/getCityWeatherFunc";

function Home() {
  const [query, setQuery] = useState("");
  const [countryInfo, setCountryInfo] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(query);
    const data = await getCityWeather(query);
    if (!data.ok) {
      setError(data.message);
    }
    setCountryInfo(data);
    setQuery("");
  };
  return (
    <div className="flex flex-col justify-center">
      {/* Form for city input */}
      <div className="mx-2">
        <span className="text-base-content">
          Search for any city to get it's weather.
        </span>
        <form className="flex gap-2 py-2" onSubmit={handleSubmit}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type city name here..."
            className="input input-bordered w-full max-w-xs"
          />
          <button type="submit" className="btn btn-ghost bg-base-200">
            <img src={searchIcon} alt="seatch-icon" />
          </button>
        </form>
      </div>
      {/* Empty svg before search */}
      <div className="border-2">
        <img src={emptyIcon} alt="Empty Icon" />
      </div>
      {/* After search */}
      <div className=""></div>
    </div>
  );
}

export default Home;
