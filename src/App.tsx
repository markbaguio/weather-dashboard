import { useQuery } from "@tanstack/react-query";
import { getWeather } from "./api/openWeatherApi";
import Card from "./components/Card";
import DailyForecast from "./components/DailyForecast";

function App() {
  const { data } = useQuery({
    queryKey: ["weather"],
    queryFn: () =>
      getWeather({
        latitude: 40.7128,
        longitude: -74.006,
      }),
  });
  return (
    <div className="flex flex-col gap-8 p-4 text-white">
      <Card title="Current Weather">{JSON.stringify(data?.current)}</Card>
      <Card title="Hourly Forecast (48 Hours)">
        {JSON.stringify(data?.hourly)}
      </Card>
      <DailyForecast />
    </div>
  );
}

export default App;
