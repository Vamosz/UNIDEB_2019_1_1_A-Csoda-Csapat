# Recept oldal

Tesztelési sablon
---
Megnevezés: Regisztráció tesztelése </br>
 </br>
Vizsgáló: Vámosi Patrik</br>
 </br>
Bemenő adatok: </br>
Email: vamosipatrik@gmail.com </br>
                Password: Patrik  </br>
                Username: Patrik Vámosi  </br>
                Birthday: 5/9/1998  </br>

 </br>
Elvárt kimenő adatok: User was created. </br>
 </br>
Eredmény:  User was created.</br>
 </br>
Megjegyzés:  Sikeres teszt </br>

---

Megnevezés: Regisztráció tesztelése </br>
 </br>
Vizsgáló: Vámosi Patrik</br>
 </br>
Bemenő adatok: </br>
Email: vamosipatrik@gmail.com </br>
                Password: Patrik  </br>
                Username: Patrik Vámosi  </br>
                Birthday: bablaba  </br>

 </br>
Elvárt kimenő adatok: Unable to create user. </br>
 </br>
Eredmény:  Unable to create user.</br>
 </br>
Megjegyzés:  Sikeres teszt </br>

---

Megnevezés: Regisztráció tesztelése </br>
 </br>
Vizsgáló: Vámosi Patrik</br>
 </br>
Bemenő adatok:</br>
Email: a </br>
                Password: Patrik  </br>
                Username: Patrik Vámosi  </br>
                Birthday: 05/05/2000  </br>

 </br>
Elvárt kimenő adatok: Unable to create user. </br>
 </br>
Eredmény:  Unable to create user.</br>
 </br>
Megjegyzés:  Sikeres teszt </br>


---

Megnevezés: Regisztráció tesztelése </br>
 </br>
Vizsgáló: Vámosi Patrik</br>
 </br>
Bemenő adatok:</br>
Email: a </br>
                Password: a  </br>
                Username: a  </br>
                Birthday: a  </br>

 </br>
Elvárt kimenő adatok: Unable to create user. </br>
 </br>
Eredmény:  Unable to create user.</br>
 </br>
Megjegyzés:  Sikeres teszt </br>

---

Megnevezés: Új recept feltöltés tesztelése </br>
 </br>
Vizsgáló: Anna</br>
 </br>
Bemenő adatok: </br>
Delicious recipe title: Anna </br>
                A short summary of the food: AnnaAnnaAnnaAnnaAnnaAnna AnnaAnnaAnna  </br>
                Detailed description of the recipe: AnnaAnnaAnnaAnnaAnnaAnnaAnnaAnnaAnnaAnnaAnnaAnnaAnnaAnnaAnnaAnnaAnnaAnnaAnnaAnnaAnnaAnnaAnnaAnnaAnnaAnnaAnnaAnnaAnnaAnnaAnnaAnnaAnnaAnnaAnnaAnnaAnnaAnnaAnnaAnnaAnnaAnnaAnnaAnnaAnnaAnnaAnnaAnnaAnnaAnnaAnnaAnnaAnna</br>
                Preparation time: 23:59  </br>
                Ingredients: Anna 1 kg </br>
                Ingredients: AnnaAnna 2 kg </br>
                Ingredients: AnnaAnna 3 kg </br>
                Tags: Chicken </br>

 </br>
Elvárt kimenő adatok: Recipe was created. </br>
 </br>
Eredmény:   Recipe was created.</br>
 </br>
Megjegyzés:  Sikeres teszt </br>

---

Megnevezés: Feltöltött recept megtekintés tesztelése </br>
 </br>
Vizsgáló: Anna</br>
 </br>
Bemenő adatok: </br>
 Már feltöltött recept.</br>
 </br>
Elvárt kimenő adatok: Feltöltött adatok pontos megjelenése. </br>
 </br>
Eredmény: A receptben megadott hozzávalók többször megjelennek az elvártnál..</br>
 </br>
Megjegyzés:  Sikertelen teszt </br>

---

Megnevezés: Recept feltöltés tesztelése </br>
 </br>
Vizsgáló: Anna</br>
 </br>
Bemenő adatok: </br>
Delicious recipe title: Rántott hús
 A short summary of the food: Fincsi bundában kisütött husi.  </br>
                Detailed description of the recipe: A csirkemellet felszeleteljük.
A szeletek mindkét oldalát sózzuk, borsozzuk.
A szeleteket először lisztbe, majd tojásba és végül zsemlemorzsába forgatjuk.
Forró olajban kisütjük.</br>
                Preparation time: 00:30  </br>
                Ingredients: Chicken breast 1 </br>
                Ingredients: Egg 3 </br>
                Ingredients: Flour 30 dkg </br>
                Ingredients: Bread crumbs 30 dkg</br>
                Tags: Chicken, Egg</br>
 </br>
Elvárt kimenő adatok: Recipe was created. </br>
 </br>
Eredmény: Recipe was created.</br>
 </br>
Megjegyzés:  Sikeres teszt. A recept feltöltődik, viszont az egység nélkül megadott hozzávalók feltöltése nélkül.  </br>
---------------------------------------------
Megnevezés: Regisztráció tesztelése

Vizsgáló: Kertész Patrik</br>

Bemenő adatok:</br>
Email: kertpat2@gmail.com</br>
Password: asdasdasd</br>
Username: csillagpatrik</br>
Birthday: 23/4/1998</br>


Elvárt kimenő adatok: User was created.</br>

Eredmény: User was created.</br>

Megjegyzés: Sikeres teszt</br>

-------------------------------------
Megnevezés: Új recept feltöltés tesztelése </br>
 </br>
Vizsgáló: Kertész Patrik</br>
 </br>
Bemenő adatok: </br>
Delicious recipe title: Baba </br>
                A short summary of the food: lalalala  </br>
                Detailed description of the recipe: lalalalalalalala</br>
                Preparation time: 02:20  </br>
                Ingredients: cica 1 kg </br>
                Ingredients: kutya 2 kg </br>
                Ingredients: matka 3 kg </br>
                Tags: helooooo </br>

 </br>
Elvárt kimenő adatok: Recipe was created. </br>
 </br>
Eredmény:   Recipe was created.</br>
 </br>
Megjegyzés:  Sikeres teszt </br>

------------------------------------
Megnevezés: Recept törlés tesztelése </br>
 </br>
Vizsgáló: Tar Zoltán</br>
 </br>
Bemenő adatok: Már meglévő recept (title: Rántott hús). </br>

Elvárt kimenő adatok: Rántott hús was deleted. </br>

Eredmény: Rántott hús was deleted. </br>

Megjegyzés:  Sikeres teszt </br>
