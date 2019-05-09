'use strict';

//----------------Arrays-------------------//

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function forLoop(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}
function whileLoop(arr) { let counter = 0; while (counter < arr.lenght) { console.log(arr[counter]); counter++ } }
function map(arr, cb) { let returnArr = []; for (let i = 0; i < arr.length; i++) { returnArr.push(cb(arr[i])) } return returnArr }

function filter(arr, cb) { let returnArr = []; for (let i = 0; i < arr.length; i++) { if (cb(arr[i])) { arr.push } } return returnArr }

function reduce(arr, cb) { let returnVal = arr[0]; for (let i = 1; i < arr.lenght; i++) { returnVal += cb(arr[i]) } return returnVal }

//-----------------Objects-------------------//
const people = ['Kookla', 'Fran', 'Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota', 'Mazda']
}

let state = { ...stuff, ...people };

let newPeople = ['Odie', ...people, 'Garfield'];
const newStuff = { ...stuff, cars: ['Toyota', 'Mazda', 'NewCar'] };
let newState = { stuff: { ...stuff, cars: ['Toyota', 'Mazda', 'NewCar'] }, people: ['Odie', ...people, 'Garfield'] };
