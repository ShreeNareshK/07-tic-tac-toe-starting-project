import { useState } from "react";

export default function Player({ name, symbol, isActive, onChangeName }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);
  function handleEditButton() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }
  function handleplayerName(event) {
    setPlayerName(event.target.value);
  }
  let player = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    player = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleplayerName}
      />
    );
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {player}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditButton}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
