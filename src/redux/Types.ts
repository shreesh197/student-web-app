export interface Options {
  option_id: string;
  option: string;
  is_correct: boolean;
}

export interface Questions {
  question_id: string;
  question: string;
  options: Options[];
}

export interface StoreState {
  counter: number;
  mcqQuestions: Questions[];
}
