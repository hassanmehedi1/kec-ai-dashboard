import TotalVehicle from "@/components/TotalVehicle";
import WeatherBoard from "@/components/WeatherBoard";

export default function Home() {
  return (
    <section className="p-6 bg-[#e2ecfe] min-h-screen">
      <div className="grid grid-cols-3 justify-between max-w-full gap-3">
        <TotalVehicle />
        <WeatherBoard />
        <div className="text-center">videosW</div>
      </div>
    </section>
  );
}
