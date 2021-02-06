//1
let car = {
    wheels: 4,
    name: "Tesla"
}
console.log(car)
//2
car = {
    //shadow copy of previous instance
    ...car,
    change(string){
        this.name = string;
        return car
    }
}
console.log(car.change("Volvo"))
//3
let sum_obj = {
    sum: null,
    sum_arr(arr){
        this.sum = arr.reduce((a,b)=>{
            return a+b
        })
    console.log(this.sum)
    }
}
sum_obj.sum_arr([1,2,3])

//4
let car2 = {
    name: "BMW",
    age: "12"
}
for(i in car2){
    console.log(`${i}: ${car2[i]}`)
}
//5
let car_5 ={
    name:"BMW",
    wheels:{
        size:15
    }
}
console.log(car_5.wheels)

//6
let car_6 = {
    name:"BMW"
}
car_6.age = "12"
car_6.method = function(){
    console.log("HELLO")
}
console.log(car_6)
