import "./App.css";

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex justify-center items-center w-[50%] min-w-[300px] max-w-[800px] aspect-square">
        <div
          id="drum-machine"
          className="flex flex-wrap w-full h-full bg-red-300 p-[3%] text-[25px] xl:text-[50px] sm:text-[4vw] rounded-lg"
        >
          <div
            className="drum-pad bg-white aspect-square m-[3%] w-[27%] flex justify-center items-center rounded-lg"
            id="alert-direct"
          >
            Q
          </div>
          <div
            className="drum-pad bg-white aspect-square m-[3%] w-[27%] flex justify-center items-center rounded-lg"
            id="alert-idleness"
          >
            W
          </div>
          <div
            className="drum-pad bg-white aspect-square m-[3%] w-[27%] flex justify-center items-center rounded-lg"
            id="alert-vigilant"
          >
            E
          </div>
          <div
            className="drum-pad bg-white aspect-square m-[3%] w-[27%] flex justify-center items-center rounded-lg"
            id="enemy-greenskins"
          >
            A
          </div>
          <div
            className="drum-pad bg-white aspect-square m-[3%] w-[27%] flex justify-center items-center rounded-lg"
            id="enemy-heretics"
          >
            S
          </div>
          <div
            className="drum-pad bg-white aspect-square m-[3%] w-[27%] flex justify-center items-center rounded-lg"
            id="enemy-xenos"
          >
            D
          </div>
          <div
            className="drum-pad bg-white aspect-square m-[3%] w-[27%] flex justify-center items-center rounded-lg"
            id="yes-charge"
          >
            Z
          </div>
          <div
            className="drum-pad bg-white aspect-square m-[3%] w-[27%] flex justify-center items-center rounded-lg"
            id="yes-emperor"
          >
            X
          </div>
          <div
            className="drum-pad bg-white aspect-square m-[3%] w-[27%] flex justify-center items-center rounded-lg"
            id="yes-onward"
          >
            C
          </div>
          <div id="display"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
