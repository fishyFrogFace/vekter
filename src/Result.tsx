import {
  Avatar,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { roundOneDecimal } from "./helpers";
import { Result } from "./Types";
import CorrectIcon from "@mui/icons-material/Check";
import WrongIcon from "@mui/icons-material/Clear";

interface ResultProps {
  result: Result[];
}

const red = "#FF1053";
const green = "#57CC99";

export default function ResultPage(props: ResultProps) {
  const correct = props.result.filter(
    (result) => result.correctAnswer === result.userAnswer
  ).length;

  const wrongAnswers = props.result.filter(
    (result) => result.correctAnswer !== result.userAnswer
  );

  const percentage = roundOneDecimal((correct / props.result.length) * 100);

  return (
    <div>
      <h2>Resultat</h2>
      <p>
        Du fikk <b>{correct}</b> riktige svar av <b>{props.result.length} </b>
        mulige.
      </p>
      <p>
        Prosent: <b>{percentage}</b>%
      </p>
      {percentage > 80 ? (
        <Typography color={green} fontSize={18}>
          Prøven er bestått.
        </Typography>
      ) : (
        <Typography color={red} fontSize={18}>
          Prøven er ikke bestått.
        </Typography>
      )}
      {wrongAnswers.length > 0 && (
        <>
          <h3>Feil svar:</h3>
          {wrongAnswers.map((result) => (
            <Grid item xs={12} md={6}>
              <Typography
                sx={{ mt: 4, mb: 2, fontSize: 18 }}
                variant="h6"
                component="h1"
              >
                {result.question}
              </Typography>
              <List>
                {Object.entries(result.options).map((option) => (
                  <ListItem>
                    <ListItemAvatar>
                      {result.correctAnswer === option[0] ? (
                        <Avatar sx={{ bgcolor: red }}>
                          <CorrectIcon />
                        </Avatar>
                      ) : result.userAnswer === option[0] ? (
                        <Avatar sx={{ bgcolor: green }}>
                          <WrongIcon />
                        </Avatar>
                      ) : null}
                    </ListItemAvatar>
                    <ListItemText primary={option[1]} />
                  </ListItem>
                ))}
              </List>
              <Divider />
            </Grid>
          ))}
        </>
      )}
    </div>
  );
}
