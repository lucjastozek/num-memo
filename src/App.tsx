import PageHeader from "./components/PageHeader";
import { useState } from "react";
import Start from "./components/Start";
import Memorize from "./components/Memorize";
import Test from "./components/Test";
import Correct from "./components/Correct";
import Incorrect from "./components/Incorrect";
import "./styles.css";

function App(): JSX.Element {
  const [screen, setScreen] = useState("start");
  const [number, setNumber] = useState("");
  const [level, setLevel] = useState(1);

  return (
    <>
      <PageHeader
        setScreen={setScreen}
        setLevel={setLevel}
        setNumber={setNumber}
      />
      {screen === "start" && (
        <Start setScreen={setScreen} number={number} setNumber={setNumber} />
      )}
      {screen === "memorize" && (
        <Memorize number={number} setScreen={setScreen} level={level} />
      )}
      {screen === "test" && (
        <Test number={number} setScreen={setScreen} level={level} />
      )}
      {screen === "correct" && (
        <Correct
          setScreen={setScreen}
          number={number}
          setNumber={setNumber}
          level={level}
          setLevel={setLevel}
        />
      )}
      {screen === "incorrect" && (
        <Incorrect
          setScreen={setScreen}
          number={number}
          setNumber={setNumber}
          level={level}
          setLevel={setLevel}
        />
      )}
    </>
  );
}

export default App;
