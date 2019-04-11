let arr = [0,1,2,3,4,5,6,7,8,9,10];

function forLoop(arr){
  for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
  }
}
function whileLoop(arr){
  counter = 0; 
  while(counter < arr.length){
    console.log(arr[counter]);
  }
}
function map(arr,cb){
  let returnArr = [];
  arr.forEach(item => {
    returnArr.push(cb(item));
  })
}
function filter(arr,cb){
  let returnArr = [];
  arr.forEach(item => {
    if(cb(item)){
      returnArr.push(item);
    }
  })
}
function reduce(arr, cb){
  let counter;
  counter = arr[0];
  cb(arr,counter);
}


