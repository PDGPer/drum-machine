import React from "react";

const drumPadClasses =
  "drum-pad bg-orange-100 aspect-square m-[3%] w-[27%] flex justify-center items-center rounded-lg hover:bg-white transition-all duration-300 cursor-pointer active:bg-orange-300";

const DrumPad = ({
  audioName,
  buttonKey,
  emoji,
}: {
  audioName: string;
  buttonKey: string;
  emoji: string;
}) => {
  const playAudio = (event: React.MouseEvent<HTMLDivElement>) => {
    const parentDiv = event.currentTarget;
    const audioElement = parentDiv.querySelector("audio");
    if (audioElement) {
      audioElement.play();
    }
  };

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
