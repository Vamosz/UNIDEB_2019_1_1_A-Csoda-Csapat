# Recept projekt

Rendszerterv
---
- A rendszer célja
- Projekt terv
    - Projektszerepkörök, felelősségek
    - Projektmunkások és felelősségeik
        A weboldal elkészítésében a Debreceni Egyetem Informatika kar  négy programtervező informatikus hallgatója vesz részt.  
        A résztvevő hallgatók:
        - Kuczik Anna
        - Vámosi Patrik
        - Tar Zoltán
        - Kertész Patrik
    - Ütemterv
        Projektünk elkészítésének kezdete 2019. október 7-e, és elkészítésének határideje 2019. december 8-a. Ezen két hónap alatt legelőször kidolgozásra kerül a munka elosztása, a felelősségek meghatározása, a dokumentáció elkészítése. Ezután minden projekten dolgozó személy elkezdheti a munkát, a projektmunka befejezéséig rendszeresen megbeszéléseket tartunk a jelenlegi feladatok állásáról, valamint folyamatosan kommunikálunk egymással a SLACK céges kommunikációs platform segítségével.  
    - Mérföldkövek
        Projekt elkészítésének kezdetétől november 4-éig feladatunk a dokumentáció elkészítése és az első prototípus weboldal létrehozása, amelynek tartalmaznia kell egy látványtervet a bejelentkezési és regisztrációs oldalról, melyen minden a későbbiekben funkciókkal ellátott rész megtalálható, funkció mentesen. 
        November 4-től december 2-ig a projektünk implementálása, és a dokumentáció végső simításait végezzük majd el. December 2-ig a projektünk eléri végső állapotát.
        December 2-től december 8-ig a weboldalunk tesztelését végezzünk majd el és az esetleges felmerülő hibák javításán dolgozunk majd.  
        December 9-én reggel 10 órakor történik a projektünk bemutatása.
- Üzleti folyamatok modellje
  - Üzleti szereplők
  - Üzleti folyamatok
  - Üzleti entitások
- Követelmények
  - Funkcionális követelmények
  - Nemfunkcionális követelmények
  - Törvényi előírások, szabványok 
- Funkcionális terv
  - Rendszerszereplők
  - Rendszerhasználati esetek és lefutásaik
  - Határosztályok
  - Menü-hierarchiák
  - Képernyőtervek
- Fizikai környezet
    A platformfüggetlen megjelenés egy mai modern weboldal esetében nem extra funkció, hanem már-már követelmény, mi is eleget kívánunk ennek tenné és minden operációs rendszer alatt, minden böngészőből  ugyanolyan kinézetet biztosítani weboldalunknak. 
    A felhasználók számának növekedésével, növekedni fog azok száma is akik az asztali számítógéptől vagy laptoptól eltérően okostelefonról vagy tabletről keresik majd fel weboldalunkat. Alkalmazkodnunk kell ezekhez az eszközökhöz is, és olyan honlapot készíteni, amely ugyanolyan minőségben jelenik meg más-más eszközökön is.
    A projektet különválasztva a frontendet a backend től írjuk meg.
    A frontend, egy mai modern platformon, angulárban készül majd el,
    ami átláthatóbb kódot, gyorsabb és hatékonyabb alkalmazás készítését teszi lehetővé.
    Az angular typescript nyelvet használ ami leginkább javascript.
    A megjelenítést angular-material-val, bootstrap-vel és scss-el oldjuk meg.
            A backendet egy keretrendszeren keresztül fogjuk megirni, ez nagy
            valószínűséggel a Slim lesz.A Slim egy modern keretrendszer, nem       
    tartozik a nagy fiúk közé, de kisebb projektekhez tökéletes.
    A Slimben objektum orientáltan fogunk PHP-ban programozni amivel
        a program háttér folyamatait alkotjuk meg.
        Az adatokat MySQL ben tároljuk, titkosítva a jelszót.
    A projekt verzió kezelője a github lesz, amin a fejlesztők és a
            tulajdonosok is végig követhetik a munkafolyamatokat.

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
