interface MemorizeProps {
  number: string;
  setScreen: React.Dispatch<React.SetStateAction<string>>;
  level: number;
}

function Memorize({ number, setScreen, level }: MemorizeProps): JSX.Element {
  return (
    <div className="memorize">
      <h2>Level {level}</h2>
      <h2>Memorize this number:</h2>
      <p className="number">{number}</p>
      <button
        onClick={() => {
          setScreen("test");
        }}
      >
        Next
      </button>
    </div>
  );
}

export default Memorize;
