const { areDigitsEqualByFunction, areDigitsEqualByArrow } = require('../q2_check_digits_are_same');

describe('equal digits of size >=2', () => {

    test('NORMAL FUNCTION', () =>{
        expect(areDigitsEqualByFunction(333)).toBe(true)
        expect(areDigitsEqualByFunction(1111111)).toBe(true)
        expect(areDigitsEqualByFunction(4444)).toBe(true)
    })

    test('ARROW FUNCTION', () =>{
        expect(areDigitsEqualByArrow(333)).toBe(true)
        expect(areDigitsEqualByArrow(1111111)).toBe(true)
        expect(areDigitsEqualByArrow(4444)).toBe(true)
    })
})


describe('equal digits of size <2', () => {

    test('NORMAL FUNCTION', () =>{
        expect(areDigitsEqualByFunction(3)).toBe(false)
        expect(areDigitsEqualByFunction(1)).toBe(false)
        expect(areDigitsEqualByFunction(4)).toBe(false)
    })

    test('ARROW FUNCTION', () =>{
        expect(areDigitsEqualByArrow(3)).toBe(false)
        expect(areDigitsEqualByArrow(1)).toBe(false)
        expect(areDigitsEqualByArrow(4)).toBe(false)
    })
})

describe('negative numbers but with same digits', () => {

    test('NORMAL FUNCTION', () =>{
        expect(areDigitsEqualByFunction(-333)).toBe(false)
        expect(areDigitsEqualByFunction(-111)).toBe(false)
        expect(areDigitsEqualByFunction(-4444)).toBe(false)
    })

    test('ARROW FUNCTION', () =>{
        expect(areDigitsEqualByArrow(-333)).toBe(false)
        expect(areDigitsEqualByArrow(-11)).toBe(false)
        expect(areDigitsEqualByArrow(-4444)).toBe(false)
    })
})

describe('positive numbers but with different digits', () => {

    test('NORMAL FUNCTION', () =>{
        expect(areDigitsEqualByFunction(3234234)).toBe(false)
        expect(areDigitsEqualByFunction(12131)).toBe(false)
        expect(areDigitsEqualByFunction(421323)).toBe(false)
    })

    test('ARROW FUNCTION', () =>{
        expect(areDigitsEqualByArrow(3123)).toBe(false)
        expect(areDigitsEqualByArrow(1213)).toBe(false)
        expect(areDigitsEqualByArrow(4432)).toBe(false)
    })
})