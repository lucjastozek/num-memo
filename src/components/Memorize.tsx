import HiddenInput from "./HiddenInput";
interface MemorizeProps {
  number: string;
  setScreen: React.Dispatch<React.SetStateAction<string>>;
  level: number;
}

function Memorize({ number, setScreen, level }: MemorizeProps): JSX.Element {
  function handleButtonClicked() {
    setScreen("test");
  }
  return (
    <div className="memorize">
      <h2>Level {level}</h2>
      <h2>Memorize this number:</h2>
      <p className="number">{number}</p>
      <button onClick={handleButtonClicked}>Next</button>
      <HiddenInput f={handleButtonClicked} />
    </div>
  );
}

export default Memorize;
