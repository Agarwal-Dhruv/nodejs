"use strict";
/**
function logger() {
  console.log("Jonas is my name");
}

// llin / running / invoking function

logger();

function fruitProcesser(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

fruitProcesser(5, 3);

const appleAndOrangeJuice = fruitProcesser(5, 3);
console.log(appleAndOrangeJuice);


// function declaration
function clacAge(birthYear) {
  return 2037 - birthYear;
}

let age = clacAge(1991);

console.log(age);

// function expression
const calcAge1 = function (birthYear) {
  return 2037 - birthYear;
};

const age1 = calcAge1(1992);

console.log(age, age1);

// arrow function

const calcAge2 = (birthYear) => 2037 - birthYear;
const age2 = calcAge2(1993);
console.log(age2);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retierment = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retierment} years`;
};

console.log(yearsUntilRetirement(1991, "jonas"));
console.log(yearsUntilRetirement(1981, "bob"));


//function calling function

function cutFruit(fruit) {
  return fruit * 4;
}

function fruitProcesser(apple, orange) {
  const applePieces = cutFruit(apple);
  const orangePieces = cutFruit(orange);

  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of orange.`;

  return juice;
}

console.log(fruitProcesser(2, 3));


// CHALLENGE #1
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
const scoreDolphins2 = calcAverage(85, 54, 41);
const scoreKoalas2 = calcAverage(23, 34, 27);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
}

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins2, scoreKoalas2);



// Arrays

const firend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
const y = new Array(1990, 1991, 1992, 1993, 1994);

console.log(y);
console.log(friends);
console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const firstName = "Jonas";
const jonas = [firstName, "schmidtmann", 2037 - 1991, "teacher", friends];

console.log(jonas);

// Execrise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [age1, calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


// array methods

const friends = ["Michael", "Steven", "Peter"];

// add elements

const newLength = friends.push("jay");

console.log(friends);
console.log(newLength);

friends.unshift("john");
console.log(friends);

// remove elements

friends.pop(); // last
const popped = friends.pop(); // last
console.log(friends);
console.log(popped);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("bob"));

console.log(friends.includes("Steven"));
console.log(friends.includes("bob"));

if (friends.includes("Steven")) {
  console.log("you have a friend called Steven");
}


// CHALLENGE #2

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills);
console.log(tips);
console.log(totals);


// objects

const jonas = {
  firstName: "Jonas",
  lastName: "Schmidtmann",
  age: 2037 - 1991,
  job: "Teacher",
  firends: ["Michael", "Peter", "Steven"],
};

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";

console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

const interestedIn = prompt(
  `What to you know about Jona?
  Choose betwen firstName, lastName, age, job, firends`
);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "wrong request!Choose betwen firstName, lastName, age, job, firends"
  );
}

jonas.location = "portugal";
jonas["twitter"] = "@jonasSchmidtmann";

console.log(jonas);



// object methods

const jonas = {
  firstName: "Jonas",
  lastName: "Schmidtmann",
  birthYear: 1991,
  job: "Teacher",
  firends: ["Michael", "Peter", "Steven"],
  hasDriversLinse: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // calcAge: function () {
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} year old ${
      this.job
    }, and has ${this.hasDriversLinse ? "a" : "no"} driver's license`;
  },
};

console.log(jonas.calcAge());
// console.log(jonas["calcAge"](1991));
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

console.log(jonas.getSummary());


// CHALLENGE #3

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

if (mark.calcBMI() > john.calcBMI()) {
  console.log(
    `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${
      john.fullName
    }'s (${john.calcBMI()})`
  );
} else {
  console.log(
    `${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${
      mark.fullName
    }'s (${mark.calcBMI()})`
  );
}



// for loop

// for loop keeps running while the condition is true
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}


// looping through arrays

const jonas = [
  "Jonas",
  "Schmidtmann",
  1991,
  "Teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);

  // types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[1]);
}
console.log(ages);

// continue and break

console.log("--- only strings ---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;
  console.log(jonas[i], typeof jonas[i]);
}

console.log("--- break with number ---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;
  console.log(jonas[i], typeof jonas[i]);
}


// looping backwards and loops in loops

const jonas = [
  "Jonas",
  "Schmidtmann",
  1991,
  "Teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`--- starting exercise ${exercise} ---`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weights repetition ${rep}`);
  }
}


// while loop

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

let rep = 1;
while (rep < 11) {
  // console.log(`Lifting weights repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

while (dice !== 6) {
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
}


*/

// CHALLENGE #4

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(calcTip(bills[i]));
  totals.push(tip + bills[i]);
}

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage(totals));
console.log(calcAverage(totals));
