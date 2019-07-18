// Code your solution in this file!
const returnFirstTwoDrivers = function returnFirstTwoDrivers(drivers){
  return drivers.slice(0,2);
}
const returnLastTwoDrivers = function returnLastTwoDrivers(drivers){
  return drivers.slice(2.4)
}
const selectingDrivers = [
  returnFirstTwoDrivers, returnLastTwoDrivers
]
function createFareMultiplier(num){
  return  function fareQuintupler(){
    return num*num
  }
}
const fareDoubler = function fareDoubler(num){
  return num*2
}
const fareTripler = function fareTripler(num){
  return num*3
}
function fetchSpecifiedDrivers(array, driver){
  return driver(array);
}
