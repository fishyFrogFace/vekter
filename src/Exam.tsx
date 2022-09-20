import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { amountOfQuestions, Answer, Topic, TopicID, topics } from "./content";
import { fetchExam } from "./fetchExam";

interface ExamProps {
  topic: TopicID;
}

interface StartProps {
  topic: Topic;
  startExam: () => void;
}

const Start = (props: StartProps) => (
  <div id="start-quiz">
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

interface Options {
  a: string;
  b: string;
  c: string;
  d: string;
}

interface QuestionProps {
  question: string;
  correctAnswer: Answer;
  options: Options;
  nextQuestion: () => void;
}

const Question = (props: QuestionProps) => {
  return (
    <div>
      <h2>{props.question}</h2>
      <p>{props.options.a}</p>
      <p>{props.options.b}</p>
      <p>{props.options.c}</p>
      <p>{props.options.d}</p>
      <Button variant="contained" onClick={props.nextQuestion}>
        Neste
      </Button>
    </div>
  );
};

export default function Exam(props: ExamProps) {
  const [currentQuestion, setCurrentQuestion] = useState(-1);
  const [examSet] = useState(fetchExam(props.topic));
  const [activePage, setActivePage] = useState(
    <Start
      topic={{ title: topics[props.topic].title, name: props.topic }}
      startExam={() => setCurrentQuestion(0)}
    />
  );

  useEffect(() => {
    const nextQuestion = () => {
      if (currentQuestion === examSet.length - 1) {
        setActivePage(<Result />);
      } else {
        setCurrentQuestion((cq) => cq + 1);
      }
    };

    if (currentQuestion > -1) {
      setActivePage(
        <Question {...examSet[currentQuestion]} nextQuestion={nextQuestion} />
      );
    }
  }, [currentQuestion, examSet]);

  return (
    <div>
      <h1>{topics[props.topic].title}</h1>
      {activePage}
    </div>
  );
}
