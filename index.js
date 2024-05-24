//step 1
const returnFirstTwoDrivers = (arr) => {
  let firstTwoDrivers = [];
  for (let i = 0; i < 2; i++) {
    firstTwoDrivers.push(arr[i]);
  }
  return firstTwoDrivers;
};

let drivers = ["Cody", "Cam", "Kelli"];

console.log(returnFirstTwoDrivers(drivers));

//step 2
const returnLastTwoDrivers = (arr) => arr.slice(-2);

//step 3
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//step 4
function createFareMultiplier(int) {
  return function (fare) {
    return fare * int;
  };
}

//step 5
const fareDoubler = createFareMultiplier(2);

//step 6
const fareTripler = createFareMultiplier(3);

//step 7
function selectDifferentDrivers(arr, fn) {
  return fn(arr);
}
