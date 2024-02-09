// Remember, we're gonna use strict mode in all scripts now!
"use strict";
/**
const tempratures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(tempratures);
console.log(amplitude);


// merg 2 arrays

const calcTempAmplitude = function (t1, t2) {
  const temps = t1.concat(t2);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(min, max);
  return max - min;
};

const amplitude = calcTempAmplitude([2, 4, 3, 5, 6], [8, 4, 9, 7]);
console.log(amplitude);


const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: Number(prompt("degrees celsius")),
  };

  //   console.table(measurement);
  //   console.log(measurement);
  //   console.warn(measurement);
  //   console.error(measurement);

  const kelvin = measurement.value + 273;
  //   debugger;
  return kelvin;
};

console.log(measureKelvin());


*/

// coding challenge #1

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}C in ${i + 1} days ... `;
  }
  console.log("..." + str);
};

printForecast(data1);
