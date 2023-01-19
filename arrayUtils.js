const {DivisionByZeroError} = require('./error');

const doubleNumbers = (arr) => {

    if (Array.isArray(arr) == false)
        throw new Error(TypeError);

    arr.forEach(element => {
        if (typeof (element) !== 'number')
            throw new Error('Array contains element other than number');
    });

    return arr.map(x => x * 2);
};

const tripleNumberAndFilterEven = (arr) => {

    if (Array.isArray(arr) == false)
        throw new Error(TypeError);

    arr.forEach(element => {
        if (typeof (element) !== 'number')
            throw new Error('Array contains element other than number');
    });

    // return arr.map(x => x * 3).filter(x => (x % 2 == 0));

    return arr.reduce((newArr, element) => {
        if ((element * 3) % 2 === 0)
            return [...newArr, 3 * element];
        return newArr;
    }, []);
};

const divideNumbers = (a, b) => {

    if (b === 0)
        throw new DivisionByZeroError('Cannot divide be 0');

    if (typeof (a) !== 'number' || typeof (b) !== 'number')
        throw new Error('Both a and b should be of type number');

    return Math.floor(a / b);
};

module.exports = { doubleNumbers, tripleNumberAndFilterEven, divideNumbers };
