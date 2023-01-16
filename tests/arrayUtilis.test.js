/*eslint-disable*/
const { doubleNumbers, tripleNumberAndFilterEven } = require('../arrayUtils');


describe('Array Utilis', () => {

    describe('Double Numbers', () => {

        it('should return Error when input is not an array', () => {
            expect(() => doubleNumbers('absc')).toThrow(Error(TypeError));
        });

        it('should return Error when input is not an array', () => {
            expect(() => doubleNumbers([3, 'absc'])).toThrow(Error('Array contains element other than number'));
        });

        it('should return an array with doubled element when input is an array', () => {
            expect(doubleNumbers([1, 2, 3])).toEqual([2, 4, 6]);
        });
    });

    describe('Triple Number And Filter Even', () => {

        it('should return Error when input is not an array', () => {
            expect(() => tripleNumberAndFilterEven('absc')).toThrow(Error(TypeError));
        });

        it('should return Error when input is not an array', () => {
            expect(() => tripleNumberAndFilterEven([3, 'absc'])).toThrow(Error('Array contains element other than number'));
        });

        it('should return an array with doubled element when input is an array', () => {
            expect(tripleNumberAndFilterEven([1, 2, 3])).toEqual([6]);
        });
    });
});