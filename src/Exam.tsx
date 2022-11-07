import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import { useState, useEffect } from "react";
import { amountOfQuestions, Topic, TopicID, topics } from "./content";
import { fetchQuiz } from "./fetchExam";
import Grid from "@mui/material/Grid";
import { ProgressBar } from "./ProgressBar";
import { Answer, Options, Result } from "./Types";
import ResultPage from "./Result";
import { getRandomElementsFromList } from "./helpers";

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

interface QuestionProps {
  question: string;
  options: Options;
  index: number;
  progress: number;
  nextQuestion: (answer: Answer) => void;
}

const Question = (props: QuestionProps) => {
  const [value, setValue] = useState<Answer | "">("");

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value as Answer);
  };

  const [randomOrder, setRandomOrder] = useState<Answer[]>(
    Object.keys(props.options) as Answer[]
  );

  useEffect(
    () =>
      setRandomOrder(getRandomElementsFromList(4, Object.keys(props.options))),
    [props.index]
  );

  return (
    <Grid container flexDirection="column" spacing={2}>
      <Grid item>
        <ProgressBar variant="determinate" value={props.progress} />
      </Grid>
      <Grid item>
        <FormControl>
          <FormLabel id="radio-buttons-group-label">{props.question}</FormLabel>
          <RadioGroup
            aria-labelledby="radio-buttons-group-label"
            name="quiz"
            value={value}
            onChange={handleRadioChange}
          >
            {randomOrder.map((option) => (
              <FormControlLabel
                key={props.options[option]}
                value={option}
                control={<Radio />}
                label={props.options[option]}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          disabled={value === ""}
          onClick={() => {
            value !== "" && props.nextQuestion(value);
            setValue("");
          }}
        >
          Neste
        </Button>
      </Grid>
    </Grid>
  );
};

interface ExamProps {
  topic: TopicID;
}

export default function Exam(props: ExamProps) {
  const [currentQuestion, setCurrentQuestion] = useState(-1);
  const [examSet, setExamSet] = useState<Result[]>(fetchQuiz(props.topic));
  const [activePage, setActivePage] = useState(
    <Start
      topic={{ title: topics[props.topic].title, name: props.topic }}
      startExam={() => setCurrentQuestion(0)}
    />
  );

  useEffect(() => {
    const nextQuestion = (value: Answer) => {
      setExamSet((exam) =>
        exam.map((question) =>
          examSet[currentQuestion].question === question.question
            ? { ...question, ...{ userAnswer: value } }
            : question
        )
      );

      setCurrentQuestion((cq) => cq + 1);
    };

    if (currentQuestion === examSet.length) {
      setActivePage(<ResultPage result={examSet} />);
    } else if (currentQuestion > -1) {
      setActivePage(
        <Question
          {...examSet[currentQuestion]}
          progress={(currentQuestion / examSet.length) * 100}
          nextQuestion={nextQuestion}
          index={currentQuestion + 1}
        />
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
