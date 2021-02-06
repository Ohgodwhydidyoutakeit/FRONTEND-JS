//1 
let one = document.querySelectorAll('.more-divs');
const funcONE = (arr) => {
    let arrOne = []
    for (const el of arr) {
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
function modifyClassList(elementClassList) {                    //funkcja 
    let allClass = '';
    elementClassList.forEach((singleClass) => {
        allClass += ' + ' + singleClass;                      
        console.log(singleClass);
    });

    console.log(allClass.slice(3, allClass.length));

    elementClassList.value = '';                               
    console.log('Usuniêto wszystkie klasy');
}

modifyClassList(document.getElementById('classes').classList);      
//7

function longListElements(listOfElements){            
	listOfElements.forEach((elem) => {               
		
		console.log(elem.dataset.text);               
		
		if(elem.dataset.text === undefined){            
			elem.dataset.text = "text";
		}
	});
}

longListElements(document.querySelector("#longList").querySelectorAll("li")); 
//8

function saveStringToObj(string) {          
    const obj = {
      newClass: string                   
    }
    return obj;
  }
  
  function addNewClassToDiv(obj) {
    const newClass = obj.newClass;          
    document.getElementById('myDiv').classList.add(newClass);             
  }
  
  addNewClassToDiv(saveStringToObj('string_z_parametru'));       
//9
function randomNumbersClass(newClassNumber){                      
	let element = document.querySelector("#numbers");
	
	if(newClassNumber % 2 === 0){                         
		element.classList.add("even");
	}
	else{
		element.classList.add("odd");                        
	}
}

randomNumbersClass(Math.floor(Math.random() * 10));            

addClassForNumber(randomNumber);                               

//10

function getValues(elements) {                                       
    const result = [];                                            

    elements.forEach((element) => {
       result.push(element.innerText);                               
    });

    return result;
}

console.log(getValues(document.querySelectorAll('#longList > li')));      



//11




function longListChildren(childs){
	childs.forEach((elem) => {                         
		elem.dataset.data = elem.innerText;               
		elem.innerText = Math.floor(Math.random() * 10);   
	})
}

longListChildren(document.querySelector("#longList").querySelectorAll("li"));  