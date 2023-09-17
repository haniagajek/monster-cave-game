import { MainMenu } from "./MainMenu";
import { OptionsMenu } from "./OptionsMenu";
import { useState } from "react";
import { MENU_STATE } from "./consts/menu";
import { Game2 } from "./Game2";

function Content() {
  const [shownMenu, setShownMenu] = useState(MENU_STATE.main);

  if (shownMenu === MENU_STATE.main) {
    return <MainMenu setShownMenu={setShownMenu} />;
  }

  if (shownMenu === MENU_STATE.options) {
    return <OptionsMenu setShownMenu={setShownMenu} />;
  }
  if (shownMenu === MENU_STATE.game) {
    return <Game2 setShownMenu={setShownMenu} />;
  }
}

export default function App() {
  return (
    <div className="bg-gray-900 w-screen h-screen text-green-400 flex justify-center align-middle items-center">
      <div id="game-content" className="w-2/4 h-3/4">
        <Content />
      </div>
    </div>
  );
}
// https://tailwind.build/classes
