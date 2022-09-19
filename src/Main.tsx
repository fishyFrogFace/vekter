import { Link } from "react-router-dom";
import { topicsWithQuestions } from "./content";

export default function Main() {
  return (
    <div className="main">
      <h1>Prøveeksamen for vekterutdanningen</h1>
      <p>
        Dette er en nettside som er satt opp for alle som skal gå opp til
        eksamen og regodkjenning av vekterutdanningen.
      </p>
      <p>
        Velg en kategori under for å øve på et spesifikt tema. Om du føler deg
        klar til å gå rett på en prøveeksamen, velg kategorien "Alle". Da vil en
        prøveeksamen bli satt sammen til deg, med 80 spørsmål.
      </p>
      <p>
        Når du er ferdig, vil du få beskjed om du har bestått eller ei. Du vil
        også få beskjed om hvilke kategorier du er svak i, slik at du kan gå
        tilbake og øve på disse.
      </p>
      <h2>Velg kategori:</h2>
      <div>
        <ul>
          <li>
            <Link to="quiz/alle">Alle</Link>
          </li>
          {topicsWithQuestions().map(([name, topic]) => (
            <li key={topic.title}>
              <Link to={`quiz/${name}`}>{topic.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
