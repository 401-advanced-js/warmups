'use strict';

//-------ARRAYS--------//
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function forLoop(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
function whileLoop(arr) {
  let counter = 0;
  while (counter < arr.length) {
    console.log(arr[counter]);
    counter++;
  }
}
function map(arr, cb) {
  let newArr = [];
  for (let i = 0; i < arr.lenght; i++) {
    newArr.push(cb(arr[i]));
  }
  return newArr;
  /* 
  cb = function(item){
    return item * 2;
  }
  */
}

function filter(arr, cb) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) { newArr.push(arr[i]) }
  }
  return newArr;
  /*
  cb = function(item){
    return item === 1;
  }
  */
}

function reduce(arr, cb, base) {
  let counter = base ? base : arr[0];
  for (let i = 1; i < arr.length; i++) {
    counter += arr[i];
  }
  return counter;
}

//-------OBJECTS--------//

const people = ['Kookla', 'Fran', 'Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota', 'Mazda']
}

let state = { ...people, ...stuff };

let newPeople = ['Odie', ...people, 'Garfield'];
const newStuff = { ...stuff, cars: [...stuff.cars, 'newCar'] };
let newState = {};


// const log = jest.Spy(console, 'log');

describe('Warmup Tests', () => {
  it('New people array', () => {
    expect(newPeople).toEqual(['Odie', 'Kookla', 'Fran', 'Ollie', 'Garfield'])
  });
})