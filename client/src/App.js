import "./App.css";
import WheelComponent from "./components/Wheel";
import ButtonTile from "./components/ButtonTile";

function App() {
  // const buttons = [
  //   { label: "Button 1", onClick: () => console.log("Button 1 clicked") },
  //   { label: "Button 2", onClick: () => console.log("Button 2 clicked") },
  //   { label: "Button 3", onClick: () => console.log("Button 3 clicked") },
  // ];

  return (
    <div className="App bg-center bg-contain pb-48">
      <div className="container mx-auto pt-12">
        {/* <h1 className="text-3xl text-white font-bold">Name of App</h1> */}
        {/* <ButtonTile buttons={buttons} /> */}
        <div className="flex justify-center">
          <div className="bg-gray-500/20 rounded-3xl	w-3/5">
            <div className="flex flex-col justify-between items-center gap-12 py-24">
              <WheelComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
