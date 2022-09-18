import { useParams } from "react-router-dom";
import { amountOfQuestions, TopicID } from "./content";

export default function Exam() {
  const params = useParams();

  return (
    <div id="start-quiz">
      <h1>{params.topic}</h1>
      {params.topic === "alle" ? (
        <p>Du vil få 80 spørsmål</p>
      ) : (
        <div>
          <p>
            Det finnes {amountOfQuestions(params.topic as TopicID)} spørsmål i
            denne kategorien.
          </p>
          <p>Du vil få 20 spørsmål.</p>
        </div>
      )}
    </div>
  );
}
