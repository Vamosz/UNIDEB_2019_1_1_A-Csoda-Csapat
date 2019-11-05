# Recept projekt

Rendszerterv
---
- A rendszer célja <br/>
A rendszerünk célja egy minőségi, könnyen használható recept oldal <br/>
létrehozása a mindennapi felhasználás érdekében. Weboldalunkkal a <br/>
mindennapi fáradtságos főzés procedúráját próbáljuk megkönnyíteni az <br/>
oldalunk felhasználói számára. <br/>
<br/>Több száz receptes oldal található az interneten, viszont számunkra egyik <br/>
sem volt a legtökéletesebb. Mindegyikben volt olyan rész, amit hasznosnak <br/>
találtunk, és amit kevésbé. A sok megtekintett oldal alapján szeretnénk<br/>
megalkotni a tökéletes receptes oldalt, amely egyszerűség, praktikusság és <br/>
használhatóság szempontjából megfelelő mindenki számára. <br/>
Oldalunkat mindenképp olyan funkciókkal szeretnénk ellátni, amelyeket <br/>
valóban hasznosak találunk mindenki számára.<br/>
<br/>Fontosnak látjuk, hogy a felhasználóink az általuk jónak ítélt recepteket<br/>
könnyen megoszthassák másokkal, valamint az általuk szimpatikus <br/>
ismeretlen recepteket elmenthessék maguknak így a későbbiekben bármikor <br/>
könnyen elérjék azokat. <br/>
Egyfajta kölcsönösség alakul ki a felhasználók között, az aki megosztja saját, <br/>
jólbevált receptjeit, segít olyanoknak akik esetleg még nem elég jártasak a <br/>
konyhában, vagy egy kis segítségre szorulnak. A recepteket elkészítő <br/>
felhasználók értékelhetik azokat, vagy esetleg ötleteket adhatnak a recept <br/>
még tökéletesebbé alakításához. <br/>
<br/>Egy olyan rendszert szeretnénk megvalósítani, amely a felhasználó <br/>
közösségének segítséget nyújt, mind a főzés szerelmeseinek, mind a <br/>
főzésben kevésbé jártas kezdő szakácsoknak, és a megfelelő segítségek <br/>
a felhasználók egymástól kapják meg.<br/>


- Projekt terv
    - Projektszerepkörök, felelősségek
    - Projektmunkások és felelősségeik <br/>
        A weboldal elkészítésében a Debreceni Egyetem Informatika kar négy <br/>
        programtervező informatikus hallgatója vesz részt.  <br/>
        A résztvevő hallgatók: <br/>
        - Kuczik Anna
        - Vámosi Patrik
        - Tar Zoltán
        - Kertész Patrik
    - Ütemterv<br/>
Projektünk elkészítésének kezdete 2019. október 7-e, és <br/>
        elkészítésének határideje 2019. december 8-a. Ezen két hónap alatt <br/>
        legelőször kidolgozásra kerül a munka elosztása, a felelősségek <br/>
        meghatározása, a dokumentáció elkészítése. Ezután minden projekten <br/>
        dolgozó személy elkezdheti a munkát, a projektmunka befejezéséig <br/>
        rendszeresen megbeszéléseket tartunk a jelenlegi feladatok állásáról,<br/>
        valamint folyamatosan kommunikálunk egymással a SLACK céges <br/>
        kommunikációs platform segítségével.  <br/>
        
    - Mérföldkövek<br/>
Projekt elkészítésének kezdetétől november 4-éig feladatunk a <br/>
dokumentáció elkészítése és az első prototípus weboldal létrehozása, <br/>
amelynek tartalmaznia kell egy látványtervet a bejelentkezési és <br/>
regisztrációs oldalról, melyen minden a későbbiekben funkciókkal <br/>
ellátott rész megtalálható, funkció mentesen. <br/>
        November 4-től december 2-ig a projektünk implementálása, és a <br/>
        dokumentáció végső simításait végezzük majd el. December 2-ig a<br/>
        projektünk eléri végső állapotát.<br/>
        December 2-től december 8-ig a weboldalunk tesztelését végezzünk<br/>
        majd el és az esetleges felmerülő hibák javításán dolgozunk majd.  <br/>
        December 9-én reggel 10 órakor történik a projektünk bemutatása.<br/>
        
- Üzleti folyamatok modellje
  - Üzleti szereplők
  - Üzleti folyamatok
     * Felhasználók üzleti folyamatai:
       * Regisztrálás
       * Bejelentkezés
       * Recept feltöltés
       * Recept törlés
       * Recept keresés
       * Recept mentés
       * Recept értékelés
       * Chatelés
     * Fejlesztők üzleti folyamatai:
       * Folyamatos karbantartás
       * Fejlesztés <br/>
A felhasználó kezdetben a főoldalon vagy a regisztrációt vagy a <br/>
bejelentkezést választhatja. A regisztráció választása esetén a <br/>
_Tovább a regisztrációhoz!_ gombra, a bejelentkezés választása <br/>
esetén a _Tovább a bejelentkezéshez!_ gombra kattintva érheti el a <br/>
megfelelőt.<br/>
A továbbiakban a menüből kiválasztva a megfelelő címszóra kattintva<br/>
juthat el a kereséshez, a saját receptekhez vagy a főoldalhoz.<br/>
A megadott menüpontok alatt érhetőek el a további odatartozó funkciók.<br/>

  - Üzleti entitások
