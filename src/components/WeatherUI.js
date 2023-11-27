import React from "react";
import humidIcon from "../assets/svgs/humidity.svg";
import speedIcon from "../assets/svgs/windspeed.svg";
import feelIcon from "../assets/svgs/feel.svg";

function WeatherUI({ countryData }) {
  return (
    <div className="w-full flex flex-col ">
      {/* Country name and Status*/}
      <div className="flex flex-col justify-center items-center my-3">
        <h1 className="font-bold text-lg uppercase">{countryData.name}</h1>
      </div>
      {/* Country weather image */}
      <figure className="w-44 h-44 mx-auto ">
        <img
          src={`https://openweathermap.org/img/wn/${countryData.weather[0].icon}@2x.png`}
          alt="Weather Icon"
          className=" mx-auto my-5"
        />
      </figure>
      {/* Country temp */}
      <div className="flex flex-col justify-center items-center my-4">
        <span className="text-2xl">{countryData.main.temp}°C</span>
        <span className="uppercase text-xs">
          {countryData.weather[0].description}
        </span>
      </div>
      {/* More country weather info */}
      <div className="flex flex-row py-5 gap-3 w-72">
        <div className="flex flex-col justify-center items-center w-full">
          <div className="bg-black rounded">
            <img src={feelIcon} alt="Feels-like-icon" />
          </div>
          <div className="flex justify-center flex-col items-center mt-3 uppercase">
            <p className="text-xs font-bold">Feels Like</p>
            <p className="text-xs">{countryData.main.feels_like}°C</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <div className="bg-black rounded">
            <img src={humidIcon} alt="Humidity-icon" />
          </div>
          <div className="flex justify-center flex-col items-center mt-3 uppercase">
            <p className="text-xs font-bold">Humidty</p>
            <p className="text-xs">{countryData.main.humidity}%</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <div className="bg-black rounded">
            <img src={speedIcon} alt="Wind-speed-icon" />
          </div>
          <div className="flex justify-center flex-col items-center mt-3 uppercase">
            <p className="text-xs font-bold">Wind</p>
            <p className="text-xs">{countryData.wind.speed}m/h</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherUI;
