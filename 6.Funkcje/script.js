//1 
function one(){
    console.log("Udało się!")
};
//2 
let two = (param) =>{
    console.log(param)
}
//3 
let three = (arr) =>{
    console.log(arr)
}
//4
let four = (string )=>{
   let count = 0;
 let countdown =  setInterval(()=>{
      
      if(count <= 4){
        console.log(string)
      }else{
          console.log("Koniec")
          clearInterval(countdown)
      }
      count ++

        },3000)
      
}

one();
two("Parametr");
three(["One","Two"]);
four("String")