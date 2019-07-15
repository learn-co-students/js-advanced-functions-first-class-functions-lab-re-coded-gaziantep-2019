// Code your solution in this file!

const returnFirstTwoDrivers= function(arr){
let arra=[];

 arra.push(arr[0],arr[1]);
return arra;

};


const returnLastTwoDrivers= function(arr){
let arra=[];

arra.push(arr[arr.length-2],arr[arr.length-1]);
return arra;
};
const selectingDrivers=[returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(multiple){
  return function (integer){
    return integer * multiple;
  }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function fetchSpecifiedDrivers(array, smth){
  return smth(array);
}