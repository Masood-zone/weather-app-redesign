import axios from "axios";
import { API_KEY } from "./root";

export default async function getCityWeather(country) {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${API_KEY}&units=metric`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
}
