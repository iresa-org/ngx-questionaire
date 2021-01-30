export interface FormApi {
  selectedIndex: number;
  setValue: (value: string, index: number) => void;
  next: () => void;
  getQuestionaireForm: () => any[];
};

