import { allQuestions, TopicID, topics } from "./content";
import { getRandomElementsFromList } from "./helpers";
import { Result } from "./Types";

const createRandomExam = () => getRandomElementsFromList(80, allQuestions());

const createExamFromWeakPoints = () => {
  const weaknessList: Result[] = JSON.parse(localStorage.getItem("weakness")!);
  return getRandomElementsFromList(80, weaknessList);
};

const createQuiz = (topic: TopicID) =>
  topic === "alle"
    ? createRandomExam()
    : topic === "svakhet"
    ? createExamFromWeakPoints()
    : getRandomElementsFromList(2, topics[topic].questions);

export const fetchQuiz = (topic: TopicID) =>
  createQuiz(topic).map((question, index) => ({
    ...question,
    userAnswer: "",
    question: `${index + 1}. ${question.question}`,
  }));
