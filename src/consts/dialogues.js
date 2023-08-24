export const DIALOGUE_1 = {
  id: "A1",
  content: [
    {
      text: `OH GOD, YOU'RE FINALLY AWAKE, I WAS SO WORRIED,
  <br /> NEVER DO THAT AGAIN, YOU UNDERSTAND?`,
    },
  ],
  answers: [
    {
      content: "YEAH",
      redirect: "B1",
    },
    {
      content: "SORRY",
      redirect: "B1",
    },
  ],
};

export const DIALOGUE_2 = {
  id: "B1",
  content: [
    {
      text: `OKAY, THAT'S FINE, BUT YOUR HEAD, UH, <br /> DO YOU REMEMBER WHAT
  YOUR NAME IS?`,
    },
  ],
  inputs: [
    {
      pattern: ".{2,20}",
      placeholder: "WHAT IS IT?",
      name: "NAME",
      redirect: "C1",
    },
  ],
};

export const DIALOGUE_3 = {
  id: "C1",
  content: [
    {
      text: Array(24).fill(Array(10).fill(" #NAME# ").join("")).join("<br/>"),
      classes: "text-red-100 z-0 animate-shake fixed overflow-hidden",
    },
    {
      text: "REALLY?",
      classes: " z-10",
    },
  ],
  answers: [
    {
      content: "YEAH, #NAME#",
      redirect: "D1",
    },
    {
      content: "NO",
      redirect: "B1",
    },
  ],
};

export const DIALOGUE_4 = {
  id: "D1",
  content: [
    {
      text: `#NAME# <br />
      ...
      <br /> THAT REMINDS ME OF,
      <br />
      NEVERMIND`,
    },
  ],
  answers: [
    {
      content: "WHO ARE YOU?",
      redirect: "E1",
    },
  ],
};

export const DIALOGUE_5 = {
  id: "E1",
  content: [
    {
      text: `OH, RIGHT, I'M OZZY <br /> AND THIS IS BROXTON <br /> THE TOWN
      VILLAGE, <br /> FOR A LONG TIME
      <br /> I'VE BEEN A MINER <br /> BUT SOON AFTER, <br /> THE TOWN
      STARTED TO BECOME
      <br /> ... <br /> SOMETHING THAT YOU CAN CALL
      <br /> "GHOST TOWN" <br /> IT'S BECOUSE OF THE CAVE <br /> YOU SEE,
      <br />
      I'M NO LONGER A MINER`,
    },
  ],
  answers: [
    {
      content: "WHAT HAPPEND?",
      redirect: "F1",
    },
  ],
};

export const DIALOGUE_6 = {
  id: "F1",
  content: [
    {
      text: ` SO, ABOUT 40 YEARS AGO LIVED A WOMAN, <br />
      NOBODY KNEW HER REAL NAME, SHE DIDN'T INTERACT, <br />
      ONE DAY SHE DECIDED TO HEAD TO THE MAINSQUARE <br />
      SHE STARTED SHOUTING, LOUD AS HUMAN POSSIBLY CAN, <br />
      THE CROWD APPEARED, SIMPLY FOR LAUGHTER BUT, <br />
      MORE AND MORE TOWN FALKS BEGUN TO LISTEN <br />
      SHE WAS TELLING A STORY ABOUT A MAGIC ARTEFACT <br />
      THE ONE THAT COULD GRAND YOU ONE WISH <br />
      WHATEVER YOUR MIND DESIRES, MOST OF THEM DIDN'T BELIVE <br />
      BUT SOME PEOPLE, REALLY WENT LOOKIN, THEY CAME ACROSS <br />
      THE OLDEST CAVE IN TOWN, A TON OF PEOPLE DECIDED TO LOOK THERE,
      <br />
      I DON'T RECON I EVER HEARD ABOUT SOMEONE THAT CAME OUT <br />
      ... <br />
      BUT YOU WERE INSIDE OF IT, WEREN'T YOU? <br />
      YOU AND THAT LITTLE PERSON`,
    },
  ],
  answers: [
    {
      content: "WHAT?",
      redirect: "G1",
    },
  ],
};

export const DIALOGUE_7 = {
  id: "G1",
  content: [
    {
      text: ` OKAY BOY, I'M NO SCHOLAR BUT <br />
      IF YOU LOST YOUR MEMORY, MAYBE YOU SHOULD <br />
      STAY WITH ME FOR A BIT, I HAVE A HUT BOUT 10 MINUTS FROM HERE,
      <br />
      UNLESS YOU WANNA GO BACK THERE <br />
      I DON'T KNOW HOW WAS THAT FELLOW TO YOU. <br />
      MAYBE SOMEONE IMPORTANT?`,
    },
  ],
  answers: [
    {
      content: "I DON'T HAVE A CHOICE",
      redirect: "H1",
    },
    {
      content: "I'M SCARED",
      redirect: "H2",
    },
  ],
};

