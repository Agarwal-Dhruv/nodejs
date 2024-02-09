"use strict";
/**
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = "Steven";
      const str = `Oh, you are a millenial, ${firstName}`;
      console.log(str);
    }
    console.log(millenial);
  }

  printAge();
  return age;
}

const firstName = "Jonas";
calcAge(1991);


console.log(me);
// console.log(job);
// console.log(year);

var me = "Jonas";
let job = "Teacher";
const year = 1991;

console.log(addDecl(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

if (!numProducts) deletehoppingCart();

var numProducts = 10;

function deletehoppingCart() {
  console.log("All prod ucts deleted ");
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z );


// console.log(this);

const calcAge = function (birthYear) {
  //   console.log(2037 - birthYear);
  //   console.log(this);
};

calcAge(1991);

const calcAgeArrow = (birthYear) => {
  //   console.log(2037 - birthYear);
  //   console.log(this);
};

calcAgeArrow(1990);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(2037 - this.year);
    console.log(this);
  },
};

jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();
 

const jonas = {
  firstName: "Jonas",
  year: 1991,
  calcAge: function () {
    console.log(2037 - this.year);
    console.log(this);

    // solution 1
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   //   console.log(this.year >= 1981 && this.year <= 1996);
    // };

    // solution 2
    const isMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
      //   console.log(self.year >= 1981 && self.year <= 1996);
    };

    isMillenial();
  },
  greet: () => console.log(`Hey ${this.firstName}`),
};

jonas.greet();
jonas.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 12);

const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(2, 4, 8);


let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: "Jonas",
  age: 30,
};

const friend = me;
friend.age = 27;

console.log("Friend:", friend);
console.log("Me:", me);


*/

// Primitive types
let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";

console.log(oldLastName, lastName);

// Reference types
const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = "Davis";

console.log("before marrige:", jessica);
console.log("after marrige:", marriedJessica);

// marriedJessica = {};

// Copying objects
const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["Alice", "Bob"],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";

jessicaCopy.family.push("Mary");
jessicaCopy.family.push("John");

console.log("before marrige:", jessica2);
console.log("after marrige:", jessicaCopy);
  
