export const DIALOGUE_1 = {
  id: "A1",
  content: `OH GOD, YOU'RE FINALLY AWAKE, I WAS SO WORRIED,
  <br /> NEVER DO THAT AGAIN, YOU UNDERSTAND?`,
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

export const ALL_DIALOGUES = [DIALOGUE_1];
