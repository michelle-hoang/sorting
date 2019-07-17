/* eslint-env jasmine */
/* eslint-disable no-undef */

describe('Bubble Sort', function() {
    beforeEach(() => {
      spyOn(Array.prototype, 'sort').and.callThrough();
    });
    it('handles an empty array', function() {
      expect(bubbleSort([])).toEqual([]);
    });
  
    it('returns an array as-is if the array is already sorted', function() {
      expect(bubbleSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    });
  
    it('returns an array that is sorted if the input is unsorted', function() {
      expect(bubbleSort([1, 6, 3, 8])).toEqual([1, 3, 6, 8]);
    });
  
    it('does not call the array.sort method', function() {
      bubbleSort([2, 1, 8, 9, 6]);
      expect(Array.prototype.sort.calls.any()).toBe(false);
    });
  });
  