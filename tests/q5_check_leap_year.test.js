const { checkLeapYearByFunction, checkLeapYearByArrow } = require('../q5_check_leap_year')

describe('Leap Years', () => {

    test('NORMAL FUNCTION', () =>{
        expect(checkLeapYearByFunction(2004)).toBe(true);
        expect(checkLeapYearByFunction(1876)).toBe(true);
        expect(checkLeapYearByFunction(1212)).toBe(true);
    })
    
    test('ARROW FUNCTION', () =>{
        expect(checkLeapYearByArrow(2004)).toBe(true);
        expect(checkLeapYearByArrow(1876)).toBe(true);
        expect(checkLeapYearByArrow(1212)).toBe(true);
    })
})

describe('Non Leap Years', () => {

    test('NORMAL FUNCTION', () =>{
        expect(checkLeapYearByFunction(2003)).toBe(false);
        expect(checkLeapYearByFunction(1467)).toBe(false);
        expect(checkLeapYearByFunction(1111)).toBe(false);
    })
    
    test('ARROW FUNCTION', () =>{
        expect(checkLeapYearByArrow(2003)).toBe(false);
        expect(checkLeapYearByArrow(1467)).toBe(false);
        expect(checkLeapYearByArrow(1111)).toBe(false);
    })
})

describe('Special Cases ', () => {

    test('NORMAL FUNCTION', () =>{
        expect(checkLeapYearByFunction(1800)).toBe(false);
        expect(checkLeapYearByFunction(-2000)).toBe(false);
    
    })
    
    test('ARROW FUNCTION', () =>{
        expect(checkLeapYearByArrow(1800)).toBe(false);
        expect(checkLeapYearByArrow(-2000)).toBe(false)
    })
})