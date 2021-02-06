// // Stwórz następujące eventy i sprawdź co udostępnia ich obiekt event:

// // 1. Kliknięcie w przycisk o id="test-event"
// // 2. Ruch myszką na ekranie
// // 3. Najechanie myszką na przycisk o id="test-event"
// // 4. naciśnięcie klawisza na klawiaturze
// // 5. scrollowanie strony w dół i w górę
// // 6. zmianę tekstu w input id="input-test"

const checkEvent = (event) => {
    console.log(event)
}
document.getElementById('test-event').addEventListener('click', checkEvent)
// // komentarz w celu przeczyszczenia konsoli -- kod działa 
// // window.addEventListener('mousemove', checkEvent)  
document.getElementById('test-event').addEventListener('mouseover', checkEvent)
window.addEventListener('keydown', checkEvent)
window.addEventListener('scroll', checkEvent)
document.getElementById('input-test').addEventListener('input', checkEvent)

// // Napisz funkcję która po kliknięciu na button 
// // id="ex2" pobierze tekst z jego data atrybutu a następnie wpisze ten tekst do spanu który jest poniżej.
const buttclick = (butt) => {
    let el = document.getElementById(butt);
    el.addEventListener('click', () => {
        document.getElementById('span-ex2').innerHTML = el.getAttribute("data-text")
        console.log(el.getAttribute("data-text"))
    })

}
buttclick('ex2')

// // Napisz funkcję która po najechaniu na czerwony kwadrat zmieniu jego kolor na niebieski.
// //  Następnie po zjechaniu myszki z obszaru kwadratu zmieni się z powrotem na czerwony.
const three = () => {
    document.getElementById('ex3').addEventListener('mouseover', (a) => {
        a.target.style.backgroundColor = "blue"
    })
    document.getElementById('ex3').addEventListener('mouseout', (a) => {
        a.target.style.backgroundColor = "red"
    })

}
three();
// // Napisz funkcję walidacyjną dla input id="input-test". Funkcja ma za zadanie sprawdzać co jest wpisane w inputa. 
// // Jeśli user wpisze jakąś cyfrę pokaż mu komunikat błędu pod inputem informujący że nie może wpisywać cyfr.

const checkInput = () => {
    let el = document.getElementById('input-test');
    el.addEventListener('input', (a) => {
        let err = document.getElementById('ex3-err');
        (/\d/).test(a.target.value) ? err.innerHTML = "Nie dawaj numerków" : err.innerHTML = null;
    })
}
checkInput();

// // Napisz funkcję countera. Funkcja ma za zadanie wpisywać do spanu w divie id="ex5"
// //numerka odpowiadającego ilości kliknięć w button id="ex5-button". 
// // Jeśli licznik dojdzie do 10 event powinien być usunięty.


// // WTF NIE MA TAKIEGO BUTTONA 
const counter = (max) => {
    let counter = 0;

    document.getElementById('ex2').addEventListener('click', function a() {
        let el = document.getElementById('span-ex2')
        el.innerHTML += `  ${counter} `
        counter++
        if (counter == max) {
            this.removeEventListener('click', a);
        }
    })

}
counter(10);

// // Napisz funkcję która będzie obserwowac scroll strony.
// // Jeśli scroll zjedzie poniżej 200px zmień kolor strony na czerwony.
// // Jeśli będzie powyżej 200px niech zmieni kolor na biały.

window.addEventListener('scroll', (e) => {
//     // got that from stackoverglow 
//     // https://stackoverflow.com/questions/3464876/javascript-get-window-x-y-position-for-scroll

    var top = (window.pageYOffset || document.scrollTop) - (document.clientTop || 0);
    if (top >= 200) {
        document.body.style.backgroundColor = "red"
    } else {
        document.body.style.backgroundColor = "white"
    }
})
// // Napisz obsługę kalkulatora.
// // Dodaj odpowiednie eventy do przycisków. Wynik wyświetlaj w inpucie.
// // Staraj się aby funkcje były reużywalne.

// // zadanie nie jest jasne 

const calc = () => {
    //select needed elements
    let input = document.querySelectorAll('#calculator>div:first-of-type>button')
    let output = document.querySelector('#calculator>input')
    let actions = document.querySelectorAll('#calculator>:nth-child(6)>button');

    for (const el of input) {
        el.addEventListener('click', () => {
            output.value += el.innerHTML
        })
    }


    // creating functions
    // we can use single function to take innerHTML/text from inside button and pass it inside
    // ;)
    let tempWynik = [];
    const actionCreators = (object) => {
        // not a perfect solution, would prefer recursion -- in this case we would have a history too 
        // get them signs 
        let ac = object.innerHTML
        tempWynik.push(output.value, ac)
        console.log(tempWynik)
        output.value = null
        if (tempWynik.length > 3) {
            output.value = eval(tempWynik.slice(0, -1).join(""))
        }
    }
    // akcje
    for (const element of actions) {
        element.addEventListener('click', () => {
            actionCreators(element)
        })
    }
    // adding fuctions to elemenys 

    console.log(actions, typeof actions)
}
calc()