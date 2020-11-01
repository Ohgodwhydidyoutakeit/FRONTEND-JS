/*
Wyszukaj na stronie wszystkie elementy o klasie list i zapisz wynik do odpowiedniej zmiennej
*/
const list = document.getElementsByClassName("list").text;

/*
Stwórz funkcję która będzie zwracać elementy(tagi) na podstawie podstawie przesłanego parametru.
 Wynik działania funkcji zapisz do zmiennej i wyświetl w konsoli.
 */
const fun = (tag) =>{
    let list= document.getElementsByTagName(tag)
    console.log(list);

}

/*
Znajdź na stronie element listy od id="list" i zapisz do odpowiedniej zmiennej. 
*/

let id = document.getElementById("list")


/*

Napisz funkcje która będzie wypisywać w konsoli elementy przekazane w parametrze. Do funkcji przekaż następujące elementy:

1. wszystkie elementy li na stronie
2. wszystkie elementy ul na stronie
3. wszystkie spany na stronie
4. wszystkie spany znajdujące się w elemencie div z klasą list
5. wszystkie spany znajdujące się w elemencie div który posiada id="spans"

*/

const elements = () => {
let li  = document.getElementsByTagName('li')
let ul  = document.getElementsByTagName('ul')
let spanWhole = document.getElementsByTagName('span')
let spanList = document.querySelectorAll('.list>span')
let spanSpans = document.querySelectorAll('#spans>span')
console.log("LI:", li)
console.log("Ul:", ul)
console.log("Span:", spanWhole)
console.log("Span from list:", spanList)
console.log("Span from spans:", spanSpans)



}
elements();