export const DIALOGUE_8 = {
  id: "H1",
  content: [
    {
      text: `YOU WALK INTO THE CAVE`,
      classes: "text-blue-300 ",
    },
  ],
  answers: [
    {
      content: ">",
      redirect: "I1",
    },
  ],
};

export const DIALOGUE_9 = {
  id: "H2",
  content: [
    {
      text: ` IT'S FINE, <br />
      NOBODY HAVE DONE IT,
      <br />
      BUT I SAW YOU, COMING OUT OF THERE <br />
      DIDN'T THINK THAT WAS POSSIBLE. <br />
      YOU REMIND ME OF SOMEONE I USED TO KNOW <br />
      I KNOW THAT YOU ARE NOT HIM BUT, <br />
      I WANNTED TO GIVE YOU THIS
      <br />
      IT WILL PROTECT YOU, I BELIEVE
      <br />`,
    },
    {
      text: "*YOU RECIVED AN AMETHYST*",
      classes: "text-blue-300 animate-pulse",
    },
  ],
  answers: [
    {
      content: "THANK YOU",
      redirect: "H1",
    },
  ],
};

export const DIALOGUE_10 = {
  id: "I1",
  content: [
    {
      text: ` IT'S NOT CLEAR HOW DEEP THIS CAVE IS, <br />
      EVERY WALL LOOKS THE SAME AND THE LIGHT BEHIND YOU <br />
      STARTED TO FAINT. <br />
      BUT THE SOUND, YES THE SOUND BRINGS BACK YOUR MEMORIES <br />
      YOU REALLY BEEN IN HERE ONE TIME. <br />
      YOU NOTICED THAT THE PASSAGE IS SPLITED <br />
      FROM THE LEFT YOU HEAR A WOMAN AND FROM THE RIGHT <br />
      YOU HEAR RINGING, JUST LIKE TWO METAL PIECES ARE BANGING AGAINST
      <br />
      EACH OTHER, BUT THE SOUND IS DISTURBED <br />`,
      classes: `text-blue-300`,
    },
  ],
  answers: [
    {
      content: "TURN LEFT",
      redirect: "J1",
    },
    {
      content: "TURN RIGHT",
      redirect: "J2",
    },
  ],
};

export const DIALOGUE_11 = {
  id: "J1",
  content: [
    {
      text: `YOU NOTICED AN OLDER WOMAN, WEARING DESTROYED COAT, <br />
      SHE IS TALKING, LOOKING INFRONT OF HER, BUT THERE IS NOT A THING
      EXEPT A PILE OF ROCKS, <br />
      YOU APROACH HER, SHE NOTICES YOU, TURNS YOUR WAY <br />`,
      classes: "text-blue-300 ",
    },
    {
      text: `OH IT'S YOU AGAIN, I'M SO HAPPY YOU CAME BACK, AS YOU PROMISED,{" "}
      <br />
      DO YOU HAVE THE THING?`,
      classes: "animate-pulse ",
    },
    {
      text: `YOU PULL OUT AN AMETHYST OUT OF YOUR POCKET`,
      classes: "text-blue-300",
    },
  ],
  answers: [
    {
      content: "GIVE HER THE AMETHYST",
      redirect: "K1",
    },
    {
      content: "KEEP IT TO YOURSELF",
      redirect: "K2",
    },
  ],
};

export const DIALOGUE_12 = {
  id: "J2",
  content: [
    {
      text: `YOU FALL DOWN, TRIPING ON SOME KIND OF MATERIAL, IT'S TOO DARK FOR
      YOU TO SEE <br />
      SUDDENLY YOU HEAR A LOW VOICE,`,
      classes: "text-blue-300 ",
    },
    {
      text: `STAND UP, WHO ARE YOU, ANOTHER KNIGHT?`,
    },
    {
      text: `PERSON INFRONT OF YOU LOOKS SMALL AND WEAK, BUT HAS A SWORD, <br />
      YOU NOTICE THAT THERE IS AN ANVIL BEHIND THEM, MAYBE HAVING A SWORD,
      <br />
      WOUDN'T BE A BAD IDEA`,
      classes: "text-blue-300",
    },
  ],
  answers: [
    {
      content: "KILL HIM",
      redirect: "J3",
    },
    {
      content: "NEGOTIATE",
      redirect: "J4",
    },
  ],
};

export const DIALOGUE_13 = {
  id: "J3",
  content: [
    {
      text: `YOU CHARGE AT HIM, HE TRIPS, EXPOSING THAT HE IS DWORF, THIS WILL BE
      EASY THEN, <br />
      YOU GRAB HIS SWORD THAT FALL NEXT TO YOU AND <br />
      YOU CUT HIS HEAD OFF`,
      classes: "text-red-500 ",
    },
    {
      text: ` *YOU RECIVED AN SWORD*`,
      classes: "text-blue-300 animate-pulse",
    },
  ],
  answers: [
    {
      content: "WALK AWAY",
      redirect: "K3",
    },
  ],
};

