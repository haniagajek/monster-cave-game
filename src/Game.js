import { Menu } from "./Menu";
import { Button } from "./Button";
import { useState } from "react";
export function Game(props) {
  const [gamePanel, setGamePanel] = useState("1");
  const [name, setName] = useState("");
  const [eq, setEq] = useState("");

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
      setName(event.target.value);
      setGamePanel("3");
      console.log(name);
    }
  };

  // if (gamePanel === "1") {
  //   return (
  //     <Menu>
  //       <div>
  //         <h1 className="mb-2 font-mono text-2xl text-green-400 text-center ">
  //           OH GOD, YOU'RE FINALLY AWAKE, I WAS SO WORRIED,
  //           <br /> NEVER DO THAT AGAIN, YOU UNDERSTAND?
  //         </h1>
  //       </div>
  //       <div className="flex gap-12 mt-4">
  //         <Button content="YEAH" onClick={() => setGamePanel("2")} />
  //         <Button content="SORRY" onClick={() => setGamePanel("2")} />
  //       </div>
  //     </Menu>
  //   );
  // }
  // if (gamePanel === "2") {
  //   return (
  //     <Menu>
  //       <div>
  //         <h1 className="mb-2 font-mono text-2xl text-green-400 text-center ">
  //           OKAY, THAT'S FINE, BUT YOUR HEAD, UH, <br /> DO YOU REMEMBER WHAT
  //           YOUR NAME IS?
  //         </h1>
  //         <input
  //           className=" input appearance-none bg-transparnet border-none w-full text-xl text-gray-400  mr-3 py-1 px-2 leading-tight focus:outline-none text-center mt-4"
  //           type="text"
  //           placeholder="WHAT IS IT?"
  //           pattern=".{2,20}"
  //           title="NAME"
  //           onKeyDown={handleKeyDown}
  //         />
  //         {/* when first enter, show, "don't lie" on second enter save name */}
  //       </div>
  //     </Menu>
  //   );
  // }
  // if (gamePanel === "3") {
  //   return (
  //     <Menu>
  //       <h1 className="mb-2 font-mono text-2xl text-green-100  z-0 animate-shake fixed overflow-hidden text-center">
  //         {dontLie}
  //         <br /> {dontLie} <br /> {dontLie} <br /> {dontLie} <br /> {dontLie}
  //         <br /> {dontLie} <br /> {dontLie} <br /> {dontLie} <br /> {dontLie}
  //         <br /> {dontLie} <br /> {dontLie}
  //         <br /> {dontLie} <br /> {dontLie} <br /> {dontLie} <br /> {dontLie}
  //         <br /> {dontLie} <br /> {dontLie} <br /> {dontLie} <br /> {dontLie}
  //         <br /> {dontLie} <br /> {dontLie}
  //         <br /> {dontLie} <br /> {dontLie} <br /> {dontLie}
  //         <br /> {dontLie} <br /> {dontLie} <br /> {dontLie}
  //         <br /> {dontLie} <br /> {dontLie}
  //       </h1>
  //       <h1 className="mb-2 font-mono text-2xl text-green-400 text-center z-10">
  //         REALLY?
  //       </h1>
  //       <div className="flex gap-12 mt-4 z-10 animate-shake justify-center">
  //         <Button content={`YEAH, ${name}`} onClick={() => setGamePanel("4")} />
  //         <Button content="NO" onClick={() => setGamePanel("2")} />
  //       </div>
  //     </Menu>
  //   );
  // }
  // if (gamePanel === "4") {
  //   return (
  //     <Menu>
  //       <div>
  //         <h1 className="mb-2 font-mono text-2xl text-green-400 text-center ">
  //           {name} <br />
  //           ...
  //           <br /> THAT REMINDS ME OF,
  //           <br />
  //           NEVERMIND
  //         </h1>
  //         <div className="flex mt-4 justify-center ">
  //           <Button content="WHO ARE YOU?" onClick={() => setGamePanel("5")} />
  //         </div>
  //       </div>
  //     </Menu>
  //   );
  // }
  // if (gamePanel === "5") {
  //   return (
  //     <Menu>
  //       <div>
  //         {" "}
  //         <h1 className="mb-2 font-mono text-2xl text-green-400 text-center  ">
  //           {" "}
  //           OH, RIGHT, I'M OZZY <br /> AND THIS IS BROXTON <br /> THE TOWN
  //           VILLAGE, <br /> FOR A LONG TIME
  //           <br /> I'VE BEEN A MINER <br /> BUT SOON AFTER, <br /> THE TOWN
  //           STARTED TO BECOME
  //           <br /> ... <br /> SOMETHING THAT YOU CAN CALL
  //           <br /> "GHOST TOWN" <br /> IT'S BECOUSE OF THE CAVE <br /> YOU SEE,{" "}
  //           <br />
  //           I'M NO LONGER A MINER{" "}
  //         </h1>
  //         <div className="flex mt-4 justify-center ">
  //           <Button content="WHAT HAPPEND?" onClick={() => setGamePanel("6")} />
  //         </div>
  //       </div>
  //     </Menu>
  //   );
  // }
  // if (gamePanel === "6") {
  //   return (
  //     <Menu>
  //       <div>
  //         {" "}
  //         <h1 className="mb-2 font-mono text-2xl text-green-400 text-center  ">
  //           SO, ABOUT 40 YEARS AGO LIVED A WOMAN, <br />
  //           NOBODY KNEW HER REAL NAME, SHE DIDN'T INTERACT, <br />
  //           ONE DAY SHE DECIDED TO HEAD TO THE MAINSQUARE <br />
  //           SHE STARTED SHOUTING, LOUD AS HUMAN POSSIBLY CAN, <br />
  //           THE CROWD APPEARED, SIMPLY FOR LAUGHTER BUT, <br />
  //           MORE AND MORE TOWN FALKS BEGUN TO LISTEN <br />
  //           SHE WAS TELLING A STORY ABOUT A MAGIC ARTEFACT <br />
  //           THE ONE THAT COULD GRAND YOU ONE WISH <br />
  //           WHATEVER YOUR MIND DESIRES, MOST OF THEM DIDN'T BELIVE <br />
  //           BUT SOME PEOPLE, REALLY WENT LOOKIN, THEY CAME ACROSS <br />
  //           THE OLDEST CAVE IN TOWN, A TON OF PEOPLE DECIDED TO LOOK THERE,{" "}
  //           <br />
  //           I DON'T RECON I EVER HEARD ABOUT SOMEONE THAT CAME OUT <br />
  //           ... <br />
  //           BUT YOU WERE INSIDE OF IT, WEREN'T YOU? <br />
  //           YOU AND THAT LITTLE PERSON
  //         </h1>
  //         <div className="flex mt-4 justify-center ">
  //           <Button content="WHAT?" onClick={() => setGamePanel("7")} />
  //         </div>
  //       </div>
  //     </Menu>
  //   );
  // }
  // if (gamePanel === "7") {
  //   return (
  //     <Menu>
  //       <div>
  //         {" "}
  //         <h1 className="mb-2 font-mono text-2xl text-green-400 text-center  ">
  //           OKAY BOY, I'M NO SCHOLAR BUT <br />
  //           IF YOU LOST YOUR MEMORY, MAYBE YOU SHOULD <br />
  //           STAY WITH ME FOR A BIT, I HAVE A HUT BOUT 10 MINUTS FROM HERE,{" "}
  //           <br />
  //           UNLESS YOU WANNA GO BACK THERE <br />
  //           I DON'T KNOW HOW WAS THAT FELLOW TO YOU. <br />
  //           MAYBE SOMEONE IMPORTANT?
  //         </h1>
  //         <div className="flex gap-12 mt-4 justify-center">
  //           <Button
  //             content="I DON'T HAVE A CHOICE"
  //             onClick={() => setGamePanel("8")}
  //           />
  //           <Button content="I'M SCARED" onClick={() => setGamePanel("8.2")} />
  //         </div>
  //       </div>
  //     </Menu>
  //   );
  // }
  // if (gamePanel === "8") {
  //   return (
  //     <Menu>
  //       <div>
  //         {" "}
  //         <h1 className="mb-2 font-mono text-2xl text-blue-300 text-center  ">
  //           {" "}
  //           *YOU WALK INTO THE CAVE*
  //         </h1>
  //         <div className="flex mt-4 justify-center ">
  //           <Button content=">" onClick={() => setGamePanel("9")} />
  //         </div>
  //       </div>
  //     </Menu>
  //   );
  // }
  // if (gamePanel === "8.2") {
  //   return (
  //     <Menu>
  //       <div>
  //         {" "}
  //         <h1 className="mb-2 font-mono text-2xl text-green-400 text-center  ">
  //           IT'S FINE, <br />
  //           NOBODY HAVE DONE IT,
  //           <br />
  //           BUT I SAW YOU, COMING OUT OF THERE <br />
  //           DIDN'T THINK THAT WAS POSSIBLE. <br />
  //           YOU REMIND ME OF SOMEONE I USED TO KNOW <br />
  //           I KNOW THAT YOU ARE NOT HIM BUT, <br />
  //           I WANNTED TO GIVE YOU THIS
  //           <br />
  //           IT WILL PROTECT YOU, I BELIEVE
  //           <br />
  //         </h1>
  //         <p className="mb-2 font-mono text-2xl text-blue-300  text-center animate-pulse ">
  //           *YOU RECIVED AN AMETHYST*{" "}
  //         </p>
  //         <div className="flex mt-4 justify-center">
  //           <Button content="THANK YOU" onClick={() => setGamePanel("8")} />
  //         </div>
  //       </div>
  //     </Menu>
  //   );
  // }
  // if (gamePanel === "9") {
  //   return (
  //     <Menu>
  //       <div>
  //         {" "}
  //         <h1 className="mb-2 font-mono text-2xl text-blue-300 text-center  ">
  //           IT'S NOT CLEAR HOW DEEP THIS CAVE IS, <br />
  //           EVERY WALL LOOKS THE SAME AND THE LIGHT BEHIND YOU <br />
  //           STARTED TO FAINT. <br />
  //           BUT THE SOUND, YES THE SOUND BRINGS BACK YOUR MEMORIES <br />
  //           YOU REALLY BEEN IN HERE ONE TIME. <br />
  //           YOU NOTICED THAT THE PASSAGE IS SPLITED <br />
  //           FROM THE LEFT YOU HEAR A WOMAN AND FROM THE RIGHT <br />
  //           YOU HEAR RINGING, JUST LIKE TWO METAL PIECES ARE BANGING AGAINST{" "}
  //           <br />
  //           EACH OTHER, BUT THE SOUND IS DISTURBED <br />
  //         </h1>
  //         <div className="flex gap-12 mt-4 justify-center ">
  //           <Button content="TURN LEFT" onClick={() => setGamePanel("10")} />
  //           <Button content="TURN RIGHT" onClick={() => setGamePanel("10.2")} />
  //         </div>
  //       </div>
  //     </Menu>
  //   );
  // }

  // if (gamePanel === "10") {
  //   return (
  //     <Menu>
  //       <div>
  //         {" "}
  //         <h1 className="mb-2 font-mono text-2xl text-blue-300 text-center  ">
  //           YOU NOTICED AN OLDER WOMAN, WEARING DESTROYED COAT, <br />
  //           SHE IS TALKING, LOOKING INFRONT OF HER, BUT THERE IS NOT A THING
  //           EXEPT A PILE OF ROCKS, <br />
  //           YOU APROACH HER, SHE NOTICES YOU, TURNS YOUR WAY <br />
  //         </h1>
  //         <p className="mb-2 font-mono text-2xl text-green-400  text-center animate-pulse ">
  //           OH IT'S YOU AGAIN, I'M SO HAPPY YOU CAME BACK, AS YOU PROMISED,{" "}
  //           <br />
  //           DO YOU HAVE THE THING?
  //         </p>
  //         <h1 className="mb-2 font-mono text-2xl text-blue-300 text-center  ">
  //           YOU PULL OUT AN AMETHYST OUT OF YOUR POCKET
  //         </h1>
  //         <div className="flex gap-12 mt-4 justify-center ">
  //           <Button
  //             content="GIVE HER THE AMETHYST"
  //             onClick={() => setGamePanel("11")}
  //           />
  //           <Button
  //             content="KEEP IT TO YOURSELF"
  //             onClick={() => setGamePanel("11.2")}
  //             // loo
  //           />
  //         </div>
  //       </div>
  //     </Menu>
  //   );
  // }
  // if (gamePanel === "10.2") {
  //   return (
  //     <Menu>
  //       <div>
  //         {" "}
  //         <h1 className="mb-2 font-mono text-2xl text-blue-300 text-center  ">
  //           YOU FALL DOWN, TRIPING ON SOME KIND OF MATERIAL, IT'S TOO DARK FOR
  //           YOU TO SEE <br />
  //           SUDDENLY YOU HEAR A LOW VOICE,
  //         </h1>
  //         <p className="mb-2 font-mono text-2xl text-green-400  text-center  ">
  //           STAND UP, WHO ARE YOU, ANOTHER KNIGHT? <br />
  //         </p>
  //         <h1 className="mb-2 font-mono text-2xl text-blue-300 text-center  ">
  //           PERSON INFRONT OF YOU LOOKS SMALL AND WEAK, BUT HAS A SWORD, <br />
  //           YOU NOTICE THAT THERE IS AN ANVIL BEHIND THEM, MAYBE HAVING A SWORD,{" "}
  //           <br />
  //           WOUDN'T BE A BAD IDEA
  //         </h1>
  //         <div className="flex gap-12 mt-4 justify-center ">
  //           <Button content="KILL HIM" onClick={() => setGamePanel("10.3")} />
  //           <Button content="NEGOTIATE" onClick={() => setGamePanel("10.4")} />
  //         </div>
  //       </div>
  //     </Menu>
  //   );
  // }
  // if (gamePanel === "10.3") {
  //   return (
  //     <Menu>
  //       <div>
  //         {" "}
  //         <h1 className="mb-2 font-mono text-2xl text-red-500 text-center ">
  //           YOU CHARGE AT HIM, HE TRIPS, EXPOSING THAT HE IS DWORF, THIS WILL BE
  //           EASY THEN, <br />
  //           YOU GRAB HIS SWORD THAT FALL NEXT TO YOU AND <br />
  //           YOU CUT HIS HEAD OFF
  //         </h1>
  //         <p className="mb-2 font-mono text-2xl text-blue-300  text-center animate-pulse ">
  //           *YOU RECIVED AN SWORD*{" "}
  //         </p>
  //         <div className="flex gap-12 mt-4 justify-center animate-shake ">
  //           <Button content="WALK AWAY" onClick={() => setGamePanel("11.3")} />
  //         </div>
  //       </div>
  //     </Menu>
  //   );
  // }
  // if (gamePanel === "10.4") {
  //   return (
  //     <Menu>
  //       <div>
  //         {" "}
  //         <p className="mb-2 font-mono text-2xl text-blue-300   text-center  ">
  //           YOU GRAB YOUR POCKETS, IN THE SEARCH OF SOMETHING VALUABLE,
  //           <br />
  //           IN YOUR LAST POCKET IS SOMETHING QUITE SHARP, IT'S AMETHYST
  //         </p>
  //         <h1 className="mb-2 font-mono text-2xl text-green-400 text-center  ">
  //           OH, AMETHYST, YOU CAME HERE TO TRADE?
  //           <br />
  //           THAT'S GOOD, I'M NOT AS STRONG AS I USED TO <br />
  //           DURING THE LAST WAR MY HAD GOT CUT OFF, <br />
  //           I WAS SCARED FOR A SECOND, I'M EGNAR BY THE WAY <br />
  //           LET ME SEE THE CRYSTAL, <br />
  //           I CAN OFFER YOU MY BEST SWORD, HERE YOU GO, <br />
  //           NICE TALKING TO YOU, MY FRIEND, TAKE CARE <br />
  //         </h1>
  //         <p className="mb-2 font-mono text-2xl text-blue-300  text-center animate-pulse ">
  //           *YOU RECIVED AN SWORD*{" "}
  //         </p>
  //         <div className="flex gap-12 mt-4 justify-center animate-shake ">
  //           <Button content="WALK AWAY" onClick={() => setGamePanel("11.2")} />
  //         </div>
  //       </div>
  //     </Menu>
  //   );
  // }

  // if (gamePanel === "11") {
  //   return (
  //     <Menu>
  //       <div>
  //         {" "}
  //         <h1 className="mb-2 font-mono text-2xl text-green-400 text-center  ">
  //           HERE, TAKE THIS, AS A THANK YOU
  //         </h1>{" "}
  //         <h1 className="mb-2 font-mono text-2xl text-blue-300 text-center  animate-pulse">
  //           *YOU RECIVED A KNIFE*
  //         </h1>
  //         <h1 className="mb-2 font-mono text-2xl text-blue-300 text-center  ">
  //           YOU WALK AWAY, IN THE SEARCH OF THE MEMORIES
  //         </h1>
  //         <div className="flex gap-12 mt-4 justify-center ">
  //           <Button content=">" onClick={() => setGamePanel("12")} />
  //         </div>
  //       </div>
  //     </Menu>
  //   );
  // }
  // if (gamePanel === "11.2") {
  //   return (
  //     <Menu>
  //       <div>
  //         {" "}
  //         <h1 className="mb-2 font-mono text-2xl text-blue-300 text-center  ">
  //           YOU WALK AWAY, IN THE SEARCH OF THE MEMORIES
  //         </h1>
  //         <div className="flex gap-12 mt-4 justify-center ">
  //           <Button content=">" onClick={() => setGamePanel("12")} />
  //         </div>
  //       </div>
  //     </Menu>
  //   );
  // }
  // if (gamePanel === "11.3") {
  //   return (
  //     <Menu>
  //       <div>
  //         {" "}
  //         <h1 className="mb-2 font-mono text-2xl text-blue-300 text-center  ">
  //           YOU WALK AWAY, IN SEARCH OF THE STONE,
  //           <br />
  //           BUT WAIT, YOU DON'T THINK THAT YOU SHOULD RECONCIDER?
  //         </h1>
  //         <div className="flex gap-12 mt-4 justify-center ">
  //           <Button content="NO" onClick={() => setGamePanel("12")} />
  //           <Button content="YES" onClick={() => setGamePanel("9")} />
  //         </div>
  //       </div>
  //     </Menu>
  //   );
  // }
  // if (gamePanel === "12") {
  //   return (
  //     <Menu>
  //       <div>
  //         {" "}
  //         <h1 className="mb-2 font-mono text-2xl text-blue-300 text-center  ">
  //           YOU SUDDENLY HEAR MULTIPLE PEOPLE SCREAMING, YOU RUN TOWARDS THE
  //           SOUND
  //           <br /> YOU SEE FIVE MAYBE SIX WOMAN COVERED IN BLOOD, <br />
  //           NEXT TO THEM ARE GOBLINS, YOU KNOW HOW CRUEL THEY ARE, <br />
  //           YOU GET READY TO FIGHT, BUT WAIT, THEY DID'T NOTICED YOU <br />
  //           MAYBE YOU COULD SNEAK NEXT TO THEM?
  //         </h1>
  //         <div className="flex gap-12 mt-4 justify-center ">
  //           <Button content="FIGHT" onClick={() => setGamePanel("13")} />
  //           {/* można kliknąc fight tylko jak sie ma broń idk jak to zrobić bby */}
  //           <Button content="SNEAK OUT" onClick={() => setGamePanel("13.2")} />
  //         </div>
  //       </div>
  //     </Menu>
  //   );
  // }
