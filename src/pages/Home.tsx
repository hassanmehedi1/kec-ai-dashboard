import { ChartBoard } from "@/components/ChartBoard";
import TotalVehicle from "@/components/TotalVehicle";
import VideoFeed from "@/components/VideoFeed";
import WeatherBoard from "@/components/WeatherBoard";

export default function Home() {
  return (
    <section className="p-6 bg-[#e2ecfe] min-h-screen">
      <div className="grid grid-cols-3 justify-between max-w-full gap-3">
        <TotalVehicle />
        <div className="">
          <WeatherBoard />
          <ChartBoard />
        </div>
        <VideoFeed />
      </div>
    </section>
  );
}
