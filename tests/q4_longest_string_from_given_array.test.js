const {longestStringByFunction,longestStringByArrow} = require('../q4_longest_string_from_given_array')


describe('General Case', () => {

    test('NORMAL FUNCTION', () =>{
        expect(longestStringByFunction(["we", "love", "code", "academy"])).toBe("academy")
        expect(longestStringByFunction(["Hi","there","there "])).toBe("there ")
    })
    
    test('ARROW FUNCTION', () =>{
        expect(longestStringByArrow(["we", "love", "code", "academy"])).toBe("academy")
        expect(longestStringByArrow(["Hi","there","there "])).toBe('there ')
    })
})