- Követelmények
  - Funkcionális követelmények <br/>
Elsődleges követelmény a regisztráció sikeres végrehajtása. Minden<br/>
újonnan, új e-mail címmel regisztráló felhasználónak sikeresen kell <br/>
tudnia regisztrálni. <br/>
<br/>Regisztrálás után minden alkalommal, bármely különböző eszközről a <br/>
felhasználónak be kell tudnia jelentkezni a fiókjába.<br/>
<br/>Bármely felhasználónak bármennyi recept feltöltését biztosítani kell.<br/>
A recepteket szöveges állományként lehet majd feltölteni. <br/>
<br/>A korábbi bejelentkezések során feltöltött recepteket a weboldalnak <br/>
tárolnia kell, és láthatónak kell lenniük minden felhasználó számára. <br/>
Minden felhasználó csak a saját fiókjába feltöltött recepteket <br/>
szerkesztheti.<br/>
<br/>Minden felhasználónak lehetősége lesz más felhasználók receptjeinek <br/>
megtekintésére. Ezen recepteket értékelheti majd a felhasználó egy<br/>
1-től 10-ig terjedő osztályozáson, vagy hozzászólást írhat majd a <br/>
recepthez, amelyet minden felhasználó számára megtekinthető.<br/>

  - Nemfunkcionális követelmények
  - Törvényi előírások, szabványok 
- Funkcionális terv
  - Rendszerszereplők <br/>
  Weboldalunkat széleskörű használatra készítjük, így nincs <br/>
  meghatározott célközönségünk. Minden korosztály számára ideális <br/>
  oldalt szeretnénk létrehozni.<br/>

  - Rendszerhasználati esetek és lefutásaik<br/>
  Weboldalunkat minden felhasználó egyenlő jogokkal használhatja<br/>
  majd, mindenki egyaránt tölthet fel recepteket, kereshet a receptek <br/>
  között, értékelhet recepteket és  kommunikálhat más felhasználókkal <br/>
  vagy a fejlesztőkkel.<br/>

  - Határosztályok
  - Menü-hierarchiák
  - Képernyőtervek
- Fizikai környezet<br/>
A platformfüggetlen megjelenés egy mai modern weboldal esetében <br/>
nem extra funkció, hanem már-már követelmény, mi is eleget kívánunk <br/>
ennek tenné és minden operációs rendszer alatt, minden böngészőből  <br/>
ugyanolyan kinézetet biztosítani weboldalunknak. <br/>
<br/>A felhasználók számának növekedésével, növekedni fog azok száma <br/>
is akik az asztali számítógéptől vagy laptoptól eltérően okostelefonról<br/>
vagy tabletről keresik majd fel weboldalunkat. Alkalmazkodnunk kell <br/>
ezekhez az eszközökhöz is, és olyan honlapot készíteni, amely <br/>
ugyanolyan minőségben jelenik meg más-más eszközökön is. <br/>
    <br/>A projektet különválasztva a frontendet a backend től írjuk meg.<br/>
    A frontend, egy mai modern platformon, angulárban készül majd el,<br/>
    ami átláthatóbb kódot, gyorsabb és hatékonyabb alkalmazás készítését <br/>
    teszi lehetővé.<br/>
    Az angular typescript nyelvet használ ami leginkább javascript.<br/>
    A megjelenítést angular-material-val, bootstrap-vel és scss-el oldjuk <br/>
    meg.<br/>
            A backendet egy keretrendszeren keresztül fogjuk megirni, ez nagy<br/>
            valószínűséggel a Slim lesz.A Slim egy modern keretrendszer, nem    <br/>   
    tartozik a nagy fiúk közé, de kisebb projektekhez tökéletes.<br/>
    A Slimben objektum orientáltan fogunk PHP-ban programozni amivel<br/>
        a program háttér folyamatait alkotjuk meg.<br/>
        Az adatokat MySQL ben tároljuk, titkosítva a jelszót.<br/>
    A projekt verzió kezelője a github lesz, amin a fejlesztők és a<br/>
            tulajdonosok is végig követhetik a munkafolyamatokat.<br/>

  - Vásárolt softwarekomponensek és külső rendszerek
  - Hardver és hálózati topológia
  - Fizikai alrendszerek
  - Fejlesztő eszközök
  - Keretrendszer (pl. Spring)
- Absztrakt domain modell
  - Domain specifikáció, fogalmak
  - Absztrakt komponensek, ezek kapcsolatai
  
- Architekturális terv
  - Egy architekturális tervezési minta (pl. MVC, 3-rétegű alkalmazás, …)
  - Az alkalmazás rétegei, fő komponensei, ezek kapcsolatai
  - Változások kezelése
  - Rendszer bővíthetősége
  - Biztonsági funkciók
  
- Adatbázis terv
  - Logikai adatmodell
  - Tárolt eljárások
  - Fizikai adatmodellt legeneráló SQL szkript
  
- Implementációs terv
  - Perzisztencia-osztályok
  - Üzleti logika osztályai
  - Kliensoldal osztályai
  
- Tesztterv
 
- Telepítési terv

- Karbantartási terv
A karbantartási tervünk javarészt abból áll, hogy a felhasználók milyen<br/>
hibákat, funkciónális félrelépéseket jelentenek nekünk. Ezen felül havi<br/>
rendszerességgel karbantartást indítunk adatbázisunkon, az önmagát <br/>
törlő userek maradék adatainak törlésével, megsemmisítésével.

