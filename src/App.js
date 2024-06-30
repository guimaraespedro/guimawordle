import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const targetWord = "PEDRO";
  const rows = 6;
  const cols = 5;

  const [attempts, setAttempts] = useState(0);
  const [currGuess, setCurrGuess] = useState("");
  const [won, setWon] = useState(false);
  const [guesses, setGuesses] = useState(
    Array(rows)
      .fill("")
      .map(() => Array(cols).fill(""))
  );

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      if (currGuess.length === cols) {
        let newGuesses = [...guesses];
        newGuesses[attempts] = currGuess.split("");
        setAttempts((currAttempts) => currAttempts + 1);
        setCurrGuess("");
        setGuesses(newGuesses);
        console.log(currGuess);
        if (currGuess === targetWord) {
          setWon(true);
          window.removeEventListener("keydown", handleKeyPress);
        }
      }
    }
    if (event.key === "Backspace") {
      setCurrGuess((currGuess) => currGuess.slice(0, -1));
    }

    if (/^[a-zA-Z]$/.test(event.key) && currGuess.length < cols) {
      setCurrGuess((currValue) => currValue + event.key.toUpperCase());
    }
  };

  const getCellClass = (cellValue, colIndex) => {
    if (!cellValue) return "";
    if (targetWord[colIndex].toLocaleUpperCase() === cellValue)
      return "correct";
    if (targetWord.toLocaleUpperCase().includes(cellValue)) return "present";
    return "absent";
  };

  useEffect(() => {
    if (!won) window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [currGuess, attempts, guesses, won]);

  return (
    <div className="App">
      <div className="game-board">
        <header>
          <button>?</button>
          <h1 className="title">PGWordle</h1>
        </header>

        {guesses.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <div
                key={cellIndex}
                className={`cell ${getCellClass(cell, cellIndex)}`}
              >
                {attempts === rowIndex ? currGuess.charAt(cellIndex) : cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
