import { useEffect, useState } from "react";
import sunCloud from "../assets/svgs/sunCloud.svg";

export default function WeatherBoard() {
  const [weatherData, setWeatherData] = useState({
    location: "",
    climate: "",
    temperature: "",
    maxTemperature: "",
    minTemperature: "",
    humidity: "",
    cloudPercentage: "",
    wind: "",
    time: "",
    longitude: "",
    latitude: "",
  });
  const [loading, setLoading] = useState(false);

  const fetchWeatherData = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=23.777176&lon=90.399452&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&units=metric`
      );

      if (!response.ok) {
        const errorMessage = `Fetching weather data failed: ${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();

      const updateWeatherData = {
        ...weatherData,
        location: data?.name,
        climate: data?.weather[0]?.main,
        temperature: data?.main?.temp,
        maxTemperature: data?.main?.temp_max,
        minTemperature: data?.main?.temp_min,
        humidity: data?.main?.humidity,
        cloudPercentage: data?.clouds?.all,
        wind: data?.wind?.speed,
        time: data?.dt,
        longitude: data?.coord?.lon,
        latitude: data?.coord?.lat,
      };

      setWeatherData(updateWeatherData);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  console.log(weatherData);

  return (
    <div className="border p-4 rounded-xl bg-white">
      <div className="flex items-center gap-4 justify-around">
        <div>
          <h1 className="uppercase font-bold">friday</h1>
          <h2 className="text-6xl font-bold text-[#0B1F8F]">23°</h2>
        </div>

        <div>
          <h1 className="text-[#4F5658]">
            Real Feel <span className="font-bold text-black">32°</span>
          </h1>

          <h1 className="text-[#4F5658]">
            Wind Speed <span className="font-bold text-black">6-7km/h</span>
          </h1>

          <h1 className="text-[#4F5658]">
            Pressure <span className="font-bold text-black">100MB</span>
          </h1>

          <h1 className="text-[#4F5658]">
            Humidity <span className="font-bold text-black">51%</span>
          </h1>
        </div>

        <div>
          <h1 className="font-bold text-center">11:45 AM</h1>
          <img className="mt-2" src={sunCloud} alt="" />
        </div>

        <div>
          <h1 className="text-[#4F5658]">
            Sunrise <span className="font-bold text-black">5:30 AM</span>
          </h1>

          <h1 className="text-[#4F5658]">
            Sunset <span className="font-bold text-black">6:45 PM</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
