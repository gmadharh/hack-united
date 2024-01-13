import React, { useState } from 'react'

function Input() {
  // Use state to manage input values
  const [inputValue, setInputValue] = useState('')

  // Handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <div>
      <h1>Hello, I'm a component with input!</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      <p>You typed: {inputValue}</p>
    </div>
  )
}

export default Input