//   if (gamePanel === "13") {
//     return (
//       <Menu>
//         <div>
//           {" "}
//           <h1 className="mb-2 font-mono text-2xl text-blue-300 text-center  ">
//             YOU CHARGE AT THEM, KILLING THEM ALL, HIGH VOICE APPROACHES YOU
//           </h1>
//           <h1 className="mb-2 font-mono text-2xl text-green-400 text-center  ">
//             THANK YOU, I DON'T KNOW WHAT I WOULD DO WITHOUT YOUR HELP, <br />I
//             THOUGHT THAT WE WERE GOING TO DIE, I SAW MULTIPLE KNIGHTS JUST,{" "}
//             <br />
//             SNEAKING OUT WHEN THEY SAW GOBLINS, THANK YOU <br />
//             FOR BEING A REAL HERO, WE WILL BE FINE ON OUR OWN NOW, <br />I HOPE
//             YOU FIND WHAT YOU WERE LOOKING FOR
//           </h1>{" "}
//           <div className="flex gap-12 mt-4 justify-center ">
//             <Button content="WALK AWAY" onClick={() => setGamePanel("14")} />
//           </div>
//         </div>
//       </Menu>
//     );
//   }
//   if (gamePanel === "13.2") {
//     return (
//       <Menu>
//         <div>
//           {" "}
//           <h1 className="mb-2 font-mono text-2xl text-blue-300 text-center  ">
//             YOU MANAGED TO WALK PAST THEM
//           </h1>
//           <div className="flex gap-12 mt-4 justify-center ">
//             <Button content=">" onClick={() => setGamePanel("14")} />
//           </div>
//         </div>
//       </Menu>
//     );
//   }
// }

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
