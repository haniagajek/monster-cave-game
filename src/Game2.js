import { Menu } from "./Menu";
import { Button } from "./Button";
import { useState } from "react";
import { DialogueSequencer } from "./DialogueSequencer";
import { ALL_DIALOGUES } from "./consts/dialogues";

export function Game2(props) {
  const [gamePanel, setGamePanel] = useState("A1");
  const [name, setName] = useState("");
  const [eq, setEq] = useState("");

  const currentDialogue = ALL_DIALOGUES.find(
    (dialogue) => dialogue.id === gamePanel
  );

  return (
    <DialogueSequencer
      dialogue={currentDialogue}
      handleRedirect={setGamePanel}
    />
  );
}
