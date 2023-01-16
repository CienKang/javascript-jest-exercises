
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
            return [...newArr,3*element];
        return newArr;
    }, []);
};

console.log(tripleNumberAndFilterEven([1, 2, 3, 4]));
module.exports = { doubleNumbers, tripleNumberAndFilterEven };