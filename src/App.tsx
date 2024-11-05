import Button from "./components/Button";
function App() {
  const buttonList = [
    {
      text: "Primary",
      classText: "btn-primary",
      onClick: () => console.log("primary"),
    },
    {
      text: "Secondary",
      classText: "btn-secondary",
      onClick: () => console.log("primary"),
    },
    {
      text: "Success",
      classText: "btn-success",
      onClick: () => console.log("primary"),
    },
    {
      text: "Danger",
      classText: "btn-danger",
      onClick: () => console.log("primary"),
    },
    {
      text: "Warning",
      classText: "btn-warning",
      onClick: () => console.log("primary"),
    },
    {
      text: "Light",
      classText: "btn-light",
      onClick: () => console.log("primary"),
    },
    {
      text: "Dark",
      classText: "btn-dark",
      onClick: () => console.log("primary"),
    },
    {
      text: "Link",
      classText: "btn-link",
      onClick: () => console.log("primary"),
    },
  ];
  return (
    <div className="container d-flex flex-row gap-5 align-center justify-content-center p-5">
      {buttonList.map(({ text, classText, onClick }) => (
        <Button key={text} classText={classText} onClick={onClick}>
          {text}
        </Button>
      ))}
    </div>
  );
}

export default App;
