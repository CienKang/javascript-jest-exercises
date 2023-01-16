
function shiftAlphabetByOneFunction(str) {
    let shiftedStr = '';
    for (let idx = 0; idx < str.length; idx++) {

        let code = str.charCodeAt(idx);

        //general case
        if ((code >= 65 && code <= 89) || code >= 97 && code <= 121)
            shiftedStr += String.fromCharCode(code + 1);

        // for handling z
        if (code === 122)
            shiftedStr += 'a';

        if (code === 90)
            shiftedStr += 'A';
    }

    return shiftedStr;
}

const shiftAlphabetByOneArrow = (str) => {
    let shiftedStr = '';
    for (let idx = 0; idx < str.length; idx++) {

        let code = str.charCodeAt(idx);

        //general case
        if ((code >= 65 && code <= 89) || code >= 97 && code <= 121)
            shiftedStr += String.fromCharCode(code + 1);

        // for handling z
        if (code === 122)
            shiftedStr += 'a';

        if (code === 90)
            shiftedStr += 'A';
    }

    return shiftedStr;
};

module.exports = { shiftAlphabetByOneFunction, shiftAlphabetByOneArrow };
