"use strict";
/**
const bookings = [];

const creatBooking = function (
  fligthNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    fligthNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

creatBooking("LH123");
creatBooking("LH123", 2);
creatBooking("LH123", undefined, 500);

*/

const fligth = "LH234";
const jonas = {
  name: "Jonas Schmedtmann",
  passport: 23476598701,
};

const checkIn = function (fligthNum, passenger) {
  fligthNum = "LH999";
  passenger.name = "Mr." + passenger.name;

  if (passenger.passport === 23476598701) {
    alert("checked in");
  } else {
    alert("wrong passport");
  }
};

// checkIn(fligth, jonas);
console.log(fligth);
console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(jonas);
checkIn(fligth, jonas);
