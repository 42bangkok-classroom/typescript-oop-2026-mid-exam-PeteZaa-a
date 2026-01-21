// Write your code below

const input = +process.argv[2]

if (isNaN(input)) {
    console.log("Invalid input")
    
}
else {

if (input >= 80 && input <= 100) {
    console.log("A");
}
else if (input >=70 && input < 80) {
    console.log("B");
    
}
else if (input >=60 && input < 70) {
    console.log("C");
    
}
else if (input >=50 && input < 60) {
    console.log("D");
    
}
else if (input > 0 && input < 50) {
    console.log("F");
    
}
else {
    console.log("Invalid input");
}
}