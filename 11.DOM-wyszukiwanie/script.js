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

const showdown = (lis, uls, spans, sid, sids) => {
    const allLis = document.querySelectorAll(lis);
    const allUls = document.querySelectorAll(uls);
    const allSpans = document.querySelectorAll(spans);
    
    const spanInDiv = document.querySelectorAll(sid);
    const spanInDivWID = document.querySelectorAll(sids);
    
    allLis.forEach(al => {console.log(al)});
    allUls.forEach(au => {console.log(au)});
    allSpans.forEach(as => {console.log(as)});
    
    spanInDiv.forEach(sid => {console.log(sid)});
    spanInDivWID.forEach(sidwid => {console.log(sidwid)});
    };
    showdown("li", "ul", "span", "div.list span", "div#spans span");