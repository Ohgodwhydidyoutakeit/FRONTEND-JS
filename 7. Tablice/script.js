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
func_four([1, 2, 3])

//5
const func_five = (array) => {
    let ave = (array.reduce((a, b) => a + b) / array.length)
    let new_arr = array.map((x) => x * ave)
    console.log(new_arr)
}
func_five([1, 2, 3])
//6
const func_six = (array) => {
    let even_arr = array.filter((x) => {
        if (x % 2 == 0) {
            return x
        } else {
            return null
        }
    })
    console.log(even_arr.reduce((a, b) => a + b) / even_arr.length)
}
func_six([1, 2, 3, 4])

//7
const func_sev = (array) => {
    return array.sort((a,b) => a-b)
}
console.log( 'aaaaaaa', func_sev([3, 2, 1,32,123]))

//8
const func_eight = (array1, array2) => {
    // first create new arrays 
    let index_arrays = [array1.map((a, x) => { return x }), array2.map((a, x) => { return x })];
    let indexes = [].concat(...index_arrays)
    return [(indexes.reduce((a, b) => a + b))]
}

console.log(func_eight([1, 2, 3], [4, 5, 6]))
//first drops [[0,1,2],[0,1,2]]
//then creates [0,1,2,0,1,2]
// then reduces into 6 -- returns array


//9
// reduce array by another array
const func_nine = (array1, array2) => {
    return array1.filter(f => !array2.includes(f))
}
console.log(func_nine([1, 2, 3, 4], [2, 4]))

//10
const func_ten = (array) => {
    return array.map((x) => x * (-1))
}
console.log(func_ten([1,2,3]))