// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const x = "23";

const calcAge = birthYear => 2037 - birthYear;

console.log(calcAge(1991));

///////////////////////////////////////
// Using Google, StackOverflow and MDN
// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAmpltude = function (t1, t2) {
  const temps = t1.concat(t2);

  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 1; i < temps.length; i++) {
    const currentTemp = temps[i];

    if (typeof currentTemp !== "number") continue;

    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }

  return max - min;
};

const amplitude = calcTempAmpltude(temperatures, [3, 2, 18]);

console.log(amplitude);

//PROBLEM 2
// Function should receive two arrays of temperature

const measurKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: Number(prompt("Degree celsius:")),
  };

  console.log(measurement);
  console.table(measurement);

  //   console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measurKelvin());

///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.
Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.
Use the problem-solving framework: Understand the problem and break it up into sub-problems!
TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

const printForecast = function (arr) {
  let tempsArray = [];
  for (let i = 0; i < arr.length; i++) {
    let day = arr.indexOf(arr[i]) + 1;
    let temp = arr[i];
    tempsArray.push(`${temp}ºC in ${day} days`);
  }
  let joinedArray = tempsArray.join(" ... ");
  return `... ${joinedArray} ...`;
};

let test1 = printForecast([17, 21, 23]);
let test2 = printForecast([12, 5, -5, 0, 4]);

console.log(test1);
console.log(test2);
