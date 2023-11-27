import React, { useState } from "react";
import searchIcon from "../assets/svgs/search-icon.svg";
import emptyIcon from "../assets/svgs/empty.svg";
import getCityWeather from "../root/getCityWeatherFunc";
import WeatherUI from "../components/WeatherUI";

function Home() {
  const [query, setQuery] = useState("");
  const [countryInfo, setCountryInfo] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(query);
    setLoading(true);
    try {
      const data = await getCityWeather(query);
      setCountryInfo(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
    setQuery("");
  };

  const handleReset = () => {
    setLoading(false);
    setCountryInfo([]);
  };
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Form for city input */}
      <div className="mx-2">
        <form className="flex gap-2 py-2" onSubmit={handleSubmit}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type city name here..."
            className="input input-bordered w-full max-w-xs"
          />
          <button type="submit" className="btn btn-ghost bg-orange-400">
            <img src={searchIcon} alt="seatch-icon" />
          </button>
        </form>
      </div>
      {/* Empty svg before search */}
      {!loading && !countryInfo.name && (
        <div className=" w-96 h-96 mx-auto">
          <img src={emptyIcon} alt="Empty Icon" className="h-full" />
          {countryInfo.includes("Request failed") && (
            <p className="text-center text-red-600 text-lg">
              City name cannot be found!
            </p>
          )}
        </div>
      )}
      {/* After search */}
      <div className="">
        {loading ? (
          <div className="flex items-center justify-center my-10">
            <div className="loader"></div>
          </div>
        ) : (
          countryInfo &&
          countryInfo.name && (
            <div>
              <WeatherUI countryData={countryInfo} />
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Home;
