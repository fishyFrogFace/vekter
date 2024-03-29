export interface Result {
  question: string;
  options: Options;
  correctAnswer: Answer;
  userAnswer: Answer;
  timesWrong?: number;
}

export interface Options {
  a: string;
  b: string;
  c: string;
  d: string;
}

export type Answer = "a" | "b" | "c" | "d";
