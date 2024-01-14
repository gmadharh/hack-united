import React, { useState, useContext } from "react";
import {useNavigate} from "react-router-dom";

import { generateData } from "../generateData";

import ChallengesList from "./ChallangesList";
import SpinWheelComponent from "./SpinWheelComponent";

import { DashboardContext } from "../contexts/DashboardContext";

const WheelComponent = ({ challenges }) => {
  const [spinStatus, setSpinStatus] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [wheelData, setWheelData] = useState(generateData(challenges));

  const [spinComplete, setSpinComplete] = useState(false);

  const [tab, setTab] = useState("Challenges");
  const tabs = ["Challenges", "Spin"];

  const {setAvailableChallenges} = useContext(DashboardContext)
  const navigate = useNavigate()

  const handleSpinClick = () => {
    if (!spinStatus) {
      const newPrizeNumber = Math.floor(Math.random() * wheelData.length);
      setPrizeNumber(newPrizeNumber);
      setSpinStatus(true);
    } else {
      console.log("Already spinning!");
      // setSpinStatus(false)
    }
  };

  const onStopSpin = () => {
    console.log("prizeNumber", prizeNumber);
    console.log(wheelData[prizeNumber].challenge)
    setSpinStatus(false);
    setSpinComplete(true);
  }

  const claimPrize = () => {
    console.log("Claiming prize");
    setAvailableChallenges(null)
    navigate("/dashboard/resolutions")
  }

  const activeStyle = "text-black bg-white text-xl py-4 px-8 rounded";
  const inactiveStyle =
    "text-xl text-white hover:bg-white/10 px-8 py-4 rounded";

  return (
    <>
      {/* <h2 className="text-5xl text-center font-bold text-white heading tracking-wide">
        Spin the wheel
      </h2> */}

      <div className="flex gap-1">
        {tabs.map((tabName) => (
          <div key={tabName}>
            <button
              onClick={() => setTab(tabName)}
              className={tabName === tab ? activeStyle : inactiveStyle}
            >
              {tabName}
            </button>
          </div>
        ))}
      </div>

      <div>
        {tab === "Spin" ? (
          <SpinWheelComponent
            wheelData={wheelData}
            spinStatus={spinStatus}
            prizeNumber={prizeNumber}
            spinComplete={spinComplete}
            functions={{ handleSpinClick, onStopSpin, claimPrize }}
          />
        ) : (
          <ChallengesList wheelData={wheelData} />
        )}
      </div>
    </>
  );
};

export default WheelComponent;
