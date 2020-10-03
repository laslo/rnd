"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const insertionSort = arr => {
  /** @var sorted - right edge of sorted part (left) of the array */
  for (let sorted = 0; sorted < arr.length - 1; sorted++) {
    /** @var inserted - an element that is inserting to correct position in sorted part */
    let inserted = sorted + 1;

    while (inserted > 0 && arr[inserted] < arr[inserted - 1]) {
      [arr[inserted], arr[inserted - 1]] = [arr[inserted - 1], arr[inserted]]; // revert

      inserted--;
    }
  }

  return arr;
};

var _default = insertionSort;
exports.default = _default;