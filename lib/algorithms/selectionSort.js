"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const selectionSort = arr => {
  /** @var sorted - right edge of sorted part (left) of the array */
  arr.forEach((value, sorted) => {
    /** @var min - min value in not-sorted part (right) of the array */
    let min = sorted;
    /** @var cursor - current element to be compared */

    for (let cursor = sorted + 1; cursor < arr.length; cursor++) {
      if (arr[cursor] < arr[min]) min = cursor;
    }

    if (arr[min] !== arr[sorted]) {
      [arr[sorted], arr[min]] = [arr[min], arr[sorted]]; // revert
    }
  });
  return arr;
};

var _default = selectionSort;
exports.default = _default;