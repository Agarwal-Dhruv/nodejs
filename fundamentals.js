/*
// LECTURE: Values and Variables
let js = "amazing";
console.log(40 + 20 + 8 - 10);

console.log("Joans");
console.log(23);

let firstName = "jonas";
console.log(firstName);
console.log(firstName);
console.log(firstName);

// variables name conven tions
let jonas_matilda = "JM";
let $function = 27;

let person = "Jonas";

let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

let job1 = "Programmer";
let job2 = "Teacher";

console.log(myFirstJob);


// LECTURE: Data Types

let javacriptIsFun = true;
console.log(javacriptIsFun);

console.log(typeof true);
console.log(typeof javacriptIsFun);
console.log(typeof 23);
console.log(typeof "jonas");

javacriptIsFun = "YES!";
console.log(typeof javacriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


// LECTURE: let, const and var

let age = 30;
age = 31;

const birthYear = 1990;
// birthYear = 1991;
// const job;

var job = "programmer";
job = "teacher";

lastName = "schmidtmann";
console.log(lastName);


// LECTURE: Basic Operatorsa

// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
//  2**3 means 2 to the power of 3 = 2*2*2;

const firstName = "Jonas";
const lastName = "schmidtmann";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x -= 1; // x = x - 1 = 99
x++; // x = x + 1 = 100
x--; // x = x - 1 = 99
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

// CHALLENGE #1
// Mark and John are trying to compare their BMI (Body Mass Index)
// which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).
// Your task is to write some code to help them:
// Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.
// Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.
// Log the value of BMIMark and BMIJohn to the console.
// BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John
// Log it to the console too
// TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log("Mark BMI", BMIMark);
console.log("John BMI", BMIJohn);

let markHigherBMI = BMIMark > BMIJohn;

console.log("Mark has a higher BMI than John:", markHigherBMI);


// LECTURE: Strings and Template Literals
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";

console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log(`String with
multiple
lines`);


// LECTURE: Taking Decisions: if / else Statements
const age = 17;

if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young, wait another ${yearsLeft} years :)`);
}

const birthYear = 1999;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);


// CHALLENGE #2
// Modify the outputs above to use template literals to include the BMI values in the outputs
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark, BMIJohn);
if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
} else {
  console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`);
}


// LECTURE: Type Conversion and Coercion

// type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" * "2");
console.log("23" / "2");

let n = "1" + 1;
n -= 1;
console.log(n);


// LECTURE: Truthy and Falsy Values

// 5 Falsy values: 0, "", undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean(""));
console.log(Boolean({}));

const money = 1;

if (money) {
  console.log("Don't spend it all!");
} else {
  console.log("You should get a job");
}

let height = 1;

if (height) {
  console.log("YAY!, height is Defined");
} else {
  console.log("height is Undefined");
}


// LECTURE: Equality Operators: == vs. ===

const age = "18";
if (age === 18) console.log("You are a adult! (strict)");
if (age == 18) console.log("You are a adult! (loose)");

const favourite = Number(prompt(" What's your favourite number"));

console.log(favourite);
console.log(typeof favourite);

if (favourite == 23) {
  console.log("Cool!, 23 is an amazing number");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else {
  console.log("number is not 23 or 7");
}

if (favourite !== 23) console.log("why not 23?");


// LECTURE: Logical Operators

const hasDriversLicense = true;
let hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("someone else should drive");
// }

const isTired = false;

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("someone else should drive");
}


// Coding Exercise 3: CHALLENGE #3

// CHALLENGE #3
// There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.
// 2. Compare the team's average scores to determine the winner of the competition, and print to the console:
// "Dolphins win the trophy" if Dolphins win, or
// "Koalas win the trophy" if Koalas win, or
// "Both win the trophy" if their average scores are equal.
// TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.

let scoreDolphins = (96 + 108 + 89) / 3;
let scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins) {
  console.log("Dolphins win the trophy");
} else if (scoreDolphins === scoreKoalas) {
  console.log("Both win the trophy");
}


// LECTURE: The switch Statement

const day = "Monday";

switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("prepare for theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("write code examples");
    break;
  case "friday":
    console.log("record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("enjoy weekends");
    break;
  default:
    console.log("not a valid day");
}

*/

// LECTURE: The Conditional (Ternary) Operator

const age = 21;

age >= 18
  ? console.log("i'd like to drink wine")
  : console.log("i'd like to drink wine");

const drink = age >= 8 ? "wine" : "water";
console.log(drink);
console.log(`i like to drink ${drink}`);
