import { useQuery } from "@tanstack/react-query";
import { getWeather } from "./api/openWeatherApi";

function App() {
  const { data } = useQuery({
    queryKey: ["weather"],
    queryFn: () =>
      getWeather({
        latitude: 40.7128,
        longitude: -74.006,
      }),
  });
  return <>{JSON.stringify(data)}</>;
}

export default App;
