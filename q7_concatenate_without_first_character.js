
function concatenateWithoutFirstCharacterFunction(arr) {

    if (arr.length != 2)
        return '-1';

    let concatenatedString = '';
    for (let index = 0; index < arr.length; index++)
        concatenatedString += arr[index].slice(1, arr[index].length);

    return concatenatedString;
}

const concatenateWithoutFirstCharacterArrow = (arr) => {

    if (arr.length != 2)
        return '-1';

    return arr.reduce((finalStr, currStr) =>
        finalStr = finalStr + currStr.slice(1, currStr.length)
    , '');
};

module.exports = { concatenateWithoutFirstCharacterFunction, concatenateWithoutFirstCharacterArrow };