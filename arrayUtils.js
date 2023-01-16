
const doubleNumbers = (arr) => {

    if (Array.isArray(arr) == false)
        throw new Error(TypeError);

    return arr.map(x => x * 2);
};
module.exports = { doubleNumbers };