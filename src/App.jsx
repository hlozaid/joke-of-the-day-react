import { useState } from "react";
import "./App.css";
import Joker from "./Jocker";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Joker />
    </>
  );
}

export default App;
