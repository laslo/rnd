"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const quickSort = arr => {
  const solution = arr => {
    const result = [...arr];
    if (result.length < 2) return result;
    const pivot = result.shift();
    const left = [],
          right = [];
    result.forEach(item => {
      if (pivot > item) {
        left.push(item);
      } else {
        right.push(item);
      }
    });
    return [...solution(left), pivot, ...solution(right)];
  };

  return solution(arr);
};

var _default = quickSort;
exports.default = _default;