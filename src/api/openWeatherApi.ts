import { mock_api_data } from "../constants";
import { WeatherApiResponseSchema } from "../schemas/weatherSchema";

const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

//? Mock data fetchind due to limited financial capabilities.

export async function getWeather({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) {
  // const result = await fetch(
  //   `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=minutely,alerts&appid=${API_KEY}`,
  // );

  // const data = await result.json();

  console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  console.log("Mock data used due to limited financial capabilities.");

  return WeatherApiResponseSchema.parse(mock_api_data);
}
