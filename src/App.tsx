import { questions } from "./content.js";

const categories: Category[] = [
  { name: "threat", title: "Trusselbildet" },
  { name: "risk", title: "Risikovurdering" },
  { name: "securing", title: "Sikringstiltak" },
  { name: "tasks", title: "Vektertjenester og -oppgaver" },
  { name: "hse", title: "HMS og arbeidsmiljøloven" },
  { name: "preparedness", title: "Beredskapsplanlegging" },
  { name: "alcohol", title: "Alkoholloven og bevillingssystemet" },
  { name: "drugs", title: "Rusmidler" },
  { name: "conflict", title: "Kommunikasjon og konflikthåndtering" },
  { name: "fire", title: "Brannvern" },
  { name: "firstaid", title: "Førstehjelp" },
  { name: "ethics", title: "Etikk" },
  { name: "service", title: "Service, kundebehandling og kvalitet" },
  { name: "law", title: "Jus" },
];

interface Category {
  name: keyof typeof questions;
  title: string;
}

export default function App() {
  return (
    <div className="App">
      <div>
        {categories
          .filter((cat) =>
            questions[cat.name].some((question) => question.question !== "?")
          )
          .map((cat) => (
            <p>{cat.title}</p>
          ))}
      </div>
    </div>
  );
}
