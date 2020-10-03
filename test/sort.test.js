import selectionSort from "../src/algorithms/selectionSort";
import insertionSort from "../src/algorithms/insertionSort";

// an array of test presets
// in each preset, first element is `input` and second is `result`
const presets = [
    [
        [4, 1, 4, 3, 3, 6, 1, 8, 12],
        [1, 1, 3, 3, 4, 4, 6, 8, 12]
    ],
    [
        [], []
    ],
    [
        [0], [0]
    ],
    [
        [-1, 1], [-1, 1]
    ],
    [
        [1, -1], [-1, 1]
    ]
]

describe("Sorting", () => {
    const algos = {selectionSort, insertionSort};
    Object.keys(algos).forEach(algoName => {
        it(algoName, () => {
            presets.forEach(preset => {
                const [input, result] = preset;
                const sort = algos[algoName];
                expect(sort(input)).toEqual(result);
            });
        })
    })
})