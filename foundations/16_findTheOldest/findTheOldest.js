const findTheOldest = function(personArray) {

    let thisYear = new Date().getFullYear();

    let ageArray = personArray.map((person) => (
        (person.yearOfDeath || thisYear) - person.yearOfBirth
    ));

    let maxAgeIndex = ageArray.reduce((maxAgeIdx, currAge, currIdx, arr) => (
        currAge > arr[maxAgeIdx] ? currIdx : maxAgeIdx
    ), 0);

    return personArray[maxAgeIndex];
    
};

// Do not edit below this line
module.exports = findTheOldest;
