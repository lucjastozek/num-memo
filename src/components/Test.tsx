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

  function handleButtonClicked() {
    if (isCorrect(inpVal, number)) {
      setScreen("correct");
    } else {
      setScreen("incorrect");
    }
  }

  return (
    <div className="test">
      <h2>Level {level}</h2>
      <h2>What was the number?</h2>
      <input
        placeholder="Enter number here"
        value={inpVal}
        onChange={(event) => {
          setInpVal(event.target.value);
        }}
        autoFocus
        inputMode="numeric"
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleButtonClicked();
          }
        }}
      />
      <button onClick={handleButtonClicked}>Submit</button>
    </div>
  );
}

export default Test;