export const DIALOGUE_14 = {
  id: "J4",
  content: [
    {
      text: `YOU GRAB YOUR POCKETS, IN THE SEARCH OF SOMETHING VALUABLE,
      <br />
      IN YOUR LAST POCKET IS SOMETHING QUITE SHARP, IT'S AMETHYST`,
      classes: "text-blue-300 ",
    },
    {
      text: `  OH, AMETHYST, YOU CAME HERE TO TRADE?
      <br />
      THAT'S GOOD, I'M NOT AS STRONG AS I USED TO <br />
      DURING THE LAST WAR MY HAD GOT CUT OFF, <br />
      I WAS SCARED FOR A SECOND, I'M EGNAR BY THE WAY <br />
      LET ME SEE THE CRYSTAL, <br />
      I CAN OFFER YOU MY BEST SWORD, HERE YOU GO, <br />
      NICE TALKING TO YOU, MY FRIEND, TAKE CARE <br />`,
    },
    {
      text: `*YOU RECIVED AN SWORD*`,
      classes: "text-blue-300 animate-pulse",
    },
  ],
  answers: [
    {
      content: "WALK AWAY",
      redirect: "K2",
    },
  ],
};

export const DIALOGUE_15 = {
  id: "K1",
  content: [
    {
      text: `HERE, TAKE THIS, AS A THANK YOU`,
    },
    {
      text: `*YOU RECIVED A KNIFE*`,
      classes: `text-blue-300 animate-pulse`,
    },
    {
      text: `YOU WALK AWAY, IN THE SEARCH OF THE MEMORIES`,
    },
  ],
  answers: [
    {
      content: ">",
      redirect: "L1",
    },
  ],
};

export const DIALOGUE_16 = {
  id: "K2",
  content: [
    {
      text: `YOU WALK AWAY, IN THE SEARCH OF THE MEMORIES`,
      classes: `text-blue-300 animate-pulse`,
    },
  ],
  answers: [
    {
      content: ">",
      redirect: "L1",
    },
  ],
};

export const DIALOGUE_17 = {
  id: "K3",
  content: [
    {
      text: `  YOU WALK AWAY, IN SEARCH OF THE STONE,
      <br />
      BUT WAIT, YOU DON'T THINK THAT YOU SHOULD RECONCIDER?`,
      classes: `text-blue-300 animate-pulse`,
    },
  ],
  answers: [
    {
      content: "NO",
      redirect: "L1",
    },
    {
      content: "YES",
      redirect: "I1",
    },
  ],
};

export const DIALOGUE_18 = {
  id: "L1",
  content: [
    {
      text: `YOU SUDDENLY HEAR MULTIPLE PEOPLE SCREAMING, YOU RUN TOWARDS THE
      SOUND
      <br /> YOU SEE FIVE MAYBE SIX WOMAN COVERED IN BLOOD, <br />
      NEXT TO THEM ARE GOBLINS, YOU KNOW HOW CRUEL THEY ARE, <br />
      YOU GET READY TO FIGHT, BUT WAIT, THEY DID'T NOTICED YOU <br />
      MAYBE YOU COULD SNEAK NEXT TO THEM?`,
      classes: `text-blue-300 `,
    },
  ],
  answers: [
    {
      content: "FIGHT",
      redirect: "M1",
    },
    {
      content: "SNEAK AROUND",
      redirect: "M2",
    },
  ],
};

export const DIALOGUE_19 = {
  id: "M1",
  content: [
    {
      text: ` YOU CHARGE AT THEM, KILLING THEM ALL, HIGH VOICE APPROACHES YOU`,
      classes: `text-blue-300 `,
    },
    {
      text: `THANK YOU, I DON'T KNOW WHAT I WOULD DO WITHOUT YOUR HELP, <br />I
      THOUGHT THAT WE WERE GOING TO DIE, I SAW MULTIPLE KNIGHTS JUST,{" "}
      <br />
      SNEAKING OUT WHEN THEY SAW GOBLINS, THANK YOU <br />
      FOR BEING A REAL HERO, WE WILL BE FINE ON OUR OWN NOW, <br />I HOPE
      YOU FIND WHAT YOU WERE LOOKING FOR`,
    },
  ],
  answers: [
    {
      content: "WALK AWAY",
      redirect: "N1",
    },
  ],
};

export const DIALOGUE_20 = {
  id: "M2",
  content: [
    {
      text: ` YOU MANAGED TO WALK PAST THEM`,
      classes: `text-blue-300 `,
    },
  ],
  answers: [
    {
      content: ">",
      redirect: "N1",
    },
  ],
};
export const ALL_DIALOGUES = [
  DIALOGUE_1,
  DIALOGUE_2,
  DIALOGUE_3,
  DIALOGUE_4,
  DIALOGUE_5,
  DIALOGUE_6,
  DIALOGUE_7,
  DIALOGUE_8,
  DIALOGUE_9,
  DIALOGUE_10,
  DIALOGUE_11,
  DIALOGUE_12,
  DIALOGUE_13,
  DIALOGUE_14,
];
