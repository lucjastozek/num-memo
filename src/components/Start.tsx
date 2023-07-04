import addDigit from "../utils/addDigit";

interface StartProps {
  setScreen: React.Dispatch<React.SetStateAction<string>>;
  setNumber: React.Dispatch<React.SetStateAction<string>>;
  number: string;
}
function Start({ setScreen, setNumber, number }: StartProps): JSX.Element {
  return (
    <div className="start">
      <h2>Click to start the game!</h2>
      <button
        onClick={() => {
          setNumber(addDigit(number));
          setScreen("memorize");
        }}
      >
        Start
      </button>
    </div>
  );
}

export default Start;
