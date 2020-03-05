import { 
  originalArray,
  doubleArray,
  evensOnlyArray,
  arraySum,
  allNumbersGreaterThanZero,
  someNumbersAreOdd,
  evensOnlyAndDoubleArray,
  findItem,
  sortArray,
} from '../app'

describe('Testing originalArray', () => {
  test('testing', () => {
    expect(originalArray([1,2,3,4])).toEqual([1,2,3,4])
  })
})

describe('Testing doubleArray', () => {
  test('return array with double values in array', () => {
    expect(doubleArray([1,2,3,4])).toEqual([2,4,6,8])
  })
})

describe('Testing evensOnlyArray', () => {
  test('return array with all even numbers', () => {
    expect(evensOnlyArray([1,2,3,4])).toEqual([2,4])
  })
})

describe('Testing arraySum', () => {
  test('return array with sum of numbers', () => {
    expect(arraySum([1,2,3,4])).toEqual(10)
  })
})

describe('Testing allNumbersGreaterThanZero', () => {
  test('return true if every item greater than 0', () => {
    expect(allNumbersGreaterThanZero([1,2,3,4])).toEqual(true)
  })
})

describe('Testing someNumbersAreOdd', () => {
  test('return true if some item greater than 0', () => {
    expect(someNumbersAreOdd([1,2,3,4])).toEqual(true)
  })
})

describe('Testing evensOnlyAndDoubleArray', () => {
  test('return array double and even', () => {
    expect(evensOnlyAndDoubleArray([1,2,3,4])).toEqual([4,8])
  })
})

describe('Testing findItem', () => {
  test('find an item method return \'not found\' if not found', () => {
    expect(findItem([1,2,3,4], 1)).toEqual(1)
  })
})

describe('Testing sortArray', () => {
  test('sort array desc order', () => {
    expect(sortArray([1,2,3,4])).toEqual([4,3,2,1])
  })
})