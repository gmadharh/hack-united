import React from 'react'
import '../style/ButtonTile.css'

function ButtonTile({ buttons }) {
  return (
    <div className="button-tile">
      {buttons.map((button, index) => (
        <button key={index} onClick={button.onClick}>
          {button.label}
        </button>
      ))}
    </div>
  )
}

export default ButtonTile
