import "./App.css";
import { data } from "./Data";
import Card from "./Card";
import { useEffect, useState } from "react";
import GameScore from "./GameScore";

function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function App() {
  const [score, setScore] = useState(null);
  const [bestScore, setBestScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [playerClicked, setPlayerClicked] = useState([]);
  const [shuffledData, setShuffledData] = useState(data);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    if (gameOver) {
      if (score > bestScore) {
        setBestScore(score);
        setScore(0);
      }
      setScore(0);
      setGameOver(false);
    }
  }, [gameOver]);

  const handleCardClick = () => {
    // Shuffle data array
    const shuffledArray = shuffleArray(data);
    setShuffledData(shuffledArray);

    // Handle other game logic
  };

  const startGame = () => {
    setScore(0);
    setGameOver(false);
    setPlayerClicked([]);
    setGameStarted(true);
    // You may add additional logic here if needed
  };

  return (
    <>
      {/* <GameScore score={score} bestScore={bestScore} /> */}

      {!gameStarted && (
        <>
          <p>How to play?</p>
          <p>Click the card just 1 one time!</p>
          <p>
            After you clicked 1 card, they will shuffle! Try to don't click it
            twice.
          </p>
          <button onClick={startGame}>Start Game</button>
        </>
      )}
      {gameStarted && (
        <>
          <GameScore score={score} bestScore={bestScore} />

          <div className="cards-container">
            <div className="columns">
              {/* {gameStarted && */}
              {shuffledData.map((item, key) => (
                <Card
                  key={key}
                  player={item}
                  score={score}
                  setScore={setScore}
                  setGameOver={setGameOver}
                  playerClicked={playerClicked}
                  setPlayerClicked={setPlayerClicked}
                  onCardClick={handleCardClick}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
