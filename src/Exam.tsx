import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import { useState, useEffect } from "react";
import { amountOfQuestions, Answer, Topic, TopicID, topics } from "./content";
import { fetchExam } from "./fetchExam";
import Grid from "@mui/material/Grid";

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
  index: number;
  nextQuestion: () => void;
}

const Question = (props: QuestionProps) => {
  const [value, setValue] = useState("");

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Grid container flexDirection="column" spacing={2}>
      <Grid item>
        <FormControl>
          <FormLabel id="radio-buttons-group-label">{`${props.index}. ${props.question}`}</FormLabel>
          <RadioGroup
            aria-labelledby="radio-buttons-group-label"
            name="quiz"
            value={value}
            onChange={handleRadioChange}
          >
            <FormControlLabel
              value="a"
              control={<Radio />}
              label={props.options.a}
            />
            <FormControlLabel
              value="b"
              control={<Radio />}
              label={props.options.b}
            />
            <FormControlLabel
              value="c"
              control={<Radio />}
              label={props.options.c}
            />
            <FormControlLabel
              value="d"
              control={<Radio />}
              label={props.options.d}
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item>
        <Button variant="contained" onClick={props.nextQuestion}>
          Neste
        </Button>
      </Grid>
    </Grid>
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
    const nextQuestion = (event: React.FormEvent<HTMLFormElement>) => {
      if (currentQuestion === examSet.length - 1) {
        setActivePage(<Result />);
      } else {
        setCurrentQuestion((cq) => cq + 1);
      }
    };

    if (currentQuestion > -1) {
      setActivePage(
        <Question
          {...examSet[currentQuestion]}
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
