//1 
let one = 1;
let two = 2;

if(one > two){
    console.log(`${one } is bigger then ${two}`)
}else{
    console.log(`${two } is bigger then ${one}`)
}//2 

var first= 1;
var second = 2;
var third = 3;

if(first > second && first > third){
    console.log(`${first} is the largest number`)
}else if( second > first && second > third){
    console.log(`${second} is the largest number`)

}else{
    console.log(`${third} is the largest number`)

}

//3 
for(i=0; i<=10; i++){
    console.log("Lubie javascript")
}

//4
let result = 0;
for(let i=1; i<=10; i++){
    result++
}
console.log(result)

//5
var n = 5;

for(i=0; i <=n; i ++){
    i % 2 === 0 ? console.log(i+" parzysta") : console.log(i+" nieparzysta")
}

//6
for(let i = 0; i <=10; i++){
    for(let j =0; j <= 10; j++){
        console.log("i= " + i + ", j= " + j); 
    }
}

//7
for(let i=0;i<100;)console.log((++i%3?'':'fizz')+(i%5?'':'buzz')||i)


//8 
//a

var height = 5
    for (var i = 0; i <= height; i++) {
        //methoda repeat jest prototypem stringa i powtarza go 
       console.log("*".repeat(i)); 
    }

//b 

var a= '';
var m = (height-1); 
for(i=1; i <= height; i++)
{
    //trim ucina spacje z każdej strony
    a = a.trim();
    a = ' '.repeat(m) + a + (i > 1 ? ' ' : '') + '*';
    console.log(a);
    m--;
}

//c 
