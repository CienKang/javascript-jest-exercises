
function findLargestEvenNumberByFunction(arr) {
    let maxValue = -1

    arr.forEach(element => {

        if (element % 2 === 0 && element > maxValue)
            maxValue = element
    });

    return maxValue
}

// arr.reduce( (accumulator,currentValue)=> {} , intitalValueOfAccumulator)

const findLargestEvenNumberByArrow = (arr) =>
    arr.reduce(
        (maxValue, element) => 
            (element % 2 === 0 && element > maxValue) ? element : maxValue
        , -1)


module.exports = {findLargestEvenNumberByArrow , findLargestEvenNumberByFunction};