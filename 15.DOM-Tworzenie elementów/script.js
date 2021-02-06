//1 
// creating element 
let div = document.createElement("div")
div.innerText = " To jest nowy element";
document.getElementById("root").appendChild(div);
//2 
let arr = ["Grapefruit", "Pinaple", "Avocado", "Blueberries", "Apples", "Pomegranate"]; // owocki

text = "<ul>";
arr.forEach(myFunction);
text += "</ul>";
document.getElementById("root").innerHTML = text;

function myFunction(value) {
    text += "<li>" + value + "</li>";
}
//3 
window.addEventListener("resize", function () {
    let sel = document.querySelectorAll("li");
    for (let i = 0; i < sel.length; i++) {
        i % 2 == 1 ? sel[i].parentNode.removeChild(sel[i]) : null;
    }
});
//4
let button = document.createElement("button")
button.innerText = "Umre";

button.addEventListener("click", (e) => {

    e.target.parentNode.removeChild(e.target);
})
document.getElementById("root").appendChild(button);

//5
let rand = Math.floor(Math.random() * 10);

for (let i = 0; i < rand; i++) {
    let div = document.createElement("div");
    div.innerText = `to jest div numer ${i}`
    document.getElementById("root").appendChild(div);
}

//6 
let obj = {
    div1: 'to jest div',
    span1: 'to jest span',
    div2: {
        div3: 'to jest div',
    },
    span2: 'to jest span',
}

const iterate = (obj) => {
    Object.keys(obj).forEach(key => {

        console.log(`key: ${key}, value: ${obj[key]}`)

        if (typeof obj[key] === 'object') {

            iterate(obj[key])
            createELS(key, obj[key], `root>${obj[key]}`)
        }
        createELS(key, obj[key], "root")
    })
}

const createELS = (key, value, where) => {


    let el = document.createElement(key);
    el.innerHTML = value;
    if (typeof value === 'object Object') {
        // el.innerHTML = "";

    }

    document.getElementById("root").appendChild(el);

}

iterate(obj) // dokonczyc
//7
const table = ["obj1", "obj2", "test1", "test2", "check1", "check2"];       //tabela 6elem.
const list1 = document.createElement("ul");                                 //dwie listy
const list2 = document.createElement("ul");
const button1 = document.createElement("button");                           //dwa przyciski
const button2 = document.createElement("button");
const buttonText = "Przenieœ";

table.forEach((e) => {                                                      //przeniesienie elem z tabeli do listy
    const li = document.createElement("li");
    li.innerText = e;
    list1.appendChild(li);
});

document.body.appendChild(list1);
document.body.appendChild(button1);
button1.textContent = buttonText;

button1.addEventListener("click", () => {                               //listener na przycisk
    const lastItem1 = list1.lastChild;                                    //podstawienie dwóch ostatnich elementów listy
    const lastItem2 = list2.lastChild;

    list2.insertBefore(lastItem1, lastItem2);                             //przeniesienie elem z listy1 do listy2

    if (list1.children.length === 0) {
        button1.disabled = true;                                            //blokada przycisku gdy lista jest z zeroma elementami
    } else {
        button2.disabled = false;
    }
});

document.body.appendChild(list2);
document.body.appendChild(button2);
button2.textContent = buttonText;

button2.addEventListener("click", () => {                               //listener na przycisk
    const lastItem1 = list1.lastChild;
    const lastItem2 = list2.lastChild;

    list1.insertBefore(lastItem2, lastItem1);                             //przeniesienie elem z listy1 do listy2

    if (list2.children.length === 0) {
        button2.disabled = true;
    } else {
        button1.disabled = false;                                           //blokada przycisku gdy lista jest z zeroma elementami
    }
});
//8

let mainDiv = document.createElement("ul");
let label1 = document.createElement("label");
let label2 = document.createElement("label");
let label3 = document.createElement("label");
let label4 = document.createElement("label");
let label5 = document.createElement("label");
const lineBreak = document.createElement('br');
const butt = document.createElement("button");
butt.innerText = "Utwórz"
label1.innerText = "Element";
label2.innerText = "Tekst";
label3.innerText = "Kolor";
label4.innerText = "Kolor tekstu (rgb with #)";
label5.innerText = "Ile razy";


let input1 = document.createElement("input");
input1.setAttribute("id", "1")
let input2 = document.createElement("input");
input2.setAttribute("id", "2")
let input3 = document.createElement("input");
input3.setAttribute("id", "3")
let input4 = document.createElement("input");
input4.setAttribute("id", "4")
let input5 = document.createElement("input");
input5.setAttribute("id", "5")


mainDiv.appendChild(label1);
mainDiv.appendChild(input1);
mainDiv.appendChild(lineBreak);

mainDiv.appendChild(label2);
mainDiv.appendChild(input2);
mainDiv.appendChild(lineBreak);

mainDiv.appendChild(label3);
mainDiv.appendChild(input3);
mainDiv.appendChild(lineBreak);

mainDiv.appendChild(label4);
mainDiv.appendChild(input4);
mainDiv.appendChild(lineBreak);

mainDiv.appendChild(label5);
mainDiv.appendChild(input5);
mainDiv.appendChild(butt);

