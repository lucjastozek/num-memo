import addDigit from "../utils/addDigit";
import HiddenInput from "./HiddenInput";

interface IncorrectProps {
  setScreen: React.Dispatch<React.SetStateAction<string>>;
  setNumber: React.Dispatch<React.SetStateAction<string>>;
  number: string;
  level: number;
  setLevel: React.Dispatch<React.SetStateAction<number>>;
}
function Incorrect({
  setScreen,
  setNumber,
  number,
  level,
  setLevel,
}: IncorrectProps): JSX.Element {
  function handleButtonClicked() {
    setLevel(1);
    setNumber(addDigit(""));
    setScreen("memorize");
  }
  return (
    <div className="correct">
      <h2>Level {level}</h2>
      <h2>That's not correct! Click to go to start again!</h2>
      <p className="correct-answer">Correct answer: {number}</p>
      <button onClick={handleButtonClicked}>Next</button>
      <HiddenInput f={handleButtonClicked} />
    </div>
  );
}

export default Incorrect;
