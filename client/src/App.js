import './App.css'
import WheelComponent from './components/Wheel'
import ButtonTile from './components/ButtonTile'

function App() {
  const buttons = [
    { label: 'Button 1', onClick: () => console.log('Button 1 clicked') },
    { label: 'Button 2', onClick: () => console.log('Button 2 clicked') },
    { label: 'Button 3', onClick: () => console.log('Button 3 clicked') },
  ]

  return (
    <div className="App min-h-screen">
      <h1>Name of App</h1>
      <ButtonTile buttons={buttons} />
      <div className="wheel">
        {/* <WheelComponent /> */}
      </div>
    </div>
  )
}

export default App
