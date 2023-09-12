// alert("Hello World!")
console.log("Hello World!")

// data type in js
// 1.Number
// 2.String
// 3.Boolean
// 4.Undefined
// 5.Null
// 6.Object
// 7.Array

var num1=10;
var num2=20;

console.log(num1);
console.log(typeof(num1));

let name1="ahmed";

console.log(name1);
console.log(typeof(name1));

var test1=true;
var test2=false;

console.log("This is test 1 ", test1);
console.log("This is test 2 ", test2);

// var vs let
// var is global scope
// let is local scope

var person1= ["ahmad", 25, "Irbid", "Jordanian"];
var person2= ["mohammad", 30, "Amman", "Jordanian", ["html", "css", "js"]];

console.log ("I am Person 1", person1);
console.log ("I am Person 2", person2);

console.log ("I am Person 1", person1[1]);

console.log ("I am Person 2", person2[4][2]);

// object
var person3 = {
    name: "Ahmad",
    age: 25,
    city: "Irbid",
    nationality: "Jordanian",
    skills: ["html", "css", "js"]
}
console.log(person3.skills[2]);

// const (constant)
//const varName = vale;
const pi = 3.14;
// pi = 3.15 (Error)
console.log(pi);


function isPrime(number) {
    if (number <= 1) return false;
    if (number <= 3) return ture;

    if (number % 2 === 0 || number % 3 === 0) return false;

    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) return false;
    }


    return true;
}

function checkNumber() {
    const numberInput = document.getElementById("numberInput").value;
    const resultElement = document.getElementById("result");

    if (isNaN(numberInput)) {
        resultElement.textContent = "Please Enter a Valid Number.";

    } else {
        const number = parseInt(numberInput);
        const isPrimeResult = isPrime(number);
        const isEvenResult = number % 2 === 0;
        
        if (isPrimeResult) {
            resultElement.textContent = "Number is a prime number. ";
        } else {
            resultElement.textContent = "Number is not a prime  number.";
        }

        if (isEvenResult) {
            resultElement.textContent = "Number is even. ";
        } else {
            resultElement.textContent = "Number is odd.";
        }
    }

}

document.getElementById("checkButton").addEventListener("click", checkNumber);