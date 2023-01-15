const { checkStringEndsWithFunction, checkStringEndsWithArrow } = require('../q6_check_string_end_with_required')


describe('General cases', () => {

    test('NORMAL FUNCTION', () =>{
        expect(checkStringEndsWithFunction("javaScript")).toBe(true);
        expect(checkStringEndsWithFunction("pythonscript")).toBe(false);
    })
    
    test('ARROW FUNCTION', () =>{
        expect(checkStringEndsWithArrow("javaScript")).toBe(true);
        expect(checkStringEndsWithArrow("pythonscript")).toBe(false);
    })
})

describe('Strings of length  <6', () => {

    test('NORMAL FUNCTION', () =>{
        expect(checkStringEndsWithFunction("sdfsd")).toBe(false);
        expect(checkStringEndsWithFunction("")).toBe(false);
    })
    
    test('ARROW FUNCTION', () =>{
        expect(checkStringEndsWithArrow("sdfsd")).toBe(false);
        expect(checkStringEndsWithArrow("")).toBe(false);
    })
})