export type TopicID = keyof typeof topics;

export interface Topic {
  name: TopicID;
  title: string;
}

export const topicsWithQuestions = () =>
  Object.entries(topics).filter(([_, topic]) =>
    topic.questions.some((question) => question.question !== "?")
  );

export const allQuestions = () =>
  topicsWithQuestions()
    .map(([_, topic]) => topic.questions)
    .flat();

export const amountOfQuestions = (topicID: TopicID) =>
  topics[topicID].questions.length;

export const topics = {
  trussel: {
    title: "Trusselbildet",
    questions: [
      {
        question: "?",
        options: {
          a: "",
          b: "",
          c: "",
          d: "",
        },
        correctAnswer: "",
      },
    ],
  },
  risiko: {
    title: "Risikovurdering",
    questions: [
      {
        question: "?",
        options: {
          a: "",
          b: "",
          c: "",
          d: "",
        },
        correctAnswer: "",
      },
    ],
  },
  sikring: {
    title: "Sikringstiltak",
    questions: [
      {
        question: "?",
        options: {
          a: "",
          b: "",
          c: "",
          d: "",
        },
        correctAnswer: "",
      },
    ],
  },
  oppgaver: {
    title: "Vektertjenester og -oppgaver",
    questions: [
      {
        question: "?",
        options: {
          a: "",
          b: "",
          c: "",
          d: "",
        },
        correctAnswer: "",
      },
    ],
  },
  beredskap: {
    title: "Beredskapsplanlegging",
    questions: [
      {
        question: "?",
        options: {
          a: "",
          b: "",
          c: "",
          d: "",
        },
        correctAnswer: "",
      },
    ],
  },
  konflikt: {
    title: "Kommunikasjon og konflikthåndtering",
    questions: [
      {
        question: "?",
        options: {
          a: "",
          b: "",
          c: "",
          d: "",
        },
        correctAnswer: "",
      },
    ],
  },
  førstehjelp: {
    title: "Førstehjelp",
    questions: [
      {
        question: "?",
        options: {
          a: "",
          b: "",
          c: "",
          d: "",
        },
        correctAnswer: "",
      },
    ],
  },
  etikk: {
    title: "Etikk",
    questions: [
      {
        question: "?",
        options: {
          a: "",
          b: "",
          c: "",
          d: "",
        },
        correctAnswer: "",
      },
    ],
  },
  service: {
    title: "Service, kundebehandling og kvalitet",
    questions: [
      {
        question: "?",
        options: {
          a: "",
          b: "",
          c: "",
          d: "",
        },
        correctAnswer: "",
      },
    ],
  },
  hms: {
    title: "HMS og arbeidsmiljøloven",
    questions: [
      {
        question: "Hvor er bestemmelser om lønn regulert for vekteryrket?",
        options: {
          a: "De er regulert i arbeidsmiljøloven",
          b: "De er regulert i lov om vaktvirksomhet",
          c: "De er regulert i vekteroverkomsten mellom Norsk Arbeidsmandsforbund og NHO service og handel",
          d: "De er regulert i politiloven",
        },
        correctAnswer: "c",
      },
      {
        question:
          "Hva er det arbeidsmiljøloven retter seg først og fremst etter:",
        options: {
          a: "Mot yrkesmessig helsevern",
          b: "Lønn",
          c: "Førstehjelp",
          d: "Brannvern",
        },
        correctAnswer: "a",
      },
      {
        question:
          "Arbeidsmiljøloven har gått stadig lengre i å trygge rettighetene for de ansatte på tre hovedområder:",
        options: {
          a: "Arbeidstid, kontrakt og penger",
          b: "Arbeidsmiljø, arbeidstid og kontraktvern",
          c: "Kontrakt, leie, helse",
          d: "Arbeidsmiljø, arbeid, tiltak",
        },
        correctAnswer: "b",
      },
      {
        question: "Hvordan kan man definere et arbeidsmiljø?",
        options: {
          a: "Et arbeidsmiljø er summen av faktorer som påvirker arbeidstaker psykisk, fysisk og sosialt. Positivt eller negativt",
          b: "Et arbeidsmiljø er summen av faktorer som helse, førstehjelp og brannvern",
          c: "Et arbeidsmiljø er summen av faktorer som psykisk helse, stabilitet, og fysisk helse. Positivt eller negativt.",
          d: "Et arbeidsmiljø er summen av faktorer som fysisk helse, styrke og sosiale ferdigheter",
        },
        correctAnswer: "a",
      },
      {
        question: "Hva har arbeidsgiver et generelt ansvar for at blir fulgt?",
        options: {
          a: "Et generelt ansvar for at lovens bestemmelser blir fulgt",
          b: "Et generelt ansvar for at lov om vaktvirksomhet blir fulgt",
          c: "Et generelt ansvar for at arbeidsgiverne skal trives på jobb",
          d: "Alt som omfatter arbeidsmiljøet",
        },
        correctAnswer: "a",
      },
      {
        question: "Hvilken oppgaver har blant annet verneombudet?",
        options: {
          a: "Ivareta arbeidstakers interesser",
          b: "Ivareta arbeidstakers interesser om saker som angår arbeid. delta på forsamlinger på stortinget, ta folk som ikke bruker hjelm.",
          c: "Ivareta arbeidstakerens interesser som angår arbeidsmiljøet, delta på arbeidstilsynets inspeksjoner, fremlegge relevante rapporter for ledelsen",
          d: "Ivareta HMS på arbeidsplassen, sørge for at alle på jobben leser jevnlig på instrukser",
        },
        correctAnswer: "c",
      },
      {
        question: "Hva er blant annet oppgavene til en arbeidstaker",
        options: {
          a: "Vaske gulvet til sjefen, smile vær gang man møter noen på jobb.",
          b: "Bruke pålagt verneutstyr, bidra til løsninger, og stanse arbeidet om man mener det er fare for liv og helse",
          c: "Stanse farlig arbeid, stanse noe som er fare for liv, og bidra til instrukser for eks brannvern",
          d: "Oppgavene til en arbeidstaker kommer ann på stillingen og arbeidet",
        },
        correctAnswer: "b",
      },
      {
        question: "Hva står AMU for",
        options: {
          a: "Almennmannsforbund",
          b: "Almenn undersøkelse",
          c: "Arbeidsmiljøutvalg",
          d: "Alle må undervises",
        },
        correctAnswer: "c",
      },
      {
        question: "Hvor mange ansatte må det være for å oprette AMU?",
        options: {
          a: "500",
          b: "2 (mellom 2-14 om det er nødvendig)",
          c: "50 (mellom 20-50 kan hver av partene kreve at det opprettes et slikt utvalg)",
          d: "50 (ikke mer eler mindre)",
        },
        correctAnswer: "c",
      },
      {
        question: "Hva er en av AMU sine plikter?",
        options: {
          a: "Ivareta rettsikkerheten til arbeidstaker",
          b: "Til å aktivt overvåke arbeidsmiljøsituasjonen i virksomheten til enhver tid",
          c: "Stoppe farlig arbeid",
          d: "Sørge for at enhver person får det de trenger på jobben",
        },
        correctAnswer: "b",
      },
      {
        question: "Hva er beregnet som nattearbeid?",
        options: {
          a: "2100-0600",
          b: "2200-0700",
          c: "2400-1200",
          d: "2135-0640",
        },
        correctAnswer: "a",
      },
      {
        question:
          "Hvor mange timer er max alminnelig arbeidstid, uten overtidsbetaling?",
        options: {
          a: "8 timer i løpet av 24 timer",
          b: "13 timer i løpet av 24 timer",
          c: "9 timer i løpet av 24 timer",
          d: "8,5 timer i løpet av 24 timer",
        },
        correctAnswer: "c",
      },
      {
        question: "Hvor mange timer er max arbeidstid?",
        options: {
          a: "8 timer i løpet av 24 timer",
          b: "13 timer i løpet av 24 timer",
          c: "9 timer i løpet av 24 timer",
          d: "8,5 timer i løpet av 24 timer",
        },
        correctAnswer: "b",
      },
      {
        question:
          "Hvor mange timer er max alminnelig arbeidstid, uten overtidsbetaling?",
        options: {
          a: "33,6 timer i løpet av 7 dager",
          b: "37,5 timer i løpet av 7 dager",
          c: "40 timer i løpet av 7 dager",
          d: "48 timer i løpet av 7 dager",
        },
        correctAnswer: "c",
      },
      {
        question: "Hvor mange timer er max arbeidstid?",
        options: {
          a: "33,6 timer i løpet av 7 dager",
          b: "37,5 timer i løpet av 7 dager",
          c: "40 timer i løpet av 7 dager",
          d: "48 timer i løpet av 7 dager",
        },
        correctAnswer: "d",
      },
      {
        question:
          "Hvor mange timer skal man ha fri mellom vakter (hos samme arbeidsgiver)?",
        options: {
          a: "13 timer",
          b: "9 timer",
          c: "11 timer",
          d: "16 timer",
        },
        correctAnswer: "c",
      },
      {
        question: "Hva er merarbeid?",
        options: {
          a: "Der arbeidstiden går utover avtale men ikke alminnelig arbeidstid",
          b: "Du jobber hele tiden uten øking i lønn",
          c: "Arbeidsgiver ber deg jobbe mer enn du har kapasitet til",
          d: "Du jobber mer enn det det kontrakten sier",
        },
        correctAnswer: "a",
      },
      {
        question: "Hva er minstetillegget for overtidsbetaling?",
        options: {
          a: "100%",
          b: "40%",
          c: "2%",
          d: "30%",
        },
        correctAnswer: "b",
      },
      {
        question: "Hva er internkontroll?",
        options: {
          a: "Kontroll som skjer innad i firmaet for å ivareta HMS",
          b: "Kontroll som kun sjekker brannvern",
          c: "Kontroll av ansatte",
          d: "Kontroll av de ansattes mobilbruk",
        },
        correctAnswer: "a",
      },
      {
        question:
          "Hva er de mest relevante lovene man ser etter i en internkontroll?",
        options: {
          a: "Alkoholloven, lov om vaktvirksomhet, arbeidsmiljøloven",
          b: "Alkoholloven, skjenkeloven, diskrimineringsloven",
          c: "Arbeidsmiljøloven, brann og eksplosjonsvernsloven, arbeidsplassmiljøloven",
          d: "Arbeidsmiljøloven, brann og eksplosjonsvernsloven, forurensningsloven, sivilbeskyttelseloven, el-tilsynsloven",
        },
        correctAnswer: "d",
      },
      {
        question: "Når har arbeidstakere krav på pause?",
        options: {
          a: "Når de er sultne",
          b: "Om vakten overskrider 5 1/2 time",
          c: "Om vakten overskrider 6 timer",
          d: "Etter 5 timer",
        },
        correctAnswer: "b",
      },
      {
        question: "Hva er overtidsarbeid?",
        options: {
          a: "Det arbeidet som går utover fri dagene i helgene",
          b: "Det arbeidet som går utover den alminnelige arbeidstiden",
          c: "Det arbeidet som arbeidsgiver mener arbeidstaker burde gjennomføre",
          d: "Det arbeidet som gir høyere lønn",
        },
        correctAnswer: "b",
      },
      {
        question: "Hva er en fagforening?",
        options: {
          a: "Et fag som er inndelt i foreninger",
          b: "En forening som dekker store geografiske områder, som blant annet et fylke",
          c: "En sammenslutting av arbeidstakere innenfor samme fag",
          d: "En sammensetting av arbeidstakere innen et fagforbund",
        },
        correctAnswer: "c",
      },
      {
        question:
          "Hva er den største grunnen til at folk i Norge i dag blir sykemeldt?",
        options: {
          a: "Muskel- og beinplager",
          b: "Leddplager",
          c: "Det varierer veldig fra yrke til yrke",
          d: "Muskel- og skjelettplager",
        },
        correctAnswer: "d",
      },
      {
        question:
          "Kan man inngå avtaler som har bedre betingelser enn det arbeidsmiljøloven bestemmer?",
        options: {
          a: "Ja",
          b: "Nei",
          c: "Kun med enkelte unntak",
          d: "Kun med tillatelse fra arbeidstilsynet",
        },
        correctAnswer: "a",
      },
      {
        question:
          "Kan man inngå avtaler som har dårligere betingelser enn det arbeidsmiljøloven bestemmer?",
        options: {
          a: "Ja",
          b: "Nei",
          c: "Kun med enkelte unntak",
          d: "Kun med tillatelse fra arbeidstilsynet",
        },
        correctAnswer: "b",
      },
      {
        question: "Hva menes med begrepet arbeidstid?",
        options: {
          a: "Den tiden arbeidstaker står for disposisjon for arbeidsgiver",
          b: "Den tiden arbeidsgiver står til disposisjon for arbeidstaker",
          c: "Den tiden man er opptatt på arbeid",
          d: "Den tiden man bruker på arbeidet",
        },
        correctAnswer: "a",
      },
    ],
  },
  alkohol: {
    title: "Alkoholloven og bevillingssystemet",
    questions: [
      {
        question:
          "Hva defineres som alkoholholdig drikk jf. alkoholloven §1-3?",
        options: {
          a: "Drikk med alkoholinnhold over 0,7 volumprosent",
          b: "Drikk med alkoholinnhold over 2,5 volumprosent",
          c: "Drikk med alkoholinnhold under 2,5 volumprosent",
          d: "Drikk med alkoholinnhold over 4,7 volumprosent",
        },
        correctAnswer: "b",
      },
      {
        question: "Hva er formålet med alkoholloven jf. alkoholloven §1-1?",
        options: {
          a: "Å begrense de samfunnsmessige og individuelle skadene som alkoholbruk kan innebære",
          b: "Å begrense de samfunnsmessige og individuelle fordelene som alkoholbruk kan innebære",
          c: "Å sørge for at det blir vanskelig å få tak i alkohol",
          d: "Å sørge for at staten får inn mest mulig penger i form av avgifter",
        },
        correctAnswer: "a",
      },
      {
        question: "Sikter alkoholloven på å begrense forbruket av alkohol?",
        options: {
          a: "Ja",
          b: "Ja, men ikke på bekostning av avgifter",
          c: "Nei",
          d: "Kanskje",
        },
        correctAnswer: "a",
      },
      {
        question: "Hvem gir ut bevilling?",
        options: {
          a: "Vinmonopolet",
          b: "Politiet",
          c: "Kommunen",
          d: "Ordføreren",
        },
        correctAnswer: "c",
      },
      {
        question: "Hvem gjennomfører kontroll av salgs- og skjenkesteder?",
        options: {
          a: "Nokas",
          b: "Kommunen",
          c: "Securitas",
          d: "Alle har et ansvar for å kontrollere salgs- og skjenkesteder",
        },
        correctAnswer: "b",
      },
      {
        question: "Hva vil det si å utføre målrettede kontroller?",
        options: {
          a: "Å kontrollere med et mål",
          b: "Å utføre kontroller på steder og tidspunkter der risikoen er størst for brudd på alkoholloven",
          c: "Å bruke ordensvaktene på stedet til å utføre flere kontroller der brudd på alkoholloven har skjedd tidligere",
          d: "At politiet kontrollerer etter stengetid",
        },
        correctAnswer: "b",
      },
      {
        question:
          "Hvor mange kontroller skal et skjenkested minst ha i året jf. alkoholforskriften §9-7?",
        options: {
          a: "3",
          b: "5",
          c: "1",
          d: "Tre ganger så mange som antall gjester i gjennomsnitt",
        },
        correctAnswer: "c",
      },
      {
        question:
          "Hvor mange kontroller skal kommunen gjennomføre i året jf. alkoholforskriften §9-7?",
        options: {
          a: "3",
          b: "Like mange som antallet skjenkesteder i kommunen",
          c: "Like mange som antallet salgs- og skjenkesteder i kommunen",
          d: "Tre ganger så mange som antallet salgs- og skjenkesteder i kommunen",
        },
        correctAnswer: "d",
      },
      {
        question:
          "Hva skal det legges særlig vekt på ved en kontroll jf. alkoholforskriften §9-4?",
        options: {
          a: "Salgs- og skjenketider, aldersgrensebestemmelser og ingen skjenking til personer som er åpenbart påvirket",
          b: "At de ansatte ikke drikker alkohol, alkoholfrie alternativer og aldersgrensebestemmelser",
          c: "Salgs- og skjenketider, aldersgrensebestemmelser og at det finnes tilstrekkelig mange ordensvakter",
          d: "At alle ansatte er under 18 år",
        },
        correctAnswer: "a",
      },
      {
        question:
          "Hva er kravene til en salgs- og skjenkekontrollør jf. alkoholforskriften §5-1?",
        options: {
          a: "Vekterutdanning",
          b: "Ingen krav til opplæring",
          c: "Vekterutdanning og bestått kunnskapsprøve for kontrollører",
          d: "Bestått kunnskapsprøve for kontrollører",
        },
        correctAnswer: "d",
      },
      {
        question:
          "Hvor mange kontrollører må man være på kontroll av skjenkested jf. alkoholforskriften §9-5?",
        options: {
          a: "3",
          b: "2",
          c: "En kontrollør og en fra politiet, siden kontrollør ikke har politimyndighet",
          d: "1",
        },
        correctAnswer: "b",
      },
      {
        question:
          "Hvor mange kontrollører må man være på kontroll av salgssted?",
        options: {
          a: "1",
          b: "2",
          c: "En kontrollør og en fra politiet, siden kontrollør ikke har politimyndighet",
          d: "3",
        },
        correctAnswer: "a",
      },
      {
        question:
          "Hvorfor må man være to kontrollører ved kontroll av skjenkested?",
        options: {
          a: "Det må ikke være to kontrollører ved kontroll av skjenkested",
          b: "Observasjoner fra to kontrollører har større bevismessig verdi, bedre rettssikkerhet for bevillingshaver og øker sjansene for at en av dem er edru",
          c: "Observasjoner fra to kontrollører har større bevismessig verdi, bedre rettssikkerhet for bevillingshaver og øker sjansene for å avdekke lovbrudd",
          d: "Fordi dette står i loven",
        },
        correctAnswer: "c",
      },
      {
        question:
          "Hvorfor må man være to kontrollører ved kontroll av salgssted?",
        options: {
          a: "Det må ikke være to kontrollører ved kontroll av salgssted",
          b: "Observasjoner fra to kontrollører har større bevismessig verdi, bedre rettssikkerhet for bevillingshaver og øker sjansene for at en av dem er edru",
          c: "Observasjoner fra to kontrollører har større bevismessig verdi, bedre rettssikkerhet for bevillingshaver og øker sjansene for å avdekke lovbrudd",
          d: "Fordi dette står i loven",
        },
        correctAnswer: "a",
      },
      {
        question: "Hva er en åpen kontroll?",
        options: {
          a: "En kontroll der alle skap må åpnes",
          b: "En kontroll der ansvarshavende legitimerer seg til kontrollørene når de ankommer salgs- eller skjenkestedet",
          c: "En kontroll av at alle flasker som selges på et skjenkested er åpne",
          d: "En kontroll der kontrollørene legitimerer seg til ordensvakt eller ansvarshavende når de ankommer salgs- eller skjenkestedet",
        },
        correctAnswer: "d",
      },
      {
        question: "Hva er hensikten med en åpen kontroll?",
        options: {
          a: "Å bedre rettssikkerheten til bevillingshaver",
          b: "F.eks. å kunne gjennomføre en kontroll selv om lokalet er fullt eller det er lang kø",
          c: "Åpen kontroll har liten hensikt, da ordensvakter og bartendere vil gjemme unna lovbrudd om de vet at kontrolløren er der",
          d: "Åpen kontroll er ikke lov jf. alkoholforskriften §9-14",
        },
        correctAnswer: "b",
      },
      {
        question: "Hva er en anonym kontroll?",
        options: {
          a: "En kontroll der bevillingshaver ikke får vite at de er kontrollert før sanksjoner kommer i posten",
          b: "En kontroll der kontrollørene legitimerer seg til ordensvakt eller ansvarshavende når de ankommer salgs- eller skjenkestedet",
          c: "En kontroll der kontrollører betaler inngangspenger og går inn på stedet som en vanlig gjest",
          d: "Anonym kontroll er ikke lov jf. alkoholforskriften §9-14",
        },
        correctAnswer: "c",
      },
      {
        question: "Må kontrollører av salgs- og skjenkesteder legitimere seg?",
        options: {
          a: "Ja, de må alltid legitimere seg til ordensvakt eller ansvarshavende når de ankommer salgs- eller skjenkestedet",
          b: "Ja, de må alltid legitimere seg til ordensvakt eller ansvarshavende når de forlater salgs- eller skjenkestedet",
          c: "Nei, ikke ved anonym kontroll, da får ansvarshavende brev fra kommunen i ettertid",
          d: "Ja, de må alltid legitimere seg til ansvarshavende når de forlater salgs- eller skjenkestedet og redegjøre for sitt inntrykk av stedet",
        },
        correctAnswer: "d",
      },
      {
        question: "Hva skjer i etterkant av en salgs- eller skjenkekontroll?",
        options: {
          a: "Kontrollører skal sende en rapport innen en uke til bevillingshaver.",
          b: "Politiet skal sende en rapport innen en uke til bevillingshaver.",
          c: "Kommunen skal sende en rapport innen en uke til bevillingshaver.",
          d: "Kommunen skal sende en rapport innen en uke til bevillingshaver. Bevillingshaver skal ha mulighet til å forklare seg til kommunen innen to uker.",
        },
        correctAnswer: "d",
      },
      {
        question: "Hva er en samordnet kontroll?",
        options: {
          a: "En kontroll gjennom Samordna opptak",
          b: "Når politiet trenger bistand og kaller inn brannvesenet",
          c: "En planlagt aksjon der flere instanser gjennømfører kontroll samtidig",
          d: "En planlagt aksjon hvor man varsler bevillingshaver på forhånd",
        },
        correctAnswer: "c",
      },
      {
        question: "Hvilke instanser kan møte på en samordnet kontroll?",
        options: {
          a: "Politi, brannvesen, tollvesen, Skatteetaten, Mattilsynet, skjenkekontroll",
          b: "Politi, brannvesen, tollvesen, Skatteetaten, Mattilsynet, men ikke skjenkekontroll",
          c: "Bare private kontrollorganer",
          d: "Politi, brannvesen, småtroll, Skatteetaten, Mattilsynet, skjenkekontroll",
        },
        correctAnswer: "a",
      },
      {
        question: "Hvem skal gis bevilling jf. alkoholloven §1-4b?",
        options: {
          a: "Julenissen",
          b: "Den som har det juridiske og økonomiske ansvaret for bedriften",
          c: "Den som har det ansvaret for ordensvaktene i bedriften",
          d: "Den som er på stedet oftest",
        },
        correctAnswer: "b",
      },
      {
        question:
          "Må hvert salgs- og skjenkested ha egen bevilling jf. alkoholloven §3-1 og §4-2?",
        options: {
          a: "Ja",
          b: "Nei",
          c: "Nei, ikke hvis de har samme eier",
          d: "Bare skjenkesteder",
        },
        correctAnswer: "a",
      },
      {
        question:
          "Hvilke krav er det til den som er oppført som styrer på en bevilling?",
        options: {
          a: "Må være daglig leder",
          b: "Må være over 20 år, ha uklanderlig vandel",
          c: "Må være over 25 år, ha plettfri vandel",
          d: "Må være over 20 år, ha uklanderlig vandel og har det daglige ansvaret for salg eller skjenking",
        },
        correctAnswer: "d",
      },
      {
        question: "Hvem kan inndra en bevilling?",
        options: {
          a: "Skjenkekontrollør",
          b: "Politiet",
          c: "Kommunen",
          d: "Vektere",
        },
        correctAnswer: "c",
      },
      {
        question: "Hva slags sanksjoner gir 12 prikker i løpet av to år?",
        options: {
          a: "Bevilling inndras og stedet kan ikke få ny bevilling på 5 år",
          b: "Bevilling inndras permanent",
          c: "Bevilling inndras i én uke",
          d: "Man trenger flere prikker for at det skal bli sanksjoner",
        },
        correctAnswer: "c",
      },
      {
        question: "Hvilken av disse gir åtte prikker?",
        options: {
          a: "Brudd på kravet om alkoholfrie alternativer jf. alkoholforskriften §4-6",
          b: "Gjentatt diskriminering jf. alkoholloven §1-8",
          c: "Salg og utlevering til person som er åpenbart påvirket jf. alkoholforskriften §4-2",
          d: "Brudd på bistandsplikten jf. alkoholforskriften §4-1",
        },
        correctAnswer: "d",
      },
      {
        question: "Hvilken av disse gir fire prikker?",
        options: {
          a: "Brudd på kravet om alkoholfrie alternativer jf. alkoholforskriften §4-6",
          b: "Gjentatt diskriminering jf. alkoholloven §1-8",
          c: "Salg og utlevering til person som er åpenbart påvirket jf. alkoholforskriften §4-2",
          d: "Brudd på bistandsplikten jf. alkoholforskriften §4-1",
        },
        correctAnswer: "c",
      },
      {
        question: "Hvilken av disse gir to prikker?",
        options: {
          a: "Brudd på kravet om alkoholfrie alternativer jf. alkoholforskriften §4-6",
          b: "Gjentatt diskriminering jf. alkoholloven §1-8",
          c: "Salg og utlevering til person som er åpenbart påvirket jf. alkoholforskriften §4-2",
          d: "Brudd på bistandsplikten jf. alkoholforskriften §4-1",
        },
        correctAnswer: "b",
      },
      {
        question: "Hvilken av disse gir én prikk?",
        options: {
          a: "Brudd på kravet om alkoholfrie alternativer jf. alkoholforskriften §4-6",
          b: "Gjentatt diskriminering jf. alkoholloven §1-8",
          c: "Salg og utlevering til person som er åpenbart påvirket jf. alkoholforskriften §4-2",
          d: "Brudd på bistandsplikten jf. alkoholforskriften §4-1",
        },
        correctAnswer: "a",
      },
      {
        question:
          "Krever alkoholloven at salgs- og skjenkesteder skal ha et internkontrollsystem?",
        options: {
          a: "Nei",
          b: "Nei, dette er noe kommunen kan kreve hvis det er nødvendig",
          c: "Ja, dersom det er flere enn 10 ansatte i bedriften",
          d: "Ja",
        },
        correctAnswer: "d",
      },
      {
        question:
          "Kan politiet stenge et sted som driver salg- eller skjenking?",
        options: {
          a: "Nei",
          b: "Ja, dersom stedet ikke har bevilling. I tillegg kan de stenge opp til 12 dager for å hindre forstyrrelse av offentlig ro og orden, ivareta sikkerhet eller avverge/stanse lovbrudd.",
          c: "Nei, dette må kommunen gjøre",
          d: "Ja, dersom stedet ikke har bevilling. I tillegg kan de stenge opp til 2 dager for å hindre forstyrrelse av offentlig ro og orden, ivareta sikkerhet eller avverge/stanse lovbrudd.",
        },
        correctAnswer: "d",
      },
      {
        question: "Hvilke straffer kan man få for brudd på alkoholloven?",
        options: {
          a: "Ingen straff",
          b: "Kun inndragelse av bevilling",
          c: "Bøter og/eller fengsel og dermed miste mulighetene for å få bevilling",
          d: "Ordensvakten har ansvaret og vil få bøter og/eller fengsel, uansett hvem som bryter loven",
        },
        correctAnswer: "c",
      },
      {
        question: "Hvilke drikker finnes i gruppe 3?",
        options: {
          a: "Drikke med 4,7-22 volumprosent alkohol",
          b: "Drikke med 22-60 volumprosent alkohol",
          c: "Drikke med 0,7-2,5 volumprosent alkohol",
          d: "Drikke med 2,5-4,7 volumprosent alkohol",
        },
        correctAnswer: "b",
      },
      {
        question: "Hvilke drikker finnes i gruppe 2?",
        options: {
          a: "Drikke med 4,7-22 volumprosent alkohol",
          b: "Drikke med 22-60 volumprosent alkohol",
          c: "Drikke med 0,7-2,5 volumprosent alkohol",
          d: "Drikke med 2,5-4,7 volumprosent alkohol",
        },
        correctAnswer: "a",
      },
      {
        question: "Hvilke drikker finnes i gruppe 1?",
        options: {
          a: "Drikke med 4,7-22 volumprosent alkohol",
          b: "Drikke med 22-60 volumprosent alkohol",
          c: "Drikke med 0,7-2,5 volumprosent alkohol",
          d: "Drikke med 2,5-4,7 volumprosent alkohol",
        },
        correctAnswer: "d",
      },
      {
        question: "Hvilke drikker regnes som alkoholsvake?",
        options: {
          a: "Drikke med 4,7-22 volumprosent alkohol",
          b: "Drikke med 22-60 volumprosent alkohol",
          c: "Drikke med 0,7-2,5 volumprosent alkohol",
          d: "Drikke med 2,5-4,7 volumprosent alkohol",
        },
        correctAnswer: "c",
      },
      {
        question:
          "Hva er aldersgrensen for salg, skjenking og kjøp av alkoholholdig drikke i gruppe 1 og gruppe 2?",
        options: {
          a: "18 år",
          b: "15 år",
          c: "20 år",
          d: "Ingen aldersgrense",
        },
        correctAnswer: "a",
      },
      {
        question:
          "Hva er aldersgrensen for salg, skjenking og kjøp av alkoholholdig drikke i gruppe 3?",
        options: {
          a: "18 år",
          b: "15 år",
          c: "20 år",
          d: "Ingen aldersgrense",
        },
        correctAnswer: "c",
      },
      {
        question:
          "Regnes det som skjenking om en mindreårig drikker medbrakt alkohol?",
        options: {
          a: "Nei",
          b: "Ja, all konsum på skjenkestedet regnes som skjenking",
          c: "Ja, så lenge personen har vært på skjenkestedet samme kveld som de drikker",
          d: "Nei, kun hvis alkoholen har blitt solgt på skjenkestedet",
        },
        correctAnswer: "b",
      },
      {
        question: "Hva er forbudt jf. alkoholloven §8-11?",
        options: {
          a: "Å bistå personer som er åpenbart påvirket og ikke klarer seg selv",
          b: "Å vise bort personer som er åpenbart påvirket",
          c: "Å skjenke alkohol til personer som er åpenbart påvirket av rusmidler eller skjenke på en slik måte at de kan antas å bli det",
          d: "Å spise mat mens man lager en drink",
        },
        correctAnswer: "c",
      },
      {
        question:
          "Kan en person som er åpenbart påvirket oppholde seg på et skjenkested jf. alkoholforskriften §4-1?",
        options: {
          a: "Ja, selvfølgelig",
          b: "Bare om de ikke drikker",
          c: "Bare om de spiser brød",
          d: "Nei",
        },
        correctAnswer: "d",
      },
      {
        question:
          "Hvem står ansvarlig for at åpenbart påvirkede gjester blir fjernet?",
        options: {
          a: "Ordensvaktene",
          b: "Bevillingshaver",
          c: "Politiet",
          d: "Kommunen",
        },
        correctAnswer: "b",
      },
      {
        question:
          "Kan det serveres alkohol til de som sitter sammen med en åpenbart beruset person?",
        options: {
          a: "Ja, hvis de passer godt på de(n) som er åpenbart påvirket",
          b: "Nei",
          c: "Bare om det er flere edru personer rundt bordet",
          d: "I slike tilfeller må hele gjengen forlate lokalet",
        },
        correctAnswer: "b",
      },
      {
        question: "Hva menes med rusmidler i alkoholloven forstand?",
        options: {
          a: "Bare alkohol",
          b: "Alkohol, narkotika, alle rusmidler",
          c: "Bare narkotika",
          d: "Legemiddel",
        },
        correctAnswer: "b",
      },
      {
        question: "Hva vil det si å være åpenbart påvirket av alkohol?",
        options: {
          a: "Oppstemt, færre hemninger, mer pratsom, hever stemmen",
          b: "Uoppmerksom, vanskeligheter med å feste blikket, snakker utydelig, ofte høyrøstet, problemer med å gå rett, kan virke forstyrrende på andre gjester",
          c: "Ler høyt, drikker vann, sitter stille på en stol, snakker rolig og tydelig",
          d: "Danser eller synger",
        },
        correctAnswer: "b",
      },
      {
        question:
          "Hva bør man gjøre om en person som er åpenbart påvirket av rusmidler vil komme inn på et skjenkested?",
        options: {
          a: "Pågripe dem",
          b: "Ringe politiet",
          c: "La dem komme inn, slik at man kan passe på dem",
          d: "Nekte dem adgang",
        },
        correctAnswer: "d",
      },
      {
        question:
          "Hva innebærer bevillingshaverens bistandsplikt jf. alkoholforskriften §4-1?",
        options: {
          a: "En plikt til å bare selge eller skjenke alkohol til personer over 18 år",
          b: "En plikt til å bistå påvirkede personer til å komme seg ut av lokalet, f.eks. ved å støtte dem ut",
          c: "En plikt til å hjelpe påvirkede personer som er ute av stand til å hjelpe seg selv, f.eks. ved å ringe etter taxi eller politi",
          d: "En plikt til å bistå ordensvaktene",
        },
        correctAnswer: "c",
      },
      {
        question:
          "Hva innebærer krav om forsvarlig drift jf. alkoholloven §4-7?",
        options: {
          a: "At salg og skjenking av alkoholholdig drikk må foregå innenfor alkohollovens system og til enhver tid utøves på en forsvarlig måte",
          b: "At salg og skjenking av alkoholholdig drikk må foregå utenfor alkohollovens system og til enhver tid utøves på en forsvarlig måte",
          c: "At det finnes rutiner synlig bak baren som alle ansatte har tilgang til",
          d: "At bevillingshaver er over 20 år og har uklanderlig vandel",
        },
        correctAnswer: "a",
      },
      {
        question:
          "Har kommunen rett på tilgang til lokalene til salgs- og skjenkested?",
        options: {
          a: "Nei",
          b: "Ja, før og etter stengetid. Hindring av slik tilgang er forbudt jf. alkoholloven §1-9",
          c: "Ja, både før, under og etter stengetid. Hindring av slik tilgang er forbudt jf. alkoholloven §1-9",
          d: "Ja, men bare hovedlokalet. Hindring av slik tilgang er forbudt jf. alkoholloven §1-9",
        },
        correctAnswer: "c",
      },
      {
        question:
          "Kan gjestene ta med seg medbrakt inn på et skjenkested jf. alkoholloven §4-4?",
        options: {
          a: "Nei, kun på salgssted",
          b: "Ja",
          c: "Nei",
          d: "Ja, men det kan ikke konsumeres inne på skjenkestedet",
        },
        correctAnswer: "d",
      },
      {
        question:
          "Kan gjestene ta med seg alkohol ut fra et skjenkested jf. alkoholloven §4-4?",
        options: {
          a: "Nei",
          b: "Ja, hvis de må rekke bussen",
          c: "Ja, hvis alkoholen ikke er kjøpt på stedet",
          d: "Bare hvis de skal ut for å røyke og komme inn igjen",
        },
        correctAnswer: "c",
      },
      {
        question:
          "Når er skjenking av alkoholholdig drikke i gruppe 3 forbudt jf. alkoholloven §4-4?",
        options: {
          a: "Det er ikke forbudt",
          b: "Mellom kl. 03:00 og 06:00",
          c: "Mellom kl. 03:00 og 09:00",
          d: "Mellom kl. 03:00 og 13:00",
        },
        correctAnswer: "d",
      },
      {
        question:
          "Når er skjenking av all alkoholholdig drikke forbudt jf. alkoholloven §4-4?",
        options: {
          a: "Det er ikke forbudt",
          b: "Mellom kl. 03:00 og 06:00",
          c: "Mellom kl. 03:00 og 09:00",
          d: "Mellom kl. 03:00 og 13:00",
        },
        correctAnswer: "b",
      },
      {
        question:
          "Hvor lang tid har gjestene på å konsumere alkoholholdig drikke de har kjøpt før skjenketidens utløp?",
        options: {
          a: "15 minutter etter skjenketidens utløp",
          b: "30 minutter etter skjenketidens utløp",
          c: "60 minutter etter skjenketidens utløp",
          d: "Konsum må opphøre umiddelbart ved skjenketidens utløp",
        },
        correctAnswer: "b",
      },
      {
        question:
          "Kan gjestene ta med seg skjenket alkohol ut av skjenkingslokalet etter skjenketidens utløp?",
        options: {
          a: "Ja",
          b: "Hvis de heller den på en flaske",
          c: "Nei",
          d: "Ordensvaktene skal få den til afterparty etter stengetid",
        },
        correctAnswer: "c",
      },
      {
        question:
          "Kan kommunestyret inndra bevilling på grunnlag av gjentatt omsetting av narkotika på skjenkestedet jf. alkoholloven §1-8?",
        options: {
          a: "Ja",
          b: "Kun hvis skjenkestedet har fått 12 prikker i løpet av to år",
          c: "Nei",
          d: "Dette har ingenting med alkoholloven å gjøre",
        },
        correctAnswer: "a",
      },
      {
        question:
          "Kan kommunestyret inndra bevilling på grunnlag av gjentatt diskriminering av gjester jf. alkoholloven §1-8?",
        options: {
          a: "Nei",
          b: "Kun hvis skjenkestedet har fått 12 prikker i løpet av to år",
          c: "Ja",
          d: "Dette har ingenting med alkoholloven å gjøre",
        },
        correctAnswer: "c",
      },
    ],
  },
  rus: {
    title: "Rusmidler",
    questions: [
      {
        question: "Er narkotika et økende problem i Norge?",
        options: {
          a: "Nei, bruk av narkotika blir mindre og mindre",
          b: "Ja",
          c: "Ja, men ikke i verden forøvrig",
          d: "Nei, det finnes ikke narkotika i Norge",
        },
        correctAnswer: "b",
      },
      {
        question: "Ruser alle brukere seg hver dag?",
        options: {
          a: "Vet ikke",
          b: "Nei, det finnes også rekreasjonsbruk hvor bruket er begrenset til ferie og fest",
          c: "De fleste som bruker narkotika, er ruset hver dag",
          d: "Ja, alle",
        },
        correctAnswer: "b",
      },
      {
        question: "Hva er en partypakke?",
        options: {
          a: "En pakke man får i posten med ballonger, servietter og alt man trenger for fest",
          b: "En partypakke inneholder amfetamin og heroin",
          c: "En pakke med flere typer rusmidler, slik at man kan ruse seg opp og ned igjen når festen er over",
          d: "En pakke med rusmidler som man får på fest",
        },
        correctAnswer: "c",
      },
      {
        question: "Er all bruk av narkotika ulovlig?",
        options: {
          a: "Ja, men det er lovlig med bruk av narkotiske legemidler som personen har fått på resept fra lege",
          b: "Nei",
          c: "Nei, ikke hvis det er for å behandle en sykdom",
          d: "Nei, det er bare besittelse og salg som er ulovlig",
        },
        correctAnswer: "a",
      },
      {
        question:
          "Hvor finner vi ut om et stoff er klassifisert som narkotika?",
        options: {
          a: "Narkotikalisten i narkotikaloven",
          b: "Vaktvirksomhetsloven",
          c: "Narkotikalisten i forskrift om narkotika",
          d: "Legemiddelloven",
        },
        correctAnswer: "c",
      },
      {
        question: "I hvilke(n) lov(er) er befatning med narkotika omhandlet?",
        options: {
          a: "Straffeloven",
          b: "Legemiddelloven",
          c: "Alkoholloven",
          d: "Legemiddelloven og straffeloven",
        },
        correctAnswer: "d",
      },
      {
        question:
          "I hvilke(n) lov(er) er bruk og besittelse av narkotika omhandlet, samt overdragelse av legemidler som ikke betegnes som narkotika?",
        options: {
          a: "Straffeloven",
          b: "Legemiddelloven",
          c: "Alkoholloven",
          d: "Legemiddelloven og straffeloven",
        },
        correctAnswer: "b",
      },
      {
        question:
          "I hvilke(n) lov(er) er ulovlig tilvirkning, innførsel, utførsel, erverv, oppbevaring, sending og overdragelse av narkotika omhandlet?",
        options: {
          a: "Straffeloven",
          b: "Legemiddelloven",
          c: "Alkoholloven",
          d: "Legemiddelloven og straffeloven",
        },
        correctAnswer: "a",
      },
      {
        question:
          "Hva slags rusmiddel er det sannsynlig at en person har tatt om de har meget store pupiller?",
        options: {
          a: "Sentraldempende, f.eks. heroin",
          b: "Sentralstimulerende, f.eks. kodein",
          c: "Sentraldempende, f.eks. LSD",
          d: "Sentralstimulerende, f.eks. amfetamin",
        },
        correctAnswer: "d",
      },
      {
        question:
          "Hva slags rusmiddel er det sannsynlig at en person har tatt om de har meget små pupiller?",
        options: {
          a: "Sentraldempende, f.eks. heroin",
          b: "Sentralstimulerende, f.eks. kodein",
          c: "Sentraldempende, f.eks. LSD",
          d: "Sentralstimulerende, f.eks. amfetamin",
        },
        correctAnswer: "a",
      },
      {
        question: "Finnes det helsepersonell som ruser seg på jobb?",
        options: {
          a: "Mange grupper ruser seg for å klare lange arbeidsøkter, men helsepersonell gjør aldri dette",
          b: "Ja, det er lov jf. legemiddelloven §14-3",
          c: "Ja, det forekommer at personer ruser seg for å klare lange arbeidsøkter, også helsepersonell",
          d: "Nei",
        },
        correctAnswer: "c",
      },
      {
        question:
          "Hvilken av disse er en uaktsom overtredelse av narkotikalovgivningen?",
        options: {
          a: "Person som frivillig har tatt MDMA, men det viser seg å være opiumsstoffer",
          b: "Person som er ruset fordi noen andre har puttet noe i drinken deres",
          c: "Innførsel av narkotika i en koffert personen ikke vet hva inneholder",
          d: "Innførsel av narkotika som er godt gjemt i kofferten",
        },
        correctAnswer: "c",
      },
      {
        question: "Hva er doping jf. straffeloven §234?",
        options: {
          a: "Det samme som å ruse seg",
          b: "Stoffer listet opp i forskrift om hva som skal anses som dopingmidler",
          c: "Bruk av stoffer som kan gi utestenging fra idretten",
          d: "Alle stoffer som kan gi prestasjonsfremmende effekt",
        },
        correctAnswer: "b",
      },
      {
        question: "Hva er derviatregelen?",
        options: {
          a: "Avsnitt av narkotikalisten som inkluderer derivater (liknende stoffer) av stoffer som finnes på listen",
          b: "Avsnitt i straffeloven som forbyr bruk av derivater (opiumliknende stoff)",
          c: "En instruks som gir tilgang for vektere til å beslaglegge narkotika",
          d: "En forskrift under legemiddelloven som gir politiet tilgang til å kjøpe narkotika",
        },
        correctAnswer: "a",
      },
      {
        question: "Hva står THC for og hvilken plante finnes dette stoffet i?",
        options: {
          a: "Tetrahydrocannabinol, Papaver somniferum",
          b: "Tetrahydrocarabinkrok, Erythroxylum coca",
          c: "Tetrahydrocannabinol, Cannabis sativa",
          d: "Trange, hyggelige colaflasker, finnes ikke i en plante, det er et ordspråk",
        },
        correctAnswer: "c",
      },
      {
        question: "Kan cannabis injiseres direkte inn i blodårene?",
        options: {
          a: "Bare om du løser det opp i appelsinjuice",
          b: "Ja, dette blir mer og mer vanlig",
          c: "Nei, dette er umulig",
          d: "Det må kokes først, ellers blir det giftig",
        },
        correctAnswer: "c",
      },
      {
        question: "Hva kan stemme med tegn på cannabisrus?",
        options: {
          a: "Problemer med å holde seg oppreist, omtåket, snøvlete tale, knekk i nakke og knær, tydelig ruset",
          b: "Latter, stor sannsynlighet for aggresjon, forstørrede pupiller, røde øyne, tørre slimhinner",
          c: "Høylytt, problemer med å snakke, hukommelsestap, sult, små pupiller",
          d: 'Latter, økt "selvinnsikt", forstørrede pupiller, røde øyne, tørre slimhinner',
        },
        correctAnswer: "d",
      },
      {
        question: "Hva kan stemme med tegn på opioiderus?",
        options: {
          a: "Problemer med å holde seg oppreist, omtåket, snøvlete tale, knekk i nakke og knær, tydelig ruset",
          b: "Latter, stor sannsynlighet for aggresjon, forstørrede pupiller, røde øyne, tørre slimhinner",
          c: "Høylytt, problemer med å snakke, hukommelsestap, sult, små pupiller",
          d: 'Latter, økt "selvinnsikt", forstørrede pupiller, røde øyne, tørre slimhinner',
        },
        correctAnswer: "a",
      },
      {
        question: "Er all bruk av opioider forbudt?",
        options: {
          a: "Ja",
          b: "Nei, opioider finnes i legemidler og brukes som smertelindrende",
          c: "Ikke hvis det er kjøpt reseptfritt på dagligvarebutikk",
          d: "Ikke hvis man lager det av valmue fra hagen",
        },
        correctAnswer: "b",
      },
      {
        question: "Hvordan blir herion oftest tatt?",
        options: {
          a: "Sprøytes inn (injiseres), røykes, blandet i cola",
          b: "Sprøytes inn (injiseres), partypakke, blandet med tobakk",
          c: "Sprøytes inn (injiseres), røykes, sniffes",
          d: "Minusdop, designerdrugs, i Trondheim",
        },
        correctAnswer: "c",
      },
      {
        question: "Hvilke stoffer regnes som sentraldempende?",
        options: {
          a: "Amfetaminer, cannabinoider, poppers",
          b: "Barbiturater, benzodiapiner, opioider",
          c: "Amfetaminer, khat, kokain",
          d: "Fleinsopp, LSD, ecstasy, PCP",
        },
        correctAnswer: "b",
      },
      {
        question: "Hvilke stoffer regnes som sentralstimulerende?",
        options: {
          a: "Amfetaminer, cannbinoider, poppers",
          b: "Barbiturater, benzodiapiner, opioider",
          c: "Amfetaminer, khat, kokain",
          d: "Fleinsopp, LSD, ecstasy, PCP",
        },
        correctAnswer: "c",
      },
      {
        question: "Hvilke stoffer regnes som hallusinogener?",
        options: {
          a: "Fleinsopp, LSD, ecstasy, PCP, amfetamin",
          b: "Barbiturater, benzodiapiner, opioider",
          c: "Amfetaminer, khat, kokain",
          d: "Fleinsopp, LSD, ecstasy, PCP",
        },
        correctAnswer: "d",
      },
      {
        question: "Hva kan stemme med tegn på rus fra sentralstimulerende?",
        options: {
          a: "Problemer med å holde seg oppreist, omtåket, snøvlete tale, knekk i nakke og knær, tydelig ruset",
          b: "Kontinuerlig bevegelse, usammenhengende tale, store pupiller, tett, rennende nese, ofte tynne",
          c: "Høylytt, problemer med å snakke, hukommelsestap, sult, små pupiller",
          d: 'Latter, økt "selvinnsikt", forstørrede pupiller, røde øyne, tørre slimhinner',
        },
        correctAnswer: "b",
      },
      {
        question: "Hva kan stemme med tegn på rus fra hallusinogener?",
        options: {
          a: "Virkelighetsfjern, kan gi psykotiske trekk, hallusinasjoner, kan likne på sentralstimulerende rus",
          b: "Virkelighetsfjern, kan gi psykotiske trekk, blek og kald, hallusinasjoner, kan likne på sentraldempende rus",
          c: "Problemer med å holde seg oppreist, omtåket, snøvlete tale, knekk i nakke og knær, tydelig ruset",
          d: 'Latter, økt "selvinnsikt", forstørrede pupiller, røde øyne, tørre slimhinner',
        },
        correctAnswer: "a",
      },
      {
        question:
          "Hva slags førstehjelpstiltak er fordelaktige ved overdose av amfetamin, kokain og ecstasy (MDMA)?",
        options: {
          a: "Det er ikke sannsynlig med overdose av disse stoffene",
          b: "Stopp fysisk aktivitet, kjøl personen ned, gi drikke til bevisst person (gjerne sportsdrikk e.l.), ring 113, stabilt sideleie om bevisstløs, HLR hvis pustestans",
          c: "Få dem opp for å holde kroppen i gang, gi motgift om mulig (Nalokson), ring 113, stabilt sideleie om bevisstløs, HLR hvis pustestans",
          d: "Det er ikke sannsynlig med overdose av disse stoffene, men personen kan ha behov for akutt psykiatrisk helsehjelp. Ring 113 eller 112 om fare for seg selv og andre.",
        },
        correctAnswer: "b",
      },
      {
        question:
          "Hva slags førstehjelpstiltak er fordelaktige ved overdose av heroin, fentanyl og metadon?",
        options: {
          a: "Det er ikke sannsynlig med overdose av disse stoffene",
          b: "Stopp fysisk aktivitet, kjøl personen ned, gi drikke til bevisst person (gjerne sportsdrikk e.l.), ring 113, stabilt sideleie om bevisstløs, HLR hvis pustestans",
          c: "Få dem opp for å holde kroppen i gang, gi motgift om mulig (Nalokson), ring 113, stabilt sideleie om bevisstløs, HLR hvis pustestans",
          d: "Det er ikke sannsynlig med overdose av disse stoffene, men personen kan ha behov for akutt psykiatrisk helsehjelp. Ring 113 eller 112 om fare for seg selv og andre.",
        },
        correctAnswer: "c",
      },
      {
        question:
          "Hva slags førstehjelpstiltak er fordelaktige ved overdose av fleinsopp og LSD?",
        options: {
          a: "Det er ikke sannsynlig med overdose av disse stoffene",
          b: "Stopp fysisk aktivitet, kjøl personen ned, gi drikke til bevisst person (gjerne sportsdrikk e.l.), ring 113, stabilt sideleie om bevisstløs, HLR hvis pustestans",
          c: "Få dem opp for å holde kroppen i gang, gi motgift om mulig (Naloxon), ring 113, stabilt sideleie om bevisstløs, HLR hvis pustestans",
          d: "Det er ikke sannsynlig med overdose av disse stoffene, men personen kan ha behov for akutt psykiatrisk helsehjelp. Ring 113 eller 112 om fare for seg selv eller andre.",
        },
        correctAnswer: "d",
      },
      {
        question:
          "Hva slags førstehjelpstiltak er fordelaktige ved overdose av cannabis?",
        options: {
          a: "Det er ikke sannsynlig med overdose av dette stoffet",
          b: "Stopp fysisk aktivitet, kjøl personen ned, gi drikke til bevisst person (gjerne sportsdrikk e.l.), ring 113, stabilt sideleie om bevisstløs, HLR hvis pustestans",
          c: "Få dem opp for å holde kroppen i gang, gi motgift om mulig (Naloxon), ring 113, stabilt sideleie om bevisstløs, HLR hvis pustestans",
          d: "Det finnes ingen motgift og pustestans er svært sannsynlig",
        },
        correctAnswer: "a",
      },
      {
        question: "Hvilke av disse legemidlene er sentraldempende?",
        options: {
          a: "Bare Valium",
          b: "Valium, Rohypnol, Mogadon, Pinex Forte",
          c: "Ritalin, Concerta, Modiodal, Fenazon-Koffein",
          d: "Cipralex, Ibux, Ritalin, Rohypnol",
        },
        correctAnswer: "b",
      },
      {
        question: "Hvilke av disse legemidlene er sentralstimulerende?",
        options: {
          a: "Bare Ritalin",
          b: "Valium, Rohypnol, Mogadon, Pinex Forte",
          c: "Ritalin, Concerta, Modiodal, Fenazon-Koffein",
          d: "Cipralex, Ibux, Ritalin, Rohypnol",
        },
        correctAnswer: "c",
      },
    ],
  },
  brann: {
    title: "Brannvern",
    questions: [
      {
        question:
          "Hvilke tre elementer må være tilstedet for at en brann skal oppstå?",
        options: {
          a: "Temperatur, brennbart materiale, luft",
          b: "Varme, oksygen og brennbart materiale",
          c: "Varme, H2O og brennbart materiale",
          d: "Brennbart stoff, bensin, og fuel",
        },
        correctAnswer: "b",
      },
      {
        question: "Hvilket materiale kan slukkes med pulverapparat?",
        options: {
          a: "AFD",
          b: "CDF",
          c: "ABC",
          d: "ABCD",
        },
        correctAnswer: "c",
      },
      {
        question: "Hvilket brennbart materiale har Bokstaven B?",
        options: {
          a: "Brann i brennbare væsker som f.eks. bensin",
          b: "Brann i metall  som f.eks. svart stål",
          c: "Brann i frityr",
          d: "Brann i gasser som f.eks. propan",
        },
        correctAnswer: "a",
      },
      {
        question: "Hva heter de ulike type brannene?",
        options: {
          a: "Flammebrann, ildbrann, eksplosjonsbrann",
          b: "Ulmebrann, glødebrann, og flammebrann",
          c: "Brann er brann uavhengig av hvilket stoff som brenner.",
          d: "Hvordan en brann oppstår avhenger av hvilken type materiale som brenner, det vil si at alle branner er forskjellig",
        },
        correctAnswer: "b",
      },
      {
        question: "Hva er et flammepunkt?",
        options: {
          a: "Et flammepunkt er der flammen har tilstrekkelig med oksygen",
          b: "Et flammepunkt er der flammen er på sitt sterkeste",
          c: "Et flammepunkt er når man deler flammen inn i kategorier",
          d: "Et flammepunkt er den laveste temperaturen en brennbar væske kan ha for å avgi tilstrekkelig med gass til å bli antent",
        },
        correctAnswer: "d",
      },
      {
        question: "Hvilke 4 måter kan en brann spres på?",
        options: {
          a: "Flyvebrann, ledning, stråling. strømning",
          b: "Flyvebrann, seilebrann, MDM brann, strømning",
          c: "Åpen brann, lukket brann, vid brann, kort brann",
          d: "Ledning, stråling, strømning, seiling",
        },
        correctAnswer: "a",
      },
      {
        question: "Hva vil en brannrøyk alltid inneholde?",
        options: {
          a: "Oksygen, brennbart materiale, CO2",
          b: "Faste materialer, vanndamp, giftgasser",
          c: "Faste materialer (karbon og sot), luft, vanndamp og forbrenningsgasser",
          d: "Forbrenningsgasser, H2O luft, gift",
        },
        correctAnswer: "c",
      },
      {
        question: "Hvilke klasser er slukkemidlene delt inn i?",
        options: {
          a: "ABCF",
          b: "ABCDEFG",
          c: "ABC",
          d: "ABCG",
        },
        correctAnswer: "a",
      },
      {
        question:
          "Vann kan brukes som slukkemiddel, men hvilken effekt har vannet på brannen?",
        options: {
          a: "Vannet er vått så derfor vil brannen slukke",
          b: "Vann og brann går ikke overens",
          c: "Vann legger seg som et gasslag på flammen",
          d: "Vann virker kjølende på brannen",
        },
        correctAnswer: "d",
      },
      {
        question:
          "Rent vann kan også brukes som slukkemiddel på elektriske anlegg. opptil hvor mange volt kan vann slukke?",
        options: {
          a: "10 000 v",
          b: "1000 v",
          c: "100 000 v",
          d: "532 v",
        },
        correctAnswer: "b",
      },
      {
        question:
          "Det er lagt opp 3 vedlikeholdnivåer for slukkemidler, hvilke?",
        options: {
          a: "Service, etterkontroll, kontroll",
          b: "Service, kontroll, og ettersyn",
          c: "Kontroll, etterpleie, vasking",
          d: "Ettersyn, påsyn, vasking",
        },
        correctAnswer: "b",
      },
      {
        question: "Hva er viktig å ha kjennskap til på et sprinkelanlegg?",
        options: {
          a: "Vite hvor stengeventil og tømmeventil er",
          b: "Vite hvor sprinkelsentral, tømmeventil og stengeventil er",
          c: "Vite hvor låseventil, skruventil og mekanismeventil er",
          d: "Vite hvor stengeventilen sitt stengepunkt er",
        },
        correctAnswer: "b",
      },
      {
        question:
          "Hvilke tre nivåer trenger man for vedlikehold av automatiske  slukkeranlegg?",
        options: {
          a: "Kontroll, vedlikehold, og ettersyn",
          b: "Kontroll, ettersyn og service",
          c: "Service og kontroll",
          d: "Etikett på baksiden, rapportere avik, og ettersyn",
        },
        correctAnswer: "a",
      },
      {
        question: "Hva er et antipanikklys?",
        options: {
          a: "Lys som gir deg en beroligende effekt",
          b: "Lys som lyser opp områder som ikke har lys",
          c: "Lys som lyser opp områder som ikke har klart definerte rømningsveier",
          d: "Lys som gjør deg lykkelig",
        },
        correctAnswer: "c",
      },
      {
        question: "Hva består et automatisk brannalarmanlegg av?",
        options: {
          a: "Detektor, sirene, magneter, sentralalarmanlegg, betjeningspanel",
          b: "Detektor, manuelle meldere, alarmgiver og sentralapparat",
          c: "Det samme som en vanlig alarm pakke, for vanlige anlegg",
          d: "Alle alarmpakker er forskjellig",
        },
        correctAnswer: "b",
      },
      {
        question: "Hvor plasseres et markeringsskilt for rømningsveier?",
        options: {
          a: "I taket",
          b: "Under døra",
          c: "Over døra",
          d: "Der det er nødvendig",
        },
        correctAnswer: "c",
      },
      {
        question: "Hvordan foregår en risikovurdering for brann?",
        options: {
          a: '"grovanalysen" sannsynlighet x konsekvens = risiko',
          b: "Risiko x risiko= sannsynlighet",
          c: "Risikovurdering kommer ann på hvilken brann det er snakk om",
          d: "Konsekvens x risiko = sannsynlighet",
        },
        correctAnswer: "a",
      },
      {
        question:
          "Når skal avvik rapporteres ved følge av brudd på rutiner og innstrukser? ",
        options: {
          a: "Minst en gang i mnd",
          b: "Minst annenhver dag",
          c: "Når du føler det er nødvendig",
          d: "Alltid",
        },
        correctAnswer: "d",
      },
      {
        question: "Hva er passivt brannvern?",
        options: {
          a: "Passivt brannvern er den branntekniske oppdelingen av bygget",
          b: "Passivt brannvern er når det ikke er aktivt brannvern",
          c: "Passivt brannvern er når brannen ikke er farlig, og slukker av seg selv",
          d: "Passivt brannvern er når konsekvensene av brannen er større en det man har forventet",
        },
        correctAnswer: "a",
      },
      {
        question: "Hva er felles for de fleste branninstrukser?",
        options: {
          a: "De er skrevet av samme brannansvarlig",
          b: "Den brannansvarlige skal ha få tildelt ansvar, oppgaver og myndighet",
          c: "De skal inneholde informasjon om varsling, slukking, og redning",
          d: "De skal inneholde informasjon om varsling, førstehjelp og tiltak",
        },
        correctAnswer: "c",
      },
      {
        question: "Hva skal man alltid sørge for når det brenner?",
        options: {
          a: "Sørge for å tilkalle hjelp",
          b: "Slukke brannen",
          c: "Huske å ta med verdifulle gjenstander som mobil, og pc",
          d: "Behandle alle mennesker som et individ",
        },
        correctAnswer: "a",
      },
      {
        question: "Hva er den farligste røyken?",
        options: {
          a: "Den røyken som er hvit og gjennomsiktig",
          b: "Den røyken som ingen ser men føler med kroppen at den er der",
          c: "Den svarte tykke røyken",
          d: "Den røyken som lukter verst",
        },
        correctAnswer: "c",
      },
    ],
  },
  jus: {
    title: "Jus",
    questions: [
      {
        question: "Hva omhandler alminnelig strafferett?",
        options: {
          a: "De generelle vilkårene som gir allmennheten hjemmel til å straffe noen",
          b: "De generelle straffereaksjonene en dommer kan gi",
          c: "De generelle straffevilkårene som må være til stede for å kunne gi den siktede straff",
          d: "De generelle vilkårene for å kunne straffe noen, og hvilke straffereaksjoner som finnes",
        },
        correctAnswer: "d",
      },
      {
        question: "Hvorfor må vektere kunne strafferett?",
        options: {
          a: "For å blant annet vite hvilken myndighet en vekter har og for at vekteren selv ikke begår straffbare handlinger",
          b: "Fordi Utdanningsdirektoratet krever det",
          c: "Fordi vekterfirmaene har dette som ansettelseskrav",
          d: "Man må ikke kunne strafferett, bare straffrihetsgrunn",
        },
        correctAnswer: "a",
      },
      {
        question: "Hva er en straffeprosess?",
        options: {
          a: "Læren om hvilke kriminelle handlinger som fører til straff",
          b: "En metode politiet bruker for å avdekke kriminelle handlinger",
          c: "Læren om hvordan en straffeforfølging gjennomføres",
          d: "En prosess der straffedømte anker sin tildelte straff",
        },
        correctAnswer: "c",
      },
      {
        question: "Allmennprevensjon innebærer...",
        options: {
          a: "At hvermannsens rettigheter blir overholdt i kontakt med vekter",
          b: "At kunnskapen om straff skal bidra til å holde folk fra å begå straffbare handlinger",
          c: "At politiet ikke skal kunne gi straff uten dommers avgjørelse",
          d: "At kunnskapen om straff skal holde dømte fra å begå nye lovbrudd",
        },
        correctAnswer: "b",
      },
      {
        question: "Induvidualprevensjon innebærer at",
        options: {
          a: "Straffen skal bidra til at den enkelte lovbryter skal få den nødvendige hjelp til å begå nye lovbrudd",
          b: "Kunnskap om straffeloven skal skremme enkeltmennesker til å ikke begå lovbrudd",
          c: "Straffen skal bidra til at den enkelte lovbryter vil avstå fra å begå nye straffbare handlinger",
          d: "Hvermannsen har de nødvendige kunnskapene om politiets strafferettslige kompetanse",
        },
        correctAnswer: "c",
      },
      {
        question: "Den viktigste loven innen strafferett er...",
        options: {
          a: "Selvfølgelig straffeloven",
          b: "Straffeprosessen",
          c: "Straffebestemmelsene",
          d: "Straffeforskriftene",
        },
        correctAnswer: "a",
      },
      {
        question: "Hva heter de praktiske straffrihetsgrunnene?",
        options: {
          a: "Det er ingen «praktiske straffrihetsgrunner»",
          b: "Nødverge, nødrett, selvtekt og samtykke",
          c: "Nødverge, forsett, selvtekt og nødrett",
          d: "Hjemmel, forsett, nødrett og nødverge",
        },
        correctAnswer: "b",
      },
      {
        question: "Er man fritatt for straff hvis man er rettsuviten?",
        options: {
          a: "Nei",
          b: "Ja",
          c: "Bare hvis det er vist forenklet forelegg",
          d: "Bare i forhold til trafikkregler",
        },
        correctAnswer: "a",
      },
      {
        question: "Hva må være til stede for å gi noen straff?",
        options: {
          a: "Personen må ha gjort en ulovlig handling",
          b: "Personen må være tilregnelig",
          c: "Personen må være tilgjengelig",
          d: "Personen må ha vist høy uaktsomhet",
        },
        correctAnswer: "b",
      },
      {
        question: "Hvilke gruppe personer anses som ikke tilregnelig?",
        options: {
          a: "Personer under 18 år og berusede personer",
          b: "Personer under 16 år og gravide",
          c: "Personer på sterke legemiddeler med resept, personer over 76 år og personer som har sonet en en forlenget fengselsstraff og nettopp kommet ut",
          d: "Personer under 15, psykotiske personer, personer som er høyt psykisk utviklingshemmet og personer som har sterke bevissthetsforstyrrelser",
        },
        correctAnswer: "d",
      },
      {
        question:
          "Er det straffbart å gjøre et forsøk på å gjøre en ulovlig handling?",
        options: {
          a: "Ja, alltid",
          b: "Nei",
          c: "Det er opp til politiet å bestemme",
          d: "Ja, men ikke på bagatellmessige straffbare handlinger",
        },
        correctAnswer: "d",
      },
      {
        question: "Hva er rettighetstap?",
        options: {
          a: "At man mister retten til å drive bestemte typer virksomhet, eller retten til å oppholde deg på bestemte steder",
          b: "At man mister retten til å føre motorvogn eller ytre sin mening",
          c: "At man mister rettigheter som er nedskrevet i menneskerettighetserklæringen",
          d: "At man mister retten til å anke i domstolene",
        },
        correctAnswer: "a",
      },
      {
        question: "Hva er et forelegg?",
        options: {
          a: "Et tilbud fra justisdepartementet om å gjøre opp et straffbart forhold med en bot",
          b: "Et tilbud fra politiet hvis man har kjørt for fort og kan gjøre det opp med bot istedet for å miste førerrett til motorvogn",
          c: "At man velger å sone i fengsel istedet for å betale for boten",
          d: "Et tilbud fra påtalemyndighetene om å gjøre opp et straffbart forhold med en bot",
        },
        correctAnswer: "d",
      },
      {
        question: "Er det tyveri hvis en gjenstand er besittelsesløs?",
        options: {
          a: "Ja",
          b: "Bare hvis gjenstanden har en verdi som er større enn 2500 kr",
          c: "Så lenge en gjenstand har en større verdi enn 0, er det tyveri",
          d: "Nei",
        },
        correctAnswer: "d",
      },
      {
        question: "Hva kreves for å straffe noen for tyveri?",
        options: {
          a: "At personen har utvist forsett",
          b: "At personen har tatt en gjenstand vitende om at det ikke er hans egen",
          c: "At personen at utvist berettighet",
          d: "Høyt uaktsomhet",
        },
        correctAnswer: "a",
      },
      {
        question: 'Hvor ligger grensen på "ubetydelig verdi"?',
        options: {
          a: "3500 kroner",
          b: "2500 kroner",
          c: "2000 kroner",
          d: "3000 kroner",
        },
        correctAnswer: "b",
      },
      {
        question: "Kan en vekter ha rollen som anmelder?",
        options: {
          a: "Bare med samtykke fra eventuelt gjerningsperson",
          b: "Nei",
          c: "Ja",
          d: "Bare politi",
        },
        correctAnswer: "c",
      },
      {
        question:
          "Er det en straffbar handling hvis en 14åring stjeler i en butikk?",
        options: {
          a: "Ja",
          b: "Nei",
          c: "Bare hvis foreldrene gir samtykke",
          d: "Bare på fersk gjerning og ferske spor",
        },
        correctAnswer: "b",
      },
      {
        question: "Hvem er det som har bevisbyrden i straffesaker?",
        options: {
          a: "Advokaten",
          b: "Siktede",
          c: "Påtalemyndighetene",
          d: "Dommer",
        },
        correctAnswer: "c",
      },
      {
        question: "Hva er forvaring?",
        options: {
          a: "En tidsbestemt frihetsberøvelse",
          b: "Fengselsstraff som varer lengre enn 21 år",
          c: "En ubetinget frihetsberøvelse for å verne tidligere forbrytere ovenfor samfunnet",
          d: "En tidsubestemt frihetsberøvelse",
        },
        correctAnswer: "d",
      },

      {
        question: "Hva vil det si å ha hjemmel?",
        options: {
          a: "Å ha et grunnlag i instrukser til å fatte et vedtak eller gjennomføre handlinger som andre mennesker må finne seg i og rette seg etter",
          b: "Å ha et grunnlag i vaktvirksomhetsloven til å gjøre noe som ellers ville være straffbart, som f.eks. selvtekt",
          c: "Å ha et grunnlag i lov, forskrift eller rettspraksis til å fatte et vedtak eller gjennomføre handlinger som andre mennesker må finne seg i og rette seg etter",
          d: "Å sette en person i håndjern",
        },
        correctAnswer: "c",
      },
    ],
  },
  alle: { title: "Alle", questions: [] },
};
