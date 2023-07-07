import { Menu } from "./Menu";
import { Button } from "./Button";
import { useState } from "react";
export function Game(props) {
  const [gamePanel, setGamePanel] = useState("first");

  if (gamePanel === "first") {
    return (
      <Menu>
        <div>
          <h1 className="mb-2 font-mono text-2xl text-green-400 text-center ">
            OH GOD, YOU'RE FINALLY AWAKE, I WAS SO WORRIED,
            <br /> NEVER DO THAT AGAIN, YOU UNDERSTAND?
          </h1>
        </div>
        <div className="flex gap-12 mt-4">
          <Button content="YEAH" onClick={() => setGamePanel("second")} />
          <Button content="SORRY" onClick={() => setGamePanel("second")} />
        </div>
      </Menu>
    );
  }
  if (gamePanel === "second") {
    return (
      <Menu>
        <div>
          <h1 className="mb-2 font-mono text-2xl text-green-400 text-center ">
            OKAY, THAT'S FINE, BUT YOUR HEAD, UH, <br /> DO YOU REMEMBER WHAT
            YOUR NAME IS?
          </h1>
          <input
            className="appearance-none bg-transparnet border-none w-full text-xl text-gray-400  mr-3 py-1 px-2 leading-tight focus:outline-none text-center mt-4"
            type="text"
            placeholder="WHAT IS IT?"
          />
          {/* when first enter, show, "don't lie" on second enter save name */}
        </div>
      </Menu>
    );
  }
}

// function Content() {
//     const [shownMenu, setShownMenu] = useState(MENU_STATE.main);

//     if (shownMenu === MENU_STATE.main) {
//       return <MainMenu setShownMenu={setShownMenu} />;
//     }

//     if (shownMenu === MENU_STATE.options) {
//       return <OptionsMenu setShownMenu={setShownMenu} />;
//     }
//     if (shownMenu === MENU_STATE.game) {
//       return <Game setShownMenu={setShownMenu} />;
//     }
//   }
