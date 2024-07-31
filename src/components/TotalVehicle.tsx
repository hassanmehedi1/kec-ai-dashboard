import trailor from "../assets/vehicles/trailor.svg";
import heavyTruck from "../assets/vehicles/heavyTruck.svg";
import mediumTruck from "../assets/vehicles/mediumTruck.svg";
import bus from "../assets/vehicles/bus.svg";
import smallTruck from "../assets/vehicles/smalltruck.svg";
import miniBus from "../assets/vehicles/miniBus.svg";
import microBus from "../assets/vehicles/microBus.svg";
import pickUp from "../assets/vehicles/pickup.svg";
import sedan from "../assets/vehicles/sedan.svg";
import motorBike from "../assets/vehicles/motorBike.svg";
import redOval from "../assets/svgs/redOval.svg";
import greenOval from "../assets/svgs/greenOval.svg";

export default function TotalVehicle() {
  return (
    <div className="min-h-screen space-y-2">
      <h1 className="uppercase p-3 bg-[#283751] rounded-t-xl text-lg font-semibold text-white">
        total vehicle passing today 2393
      </h1>

      <div className="bg-white p-3 flex items-center gap-6">
        <div className="flex gap-4 font-semibold">
          <img src={redOval} alt="" />
          <h1>To Dhaka</h1>
        </div>

        <div className="flex gap-4 font-semibold">
          <img src={greenOval} alt="" />
          <h1>To Mawa</h1>
        </div>
      </div>

      {/* trailer  */}
      <div className="bg-white flex items-center gap-6 justify-between pl-3">
        <div className="flex gap-4 font-semibold text-xl">
          <img src={trailor} alt="" />
          <h1>Trailer</h1>
        </div>

        <div className="flex items-center gap-2 font-semibold">
          <h1 className="p-6 bg-red-400/70 h-20 w-20 flex items-center justify-center">
            109
          </h1>
          <h1 className="p-6 bg-green-400/70 h-20 w-20 flex items-center justify-center">
            157
          </h1>
        </div>
      </div>

      {/* heavy truck  */}
      <div className="bg-white flex items-center gap-6 justify-between pl-3">
        <div className="flex gap-4 font-semibold text-xl">
          <img src={heavyTruck} alt="" />
          <h1>Heavy Truck</h1>
        </div>

        <div className="flex items-center gap-2 font-semibold">
          <h1 className="p-6 bg-red-400/70 h-20 w-20 flex items-center justify-center">
            109
          </h1>
          <h1 className="p-6 bg-green-400/70 h-20 w-20 flex items-center justify-center">
            157
          </h1>
        </div>
      </div>

      {/* medium truck  */}
      <div className="bg-white flex items-center gap-6 justify-between pl-3">
        <div className="flex gap-4 font-semibold text-xl">
          <img src={mediumTruck} alt="" />
          <h1>Medium Truck</h1>
        </div>

        <div className="flex items-center gap-2 font-semibold">
          <h1 className="p-6 bg-red-400/70 h-20 w-20 flex items-center justify-center">
            109
          </h1>
          <h1 className="p-6 bg-green-400/70 h-20 w-20 flex items-center justify-center">
            157
          </h1>
        </div>
      </div>

      {/* bus  */}
      <div className="bg-white flex items-center gap-6 justify-between pl-3">
        <div className="flex gap-4 font-semibold text-xl">
          <img src={bus} alt="" />
          <h1>Bus</h1>
        </div>

        <div className="flex items-center gap-2 font-semibold">
          <h1 className="p-6 bg-red-400/70 h-20 w-20 flex items-center justify-center">
            109
          </h1>
          <h1 className="p-6 bg-green-400/70 h-20 w-20 flex items-center justify-center">
            157
          </h1>
        </div>
      </div>

      {/* small truck  */}
      <div className="bg-white flex items-center gap-6 justify-between pl-3">
        <div className="flex gap-4 font-semibold text-xl">
          <img src={smallTruck} alt="" />
          <h1>Small Truck</h1>
        </div>

        <div className="flex items-center gap-2 font-semibold">
          <h1 className="p-6 bg-red-400/70 h-20 w-20 flex items-center justify-center">
            109
          </h1>
          <h1 className="p-6 bg-green-400/70 h-20 w-20 flex items-center justify-center">
            157
          </h1>
        </div>
      </div>

      {/* mini bus  */}
      <div className="bg-white flex items-center gap-6 justify-between pl-3">
        <div className="flex gap-4 font-semibold text-xl">
          <img src={miniBus} alt="" />
          <h1>Mini Bus</h1>
        </div>

        <div className="flex items-center gap-2 font-semibold">
          <h1 className="p-6 bg-red-400/70 h-20 w-20 flex items-center justify-center">
            109
          </h1>
          <h1 className="p-6 bg-green-400/70 h-20 w-20 flex items-center justify-center">
            157
          </h1>
        </div>
      </div>

      {/* micro bus  */}
      <div className="bg-white flex items-center gap-6 justify-between pl-3">
        <div className="flex gap-4 font-semibold text-xl">
          <img src={microBus} alt="" />
          <h1>Micro Bus</h1>
        </div>

        <div className="flex items-center gap-2 font-semibold">
          <h1 className="p-6 bg-red-400/70 h-20 w-20 flex items-center justify-center">
            109
          </h1>
          <h1 className="p-6 bg-green-400/70 h-20 w-20 flex items-center justify-center">
            157
          </h1>
        </div>
      </div>

      {/* pickup  */}
      <div className="bg-white flex items-center gap-6 justify-between pl-3">
        <div className="flex gap-4 font-semibold text-xl">
          <img src={pickUp} alt="" />
          <h1>Pickup / Four Wheeler</h1>
        </div>

        <div className="flex items-center gap-2 font-semibold">
          <h1 className="p-6 bg-red-400/70 h-20 w-20 flex items-center justify-center">
            109
          </h1>
          <h1 className="p-6 bg-green-400/70 h-20 w-20 flex items-center justify-center">
            157
          </h1>
        </div>
      </div>

      {/* sedan  */}
      <div className="bg-white flex items-center gap-6 justify-between pl-3">
        <div className="flex gap-4 font-semibold text-xl">
          <img src={sedan} alt="" />
          <h1>Private Car / Sedan</h1>
        </div>

        <div className="flex items-center gap-2 font-semibold">
          <h1 className="p-6 bg-red-400/70 h-20 w-20 flex items-center justify-center">
            109
          </h1>
          <h1 className="p-6 bg-green-400/70 h-20 w-20 flex items-center justify-center">
            157
          </h1>
        </div>
      </div>

      {/* motorcycle  */}
      <div className="bg-white flex items-center gap-6 justify-between pl-3">
        <div className="flex gap-4 font-semibold text-xl">
          <img src={motorBike} alt="" />
          <h1>MotorCycle</h1>
        </div>

        <div className="flex items-center gap-2 font-semibold">
          <h1 className="p-6 bg-red-400/70 h-20 w-20 flex items-center justify-center">
            109
          </h1>
          <h1 className="p-6 bg-green-400/70 h-20 w-20 flex items-center justify-center">
            157
          </h1>
        </div>
      </div>
    </div>
  );
}
