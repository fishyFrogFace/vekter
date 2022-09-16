import Link from "@mui/material/Link";
import { questions } from "./content.js";

const categories: Category[] = [
  { name: "trussel", title: "Trusselbildet" },
  { name: "risiko", title: "Risikovurdering" },
  { name: "sikring", title: "Sikringstiltak" },
  { name: "oppgaver", title: "Vektertjenester og -oppgaver" },
  { name: "hms", title: "HMS og arbeidsmiljøloven" },
  { name: "beredskap", title: "Beredskapsplanlegging" },
  { name: "alkohol", title: "Alkoholloven og bevillingssystemet" },
  { name: "rus", title: "Rusmidler" },
  { name: "konflikt", title: "Kommunikasjon og konflikthåndtering" },
  { name: "brann", title: "Brannvern" },
  { name: "førstehjelp", title: "Førstehjelp" },
  { name: "etikk", title: "Etikk" },
  { name: "service", title: "Service, kundebehandling og kvalitet" },
  { name: "jus", title: "Jus" },
];

interface Category {
  name: keyof typeof questions;
  title: string;
}

export default function App() {
  return (
    <div className="App">
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
            <Link href="alle" underline="hover">
              Alle
            </Link>
          </li>
          {categories
            .filter((cat) =>
              questions[cat.name].some((question) => question.question !== "?")
            )
            .map((cat) => (
              <li key={cat.title}>
                <Link href={cat.name} underline="hover">
                  {cat.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
