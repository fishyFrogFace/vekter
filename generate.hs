import Data.Foldable

categories = [("threat", "Trusselbildet"),
              ("risk", "Risikovurdering"),
              ("securing", "Sikringstiltak"),
              ("tasks", "Vektertjenester og -oppgaver"),
              ("hse", "HMS og arbeidsmiljøloven"),
              ("preparedness", "Beredskapsplanlegging"),
              ("alcohol", "Alkoholloven og bevillingssystemet"),
              ("drugs", "Rusmidler"),
              ("conflict", "Kommunikasjon og konflikthåndtering"),
              ("fire", "Brannvern"),
              ("firstaid", "Førstehjelp"),
              ("ethics", "Etikk"),
              ("service", "Service, kundebehandling og kvalitet"),
              ("law", "Jus"),
              ("all", "Alle")]
              
index :: (String, String) -> String
index (fun, title) = "        <li><a href=# onclick=\"makeQuiz("
                     ++ fun ++ ", '" ++ title ++ "');return false;\">" ++ title
                     ++ "</a></li>"

printList :: [String] -> IO()
printList lst = for_ lst putStrLn

printIndex :: IO()
printIndex = printList $ map index categories

printTitle :: IO()
printTitle = printList $ map fst categories