butt.addEventListener("click", () => {
    let ele = document.getElementById('1').value;
    let tekst = document.getElementById('2').value;
    let kolor = document.getElementById('3').value;
    let kolorTekstu = document.getElementById('4').value;
    let ilex = document.getElementById('5').value;
    for (let i = 0; i < ilex; i++) {
        let dox = document.createElement(ele);
        dox.innerHTML = tekst;
        dox.style.backgroundColor = kolor;
        dox.style.color = kolorTekstu;
        document.body.appendChild(dox)
    }
})
document.body.appendChild(mainDiv);

//9

let mainDib2 = document.createElement("div");


let arr1 = []
let lab1 = document.createElement("label");
let lab2 = document.createElement("label");
let lab3 = document.createElement("label");
let lab4 = document.createElement("label");

let inp1 = document.createElement('input');
let inp2 = document.createElement('input');
let inp3 = document.createElement('input');
let inp4 = document.createElement('input');

let bnt1 = document.createElement("button");
bnt1.setAttribute("class", "Wincy")
let bnt2 = document.createElement("button");
bnt2.setAttribute("class", "do")



lab1.innerText = "Imie";
lab2.innerText = "Nazwisko";
lab3.innerText = "Wiek";
lab4.innerText = "Ilość dzieci";
bnt1.innerText = "Wiecej";
bnt2.innerText = "Utwórz"





mainDib2.appendChild(lab1);
mainDib2.appendChild(inp1);
mainDib2.appendChild(lineBreak);

mainDib2.appendChild(lab2);
mainDib2.appendChild(inp2);
mainDib2.appendChild(lineBreak);

mainDib2.appendChild(lab3);
mainDib2.appendChild(inp3);
mainDib2.appendChild(lineBreak);

mainDib2.appendChild(lab4);
mainDib2.appendChild(inp4);
mainDib2.appendChild(lineBreak);

mainDib2.appendChild(bnt1);
mainDib2.appendChild(bnt2);




// let btn1e = document.querySelectorAll('button.Wincy')
// let btn2e = document.querySelectorAll('button.Wincy')
// btn1e.forEach((e) => {
//     e.addEventListener("click", () => {
//         let i = mainDib2.cloneNode(1);
//         document.body.appendChild(i)

//     })
// })


document.body.appendChild(mainDib2)

let btn1ev = document.querySelectorAll('button.Wincy')
let btn2ev = document.querySelectorAll('button.Wincy')
btn1ev.forEach((e) => {
    e.addEventListener("click", () => {
        let i = mainDib2.cloneNode(1);
        document.body.appendChild(i)

    })
})  //dokończyć 

//11

function checkNumbers(text) {
    const reg = /\d/g;
    const match = text.match(reg);
    let sum = 0;
    let ratio = 1;
    match.forEach(num => {
        sum += parseInt(num);
        ratio *= parseInt(num);
    })
    console.log(`Suma: ${sum}`);
    for (let i = 0; i < ratio; i++) {
        const newDiv = document.createElement('div');
        newDiv.textContent = text;
        document.body.appendChild(newDiv);
    }
}

checkNumbers('CHY CHY L1CZBY');



const createObj = (text) => {
    const obj = {
        text,
        checkStr() {
            if (this.text === 'Ala') {				
                this.text = 'Ola';					
            } else {
                const doc = document.createElement('div');
                doc.innerText = 'Slowo ala nie wystepuje w tekscie.';
                document.body.appendChild(doc);
            }
        },
    };
    obj.checkStr();
};
createObj('Ala')
createObj('fala')		

//Zadanie 13:

const tableStr = ["A8nBV29sx90", "362x191Z2a"];                        

function sumLettersInString(value) {                                   
    let numbers = 0;
    value.forEach(item => {
        const textWithoutNumbers = item.replace(/\d+/g, "");         
        numbers += textWithoutNumbers.length;
    })
    console.log(numbers);
}

sumLettersInString(tableStr);                                       

function sumNumbers(value) {                                            
    let sum = 0;
    value.forEach(item => {
        item.match(/[0-9]+/g).forEach(number => {                     
            sum += (Number(number));
        })
    })
    console.log(sum);
}

sumNumbers(tableStr);                                                

function avgNumbers(value) {                                         
    let sum = 0;
    let letters = 0;
    value.forEach(item => {
        item.match(/[0-9]+/g).forEach(number => {                     
            sum += (Number(number));
            letters = number.length;
        })
    })
    const avg = sum / letters;                                         
    console.log(avg);
    return avg;
}
avgNumbers(tableStr);                                                  

//Zadanie 14:

let objectPerson = {
    name: '',
    surname: '',
    age: '',
};
const checkStringLength = (name, surname, age) => {
    const old = Object.assign({}, objectPerson);		
    objectPerson = { name, surname, age, namel: name.length, surnamel: surname.length, agel: age.length };	
    console.log(objectPerson);
    if (name.length > 5 || surname.length > 5 || age.length > 5) {		
        const buttn = document.createElement('button');					
        buttn.innerText = 'Powrót do stanu pocz¹tkowego';
        buttn.onclick = () => console.log((objectPerson = old));
        root.appendChild(buttn);
    }
};
checkStringLength('NameTest', 'SurnameTest', '40');		