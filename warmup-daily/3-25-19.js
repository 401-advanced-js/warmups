'use strict';
const array1 = [1,2,3,4,5,6,7,8,9,10];

let forLoop = function(array){
  for(let i = 0; i < array.length; i++){
    console.log(array[i]);
  }
}

let whileLoop = function(array){
  let loopLength = array.length;
  let counter = 0;
  while(counter < loopLength){
    console.log(array[counter]);
  }

}

let mapf = function(array, callback){
  let returnArr = [];
  for(let i = 0; i < array.length; i++){
    returnArr.push(callback(array[i]));
  }
  return returnArr;
}
//Filter is undoubtedly wrong
let filterf = function(array, callback){
  let returnArr = [];
  if(array.length === 0 || array.length === 1){return array;}
  for(let i = 0; i < array.length-1; i++){
    returnArr.push(callback(array[i], array[i+1]));
  }
  return returnArr;
}
//I also think reduce is wrong too
let reduce = function(array, callback){
  let returnArr = [];
  if(array.length === 0 || array.length === 1){return array;}
  for(let i = 0; i < array.length-1; i++){
    returnArr.push(callback(array[i], array[i+1]));
  }
  return returnArr;
}

// Objects

// Begin with the starter code below …
// Using spread and destructuring assignment, create a new array called newPeople', which is a copy of the people` array, with a person named ‘Odie’ added to the beginning and one named ‘Garfield’ added to the end.
// Using spread and destructuring assignment, create a new object called newStuff', which is a copy of the stuff object, with a new car added to the end of the cars` array within it
// Create a state object with keys of people and stuff that contain the people and stuff data.
// Do this using object destructuring assignment
// Using spread and destructuring assignments, create a new object called newSate, repeating the newPeople and newStuff steps above but directly within the people and stuff nodes of the state object (don’t just spread in newPeople and newStuff)
// Prove that the original people, stuff, and state are unchanged.

const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

let state = {};

let newPeople = [];
const newStuff = {};
let newState = {};
