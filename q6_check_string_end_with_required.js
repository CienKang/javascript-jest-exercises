
function checkStringEndsWithFunction(str) {

    if (str.length < 6)
        return false;

    let end = str.slice(str.length - 6, str.length);

    if (end === 'Script')
        return true;
    else
        return false;
}

const checkStringEndsWithArrow = (str) => str.slice(str.length - 6, str.length) === 'Script';

module.exports = { checkStringEndsWithFunction, checkStringEndsWithArrow };