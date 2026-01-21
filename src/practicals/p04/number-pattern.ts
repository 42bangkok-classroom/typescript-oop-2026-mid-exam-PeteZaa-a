// Write your code below

const input4 = +process.argv[2]

if (isNaN(input4)) {
    process.exit()
}

for (let i = input4; i > 1; i--) {
    let pattern = ""
    for (let j = input4; j > input4-i; j--) {
        pattern += " "
    }
    for (let k = input4; k >= 1; k--) {
        pattern += k
    }
    console.log(pattern)
    
}