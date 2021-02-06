
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