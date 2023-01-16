/*eslint-disable*/
const { concatenateWithoutFirstCharacterFunction, concatenateWithoutFirstCharacterArrow } = require('../q7_concatenate_without_first_character');


describe('General cases', () => {

    test('NORMAL FUNCTION', () => {
        expect(concatenateWithoutFirstCharacterFunction(['code', 'academy'])).toEqual('odecademy');
        expect(concatenateWithoutFirstCharacterFunction(['java', 'script'])).toEqual('avacript');
        expect(concatenateWithoutFirstCharacterFunction(['java', ''])).toEqual('ava');
    });

    test('ARROW FUNCTION', () => {
        expect(concatenateWithoutFirstCharacterArrow(['code', 'academy'])).toEqual('odecademy');
        expect(concatenateWithoutFirstCharacterArrow(['java', 'script'])).toEqual('avacript');
    });
});

describe('Array Size not equal to 2', () => {

    test('NORMAL FUNCTION', () => {
        expect(concatenateWithoutFirstCharacterFunction(['sdfsd'])).toBe('-1');
        expect(concatenateWithoutFirstCharacterFunction(['df', 'asff', 'sff'])).toBe('-1');
    });

    test('ARROW FUNCTION', () => {
        expect(concatenateWithoutFirstCharacterArrow(['sdfsd'])).toBe('-1');
        expect(concatenateWithoutFirstCharacterArrow(['df', 'asff', 'sff'])).toBe('-1');
    });
});