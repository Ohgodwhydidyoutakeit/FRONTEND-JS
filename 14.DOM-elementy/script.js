//1 
let one = document.querySelectorAll('.more-divs');
const funcONE = (arr) => {
    let arrOne = []
    for (const el of one) {
        arrOne.push(el.nodeName)
    }
    console.log(arrOne)
}
funcONE(one)

//2
let two = document.querySelectorAll('.short-list');
const funcTWO = (arr) => {
    for (const el of arr) {
        console.log(el.innerHTML)
        console.log(el.outerHTML)
        console.log(el.className)
        console.log(arr)


    }

}
funcTWO(two)
//3
let three = "datasetCheck"

const funcTHREE = (id) => {
    let tmp = document.getElementById(id);
    console.log(`Dodawanie: ${parseInt(tmp.dataset.numberone) + parseInt(tmp.dataset.numbertwo) + parseInt(tmp.dataset.numberThree)}`)
    console.log(`Odejmowanie: ${parseInt(tmp.dataset.numberone) - parseInt(tmp.dataset.numbertwo) - parseInt(tmp.dataset.numberThree)}`)

}
funcTHREE(three)
//4 
document.getElementById('spanText').innerHTML = "Cokolwiek innego"
//5 
document.getElementById('spanText').classList.toggle('MOJAKLASAS');
//6