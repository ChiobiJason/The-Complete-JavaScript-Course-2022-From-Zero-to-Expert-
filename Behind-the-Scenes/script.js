// 'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     const output = `You are ${firstName}, born in ${birthYear}`;
//     console.log(output);
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Jonaos';
// calcAge(1991);

// const myName = ' Jonas ';
// if (myName === ' Jonas ') {
//   //   console.log(`Jonas is a ${job}`);
//   const age = 2037 - 1989;
//   console.log(age);
//   const job = ' teacher ';
//   //   console.log(x);
// }

// console.log(addExpr);

// var addExpr = function (a, b) {
//   return a + b;
// };

// const jonas = {
//   name: 'Jonas',
//   year: 1989,
//   calcAge: function () {
//     return 2037 - this.year;
//   },
// };
// console.log(jonas.calcAge());

// document.addEventListener('keypress', function (e) {
//   console.log(e.key);
// });

// console.log(this);

// const calcAge1 = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAge1(1991);

// const calcAge2 = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };

// calcAge2(1991);

// const jason = {
//   year: 1991,
//   calcAge3: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// jason.calcAge3();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge3 = jason.calcAge3;
// matilda.calcAge3();

// var firstName = 'Matilda';

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     console.log(2037 - this.year);

//     // Solution 1
//     // const self = this;
//     // const isMillenial = function () {
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };

//     // Solution 2
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };

//     isMillenial();
//   },

//   greet: function () {
//     console.log(`Hey ${this.firstName}`);
//   },
// };

// jonas.greet();
// jonas.calcAge();

// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 8);

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: ' Jonas ',
//   age: 30,
// };
// const friend = me;
// friend.age = 27;
// console.log('Friend:', friend);
// console.log('Me', me);

let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;

marriedJessica.lastName = 'Davis';
console.log(jessica, marriedJessica);

// Copying objects
const jessica2 = {
  firstName: ' Jessica ',
  lastName: ' Williams ',
  age: 27,
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = ' Davis ';
console.log(' Before marriage:', jessica2);
console.log(' After marriage:', jessicaCopy);
