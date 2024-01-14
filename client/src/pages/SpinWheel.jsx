import WheelComponent from "../components/Wheel";
// import { use}

const SpinWheel = () => {
  return (
    <div className="container mx-auto pt-12">
      {/* <h1 className="text-3xl text-white font-bold">Name of App</h1> */}
      {/* <ButtonTile buttons={buttons} /> */}
      <div className="flex justify-center">
        <div className="bg-gray-500/20 rounded-3xl	w-3/5">
          <div className="flex flex-col justify-between items-center gap-12 pb-24 pt-10">
            <WheelComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpinWheel;
