interface HiddenInputProps {
  f: () => void;
}

function HiddenInput({ f }: HiddenInputProps): JSX.Element {
  const isMobileDevice = () => {
    return /Mobi|Android/i.test(navigator.userAgent);
  };
  return (
    <>
      {isMobileDevice() && (
        <input
          className="hidden"
          autoFocus
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              f();
            }
          }}
        ></input>
      )}
    </>
  );
}

export default HiddenInput;
