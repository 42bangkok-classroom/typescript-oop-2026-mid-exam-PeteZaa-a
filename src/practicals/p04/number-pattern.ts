// Write your code below

const input4 = +process.argv[2]




for (let i = 1; i <= input4; i++) {
    let pattern = ""
    for (let s = input4; s >= 1 ; s--) {
        if (s>i) {
            pattern += " "
        }
        else {
            pattern += s
        }
    }

    console.log(pattern);
    
}

