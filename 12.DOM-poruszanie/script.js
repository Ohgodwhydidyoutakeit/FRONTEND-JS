
// Wypisz w konsoli:

// 1. Rodzica elementu id="buz"
// 2. Brata elementu id="baz"
// 3. Dzieci elementu id="foo"
// 4. rodzica elementu id"foo"
// 5. pierwsze dziecko elementu id="foo"
// 6. środkowe dziecko elementu id="foo"

console.log(document.getElementById('buz').parentElement)
console.log(document.getElementById('baz').previousElementSibling)
console.log(document.getElementById('foo').children)
console.log(document.getElementById('foo').parentElement)
console.log(document.getElementById('foo').firstElementChild)
console.log(document.querySelector('#foo div:nth-child(2)'))

// Napisz funkcję która przyjmie jako parametr element id = "ex2".
// Następnie doda nasłuchiwanie eventu click na tym elemencie.
// Jeśli czerwony kwadrat zostanie kliknięty pobierz tekst z wewnętrzego diva tego elementu i wyświetl go w konsoli.
const one = (param) => {
    let el = document.getElementById(param)
    el.addEventListener('click', () => {
        console.log(el.firstElementChild.firstElementChild.textContent)
    })
}
one("ex2")

// Napisz funkcję która doda na każdym buttonie w div id="ex3" ten sam event kliknięcia.
//  Zadaniem eventu będzie odsłanianie lub ukrywanie elementu span obok buttona.
const two = () => {
    let buttons = document.querySelectorAll('#ex3>div>button');
    for (let i of buttons) {
        i.addEventListener('click', () => {
            let el = i.nextElementSibling
            el.style.display === "none" ? el.style.display = 'block' : el.style.display = "none";

        })
    }
}
two();
// Dodaj event na buttony z zadania 3 tak aby po kliknięciu na dowolny z nich ich rodzic zmieniał kolor na dowolny. Całość zapisz w funkcji.
// Losowy kolor:
// var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
const three = () => {
    let buttons = document.querySelectorAll('#ex3>div>button');
    for (let i of buttons) {
        i.addEventListener('click', () => {
            let el = i.parentElement;
            el.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
        })
    }
}
three()
// W div id="ex5" znajdują się trzy prostokąty. Po najechaniu na dowolny z nich elementy na liście powinny
//  zmienić swój background-color na taki jak prostokąt ale według poniższych punktów:

// 1. Tylko pierwszy element listy
// 2. tylko ostatni element listy
// 3. Parzyste elementy listy
// 4. Wszystkie elementy listy
// 5. Żaden z elementów - tylko cała lista

let rectangle = document.querySelectorAll('#ex5>div')
for (let i of rectangle) {
    i.addEventListener('mouseover', () => {
        let color = i.style.backgroundColor;
        // pierwszy element listy
        i.parentElement.querySelector('ul').firstElementChild.style.color = color
        // ostatni element lsity
        i.parentElement.querySelector('ul>:last-child').style.color = color;
        //  parzysty
        i.parentElement.querySelectorAll('ul>li:nth-child(even)').forEach(el => {
            el.style.color = color;
        })
        i.parentElement.querySelectorAll('ul>li').forEach(el => {
            el.style.color = color;
        })
        // 5. Żaden z elementów - tylko cała lista
        i.parentElement.querySelector('ul').style.color = color;
    })
}

// W div id="ex6" zaczynając od tego diva znajdź i zapisz do zmiennych następujące kombinacje:

// 1. pierwsze dziecko -> pierwsze dziecko -> pierwsze dziecko
// 2. pierwsze dziecko -> rodzic -> pierwsze dziecko -> pierwsze dziecko -> brat -> rodzic
// 3. rodzic -> pierwsze dziecko -> rodzic -> drugie dziecko -> pierwsze dziecko -> pierwsze dziecko -> pierwsze dziecko

const mainDiv = document.getElementById('ex6');
let one1 = mainDiv.firstElementChild.firstElementChild.firstElementChild;
let two2 = mainDiv.firstElementChild.parentElement.firstElementChild.firstElementChild.nextElementSibling.parentElement;
let three3 = mainDiv.parentElement.firstElementChild.parentElement.firstElementChild.nextElementSibling.firstElementChild.firstElementChild.firstElementChild;