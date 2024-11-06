import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";
function App() {
  const [isAlert, setAlert] = useState(false);
  const buttonList = [
    {
      text: "Primary",
      classText: "btn-primary",
      onClick: () => {
        setAlert(!isAlert);
      },
    },
    {
      text: "Secondary",
      classText: "btn-secondary",
      onClick: () => {
        setAlert(!isAlert);
      },
    },
    {
      text: "Success",
      classText: "btn-success",
      onClick: () => {
        setAlert(!isAlert);
      },
    },
    {
      text: "Danger",
      classText: "btn-danger",
      onClick: () => console.log("primary"),
    },
    {
      text: "Warning",
      classText: "btn-warning",
      onClick: () => {
        setAlert(!isAlert);
      },
    },
    {
      text: "Light",
      classText: "btn-light",
      onClick: () => {
        setAlert(!isAlert);
      },
    },
    {
      text: "Dark",
      classText: "btn-dark",
      onClick: () => {
        setAlert(!isAlert);
      },
    },
    {
      text: "Link",
      classText: "btn-link",
      onClick: () => {
        setAlert(!isAlert);
      },
    },
  ];
  return (
    <>
      <Alert isShow={isAlert} dismiss={() => setAlert(!isAlert)}>
        Alert
      </Alert>
      <div className="container d-flex flex-row gap-5 align-center justify-content-center p-5">
        {buttonList.map(({ text, classText, onClick }) => (
          <Button key={text} classText={classText} onClick={onClick}>
            <span>{text}</span>
          </Button>
        ))}
      </div>
    </>
  );
}

export default App;
