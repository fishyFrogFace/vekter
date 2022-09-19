import { allQuestions, TopicID, topics } from "./content";
import { getRandomElementsFromList } from "./helpers";

const createRandomExam = () => getRandomElementsFromList(80, allQuestions());

export const fetchExam = (topic: TopicID) =>
  topic === "alle"
    ? createRandomExam()
    : getRandomElementsFromList(20, topics[topic].questions);
