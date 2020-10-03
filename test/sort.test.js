import selectionSort from "../src/sort/selectionSort";
import insertionSort from "../src/sort/insertionSort";
import quickSort from "../src/sort/quickSort";
import mergeSort from "../src/sort/mergeSort";

// an array of test presets
const presets = [
    [4, 1, 4, 3, 3, 6, 1, 8, 12],
    [],
    [0],
    [-1, 1],
    [1, -1],
]

const algos = {selectionSort, insertionSort, quickSort, mergeSort};
Object.keys(algos).forEach(algoName => {
    describe(algoName, () => {
        presets.forEach(preset => {
            it(`[${preset.toString()}]`, () => {
                const sort = algos[algoName];
                const expected = preset.sort((a, b) => a - b);
                expect(sort(preset)).toEqual(expected);
            });
        })
    })
})