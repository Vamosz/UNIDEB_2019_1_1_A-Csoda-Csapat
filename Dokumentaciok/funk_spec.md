# Recept oldal

Funkcionális specifikáció leirása
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


2. Jelenlegi helyzet
    A projekt tervét elkezdtük kidolgozni, hogy a határidőkre megfelelően
    be tudjuk fejezni a dokumentációkat. A feladatkörök nagyvonalú
    kiosztása, egy megbeszélés keretein belül megtörtént.
    A feladatok kiosztását a `TRELLO` nevű alkalmazásban vezetjük, a
    verzió követésért a `GITHUB` a felelős, ide töltjük fel a szoftver
    _step-by-step_ változatait. Ennek köszönhetően bárhol és bármelyik
    csapattag tudja módosítani a szoftvert.
    Ahogy azt már fentebb említettem a projektben külön kezeljük a
    frontendet a backendtől amit `ANGULAR`-ban irunk meg.
    A backend a http kérésekkel kommunikál a frontenddel és objktum
    orientáltan `KERETRENDSZERT IRD IDE` keretrendszerben írunk meg.
    A program egy fő oldalból áll aminek a tartalmát cserélgetjük.

3. Vágyálom rendszer
    Kiindulva abból, hogy a főzés magában is egy hosszadalmas munka,
    olyan weboldalt álmodtunk meg amiben nem kerül sok időbe egy recept
    elérése.
    Tudva azt, hogy nem feltétlen informatikusok fogják használni a
    programot, egy könnyedén használható alkalmazást szeretnénk
    megteremteni.
    A felhasználók azonosítására `MySQL` adatázist fogunk használni. Egy
    rövid regisztráció után a felhasználót username-el, password-el és
    DisplayName-el felvisszük az adatbázisba a password-öt titkosítjuk
    hogy ne lehessen _'könnyedén'_ feltörni.
    Reményeink szerint a felhasználók láthatják egymást egymást a
    rendszerben, keresgélhetnek egymás *PUBLIKUS* receptjei között
    menthetik a saját tárolójukba.




4. Jelenlegi üzelti folyamatok
    Jelenleg nem sok receptoldalt van a interneten, így a háziasszonyok
    egyik nagy álmát valósítjuk meg ezzel az alkalmazással.
    Mivel mi ezt a komolyan csináljuk elég nagy támogatást szeretnénk
    hozzá adni, amivel a felhasználóknak szeretnénk egy amahabiztos
    hátteret adni. Ha valami gondba ütköznek vagy valami kérdésük van egy
    beépitett chaten keresztül eltudják érni a `support`-ot akik
    mindenben segitenek nekik.



5. Igényelt üzleti feladatok 
    A program bárki számára elérhet, ehhez nincs máshoz szükség csak egy
    internetre kapcsolódni tudó alkalmazáshoz, internetre és megfelelő
    verziójú böngészőre.
    A program fő oldalán egy login oldal szerepel, ahol egy felhasználó
    név és jelszó megadása után könnyedén beérkezhetünk a receptek oldalra.
    Amennyiben nem rendelkezik account-tal a felhasználó, egy gomb
    segitségével a program átnavigálja őt a regisztráció oldalra, majd
    egy rövid regisztráció után vissza is dobja a bejelentkezéshez.
    A bejelentkezés után a receptek között bogarászhatunk vagy átmehetünk a recept feltöltés fülre vagy a saját receptjeim fülre.
