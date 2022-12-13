let unsortedArr = [5, 2, 4, 1, 3];
console.log(unsortedArr);
const mergeSort = (arr) => {
    // return if single index
    if (arr.length === 1) return arr;
    //half arr index
    const halfLength = Math.ceil(arr.length / 2);
    // split arr in half
    let firstHalfArr = arr.slice(0, halfLength);
    let secondHalfArr = arr.slice(halfLength);

    return merge(mergeSort(firstHalfArr), mergeSort(secondHalfArr));
};

const merge = (first, second) => {
    const merged = [];
    while (first.length > 0 && second.length > 0) {
        if (first[0] < second[0]) {
            merged.push(first[0]);
            first.shift();
        } else {
            merged.push(second[0]);
            second.shift();
        }
    }
    while (second.length > 0) {
        merged.push(second[0]);
        second.shift();
    }
    while (first.length > 0) {
        merged.push(first[0]);
        first.shift();
    }
    return merged;
};
console.log(mergeSort(unsortedArr));
