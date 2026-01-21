// Write your code below

const input2 = +process.argv[2]

// if (isNaN(input2)) {

// }
// else {
for (let i = 1; i <= input2; i++) {
    if (i % 15 === 0) {
        console.log("FizzBuzz")
    }
    else if (i % 3 === 0) {
        console.log("Fizz")
    }
    else if (i % 5 === 0) {
        console.log("Buzz")
    }
    else {
        console.log(i)   
    }
}
//}