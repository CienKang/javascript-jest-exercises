/*eslint-disable*/
const { doubleNumbers } = require('../arrayUtils');


describe('Array Utilis', () => {

    describe('Double Numbers', () => {

        it('should return -1 when input is not an array', () => {
            expect(() => doubleNumbers('absc')).toThrow(Error(TypeError));
        });

        it('should return an array with doubled element when input is an array',()=>{
            expect(doubleNumbers([1,2,3])).toEqual([2,4,6]);
        });
    });
});