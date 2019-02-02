import Data.Foldable

categories = [("trussel", "Trusselbildet"),
              ("risiko", "Risikovurdering"),
              ("sikring", "Sikringstiltak"),
              ("oppgaver", "Vektertjenester og -oppgaver"),
              ("hms", "HMS og arbeidsmiljøloven"),
              ("beredskap", "Beredskapsplanlegging"),
              ("alkohol", "Alkoholloven og bevillingssystemet"),
              ("rus", "Rusmidler"),
              ("konflikt", "Kommunikasjon og konflikthåndtering"),
              ("brann", "Brannvern"),
              ("firstaid", "Førstehjelp"),
              ("etikk", "Etikk"),
              ("service", "Service, kundebehandling og kvalitet"),
              ("jus", "Jus"),
              ("alle", "Alle")]
              
index :: (String, String) -> String
index (fun, title) = "        <li><a id=\"myLink\" href=\"js\" onclick=\""
                     ++ fun ++ "();return false;\">" ++ title ++ "</a></li>"

printList :: [String] -> IO()
printList lst = for_ lst putStrLn

printIndex :: IO()
printIndex = printList $ map index categories