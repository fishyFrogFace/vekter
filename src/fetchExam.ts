import { allQuestions, TopicID, topics } from "./content";
import { getRandomElementsFromList } from "./helpers";

const createRandomExam = () => getRandomElementsFromList(80, allQuestions());

const createQuiz = (topic: TopicID) =>
  topic === "alle"
    ? createRandomExam()
    : getRandomElementsFromList(20, topics[topic].questions);

export const fetchQuiz = (topic: TopicID) =>
  createQuiz(topic).map((question) => ({
    ...question,
    ...{ userAnswer: "" },
  }));
