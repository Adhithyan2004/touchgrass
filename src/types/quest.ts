export type Quest = {
  title: string;
  duration: string;
  cost: string | number;
  difficulty: string;
  description: string;
  steps: string[];
  challenge: string;
  safetyNote: string;
};
