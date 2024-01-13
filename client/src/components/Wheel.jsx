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
      <h2 className="text-5xl text-center font-bold text-white heading tracking-wide">Spin the wheel</h2>
      <Wheel className="w-64"
        mustStartSpinning={spinStatus}
        prizeNumber={prizeNumber}
        data={wheelData}
        outerBorderWidth={5}
        outerBorderColor="#adadad"
        radiusLineWidth={0}
        fontFamily='Poppins'
        fontSize={25}
        perpendicularText={true}
        // innerRadius={1}
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
      <button className="bg-green-500 hover:bg-green-600 text-2xl text-white px-4 py-2 font-bold rounded w-52" onClick={handleSpinClick}>
        SPIN
      </button>
    </>
  )
}

export default WheelComponent
