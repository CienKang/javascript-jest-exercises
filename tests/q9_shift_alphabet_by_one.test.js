/*eslint-disable*/
const { shiftAlphabetByOneFunction, shiftAlphabetByOneArrow } = require('../q9_shift_alphabet_by_one');

describe('General cases', () => {

    test('NORMAL FUNCTION', () => {
        expect(shiftAlphabetByOneFunction('Codeacademy')).toBe('Dpefbdbefnz');
        expect(shiftAlphabetByOneFunction('laZyinterns')).toBe('mbAzjoufsot');
    });

    test('ARROW FUNCTION', () => {
        expect(shiftAlphabetByOneArrow('Codeacademy')).toBe('Dpefbdbefnz');
        expect(shiftAlphabetByOneArrow('laZyinterns')).toBe('mbAzjoufsot');
    });
});
