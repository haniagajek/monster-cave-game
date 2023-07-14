import { Menu } from "./Menu";
import { Button } from "./Button";
import { useState } from "react";
export function Game(props) {
  const [gamePanel, setGamePanel] = useState("first");
  const name = "";

  const dontLie = `DON'T LIE DON'T LIE DON'T LIE DON'T LIE DON'T LIE DON'T LIE DON'T LIE DON'T LIE 
  DON'T LIE DON'T LIE DON'T LIE DON'T LIE DON'T LIE DON'T LIE DON'T LIE DON'T LIE DON'T LIE  DON'T LIE DON'T LIE DON'T LIE  DON'T LIE DON'T LIE DON'T LIE  DON'T LIE DON'T LIE DON'T LIE   DON'T LIE DON'T LIE DON'T LIE 
  `;

  const handleKeyDown = (event, name) => {
    if (event.key === "Enter") {
      name = event.target.value;
      setGamePanel("third");
      console.log(name);
    }
  };

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
            className=" input appearance-none bg-transparnet border-none w-full text-xl text-gray-400  mr-3 py-1 px-2 leading-tight focus:outline-none text-center mt-4"
            type="text"
            placeholder="WHAT IS IT?"
            pattern=".{2,20}"
            title="NAME"
            onKeyDown={handleKeyDown}
          />
          {/* when first enter, show, "don't lie" on second enter save name */}
        </div>
      </Menu>
    );
  }
  if (gamePanel === "third") {
    return (
      <Menu>
        <h1 className="mb-2 font-mono text-2xl text-green-100  z-0 animate-shake fixed overflow-hidden text-center">
          {dontLie}
          <br /> {dontLie} <br /> {dontLie} <br /> {dontLie} <br /> {dontLie}
          <br /> {dontLie} <br /> {dontLie} <br /> {dontLie} <br /> {dontLie}
          <br /> {dontLie} <br /> {dontLie}
          <br /> {dontLie} <br /> {dontLie} <br /> {dontLie} <br /> {dontLie}
          <br /> {dontLie} <br /> {dontLie} <br /> {dontLie} <br /> {dontLie}
          <br /> {dontLie} <br /> {dontLie}
          <br /> {dontLie} <br /> {dontLie} <br /> {dontLie}
          <br /> {dontLie} <br /> {dontLie} <br /> {dontLie}
          <br /> {dontLie} <br /> {dontLie}
        </h1>
        <h1 className="mb-2 font-mono text-2xl text-green-400 text-center z-10">
          REALLY?
        </h1>
        <div className="flex gap-12 mt-4 z-10 animate-shake">
          <Button
            content={`YEAH, ${name}`}
            onClick={() => setGamePanel("forth")}
          />
          <Button content="NO" onClick={() => setGamePanel("second")} />
        </div>
      </Menu>
    );
  }
  if (gamePanel === "forth") {
    return (
      <Menu>
        <div>
          <h1 className="mb-2 font-mono text-2xl text-green-400 text-center ">
            {name} <br />
            ...
            <br /> THAT REMINDS ME OF,
            <br />
            NEVERMIND
          </h1>
          <div className="flex mt-4 justify-center ">
            <Button content="?" onClick={() => setGamePanel("fifth")} />
          </div>
        </div>
      </Menu>
    );
  }
  if (gamePanel === "fifth") {
    return (
      <Menu>
        <div>
          {" "}
          <h1 className="mb-2 font-mono text-2xl text-green-400 text-center  ">
            {" "}
            OH
            <br /> RIGHT, I'M <br /> OZZY <br /> AND THIS IS <br /> BROXTON{" "}
            <br /> THE TOWN VILLAGE, <br /> FOR A LONG TIME
            <br /> I'VE BEEN A MINER <br /> BUT <br /> SOON AFTER, <br /> THE
            TOWN STARTED TO BECOME
            <br /> ... <br /> SOMETHING THAT YOU CAN CALL
            <br /> "GHOST TOWN" <br /> IT'S BECOUSE OF THE CAVE <br /> YOU SEE,{" "}
            <br />
            I'M NO LONGER A MINER{" "}
          </h1>
          <div className="flex mt-4 justify-center ">
            <Button
              content="WHAT HAPPEND?"
              onClick={() => setGamePanel("six")}
            />
          </div>
        </div>
      </Menu>
    );
  }
  if (gamePanel === "six") {
    return (
      <Menu>
        <div>
          {" "}
          <h1 className="mb-2 font-mono text-2xl text-green-400 text-center  ">
            SO, ABOUT 40 YEARS AGO LIVED A WOMAN, <br />
            NOBODY KNEW HER REAL NAME, SHE DIDN'T INTERACT, <br />
            ONE DAY SHE DECIDED TO HEAD TO THE MAINSQUARE <br />
            SHE STARTED SHOUTING, LOUD AS HUMAN POSSIBLY CAN, <br />
            THE CROWD APPEARED, SIMPLY FOR LAUGHTER BUT, <br />
            MORE AND MORE TOWN FALKS BEGUN TO LISTEN <br />
            SHE WAS TELLING A STORY ABOUT A MAGIC ARTEFACT <br />
            THE ONE THAT COULD GRAND YOU ONE WISH <br />
            WHATEVER YOUR MIND DESIRES, MOST OF THEM DIDN'T BELIVE <br />
            BUT SOME PEOPLE, REALLY WENT LOOKIN, THEY CAME ACROSS <br />
            THE OLDEST CAVE IN TOWN, A TON OF PEOPLE DECIDED TO LOOK THERE,{" "}
            <br />
            I DON'T RECON I EVER HEARD ABOUT SOMEONE THAT CAME OUT <br />
            ... <br />
            BUT YOU WERE INSIDE OF IT, WEREN'T YOU?
          </h1>
          <div className="flex mt-4 justify-center ">
            <Button content="WHAT?" onClick={() => setGamePanel("six")} />
          </div>
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
