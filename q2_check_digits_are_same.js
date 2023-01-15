
function areDigitsEqualByFunction(number) {
    let prev = number % 10
    number = Math.floor(number / 10)

    // check if number is more than two digits or not.
    if (number === 0)
        return false

    while (number != 0) {
        if (number % 10 != prev)
            return false;

        number = Math.floor(number / 10)
    }

    return true;
}

const areDigitsEqualByArrow = (num) => {
    const arr = num.toString().split('')
    let first = arr[0]

    // check if number is more than two digits or not
    if (arr.length < 2)
        return false;

    let answer = true

    // forEach cant return in a function so use a variable to store boolean value.
    arr.forEach(ele => {
        if (ele != first)
            answer = false
    })

    return answer
}

// console.log(areDigitsEqualByArrow(22))

module.exports = { areDigitsEqualByFunction, areDigitsEqualByArrow }