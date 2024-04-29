import React from "react";

export default function Gameover({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <P>It's a draw!</P>}
      <button onClick={onRestart}>Restart</button>
    </div>
  );
}
