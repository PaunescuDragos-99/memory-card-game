/* eslint-disable react/prop-types */
function GameScore({ score, bestScore }) {
  return (
    <>
      <div className="score">
        <div className="normal-score">
          <span>The score is: {score}</span>
        </div>
        <div className="best-score">
          <span>The best score is: {bestScore}</span>
        </div>
      </div>
    </>
  );
}

export default GameScore;
