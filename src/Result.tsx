import { Typography } from "@mui/material";
import { roundOneDecimal } from "./helpers";
import { Result } from "./Types";

interface ResultProps {
  result: Result[];
}

export default function ResultPage(props: ResultProps) {
  const correct = props.result.filter(
    (result) => result.correctAnswer !== result.userAnswer
  ).length;

  const percentage = roundOneDecimal((correct / props.result.length) * 100);

  return (
    <div>
      <h2>Resultat</h2>
      <p>
        Du fikk <b>{correct}</b> riktige svar av <b>{props.result.length}</b>{" "}
        mulige.
      </p>
      <p>
        Prosent: <b>{percentage}</b>%
      </p>
      {percentage > 80 ? (
        <Typography color="green" fontSize={18}>
          Prøven er bestått.
        </Typography>
      ) : (
        <Typography color="red" fontSize={18}>
          Prøven er ikke bestått.
        </Typography>
      )}
    </div>
  );
}
