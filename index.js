// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = fareMultiplier => function(fareQuintupler){
    return fareMultiplier * fareQuintupler;
} 

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

// functions that take array parameter(drivers) are only returnFirstTwoDrivers or returnLastTwoDrivers.
// Whatever that name of the call back function indicates one of those functions.
const selectDifferentDrivers = (drivers, driverFunc) => {
    return driverFunc(drivers);
}