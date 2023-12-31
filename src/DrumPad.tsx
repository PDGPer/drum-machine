import React, { useEffect } from "react";

const drumPadClasses =
  "drum-pad bg-orange-100 aspect-square m-[3%] w-[27%] flex justify-center items-center rounded-lg hover:bg-white transition-all duration-300 cursor-pointer active:bg-orange-300";

const DrumPad = ({
  audioName,
  buttonKey,
  // emoji,
  phrase,
}: {
  audioName: string;
  buttonKey: string;
  //emoji: string;
  phrase: string;
}) => {
  const playAudio = (event: React.MouseEvent<HTMLDivElement>) => {
    const parentDiv = event.currentTarget;
    const audioElement = parentDiv.querySelector("audio");
    const displayElement = document.getElementById("display");
    if (audioElement && displayElement) {
      audioElement.play();
      displayElement.innerText = phrase;
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const displayElement = document.getElementById("display");
      if (event.key.toUpperCase() === buttonKey) {
        // Add more intense orange to button
        const buttonElement = document.getElementById(audioName);
        buttonElement?.classList.add("bg-orange-300");
        // Remove intense orange from button
        setTimeout(() => {
          buttonElement?.classList.remove("bg-orange-300");
        }, 150);
        // Play audio and update the display
        const audioElement = document.getElementById(
          buttonKey
        ) as HTMLAudioElement;
        if (audioElement && displayElement) {
          audioElement.play();
          displayElement.innerText = phrase;
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      className={drumPadClasses}
      id={audioName}
      onClick={playAudio}
    >
      <audio
        src={"./barks/" + audioName + ".mp3"}
        className="clip"
        id={buttonKey}
      />
      {buttonKey}
    </div>
  );
};

export default DrumPad;
