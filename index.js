// Code your solution in this file!

const returnFirstTwoDrivers = function (array){
  return array.slice(0,2);
}
const returnLastTwoDrivers = function(array){
  return array.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(number) {
  
  const fareMultiplier = function (no){
    return no * number;
  }
  return fareMultiplier;
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const fetchSpecifiedDrivers = function(drivers, fu) {
  return fu(drivers);
}