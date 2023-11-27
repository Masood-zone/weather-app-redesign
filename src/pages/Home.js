import React, { useState } from "react";
import searchIcon from "../assets/svgs/search-icon.svg";
import emptyIcon from "../assets/svgs/empty.svg";
import getCityWeather from "../root/getCityWeatherFunc";

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
              Opps! <br />
              {countryInfo}!
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
              <p className="py-3 font-bold">
                Dear user, this web app is still in development and will be
                updated soon. Thank you for you time.
                <button className="underline" onClick={() => handleReset()}>
                  Go back
                </button>
              </p>
              <h1>Country Name: {countryInfo.name}</h1>
              <p>Timezone: {countryInfo.timezone}</p>
              <p>Weather status: {countryInfo.weather[0].main}</p>
              <img
                src={`https://openweathermap.org/img/wn/${countryInfo.weather[0].icon}@2x.png`}
                alt="Weather Icon"
              />
              <p>Description: {countryInfo.weather[0].description}</p>
              <p>Cloudiness: {countryInfo.clouds.all}%</p>
              <p>Visibilty: {countryInfo.visibility}Km</p>
              <p>Temperature: {countryInfo.main.temp}°C</p>
              <p>Feels like: {countryInfo.main.feels_like}°C</p>
              <p>Humidity: {countryInfo.main.humidity}%</p>
              <p>Wind speed: {countryInfo.wind.speed}m/h</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Home;
