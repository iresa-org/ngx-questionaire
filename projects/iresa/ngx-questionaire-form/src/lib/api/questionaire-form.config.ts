export interface QuestionaireConfig {
  question: string;
  id?: string | number;
  options?: {
    label: string;
    value: string;
  }[];
};
