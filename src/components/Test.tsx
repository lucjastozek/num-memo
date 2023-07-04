import { useState } from "react";

interface TestProps {
  number: string;
  setScreen: React.Dispatch<React.SetStateAction<string>>;
  level: number;
}

function Test({ number, setScreen, level }: TestProps): JSX.Element {
  const [inpVal, setInpVal] = useState("");

  function isCorrect(inpVal: string, number: string): boolean {
    return inpVal === number;
  }

  return (
    <div className="test">
      <h2>Level {level}</h2>
      <h2>What was the number?</h2>
      <input
        value={inpVal}
        onChange={(event) => {
          setInpVal(event.target.value);
        }}
      />
      <button
        onClick={() => {
          if (isCorrect(inpVal, number)) {
            setScreen("correct");
          } else {
            setScreen("incorrect");
          }
        }}
      >
        Next
      </button>
    </div>
  );
}

export default Test;
