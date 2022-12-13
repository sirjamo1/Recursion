const fibs = (num) => {
    let arr = [0, 1];
    for (let i = 1; i < num - 1; i += 1) {
        arr.push(arr[i] + arr[i - 1]);
    }
    return arr;
};
let array = fibs(8);
console.log(array)
