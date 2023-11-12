import React, { useEffect } from "react";

const drumPadClasses =
  "drum-pad bg-orange-100 aspect-square m-[3%] w-[27%] flex justify-center items-center rounded-lg hover:bg-white transition-all duration-300 cursor-pointer active:bg-orange-300";

const DrumPad = ({
  audioName,
  buttonKey,
  emoji,
  phrase,
}: {
  audioName: string;
  buttonKey: string;
  emoji: string;
  phrase: string;
}) => {
  const playAudio = (event: React.MouseEvent<HTMLDivElement>) => {
    const parentDiv = event.currentTarget;
    const audioElement = parentDiv.querySelector("audio");
    if (audioElement) {
      audioElement.play();
      document.getElementById("display").innerText = phrase;
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key.toUpperCase() === buttonKey) {
        const audioElement = document.getElementById(
          buttonKey
        ) as HTMLAudioElement;
        if (audioElement) {
          audioElement.play();
          document.getElementById("display").innerText = phrase;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [buttonKey]);

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
      {buttonKey + " " + emoji}
    </div>
  );
};

export default DrumPad;
