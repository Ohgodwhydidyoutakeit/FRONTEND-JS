//1 
// let max =1 
let interval = 3000;
let how_long = (interval *16);
let timer = setInterval(()=>{
    console.log(`Cześć po raz ${max}`);
    max ++
},interval)
setTimeout(() => { clearInterval(timer); console.log("Finished!") }, how_long);


//2 

// creating random array 
let arr =  Array.from({length: 6}, () => Math.floor(Math.random() * 9));
// console.log(arr);

let counter = 0;

let countdown = setInterval(()=>{
    console.log(arr[counter]);
    counter +=1;
    if(counter >= arr.length){
        clearInterval(countdown)
    }
},interval)

setTimeout(()=>{
    console.log(arr)
    countdown;
},2000)

