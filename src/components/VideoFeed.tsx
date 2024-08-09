import toll1 from "@/assets/toll-1.png";
import toll2 from "@/assets/toll-2.png";

export default function VideoFeed() {
  return (
    <div className="space-y-9">
      <img src={toll1} alt="" />
      <h1 className="text-center font-semibold text-blue-800">Camera: 01</h1>
      <img src={toll2} alt="" />
      <h1 className="text-center font-semibold text-blue-800">Camera: 02</h1>
      {/* <img src={toll1} alt="" /> */}
    </div>
  );
}
