"use strict";
/**
const Person = function (firstName, birthYear) {
  // instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //   never do this
  //   this.clacAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const jonas = new Person("Jonas", 1991);
console.log(jonas);
// 1. new {} is created
// 2. function is called, this = {}
// 3. {} is linked to protoype
// function automaticlly return {}

const jack = new Person("Jack", 1990);
const matilda = new Person("Matilda", 1995);

console.log(jack, matilda);

Person.hey = function () {
  console.log("Hey There!");
  console.log(this);
};

Person.hey();

// prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();
jack.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = "Homo Sapiens";
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty("firstName"));
console.log(jonas.hasOwnProperty("species"));

console.log(jonas.__proto__);
console.log(jonas.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [2, 3, 2, 5, 2, 3, 5, 6, 2, 3];
console.log(arr.__proto__);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector("h1");
console.dir((x) => x + 1);

// challenge 1

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

const bmw = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 95);

bmw.accelerate();
bmw.brake();
bmw.accelerate();
bmw.accelerate();

mercedes.brake();
mercedes.accelerate();
mercedes.accelerate();
mercedes.accelerate();

// ES6 classes

// class expression -
// const PersonCl = class {};

// class declaration -
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // methods will be added to .prototype property
  clacAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(" ")) this._fullname = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullname;
  }
}

const jessica = new PersonCl("Jessica Davis", 1996);
console.log(jessica);

const walter = new PersonCl("Walter White", 1991);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

jessica.greet();
jessica.clacAge();

// getters and setters

const account = {
  owner: "Jonas",
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);


const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
steven.name = "Steven";
steven.birthYear = 2002;

steven.calcAge();
console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);

sarah.init;


// challenge 2
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl("Ford", 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.accelerate();
ford.brake();

ford.speedUS = 50;
console.log(ford);


*/

// inheritance between classes

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.clacAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and i study ${this.course}`);
};

Student.prototype.constructor = Student;

const mike = new Student("Mike", 2020, "Computer Science");
mike.introduce();
mike.clacAge();
