/* eslint-disable react/prop-types */
import "./Card.css";
import { useState, useEffect } from "react";

function Card({
  player,
  score,
  setScore,
  setGameOver,
  playerClicked,
  setPlayerClicked,
  onCardClick,
}) {
  const [animationClick, setAnimationClick] = useState(false);

  useEffect(() => {
    if (animationClick) {
      const timeout = setTimeout(() => {
        setAnimationClick(false);
      }, 500); // Reset the clicked state after 0.5 seconds
      return () => clearTimeout(timeout); // Cleanup function
    }
  }, [animationClick]);

  const handleClick = () => {
    setAnimationClick(true);
    if (playerClicked.includes(player.id) === false) {
      setPlayerClicked((playerClicked) => [...playerClicked, player.id]);
      setScore(score + 1);
    } else {
      setGameOver(true);
      setPlayerClicked([]);
    }
    onCardClick();
    setAnimationClick(true);
  };
  console.log(
    "the id clicked: ",
    playerClicked.includes(player.id),
    playerClicked,
  );

  return (
    <>
      <div
        className={`column ${animationClick ? "clicked" : ""}`}
        id={player.id}
        onClick={handleClick}
      >
        <div className="card-image">
          <img
            src={player.image}
            alt="playerImage"
            style={{ width: "120px", height: "160px" }}
          />
          <p>{player.name}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
