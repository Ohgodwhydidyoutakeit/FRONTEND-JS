//1
// Since we are focused on saving memory we will be using prototypes 
// also I'll be using functions not classes
function Person(name, surname, age, country, city, language) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.country = country;
    this.city = city;
    this.language = language;

}
Person.prototype.changeAge = function (newAge) {
    this.age = newAge
}
Person.prototype.changeCity = function (newCity) {
    this.city = newCity
}
let one = new Person("Witold", "Lipowski", 69, "Poland", "Kraków", "English")
let two = new Person("Edie ", "O'Reilly", 36, "United States", "Ankara", "Javanese")
let three = new Person("Kurt ", "Wilkins", 35, "Kiribati", "Djibouti", "Uzbek")
let four = new Person("Tyler-James ", "Weaver", 29, "Faroe Islands", "Ulan Bator", "Turkmen")
let five = new Person("Kayson ", "Knights", 40, "Comoros", "Kuwait ", "Tajik")

one.changeAge(23)
two.changeCity("Kraków")
console.log(one, two)

//2
// this time methods will be inside constructor
// methods will accept only 2 arguments and wont work like for example win calc (you can add to a previous calculation)
function Calculator() {
    this.memory = [];
    this.showMemory = function () {
        console.log(this.memory)
    }
    this.clearMemory = function () {
        this.memory = []
    }
    this.add = function (a, b) {
        let equation = `${a} + ${b} = ${a + b}`;
        console.log(equation);
        this.memory.push(equation)
    };
    this.subtract = function(a,b){
        let equation = `${a} - ${b} = ${a - b}`;
        console.log(equation);
        this.memory.push(equation)
    }
    this.multiply = function(a,b){
        let equation = `${a} * ${b} = ${a * b}`;
        console.log(equation);
        this.memory.push(equation)
    }
    this.devide = function(a,b){
        let equation = `${a} / ${b} = ${a / b}`;
        console.log(equation);
        this.memory.push(equation)
    }

}

const calc_one = new Calculator();
calc_one.add(12, 2)
calc_one.add(12, 2)
calc_one.showMemory()
calc_one.clearMemory()
calc_one.showMemory()

const calc_two = new Calculator();
calc_two.multiply(5,4)
calc_two.devide(120,3)
calc_two.showMemory()

