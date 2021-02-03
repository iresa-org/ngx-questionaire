export interface QuestionaireConfig {
  question: string;
  options?: {
    label: string;
    value: string;
  }[];
};
