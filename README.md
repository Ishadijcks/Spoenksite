# Inleiding
Gegroet XTC-lid, het is aan jou de taak om weer een kwaliteitswebsite in elkaar te beunen.
Dit is natuurlijk een erg zware taak, en het is mij ook nog nooit gelukt ;)

In deze repo vind je een template die je kan gebruiken om lekker snel van start te gaan.
Het ontwerp lijkt erg op de sites van de laatste jaren, alleen wat lelijker :).
Alle CSS bestanden staan boordevol commentaar zodat je gemakkelijk het element kan vinden dat je wilt aanpassen.

**Dit template is natuurlijk maar een suggestie. Wanneer je denkt dat je iets coolers kan maken, doe het!**

# Hoe download ik de site zodat ik het lokaal aan kan passen?
Rechtsbovenaan deze pagina zie je een mooie knop met 'Clone or download', klik hier op en download als zip.
Als je dit op je eigen laptop uitpakt en index.html opent met je favoriete browser, kan je de site in actie zien.
Ik raad Webstorm aan als text editor, maar kladblok werkt ook gewoon :)

# Dingen die je sowieso moet aanpassen
- Achtergrond plaatje (Als je het parallax effect wilt, moet je of een hoog plaatje nemen (3000px), of een plaatje dat verticaal kan repeaten. Dit ziet er het mooist uit.
- Zet de achtergrondkleur op iets dat op het plaatje lijkt voor het geval er toch iets mis gaat ;)
- Favicon
- Datum in de header
- Logo
- Informatie (met plaatjes)
- Datum in de titel
- 'Wat is spoenk'-filmpje updaten
- Themapresentatiefilmpje
- Programma
- Contact (wanneer spoenk niet op Wippolder is, of de wippolder is verplaatst)
- Calendar afstellen op jullie programma (zie beneden)
- Sponsoren aanpassen (zie beneden)

# Sponsoren
Sponsoren worden automatisch gegenereerd bovenin main.js. Je ziet daar een array met sponsoren.
Je kan simpelweg een sponsor toevoegen door dit stukje in de array te zetten:
```
{
    "name": "<Sponsornaam>",
    "url": "<sponsorsite>",
    "img": "img/sponsors/<naamvanhetplaatje>.jpg"
}
```
De site maakt dan automatisch een mooi lijstje aan van sponsoren.

# Calendar
Ook de calendar wordt automagisch gegenereerd in main.js. Om een event toe te voegen plaats je zo'n stukje code:
```
{
    "name": "Tent opzetten",
    "start": "19:00",
    "width": 0.2,
    "img": "img/calendar/castle.png"
}
```
Spreekt allemaal vrij voor zichzelf denk ik zo. **Belangrijk** is dat de width van alle elementen samen op 1 uitkomt.
Bovenin main.js staat `const CALENDAR_MARGIN = 3;` Dit geeft aan dat de margin tussen alle calendar items 3% is. **Dit wordt automatisch gedaan dus je hoeft niet zelf te gaan rekenen**


# Wanneer je een nieuwe section toevoegt.
- Toevoegen in de header met href zodat je er naartoe kan scrollen

# Het online zetten van de Spoenksite

Om de spoenksite bereikbaar te maken moet je via ftp bestanden sturen naar de punchserver. De makkelijkste manier om dit te doen is met het programma [FileZilla](https://filezilla-project.org/download.php?platform=win64)

Open het programma en gebruik de volgende inloggegevens:
```
host: sftp://spoenk.punch.tudelft.nl
username: spoenksite
password: <kijk in het agg of vraag de cia>
port: 22
```
Na een tijdje zie je in de rechtertab 'remote site' de folderstructuur van de punchserver. Daaronder zie je de bestanden.
Rechterklik op de www map en maak een nieuwe map genaamd <jouw_jaar> (bijvoorbeeld 2036).
LET OP: vanaf de volgende stap zijn je bestanden voor iedereen te zien op de punchsite. 
Sleep alle bestanden van de website naar deze map om ze up te loaden. 

Je kan nu je website zien op spoenk.punch.tudelft.nl/<jouw_jaar>. Maar spoenk.punch.tudelft.nl zal nog redirecten naar <jouw_jaar-1>. Om dit te fixen moet je de `index.html` aanpassen. Die kan je downloaden, alle referenties naar het oude jaar veranderen in de juiste, en daarna weer uploaden.

Als je nu naar spoenk.punch.tudelft.nl gaat, zou je jouw site online moeten zien!

Mocht je verder nog vragen hebben, stuur een mail naar de CIA.

# Technische details
##### Parallax effect
Hiervoor gebruik ik de skrollr library. Deze is gedisabled op mobiel omdat het anders toch wel veel rekenen wordt voor zo'n klein dingetje.

##### d-none en d-sm-block
Dit is een [bootstrap 4](https://getbootstrap.com/docs/4.0/utilities/display/) truc om elementen te laten verdwijnen wanneer het scherm te klein wordt.
Dit gebeurt voor de header en empty calendar entries. Mensen gebruiken zo'n header toch niet op mobiel.
# Veelgestelde vragen

##### Niet echt een mooi kleurenschema voor een template, nietwaar?
Die beslissing is ~~volledig uit luiheid~~ zorgvuldig overwogen. Nu word je aangemoedigd om het aan te passen ;)
##### Wat een simpele site, ik kan dat veel mooier?
Het is maar een template, voel je vrij om zelf coole shit toe te voegen.

##### Ik heb zo iets cools gemaakt, dat ik dat eigenlijk wel toe wil voegen aan het template, mag dat?
Maar natuurlijk, alles staat op GitHub, dus je kan gewoon [hier](https://github.com/Ishadijcks/Spoenksite) een pull request aanmaken.

##### Ik heb nog meer vragen?
Voor verdere vragen kan je een mailtje sturen naar cia@punch.tudelft.nl
