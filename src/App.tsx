import { useState, ComponentProps } from "react";
import Card from "./components/Card";
import Img from "./components/Img";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CardSimple from "./components/CardSimple";

const cardContent = {
  title: "Card title",
  text: "Some quick example text to build on the card title and make up the  bulk of the card's content.",
  href: "#",
  ancorText: "Go somewhere",
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Card {...cardContent} children={Img()} />
      <CardSimple {...cardContent} />
    </>
  );
}

export default App;
