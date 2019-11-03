# Recept oldal

Funkcionális specifikáció leírása
---

1. Vezetői összefoglaló (bevezető)
	A Debreceni szakács képző intézet áltált megrendelt alkalmazást,
    melyet webes felületen szeretnénk megvalósítani, előtérbe helyezve az
    egyszerűséget. Elképzeléseink szerint mind MacOS-en mind linuxon ugyan
    úgy nézne ki és működne a program mint windowson.
    Google chrome-on, firefox-on és a explorer-en is ugyanazt a
    támogatást kapná, így bárki nyugodtan tudja használni, függetlenül a
    böngészőjétől.
    A program front end része angulárban íródna meg, ez egy nagy
    könnyebbséget tud adni a fejlesztőnek, áttekinthetőbb a kód, a
    weboldal modernebb, több és jobb támogatást használhat.
    A backend *TODO KERETRENDSZER* keretrendszerben lenne írva, objektum
    orientált szemléletben, így elkülönitve a metódusokat, áttekinthető
    kódot kapunk. Ennek köszönhetően könnyen lehet módositani a programot
    arra amit a felhasználó megkiván.
    Oldalunk megalkotásával minden korosztály számára a könnyen használhatóság
    a célunk. Ehhez hozzásegít a letisztult dizájn és az egyértelmű címszavak,
    valamint a chat funkció, mellyel bármikor kérhet bárki segítséget.
 
    Elképzelésünk szerint a weboldalra érkező vendégeket egy olyan felület
    fogadja majd amelyen rögtön regisztrálhatnak, vagy a már meglévő fiókjukba
    beléphetnek.
    Bejelentkezés után válnak majd elérhetővé az oldal további funkciói a felhasználó számára. 
    A regisztráció után a felhasználó minden elérhető funkciót használhat majd.
    Ezen fő funkciók a következők lesznek: recept keresés, saját fiók kezelése, chatelés. 
    
2. Jelenlegi helyzet<br/>
A projekttervét elkezdtük kidolgozni, hogy a határidőkre megfelelően be<br/>
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
A felhasználók azonosítására `MySQL` adatbázist fogunk használni. <br/>
Egy rövid regisztráció után a felhasználót username-mel, password-mel és <br/>
DisplayName-mel felvisszük az adatbázisba a password-öt titkosítjuk hogy <br/>
ne lehessen _'könnyedén'_ feltörni. Reményeink szerint a felhasználók <br/>
láthatják egymást egymást a rendszerben, keresgélhetnek egymás *PUBLIKUS* <br/>
receptjei között és a nekik szimpatikusakat elmenthetik a saját tárolójukba.<br/>

4. Jelenlegi üzleti folyamatok<br/>
Jelenleg nem sok receptoldalt van a interneten, így a háziasszonyok <br/>
egyik nagy álmát valósítjuk meg ezzel az alkalmazással. Mivel mi ezt a <br/>
komolyan csináljuk elég nagy támogatást szeretnénk hozzá adni, amivel a <br/>
felhasználóknak szeretnénk egy amahabiztos hátteret adni. Ha valami <br/>
gondba ütköznek vagy valami kérdésük van egy beépített chaten keresztül <br/>
tudják elérni a `support`-ot akik mindenben segítenek nekik. <br/>

  Eddigi megadott lehetőségek: <br/>
  * Recept elmentése:
    * Leírni papírra és elrakni
    * Begépelni egy dokumentumba és elmenteni a saját <br/>
      számítógépünkön
    * Begépelni egy dokumentumba és felhőbe elmenteni
  * Új recept keresése:
    * Receptkönyv használata
    * Receptújság használata
    * Interneten történő böngészés
    * Tv-s főzőműsor nézése

5. Igényelt üzleti feladatok <br/>
A program bárki számára elérhet, ehhez nincs máshoz szükség csak egy <br/>
internetre kapcsolódni tudó alkalmazáshoz, internetre és megfelelő <br/>
verziójú böngészőre. A program fő oldalán egy login oldal szerepel, ahol<br/>
egy felhasználó név és jelszó megadása után könnyedén érkezhetünk a <br/>
receptek oldalra. Amennyiben nem rendelkezik account-tal a felhasználó, <br/>
egy gomb segitségével a program átnavigálja őt a regisztráció oldalra, <br/>
majd egy rövid regisztráció után vissza is dobja a bejelentkezéshez. <br/>
A bejelentkezés után a receptek között bogarászhatunk vagy átmehetünk a<br/>
recept feltöltés fülre vagy a saját receptjeim fülre.<br/>

  * Főoldal kezdeti állapota 
     * Regisztrációs lehetőség<br/>
       Új felhasználók számára a regisztráció lehetősége ezen ponton <br/>
       a _Tovább a regisztráció!_ gombra kattintva lesz lehetőség.
     * Bejelentkezési lehetőség <br/>
       Már korábban regisztrált felhasználóként ezen a ponton <br/>
       a _Tovább a bejelentkezéshez!_ gombra kattintva lesz lehetősége a <br/>
       felhasználónak belépni a saját fiókjába.
  * Sikeres belépés után 
     * A felhasználó saját receptjeit szerkesztheti
        * Feltöltött recept megtekintése
        * Új recept feltöltése
           * Publikus formában
           * Rejtett formában
        * Már feltöltött recept szerkesztése
        * Már feltöltött recept törlése
     * A felhasználó új recepteket kereshet
        * Megfelelő keresőszót beírva
        * Kategóriák szerint
        * Érzékenység szerint
     * Más felhasználók által feltöltött recepteket értékelhet, <br/>
       kérdéseket tehet fel
        * 1-től 10-ig tartó pontozással
        * Hozzászólással
     * Chatelést kezdeményezhet
        * Más felhasználóval
        * Fejlesztőkkel
     * A felhasználó szerkesztheti profilját
        * Új profilkép feltöltése
        * E-mail cím megváltoztatása
        * Felhasználónév megváltoztatása
        * Jelszó megváltoztatása
