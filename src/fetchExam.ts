import { questions, TopicID, topicsWithQuestions } from "./content";
import { getRandomElementsFromList } from "./helpers";

const createRandomExam = () =>
  getRandomElementsFromList(
    80,
    topicsWithQuestions()
      .map((topic) => questions[topic.name])
      .flat()
  );

export const fetchExam = (topic: TopicID | "Alle") =>
  topic === "Alle"
    ? createRandomExam()
    : getRandomElementsFromList(20, questions[topic]);
