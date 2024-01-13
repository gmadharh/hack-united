import React from 'react'

function ButtonTile({ buttons }) {
  return (
    <div className="button-tile">
      {buttons.map((button, index) => (
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        key={index} onClick={button.onClick}>
          {button.label}
        </button>
      ))}
    </div>
  )
}

export default ButtonTile
