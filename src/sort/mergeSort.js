import quickSort from "./quickSort";

const merge = (left, right) => {
    const result = [];
    while (left.length && right.length){
        result.push(
            left[0] < right[0] ? left.shift() : right.shift()
        );
    }
    while (left.length) result.push(left.shift());
    while (right.length) result.push(right.shift());
    return result;
};

const mergeSort = arr => {
    if (arr.length < 2) return arr;
    const mid = Math.floor(arr.length / 2);
    return merge(
        mergeSort(arr.slice(0, mid)),
        mergeSort(arr.slice(mid))
    )
}

console.log("[4,1,4,3,3,6,1,8,12]", mergeSort([4,1,4,3,3,6,1,8,12]));

export default mergeSort;
