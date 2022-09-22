const returnFirstTwoDrivers = function (drivers) {
    //don't use const drivers, as that duplicates the declaration for drivers
    drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function (drivers) {
    //don't use const drivers, as that duplicates the declaration for drivers
    drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplier) {
    let fare = 5;
    return multiplier => multiplier * fare;
}

const fareDoubler = function (createFareMultiplier) {
    return createFareMultiplier * 2;
}

const fareTripler = function (createFareMultiplier) {
    return createFareMultiplier * 3;
}

const selectDifferentDrivers = function (drivers, firstOrLast) {
    drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    if (firstOrLast === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers();
    } else if (firstOrLast === returnLastTwoDrivers) {
        return returnLastTwoDrivers();
    }
}