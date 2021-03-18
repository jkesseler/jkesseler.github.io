# Omgaan met bugs in Scrum

## Samengevat
Kleine bugs met laag risico, zsm oplossen
Grote bugs met groot risico, spiken, stories aanmaken, inplannen.
Soms kan een bug zo belangrijk zijn dat de sprint wordt stop gezet. Alleen de PO mag dat doen.


## Grootte van bugs niet bepalend voor niet opgeleverde broncode
Het is het beste om de bug direct weer aan de huidige of volgende sprint toe te voegen, zonder de bug te dimensioneren. De context zit nog vers in het hoofd van het team waardoor de oploskosten laag zijn. Hoewel deze aanpak de gemiddelde snelheid verlaagt, zal de kwaliteit van de productie door bugloze user stories toenemen.

Hoe zit het met bugs die worden aangetroffen in opgeleverde software of in software die het huidige team niet heeft gemaakt?

- Moeten we ze gewoon toevoegen aan de sprint backlog en ons niet bekommeren om de omvang van de bug?
- Gaan we de bug als een user story behandelen en uren schatten?
- Moeten we user stories op maat maken en die geheel uitpunten?
- Of moeten we Scrum helemaal niet gebruiken en de bugs gewoon met Kanban oplossen?
- Als een team Scrum gebruikt en aan user stories werkt, voegt men meestal geen ander team toe alleen maar om bugs te herstellen in Kanban. - Zelfs niet als ze er geld mee kunnen besparen:

Het is niet efficiënt als iemand anders dan de user story developer de bugs oplost.
Het is niet eenvoudig om een ontwikkelaar te vinden die enthousiast is over het oplossen van bugs (motivatieprobleem).
Kanban is meer geschikt voor een omgeving waar de workflow soepel loop en het team deskundig is met betrekking tot de software. Anders wordt er te veel geëxperimenteerd en gediscussieerd.

## Story-points van de gevonden bugs
Bugs zijn in veel opzichten vergelijkbaar met een user story. Aangezien de huidige functionaliteit niet goed is kunnen we een bug ook beschouwen als een story om de juiste functionaliteit te implementeren.

### Story-point achtergronden
Om story-points te bepalen, gebruiken we een combinatie van risico, complexiteit en inspanning en komen met een getal.

Softwarekarakteristiek-kostprijsberekening (story-pointing) is vergelijkbaar met de kosten bepaling van een functie. Onbekende code kan een risico op bugs betekenen, zeer complexe algoritmen zijn ingewikkeld en als er te veel items aangepast moeten worden is dat een grote inspanning

|              | Story / onderdeel | Bug |
|---|---|---|
| **Risico**       | Kwetsbare code, onbetrouwbare afhankelijkheden, of nieuwe bibliotheken die worden gebruikt, enz. | Kan voortkomen uit code waar niemand bekend mee is. Kan voortvloeien uit slecht geschreven bestaande code, enz. In het algemeen is er meer risico op een bug als de code eerder voor een andere context was bedoeld.
| **Complexiteit** | Een bron van complexiteit kunnen algoritmen of complexe datastructuren zijn. Het synchroniseren van meerdere systeemkoppelingen is eveneens een bron voor bugs | Complexe bugs ontstaan als ​complexe code gewijzigd moet worden of als er te veel koppelingen geraakt worden. Er zijn veel IT structuren waarin het wijzigen van code een complexe zaak is.
| **Inspanning**   | Afhankelijk van het aantal stappen dat nodig is. Het aantal modules en welke bedrijfsprocessen dat wordt geraakt. Er kunnen extra controles, beoordelingen en nalevingsvereisten zijn. | Vergelijkbaar met een user story.


Bron [itpedia.nl: Omgaan met bugs in SCRUM](https://www.itpedia.nl/2018/12/24/omgaan-met-bugs-in-scrum/)