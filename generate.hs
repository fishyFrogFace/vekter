import Data.Foldable

categories = [("trussel.html", "Trusselbildet"),
              ("risiko.html", "Risikovurdering"),
              ("sikring.html", "Sikringstiltak"),
              ("oppgaver.html", "Vektertjenester og -oppgaver"),
              ("hms.html", "HMS og arbeidsmiljøloven"),
              ("beredskap.html", "Beredskapsplanlegging"),
              ("alkohol.html", "Alkoholloven og bevillingssystemet"),
              ("rus.html", "Rusmidler"),
              ("konflikt.html", "Kommunikasjon og konflikthåndtering"),
              ("brann.html", "Brannvern"),
              ("firstaid.html", "Førstehjelp"),
              ("etikk.html", "Etikk"),
              ("service.html", "Service, kundebehandling og kvalitet"),
              ("jus.html", "Jus")]
              
index :: (String, String) -> String
index (page, title) = "        <li><a href=\"./" ++ page
                      ++ "\">" ++ title ++ "</a></li>"

printList :: [String] -> IO()
printList lst = for_ lst putStrLn

printIndex :: IO()
printIndex = printList $ map index categories