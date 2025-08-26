export interface Questionnaire {
  [key: string]: {
    question: string;
    options: string[];
  }[];
}