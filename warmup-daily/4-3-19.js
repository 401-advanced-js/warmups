'use strict';

//Arrays
let x = [1,2,3,4,5,6,7,8,9,10];

function forLoop(arr){
  for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
  }
}
function whileLoop(arr){
  let counter = 0;
  while(counter < arr.length){
    console.log(arr[counter]);
    counter++;
  }
}
function map(arr, cb){
  let returnArr = [];
  arr.forEach(index => returnArr.push(cb(index)));
  return returnArr;
}
function filter(arr, cb){
  let returnArr = [];
  arr.forEach(index => {
    if(cb(index)){
      returnArr.push(index);
    }
  })
}
function reduce(arr, cb){
  counter = arr[0];
  for(let i = 1; i < arr.length; i++){
    counter += cb(arr[i]);
  }
  return counter;
}

//Objects
const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

let state = {...stuff, ...people};

let newPeople = ['Odie', ...people, 'Garfield'];
const newStuff = {...stuff, cars:['Toyota','Mazda','newCar']};
let newState = {...stuff, ...people};
