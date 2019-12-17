import React from "react";

function ScoreBoard({score, topScore, guess}) {

  return (
    <div>
      <h1>Clicky Game</h1>
      <h1>{guess}</h1>
      <h1>
          Score: {score} Top Score: {topScore}
      </h1>
    </div>
  );
}

export default ScoreBoard;
