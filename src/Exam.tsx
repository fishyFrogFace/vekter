import Button from "@mui/material/Button";
import { useState } from "react";
import { amountOfQuestions, Topic, TopicID, topics } from "./content";
import { fetchExam } from "./fetchExam";

interface ExamProps {
  topic: TopicID;
}

interface StartProps {
  topic: Topic;
  startExam: () => void;
}

enum Page {
  Start,
  Quiz,
  Result,
}

const Start = (props: StartProps) => (
  <div id="start-quiz">
    <h1>{props.topic.title}</h1>
    {props.topic.name === "alle" ? (
      <p>Du vil få 80 spørsmål</p>
    ) : (
      <div>
        <p>
          Det finnes {amountOfQuestions(props.topic.name)} spørsmål i denne
          kategorien.
        </p>
        <p>Du vil få 20 spørsmål.</p>
      </div>
    )}
    <Button variant="contained" onClick={props.startExam}>
      Start
    </Button>
  </div>
);

const Result = () => (
  <div>
    <h1>Result page</h1>
  </div>
);

export default function Exam(props: ExamProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [examSet, setExamSet] = useState(fetchExam(props.topic));
  const [activePage, setActivePage] = useState(Page.Start);

  const nextQuestion = () => {
    if (currentQuestion === examSet.length - 1) {
      console.log("Done!");
    } else {
      console.log(examSet);
      setCurrentQuestion((cq) => cq + 1);
    }
  };

  return (
    <Start
      topic={{ title: topics[props.topic].title, name: props.topic }}
      startExam={() => console.log("hello")}
    />
  );
}
