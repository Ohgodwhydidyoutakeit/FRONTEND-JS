//1 
var one = [1, 2, 3, 4, 5, 6];
console.log(one + "\n\n")

//2 
var two_array = ["One", 2, 3, 4, 5, "six", 7];
console.log(two_array[0], two_array[two_array.length - 1])
console.log(two_array[two_array.length - 1]);
console.log(two_array);
console.log(
    two_array.filter((x, i) => i % 2)
)
console.log(
    two_array.filter((x, i) => typeof (x) == "string")
)
console.log(
    two_array.filter((x, i) => typeof (x) == "number") + "\n\n"
)

//3 
var three_array = [2, 35, 6, 12, 31];
console.log(
    three_array.reduce((a, b) => a + b)
)
console.log(
    three_array.reduce((a, b) => a - b)
)
console.log(
    (three_array.reduce((a, b) => a + b) / three_array.length)
)
console.log(
    three_array.filter((x) => {
        if (x % 2 == 0) {
            return x
        }
    })

)
console.log(
    three_array.filter((x) => {
        if (x % 2 !== 0) {
            return x
        }
    })

)
//Spread syntax instead of apply

console.log(Math.max(...three_array))
console.log(Math.min(...three_array))
console.log(three_array.reverse() + "\n\n")

//4
const func_four = (array) => {
    console.log(
        array.reduce((a, b) => a + b)
    )
}
func_four([1,2,3])