"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const insertionSort = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    let j = i + 1; // [1,3,4,3,4,6,1,8,12]
    // i = 3
    // j = 3

    while (j > 0 && arr[j] < arr[j - 1]) {
      console.log('replacing', arr[j]);
      console.log('...with', arr[j - 1]);
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]; // revert

      j--;
    }
  }

  return arr;
};

console.log("[4,1,4,3,3,6,1,8,12]", insertionSort([4, 1, 4, 3, 3, 6, 1, 8, 12]));
var _default = insertionSort;
exports.default = _default;