import { amountOfQuestions, ExtendedTopic } from "./content";

interface ExamProps {
  topic: ExtendedTopic;
}

export default function Exam(props: ExamProps) {
  return (
    <div id="start-quiz">
      <h1>{props.topic}</h1>
      {props.topic === "alle" ? (
        <p>Du vil få 80 spørsmål</p>
      ) : (
        <div>
          <p>
            Det finnes {amountOfQuestions(props.topic)} spørsmål i denne
            kategorien.
          </p>
          <p>Du vil få 20 spørsmål.</p>
        </div>
      )}
    </div>
  );
}
