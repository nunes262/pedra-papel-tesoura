import { useState } from "react";
import "./App.css";
import papel from "./Assets/teste.png";

const choices = ["Pedra", "Papel", "Tesoura"];

const App = () => {
  const [myChance, setMyChance] = useState(null);
  const [randomChoice, setRandomChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const getRandomChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  const determineWinner = (user, computer) => {
    if (user === computer) return "Empate";
    if (
      (user === "Pedra" && computer === "Tesoura") ||
      (user === "Papel" && computer === "Pedra") ||
      (user === "Tesoura" && computer === "Papel")
    ) {
      return "Venceu!";
    } else {
      return "Perdeu";
    }
  };

  const handleUserChoice = (choice) => {
    const computerChoice = getRandomChoice();
    const result = determineWinner(choice, computerChoice);

    setMyChance(choice);
    setRandomChoice(computerChoice);
    setResult(result);

    if (result === "Venceu!") {
      setPlayerScore(playerScore + 1);
    } else if (result === "Perdeu") {
      setComputerScore(computerScore + 1);
    }
  };

  return (
    <div className="App">
      <h1>Pedra, Papel, Tesoura</h1>
      <div className="game-container">
        <div className="choices">
          {choices.map((choice, index) => (
            <button
              key={choice}
              onClick={() => handleUserChoice(choice)}
              className={`choice-button choice-${index}`}
            >
              {choice}
            </button>
          ))}
        </div>
        {myChance && randomChoice && (
          <>
            <div className="result">
              <div className="result-card player-card">
                <p>Você escolheu: {myChance}</p>
                <p>Placar do Jogador: {playerScore}</p>
              </div>
              <div className="result-card computer-card">
                <p>Computador escolheu: {randomChoice}</p>
                <p>Placar do Computador: {computerScore}</p>
              </div>
            </div>
            <p className="result-text">
              {result === "Empate" ? "Empate!" : `Você ${result}`}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
