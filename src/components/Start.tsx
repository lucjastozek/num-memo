import addDigit from "../utils/addDigit";
import HiddenInput from "./HiddenInput";

interface StartProps {
  setScreen: React.Dispatch<React.SetStateAction<string>>;
  setNumber: React.Dispatch<React.SetStateAction<string>>;
  number: string;
}
function Start({ setScreen, setNumber, number }: StartProps): JSX.Element {
  function handleButtonClicked() {
    setNumber(addDigit(number));
    setScreen("memorize");
  }
  return (
    <div className="start">
      <h2>Click to start the game!</h2>
      <button onClick={handleButtonClicked}>Start</button>
      <HiddenInput f={handleButtonClicked} />
    </div>
  );
}

export default Start;
