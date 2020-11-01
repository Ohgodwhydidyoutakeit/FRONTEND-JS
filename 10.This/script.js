//1
function Person(name, surname, age, country, city) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.country = country;
    this.city = city;
    this.__proto__.showAll = function () {
        console.log(Object.values(this))
    }
    this.__proto__.addAge = function () {
        this.age++;
    }
}

let person = new Person("Edie ", "O'Reilly", 36, "United States", "Ankara")
let person2 = new Person("Kurt ", "Wilkins", 35, "Kiribati", "Djibouti");



person.addAge();
person.showAll();

person2.addAge();
person2.addAge();
person2.showAll();

//2
//change the constructor for each one of them

person.food = []
person2.food = []
person.addFood = function (good) {
    this.food.push(good)
}
person2.addFood = function (good) {
    this.food.push(good)
}
person.addFood("łazanki")
person2.addFood("Pierogi")
person.showFood = function () {
    console.log(this.food)
}
person2.showFood = function () {
    console.log(this.food)
}



console.log(person.showFood())
console.log(person2.showFood())

//3
function Calculator(a, b) {
    this.a = a;
    this.b = b;
    this.sum = function () {
        return (this.a + this.b)
    }
    this.sub = function(){
        return this.a - this.b
    }
    this.multiply = function(){
        return this.a * this.b
    }
    this.devide = function(){
        if(this.b === 0){
            return new Error("Cannot devide by 0")
        }else{
            return (this.a /this.b)
        }
    }

}
let test = new Calculator(1, 2);
console.log(test.sum())
console.log(test.devide())

//4
// symulator wchodzenia i schodzenia z draviny? 
function Drabina(steps){
    this.position = 0;
    this.height = steps;
    this.getOn = function(){
        if(this.height <=0 ){
            throw new Error ("Drabina nie moze mieć 0 lub ujemnej ilosci stopni ")
        }else{
            this.position = 1;
            console.log(`Twoja startowa pozycja to ${this.position}`)
        }
    }
    this.checkIfFinished = function(){
        if(this.position === this.height){
            console.log("Udało się wejść")
        }
    }
    this.addStep = function(){
        if(this.position === this.height){
            console.log('Nie można wejść wyżej, jesteś na samej górze ')
        }else{
            this.position += 1;
            console.log(`Twoja pozycja to ${this.position}`)
            this.checkIfFinished();
        }
        
    }
    this.removeStep = function(){
        if(this.position === 1){
            this.position= 0;
            console.log("zszedłeś z drabiny")
        }else{
            this.position -=1;
        }
    }
}

let drabina = new Drabina(3);
drabina.getOn()
drabina.addStep()
drabina.addStep()
drabina.addStep()