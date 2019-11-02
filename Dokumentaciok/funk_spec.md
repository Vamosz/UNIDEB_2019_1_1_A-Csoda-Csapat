# Recept oldal

Funkcionális specifikáció leirása
---
1. Vezetői összefoglaló (bevezető) <br/>
A Debreceni szakács képző intézet áltált megrendelt alkalmazást, <br/>
melyet webes felületen szeretnénk megvalósítani, előtérbe helyezve <br/>
az egyszerűséget. Elképzeléseink szerint mind MacOS-en mind linuxon <br/>
ugyan úgy nézne ki és működne a program mint windowson. <br/>
Google chrome-on, firefox-on és a explorer-en is ugyanazt a <br/>
támogatást kapná, így bárki nyugodtan tudja használni, függetlenül <br/>
a böngészőjétől. <br/>
A program front end része angulárban íródna meg, ez egy nagy <br/>
könnyebbséget tud adni a fejlesztőnek, áttekinthetőbb a kód, a weboldal <br/> 
modernebb, több és jobb támogatást használhat. A backend <br/>
*TODO KERETRENDSZER* keretrendszerben lenne írva, objektum orientált <br/>
szemléletben, így elkülönitve a metódusokat, áttekinthető kódot kapunk. <br/>
Ennek köszönhetően könnyen lehet módositani a programot arra amit a <br/>
felhasználó megkiván.<br/>

2. Jelenlegi helyzet<br/>
A projekt tervét elkezdtük kidolgozni, hogy a határidőkre megfelelően be<br/>
tudjuk fejezni a dokumentációkat. A feladatkörök nagyvonalú kiosztása, <br/>
egy megbeszélés keretein belül megtörtént. <br/>
A feladatok kiosztását a `TRELLO` nevű alkalmazásban vezetjük, a verzió <br/>
követésért a `GITHUB` a felelős, ide töltjük fel a szoftver _step-by-step_ <br/>
változatait. Ennek köszönhetően bárhol és bármelyik csapattag tudja <br/>
módosítani a szoftvert.<br/>
Ahogy azt már fentebb említettem a projektben külön kezeljük a frontendet<br/>
a backendtől amit `ANGULAR`-ban irunk meg. <br/>
A backend a http kérésekkel kommunikál a frontenddel és objktum<br/>
orientáltan `KERETRENDSZERT IRD IDE` keretrendszerben írunk meg.<br/>
A program egy fő oldalból áll aminek a tartalmát cserélgetjük.<br/>

3. Vágyálom rendszer <br/>
Kiindulva abból, hogy a főzés magában is egy hosszadalmas munka, olyan <br/>
weboldalt álmodtunk meg amiben nem kerül sok időbe egy recept elérése. <br/>
Tudva azt, hogy nem feltétlen informatikusok fogják használni a programot, <br/>
egy könnyedén használható alkalmazást szeretnénk megteremteni. <br/>
A felhasználók azonosítására `MySQL` adatázist fogunk használni. <br/>
Egy rövid regisztráció után a felhasználót username-el, password-el és <br/>
DisplayName-el felvisszük az adatbázisba a password-öt titkosítjuk hogy <br/>
ne lehessen _'könnyedén'_ feltörni. Reményeink szerint a felhasználók <br/>
láthatják egymást egymást a rendszerben, keresgélhetnek egymás *PUBLIKUS* <br/>
receptjei között menthetik a saját tárolójukba.<br/>

4. Jelenlegi üzelti folyamatok<br/>
Jelenleg nem sok receptoldalt van a interneten, így a háziasszonyok <br/>
egyik nagy álmát valósítjuk meg ezzel az alkalmazással. Mivel mi ezt a <br/>
komolyan csináljuk elég nagy támogatást szeretnénk hozzá adni, amivel a <br/>
felhasználóknak szeretnénk egy amahabiztos hátteret adni. Ha valami <br/>
gondba ütköznek vagy valami kérdésük van egy beépitett chaten keresztül <br/>
eltudják érni a `support`-ot akik mindenben segitenek nekik. <br/>

5. Igényelt üzleti feladatok <br/>
A program bárki számára elérhet, ehhez nincs máshoz szükség csak egy <br/>
internetre kapcsolódni tudó alkalmazáshoz, internetre és megfelelő <br/>
verziójú böngészőre. A program fő oldalán egy login oldal szerepel, ahol<br/>
egy felhasználó név és jelszó megadása után könnyedén beérkezhetünk a <br/>
receptek oldalra. Amennyiben nem rendelkezik account-tal a felhasználó, <br/>
egy gomb segitségével a program átnavigálja őt a regisztráció oldalra, <br/>
majd egy rövid regisztráció után vissza is dobja a bejelentkezéshez. <br/>
A bejelentkezés után a receptek között bogarászhatunk vagy átmehetünk a<br/>
recept feltöltés fülre vagy a saját receptjeim fülre.<br/>
