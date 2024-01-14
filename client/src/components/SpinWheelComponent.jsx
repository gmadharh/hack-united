import { Wheel } from "react-custom-roulette";

const SpinWheelComponent = (props) => {
  const { wheelData, spinStatus, prizeNumber, spinComplete, functions } = props;

  let claimStatement = "";
  if (spinComplete) {
    claimStatement = wheelData[prizeNumber].challenge.replace(/\d./, "");
  }

  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <Wheel
        mustStartSpinning={spinStatus}
        prizeNumber={prizeNumber}
        data={wheelData}
        outerBorderWidth={5}
        outerBorderColor="#adadad"
        radiusLineWidth={0}
        fontFamily="Poppins"
        fontSize={20}
        textDistance={80}
        perpendicularText={true}
        // innerRadius={1}
        spinDuration={Math.random() + 1}
        onStopSpinning={functions.onStopSpin}
        disableInitialAnimation={true}
        startingOptionIndex={Math.floor(Math.random() * wheelData.length)}
      />
      {!spinComplete ? (
        <button
          disabled={spinStatus}
          className="bg-green-500 hover:bg-green-600 text-2xl text-white px-4 py-2 font-bold rounded w-52 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={functions.handleSpinClick}
        >
          <p>Start</p>
        </button>
      ) : (
        <div className="flex flex-col items-center gap-8">
          <div className="bg-white/20 p-4 w-3/5">
            <h3 className="text-white font-bold text-xl text-center">{claimStatement}</h3>
          </div>
          <button onClick={functions.claimPrize}
          className="bg-blue-500 hover:bg-blue-700 text-xl text-white font-bold px-8 py-4 w-52 rounded">
            <p>Claim</p>
          </button>
        </div>
      )}
    </div>
  );
};

export default SpinWheelComponent;
