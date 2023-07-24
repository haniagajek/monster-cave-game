import { Menu } from "./Menu";
import { Button } from "./Button";
import { useState } from "react";
export function Game(props) {
  const [gamePanel, setGamePanel] = useState("first");
  const name = "";
  //   const response_amethyst = "0"
  //   const amethyst= "0";
  // if (amethyst===0) {
  //   return (response_amethyst = "THE ONE THAT OZZY GAVE YOU")
  // } else {
  //   return (response_amethyst = "SOMEONE MUST HAVE SLIPT IT IN YOUR POCKET WHEN YOU WEREN'T LOOKING")
  // }

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
        <div className="flex gap-12 mt-4 z-10 animate-shake justify-center">
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
            <Button
              content="WHO ARE YOU?"
              onClick={() => setGamePanel("fifth")}
            />
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
            OH, RIGHT, I'M OZZY <br /> AND THIS IS BROXTON <br /> THE TOWN
            VILLAGE, <br /> FOR A LONG TIME
            <br /> I'VE BEEN A MINER <br /> BUT SOON AFTER, <br /> THE TOWN
            STARTED TO BECOME
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
            <Button content="WHAT?" onClick={() => setGamePanel("seven")} />
          </div>
        </div>
      </Menu>
    );
  }
  if (gamePanel === "seven") {
    return (
      <Menu>
        <div>
          {" "}
          <h1 className="mb-2 font-mono text-2xl text-green-400 text-center  ">
            OKAY BOY, I'M NO DOCTOR BUT <br />
            IF YOU LOST YOUR MEMORY, MAYBE YOU SHOULD <br />
            STAY WITH ME FOR A BIT, I HAVE A HUT BOUT 10 MINUTS FROM HERE,{" "}
            <br />
            UNLESS YOU WANNA GO BACK THERE <br />
            IT'S OKAY IF YOU'RE SCARED, I DON'T BLAME YOU
          </h1>
          <div className="flex gap-12 mt-4 justify-center">
            <Button
              content="I DON'T HAVE A CHOICE"
              onClick={() => setGamePanel("eight")}
            />
            <Button
              content="I'M SCARED"
              onClick={() => setGamePanel("eight_second")}
            />
          </div>
        </div>
      </Menu>
    );
  }
  if (gamePanel === "eight") {
    return (
      <Menu>
        <div>
          {" "}
          <h1 className="mb-2 font-mono text-2xl text-blue-300 text-center  ">
            {" "}
            *YOU WALK INTO THE CAVE*
          </h1>
          <div className="flex mt-4 justify-center ">
            <Button content=">" onClick={() => setGamePanel("nine")} />
          </div>
        </div>
      </Menu>
    );
  }
  if (gamePanel === "eight_second") {
    return (
      <Menu>
        <div>
          {" "}
          <h1 className="mb-2 font-mono text-2xl text-green-400 text-center  ">
            IT'S FINE, <br />
            NOBODY HAVE DONE IT,
            <br />
            BUT I SAW YOU, COMING OUT OF THERE <br />
            DIDN'T THINK THAT WAS POSSIBLE. <br />
            YOU REMIND ME OF SOMEONE I USED TO KNOW <br />
            I KNOW THAT YOU ARE NOT HIM BUT, <br />
            I WANNTED TO GIVE YOU THIS
            <br />
            IT WILL PROTECT YOU, I BELIEVE
            <br />
          </h1>
          <p className="mb-2 font-mono text-2xl text-blue-300  text-center animate-pulse ">
            *YOU RECIVED AN AMETHYST*{" "}
          </p>
          <div className="flex mt-4 justify-center">
            <Button content="THANK YOU" onClick={() => setGamePanel("eight")} />
          </div>
        </div>
      </Menu>
    );
  }
  if (gamePanel === "nine") {
    return (
      <Menu>
        <div>
          {" "}
          <h1 className="mb-2 font-mono text-2xl text-blue-300 text-center  ">
            IT'S NOT CLEAR HOW DEEP THIS CAVE IS, <br />
            EVERY WALL LOOKS THE SAME AND THE LIGHT BEHIND YOU <br />
            STARTED TO FAINT. <br />
            BUT THE SOUND, YES THE SOUND BRINGS BACK YOUR MEMORIES <br />
            YOU REALLY BEEN IN HERE ONE TIME. <br />
            YOU NOTICED THAT THE PASSAGE IS SPLITED <br />
            FROM THE LEFT YOU HEAR A WOMAN AND FROM THE RIGHT <br />
            YOU HEAR RINGING, JUST LIKE TWO METAL PIECES ARE BANGING AGAINST{" "}
            <br />
            EACH OTHER, BUT THE SOUND IS DISTURBED <br />
          </h1>
          <div className="flex gap-12 mt-4 justify-center ">
            <Button content="TURN LEFT" onClick={() => setGamePanel("ten")} />
            <Button
              content="TURN RIGHT"
              onClick={() => setGamePanel("ten_second")}
            />
          </div>
        </div>
      </Menu>
    );
  }
  if (gamePanel === "nine") {
    return (
      <Menu>
        <div>
          {" "}
          <h1 className="mb-2 font-mono text-2xl text-blue-300 text-center  ">
            IT'S NOT CLEAR HOW DEEP THIS CAVE IS, <br />
            EVERY WALL LOOKS THE SAME AND THE LIGHT BEHIND YOU <br />
            STARTED TO FAINT. <br />
            BUT THE SOUND, YES THE SOUND BRINGS BACK YOUR MEMORIES <br />
            YOU REALLY BEEN IN HERE ONE TIME. <br />
            YOU NOTICED THAT THE PASSAGE IS SPLITED <br />
            FROM THE LEFT YOU HEAR A WOMANS VOICE AND FROM THE RIGHT <br />
            YOU HEAR RINGING, JUST LIKE TWO METAL PIECES ARE BANGING AGAINST{" "}
            <br />
            EACH OTHER, BUT THE SOUND IS DISTURBED <br />
          </h1>
          <div className="flex gap-12 mt-4 justify-center ">
            <Button content="TURN LEFT" onClick={() => setGamePanel("ten")} />
            <Button
              content="TURN RIGHT"
              onClick={() => setGamePanel("ten_second")}
            />
          </div>
        </div>
      </Menu>
    );
  }
  if (gamePanel === "ten") {
    return (
      <Menu>
        <div>
          {" "}
          <h1 className="mb-2 font-mono text-2xl text-blue-300 text-center  ">
            YOU NOTICED AN OLDER WOMAN, WEARING DESTROYED COAT, <br />
            SHE IS TALKING, LOOKING INFRONT OF HER, BUT THERE IS NOT A THING
            EXEPT A PILE OF ROCKS, <br />
            YOU APROACH HER, SHE NOTICES YOU, TURNS YOUR WAY <br />
          </h1>
          <p className="mb-2 font-mono text-2xl text-green-400  text-center animate-pulse ">
            OH IT'S YOU AGAIN, I'M SO HAPPY YOU CAME BACK, AS YOU PROMISED,{" "}
            <br />
            DO YOU HAVE THE THING?
          </p>
          <h1 className="mb-2 font-mono text-2xl text-blue-300 text-center  ">
            YOU PULL OUT AN AMETHYST OUT OF YOUR POCKET
          </h1>
          <div className="flex gap-12 mt-4 justify-center ">
            <Button
              content="GIVE HER THE AMETHYST"
              onClick={() => setGamePanel("ten")}
            />
            <Button
              content="KEEP IT TO YOURSELF"
              onClick={() => setGamePanel("ten_second")}
            />
          </div>
        </div>
      </Menu>
    );
  }
  if (gamePanel === "ten_second") {
    return (
      <Menu>
        <div>
          {" "}
          <h1 className="mb-2 font-mono text-2xl text-blue-300 text-center  ">
            YOU FALL DOWN, TRIPING ON SOME KIND OF MATERIAL, IT'S TOO DARK FOR
            YOU TO SEE <br />
            SUDDENLY YOU HEAR A LOW VOICE,
          </h1>
          <p className="mb-2 font-mono text-2xl text-green-400  text-center  ">
            STAND UP, WHO ARE YOU, ANOTHER KNIGHT? <br />
          </p>
          <h1 className="mb-2 font-mono text-2xl text-blue-300 text-center  ">
            PERSON INFRONT OF YOU LOOKS SMALL AND WEAK, BUT HAS A SWORD, <br />
            YOU NOTICE THAT THERE IS AN ANVIL BEHIND THEM, MAYBE HAVING A SWORD,{" "}
            <br />
            WOUDN'T BE A BAD IDEA
          </h1>
          <div className="flex gap-12 mt-4 justify-center ">
            <Button
              content="KILL HIM"
              onClick={() => setGamePanel("ten_third")}
            />
            <Button
              content="NEGOTIATE"
              onClick={() => setGamePanel("ten_fourth")}
            />
          </div>
        </div>
      </Menu>
    );
  }
  if (gamePanel === "ten_third") {
    return (
      <Menu>
        <div>
          {" "}
          <h1 className="mb-2 font-mono text-2xl text-red-500 text-center ">
            YOU CHARGE AT HIM, HE TRIPS, EXPOSING THAT HE IS DWORF, THIS WILL BE
            EASY THEN, <br />
            YOU GRAB HIS SWORD THAT FALL NEXT TO YOU AND <br />
            YOU CUT HIS HEAD OFF
          </h1>
          <p className="mb-2 font-mono text-2xl text-blue-300  text-center animate-pulse ">
            *YOU RECIVED AN SWORD*{" "}
          </p>
          <div className="flex gap-12 mt-4 justify-center animate-shake ">
            <Button
              content="WALK AWAY"
              onClick={() => setGamePanel("eleven_third")}
            />
          </div>
        </div>
      </Menu>
    );
  }
  if (gamePanel === "ten_fourth") {
    return (
      <Menu>
        <div>
          {" "}
          <p className="mb-2 font-mono text-2xl text-blue-300   text-center  ">
            YOU GRAB YOUR POCKETS, IN THE SEARCH OF SOMETHING VALUABLE,
            <br />
            IN YOUR LAST POCKET IS SOMETHING QUITE SHARP, IT'S AMETHYST
          </p>
          <h1 className="mb-2 font-mono text-2xl text-green-400 text-center  ">
            OH, AMETHYST, YOU CAME HERE TO TRADE?
            <br />
            THAT'S GOOD, I'M NOT AS STRONG AS I USED TO <br />
            DURING THE LAST WAR MY HAD GOT CUT OFF, <br />
            I WAS SCARED FOR A SECOND, I'M EGNAR BY THE WAY <br />
            LET ME SEE THE CRYSTAL, <br />
            I CAN OFFER YOU MY BEST SWORD, HERE YOU GO, <br />
            NICE TALKING TO YOU, MY FRIEND, TAKE CARE <br />
          </h1>
          <p className="mb-2 font-mono text-2xl text-blue-300  text-center animate-pulse ">
            *YOU RECIVED AN SWORD*{" "}
          </p>
          <div className="flex gap-12 mt-4 justify-center animate-shake ">
            <Button
              content="WALK AWAY"
              onClick={() => setGamePanel("eleven_second")}
            />
          </div>
        </div>
      </Menu>
    );
  }
  if (gamePanel === "eleven_first") {
    return (
      <Menu>
        <div>
          {" "}
          <p className="mb-2 font-mono text-2xl text-green-400  text-center  ">
            I'M SO HAPPY I'LL BE FINALLY ABLE TO COME BACK TO THE SURFICE, THANK
            YOU {name}
          </p>
          <h1 className="mb-2 font-mono text-2xl text-blue-300 text-center  ">
            YOU WALK AWAY, IN THE SEARCH OF THE MEMORIES
          </h1>
          <div className="flex gap-12 mt-4 justify-center ">
            <Button content=">" onClick={() => setGamePanel("twelwe")} />
          </div>
        </div>
      </Menu>
    );
  }
  if (gamePanel === "eleven_second") {
    return (
      <Menu>
        <div>
          {" "}
          <h1 className="mb-2 font-mono text-2xl text-blue-300 text-center  ">
            YOU WALK AWAY, IN THE SEARCH OF THE MEMORIES
          </h1>
          <div className="flex gap-12 mt-4 justify-center ">
            <Button content=">" onClick={() => setGamePanel("twelwe")} />
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
