# Recept oldal

Funkcionális specifikáció leírása
---

1. Vezetői összefoglaló (bevezető) </br>
   A Debreceni szakács képző intézet áltált megrendelt alkalmazást, <br/>
   melyet webes felületen szeretnénk megvalósítani,előtérbe helyezve az </br>
   egyszerűséget.</br>
   Minden felhasználói elvárást kielégítő recept oldal létrehozását </br>
   tervezzük fejlesztő csapatunkkal. Eddigi oldalak megoldásait és saját </br>
   ötleteinket használva egy minden eddiginél másabb, jobb oldalt szeretnénk</br>
   megvalósítani. <br/>
   Célunk egy olyan weboldal létrehozása, amelyet minden korosztály szívesen </br>
   használ. A fiatalabbak könnyedén találhatnak számukra új, de másoknak </br>
   jólbevált recepteket, és segítséget kérhetnek ha elakadnának. Az idősebb </br>
   korosztály megoszthatja másokkal saját, az évek alatt tökéletesített, </br>
   receptjeit, és új praktikákat tanulhat, megismerkedhet új receptekkel.</br>

   Elképzeléseink szerint mind MacOS-en mind linuxon ugyan úgy nézne ki és</br>
   működne a program mint windowson.</br>
   Google chrome-on, firefox-on és a explorer-en is ugyanazt a támogatást </br>
   kapná, így bárki nyugodtan tudja használni, függetlenül a böngészőjétől.</br>
   A program front end része angulárban íródna meg, ez egy nagy könnyebbséget</br>
   tud adni a fejlesztőnek, áttekinthetőbb a kód, a weboldal modernebb, több </br>
   és jobb támogatást használhat.</br>
   A backend *TODO KERETRENDSZER* keretrendszerben lenne írva, objektum</br>
   orientált szemléletben, így elkülönitve a metódusokat, áttekinthető</br>
   kódot kapunk. Ennek köszönhetően könnyen lehet módositani a programot</br>
   arra amit a felhasználó megkiván.</br>
    
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
   orientáltan `SLIM` keretrendszerben írunk meg.<br/>
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
   Oldalunk megalkotásával minden korosztály számára a könnyen használhatóság<br/>
   a célunk. Ehhez hozzásegít a letisztult dizájn és az egyértelmű címszavak, </br>
   valamint a chat funkció, mellyel bármikor kérhet bárki segítséget. </br>
   </br>Elképzelésünk szerint a weboldalra érkező vendégeket egy olyan felület<br/>
   fogadja majd amelyen rögtön regisztrálhatnak, vagy a már meglévő fiókjukba </br>
   beléphetnek.<br/>
   Bejelentkezés után válnak majd elérhetővé az oldal további funkciói a  </br>
   felhasználó számára. <br/>
   A regisztráció után a felhasználó minden elérhető funkciót használhat majd.<br/>
   Ezen fő funkciók a következők lesznek: recept keresés, saját fiók kezelése, </br>
   chatelés. <br/>

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
    ![Recept papírra](Folyamat_abrak/recept_papirra.jpg)<br/>
    * Begépelni egy dokumentumba és elmenteni a saját <br/>
      számítógépünkön
    * Begépelni egy dokumentumba és felhőbe elmenteni
  * Új recept keresése:
    * Receptkönyv használata
    * Receptújság használata
    * Interneten történő böngészés
    * Tv-s főzőműsor nézése

	
	A bejelentkezés folyamata a következő:<br/>
	A user rákattint a bejelentkezés gombra ezzel elirányítva a bejelentkezési<br/>
	felületre. Ezen a felületen lehetősége van az e-mail címét vagy a felhasználó<br/>
	nevét és a jelszavát megadni. Ha mindezt az előzetesen elmentett SQL adatbázisnak <br/>
	megfelelően írja be akkor bejelentkezhet. Ha nem akkor feltűnik a lehetőség, <br/>
	hogy egy jelszó emlékeztető e-mailt küldjön a user magának. Ebben az emlékeztető <br/>
	emailben vagy a jelszavát változtathatja meg vagy megkapja a jelszavát leírva. <br/>
	Ha ezen is túl van nagy valószínűséggel tudni fogja a jelszavát és bejelentkezhet.<br/>
	
	
	
	![Bejelentkezes](https://github.com/Vamosz/UNIDEB_2019_1_1_A-Csoda-Csapat/blob/master/Dokumentaciok/Folyamat_abrak/bejelentkezes.PNG)<br/>

	
	A regisztráció folyamata a következő: <br/>
	Amikor a user rálép az oldalra fel lesz kínálva neki a lehetőség, hogy <br/>
	bejelentkezzen vagy regisztráljon. A regisztrációra kattintva megnyílik<br/>
	egy regisztrációs felület. Ezen a felületen megadhatja felhasználónevét,<br/>
	e-mail címét, jelszavát és jelszó emlékeztetőjét. Egyik adat se egyezhet<br/>
	meg az SQL adatbázisban szereplő bármelyik névvel vagy e-mail címmel. A <br/>
	felhasználónév nem kezdődhet alsóvonással, számmal és nem tartalmazhat <br/>
	ékezetes betűt. A jelszónak tartalmaznia kell nagybetűt, kisbetűt, számot <br/>
	de nem számsort és nem lehet a felhasználónév. Illetve legalább nyolc karakter<br/>
	hosszúnak kell lennie. A bejelentkezés gombra kattintva leellenőrizzük az <br/>
	adatokat, hogy megfelelőek-e és ha minden rendben van velük akkor a regisztráció <br/>
	megtörtént és az adatokat felvesszük az SQL adatbázisba.<br/>
	<br/>
	![Regisztracio](https://github.com/Vamosz/UNIDEB_2019_1_1_A-Csoda-Csapat/blob/master/Dokumentaciok/Folyamat_abrak/reg_log.PNG)<br/>

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

