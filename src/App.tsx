import "./App.css";
import DrumPad from "./DrumPad";
import drumPadContents from "./drumPadContents";

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex justify-center items-center w-[50%] min-w-[300px] max-w-[800px] aspect-square">
        <div
          id="drum-machine"
          className="flex flex-wrap w-full h-full bg-gray-800 text-gray-800 p-[3%] text-[25px] xl:text-[50px] sm:text-[4vw] rounded-lg font-sans font-bold"
        >
          {drumPadContents.map((drumPadContent, index) => (
            <DrumPad
              key={index}
              audioName={drumPadContent.audioName}
              buttonKey={drumPadContent.buttonKey}
              emoji={drumPadContent.emoji}
              phrase={drumPadContent.phrase}
            />
          ))}

          <div
            id="display"
            className="mx-auto my-auto mt-[10%] text-orange-100"
          >
            ...
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
