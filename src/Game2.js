import { Menu } from "./Menu";
import { Button } from "./Button";
import { useState } from "react";
import { DialogueSequencer } from "./DialogueSequencer";
import { ALL_DIALOGUES } from "./consts/dialogues";

export function Game2() {
  const [gamePanel, setGamePanel] = useState("A1");
  const [playerAnswers, setPlayerAnswers] = useState({});

  const currentDialogue = ALL_DIALOGUES.find(
    (dialogue) => dialogue.id === gamePanel
  );

  return (
    <DialogueSequencer
      dialogue={currentDialogue}
      handleRedirect={setGamePanel}
      playerAnswers={playerAnswers}
      setPlayerAnswers={setPlayerAnswers}
    />
  );
}
