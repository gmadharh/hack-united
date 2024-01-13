import React, { useState } from 'react'
import { Wheel } from 'react-custom-roulette'
import { generateData } from '../generateData'

const WheelComponent = () => {
  const [spinStatus, setSpinStatus] = useState(false)
  const [prizeNumber, setPrizeNumber] = useState(0)
  const [wheelData, setWheelData] = useState(generateData(10))

  const handleSpinClick = () => {
    if (!spinStatus) {
      const newPrizeNumber = Math.floor(Math.random() * wheelData.length)
      setPrizeNumber(newPrizeNumber)
      setSpinStatus(true)
    } else {
      console.log('Already spinning!')
      // setSpinStatus(false)
    }
  }

  return (
    <>
      <Wheel
        mustStartSpinning={spinStatus}
        prizeNumber={prizeNumber}
        data={wheelData}
        outerBorderWidth={5}
        outerBorderColor="#adadad"
        radiusLineWidth={0}
        // spinDuration={0.9}
        onStopSpinning={() => {
          console.log('stopped spinning!', prizeNumber)
          setSpinStatus(false)
        }}
        disableInitialAnimation={true}
        startingOptionIndex={0}
        pointerProps={{
          style: {
            color: 'green',
          }
        }}
      />
      <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 font-bold rounded w-52" onClick={handleSpinClick}>
        {spinStatus ? "STOP" : "SPIN"}
      </button>
    </>
  )
}

export default WheelComponent
