interface PageHeaderProps {
  setScreen: React.Dispatch<React.SetStateAction<string>>;
  setNumber: React.Dispatch<React.SetStateAction<string>>;
  setLevel: React.Dispatch<React.SetStateAction<number>>;
}

function PageHeader({
  setScreen,
  setNumber,
  setLevel,
}: PageHeaderProps): JSX.Element {
  return (
    <header>
      <h1
        onClick={() => {
          setNumber("");
          setLevel(1);
          setScreen("start");
        }}
      >
        Number memory 🧠
      </h1>
    </header>
  );
}

export default PageHeader;
