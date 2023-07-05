interface HiddenInputProps {
  f: () => void;
}

function HiddenInput({ f }: HiddenInputProps): JSX.Element {
  return (
    <input
      className="hidden"
      autoFocus
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          f();
        }
      }}
    ></input>
  );
}

export default HiddenInput;
