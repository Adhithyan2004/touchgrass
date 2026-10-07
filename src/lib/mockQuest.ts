import { Quest } from "@/types/quest";

export const mockQuest: Quest = {
  title: "The Stranger",
  duration: "30 minutes",
  cost: "Free",
  difficulty: "Easy",

  description:
    "Leave your house and walk somewhere you've never explored before.",

  steps: [
    "Find something you've never noticed before.",
    "Take one photograph.",
    "Listen for a bird you can't identify.",
    "Sit somewhere quietly for 5 minutes.",
  ],

  challenge: "Find one thing you would normally walk past.",
};
