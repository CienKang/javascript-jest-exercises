
function checkLeapYearByFunction(year) {

    if (year < 0)
        return false;

    return year % 100 === 0 ? (
        year % 400 === 0 ? true : false
    )
        : (year % 4 === 0 ? true : false);
}

const checkLeapYearByArrow = (year) => {

    if (year < 0)
        return false;

    return year % 100 === 0 ? (
        year % 400 === 0 ? true : false
    )
        : (year % 4 === 0 ? true : false);
}

module.exports = { checkLeapYearByFunction, checkLeapYearByArrow }