const { countVowelsInStringFunction, countVowelsInStringArrow } = require('../q8_count_number_of_vowels')

describe('General cases', () => {

    test('NORMAL FUNCTION', () =>{
        expect(countVowelsInStringFunction("codeacademy")).toBe(5)
        expect(countVowelsInStringFunction("we will , we will rock you")).toBe(7)
        expect(countVowelsInStringFunction("")).toBe(0)
    })
    
    test('ARROW FUNCTION', () =>{
        expect(countVowelsInStringArrow("codeacademy")).toBe(5)
        expect(countVowelsInStringArrow("we will , we will rock you")).toBe(7)
        expect(countVowelsInStringArrow("")).toBe(0)
    })
})
