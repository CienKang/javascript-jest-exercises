/*eslint-disable*/
const { findLargestEvenNumberByArrow, findLargestEvenNumberByFunction } = require('../q1_largest_even_number')

describe('all positive numbers', () => {

    test('normal function', () => {
        expect(findLargestEvenNumberByFunction([1, 2, 3, 4])).toBe(4);
    });

    test('arrow function', () => {
        expect(findLargestEvenNumberByArrow([1, 2, 3, 4])).toBe(4);
    });
})

describe('all negative numbers ', () => {

    test('normal function', () => {
        expect(findLargestEvenNumberByFunction([-1, -2, -3, -4])).toBe(-1);
    });

    test('arrow function', () => {
        expect(findLargestEvenNumberByArrow([-1, -2, -3, -4])).toBe(-1);
    });
})


describe('all even numbers', () => {

    test('normal function', () => {
        expect(findLargestEvenNumberByFunction([6, 8, 12, 4])).toBe(12);
    });

    test('arrow function', () => {
        expect(findLargestEvenNumberByArrow([6, 8, 12, 4])).toBe(12);
    });
})

describe('all odd numbers ', () => {

    test('normal function', () => {
        expect(findLargestEvenNumberByFunction([1, 3, 7, 19, 9])).toBe(-1);
    });

    test('arrow function', () => {
        expect(findLargestEvenNumberByArrow([1, 3, 7, 19, 9])).toBe(-1);
    });
})

