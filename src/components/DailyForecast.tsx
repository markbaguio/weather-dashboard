import { useSuspenseQuery } from "@tanstack/react-query";
import Card from "./Card";
import { getWeather } from "../api/openWeatherApi";

type Props = {};

const DailyForecast = (props: Props) => {
  const { data } = useSuspenseQuery({
    queryKey: ["weather"],
    queryFn: () =>
      getWeather({
        latitude: 40.7128,
        longitude: -74.006,
      }),
  });

  return (
    <Card title="Daily Forecast" childrenClassName="flex flex-col gap-4">
      {data?.daily.map((day) => (
        <div key={day.dt} className="flex justify-between">
          <p className="w-9">
            {new Date(day.dt * 1000).toLocaleDateString(undefined, {
              weekday: "short",
            })}
          </p>
          <img
            className="size-9"
            src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
            alt="Weather Icon"
          />
          <p className="w-10 tabular-nums text-right ">
            {Math.round(day.temp.day)}°C
          </p>
          <p className="text-gray-500/75 w-10 tabular-nums text-right">
            {Math.round(day.temp.min)}°C
          </p>
          <p className="text-gray-500/75 w-10 tabular-nums text-right">
            {Math.round(day.temp.max)}°C
          </p>
        </div>
      ))}
    </Card>
  );
};

export default DailyForecast;
