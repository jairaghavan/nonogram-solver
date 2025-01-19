import { useEffect } from "react";
import Header from "./components/Header";
import Game from "./components/Game";
import "./App.css";

function App() {

  useEffect(() => {
    document.title = "Nonogram Player";
  });

  return (
    <>
      <div id="app">
        <div id="left">
          
        </div>
        <div id="center">
          <Header text="Nonogram Player" />
          <div className="instructions">
            <h2>Instructions</h2>
            <p>Click on a square to fill it in or clear it out.</p>
            <p>Click on the "Check" button to check your solution.</p>
          </div>
          <div className="container">
            <Game />
          </div>
        </div>
        <div id="right">

        </div>
      </div>
    </>
  );
}

export default App;
