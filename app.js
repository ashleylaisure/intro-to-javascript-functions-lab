// Exercise 1: maxofTwoNumbers() ............................
const maxOfTwoNumbers = (x, y) => {
    if (x >= y){
        return x;
    } else {
        return y;
    }
}

console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

// Exercise 2: isAdult() ............................
const isAdult = number => {
    if (number >= 18) {
        return "Adult";
    } else {
        return "Minor";
    }
}

// another way to write it
// const isAdult = number => number >= 18 ? "Adult" : "Minor"

console.log('Exercise 2 Result:', isAdult(18));


// Exercise 3: isCharAVowel() ............................
const isCharAVowel = char => {
    switch (char){
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            return true;
            break;
        default:
            return false;
    }
}

console.log("Exercise 3 Result:", isCharAVowel("a"));


//  Exercise 4: generateEmail() ............................
const generateEmail = (emailName, domain) => `${emailName}@${domain}`

console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));


//  Exercise 5: greetUser() ............................
const greetUser = (name, timeOfDay) => `Good ${timeOfDay}, ${name}!`

console.log('Exercise 5 Result:', greetUser("Sam", "morning"));


// Exercise 6: max0fThree() ............................
function maxOfThree(x, y, z){
    if (x > y && x > z){
        return x;
    } else if (y > x && y > z){
        return y;
    } else {
        return z;
    }
}

console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));


// Exercise 7: calculateTip() ............................

const calculateTip = (bill, tipPercentage) => {
    let tip = tipPercentage / 100
    // console.log(tip)
    return bill*tip;
}

console.log('Exercise 7 Result:', calculateTip(50, 10));


// Exercise 8: convertTemperature() ............................

function convertTemperature(temp, scale) {
    if (scale.toLowerCase() === 'c') {
        return (temp * 9/5) + 32 + "* Fahrenheit";
    } else if (scale.toLowerCase() === 'f') {
        return (temp - 32) * 5/9 + "* Celsius";
    }
}

console.log('Exercise 8 Result:', convertTemperature(32, 'F'));


// Exercise 9: basicCalculator() ............................

function basicCalculator(x, y, operation) {
    if (operation === 'add') {
        return x + y;
    } else if (operation === 'subtract') {
        return x - y;
    } else if (operation === 'multiply') {
        return x * y;
    } else if (operation === 'divide') {
        return x / y;
    }
}

console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));


// Exercise 10: calculateGrade() ............................

const calculateGrade = score => {
    if (score >= 90 ){
        return "A";
    } else if (score >= 80 && score <= 89){
        return "B";
    } else if (score >= 70 && score <= 79){
        return "C";
    } else if (score >= 60 && score <= 69){
        return "D";
    } else if (score < 60){
        return "F";
    }
}

console.log('Exercise 10 Result:', calculateGrade(85));


// Exercise 11: createUsername() ............................

function createUsername(first, last){
    const characterCount = first.length + last.length
    return `${first.slice(0, 3)}${last.slice(0, 3)}${characterCount}`;
}

console.log('Exercise 11 Result:', createUsername("Samantha", "Green"));


// Exercise 12: numArgs() ............................

function numArgs(){
    return (arguments.length);
}

console.log('Exercise 12 Result:', numArgs(1, 2, 3, 4));
