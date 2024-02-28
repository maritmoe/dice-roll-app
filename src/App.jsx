import { useState } from "react";
import "./App.css";

const getRandomInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function App() {
  const [dice, setDice] = useState([1, 2, 3, 4, 5]);

  const rollDice = () => {
    setDice([...dice.map(() => getRandomInRange(1, 6))]);
  };

  return (
    <div className="app">
      <h1>Dice Roll App</h1>
      <ul className="list">
        {dice.map((die, index) => (
          <li key={index}>
            <p>{die}</p>
            {die === 6 && <p>🔥</p>}
            {die === 1 && <p>😭</p>}
          </li>
        ))}
      </ul>
      <button onClick={() => rollDice()}>Re-Roll Dice</button>
    </div>
  );
}

export default App;
