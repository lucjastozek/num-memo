import addDigit from "../utils/addDigit";
import HiddenInput from "./HiddenInput";

interface CorrectProps {
  setScreen: React.Dispatch<React.SetStateAction<string>>;
  setNumber: React.Dispatch<React.SetStateAction<string>>;
  setLevel: React.Dispatch<React.SetStateAction<number>>;
  number: string;
  level: number;
}
function Correct({
  setScreen,
  setNumber,
  number,
  level,
  setLevel,
}: CorrectProps): JSX.Element {
  function handleButtonClicked() {
    setLevel(level + 1);
    setNumber(addDigit(number));
    setScreen("memorize");
  }

  return (
    <div className="correct">
      <h2>Level {level}</h2>
      <h2>That's correct! Click to go to the next level!</h2>
      <button onClick={handleButtonClicked}>Next</button>

      <HiddenInput f={handleButtonClicked} />
    </div>
  );
}

export default Correct;
