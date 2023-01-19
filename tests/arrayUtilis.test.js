/*eslint-disable*/
const { doubleNumbers, tripleNumberAndFilterEven ,divideNumbers } = require('../arrayUtils');
const { DivisionByZeroError } = require('../error');

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

        it('should return an array with tripled element  when input is an array', () => {
            expect(tripleNumberAndFilterEven([1, 2, 3])).toEqual([6]);
        });
    });

    describe('Divide Numbers', () => {

        it('should return Error when denominator or b is 0', () => {
            expect(() => divideNumbers(6,0)).toThrow(new DivisionByZeroError('Cannot divide be 0'));
        });

        it('should return Error when input is not of number data type', () => {
            expect(() => divideNumbers('6',2)).toThrow(Error('Both a and b should be of type number'));
        });

        it('should return 3 when 6 is divided by 2', () => {
            expect(divideNumbers(6,2)).toEqual(3);
        });
    });
});