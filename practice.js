// let steps = 0;
// const collatz = (n) => {
//     console.log(n, steps);
//     if (n === 1) return 0;
//     else
//         n % 2 === 0
//             ? ((steps += 1), collatz(n / 2))
//             : ((steps += 1), collatz(3 * n + 1));
// };

// collatz(8);

// const sumRange = (n) => {
//  if (n === 1) {
//   return 1
//  } else {
//  return n + sumRange(n - 1)
//  }

// }
// let result = sumRange(3);
// console.log(result);

// const power = (a, b) => {
//     if (b === 0) return 1;
//     return a * power(a, b - 1);
// };
// let result = power(2, 1);
// console.log(result);

// const power2 = (a, b) => {
//     let answer = a;
//     if (b === 0) {
//         return 1;
//     }
//     for (let i = 1; i < b; i += 1) {
//         answer = answer * a;
//     }
//     return answer;
// };

// let result2 = power2(2, 1);
// console.log(result2);

// const factorial = (num) => {
//     if (num === 1)
//     return 1
//    // console.trace()
//     return num * factorial(num - 1)
// }

// const factorialResult = factorial(5)
// console.log(factorialResult)

// const all = (array, callback) => {
//     var copy = copy || array.slice(); // only var works here

//     if (copy.length === 0) return true;

//     if (callback(copy[0])) {
//         copy.shift();
//         return all(copy, callback);
//     } else {
//         return false;
//     }
// }

// let allAreLessThanSeven = all([1, 2, 6], (num) => {
//     return num < 7;
// });

// console.log(allAreLessThanSeven);

// const productOfArr = (arr) => {
//    return arr.length ? arr.shift() * productOfArr(arr): 1
//     }
// console.log(productOfArr([1,2,3]))

// var nestedObject = {
//     data: {
//         info: {
//             stuff: {
//                 thing: {
//                     moreStuff: {
//                         magicNumber: 44,
//                         something: "foo2",
//                     },
//                 },
//             },
//         },
//     },
// };

// const contains = (object, value) => {
//     for (let key in object) {
//         if (typeof object[key] === "object") {
//             return contains(object[key], value); // if the object has a child object search it
//         }
//         if (object[key] === value) {
//             return true;                //return true if value found
//         }
//     }
//     return false; //finds nothing, returns false
// };

//  let hasIt = contains(nestedObject, 44); // true
//  let doesntHaveIt = contains(nestedObject, "foo"); // false
// console.log(hasIt)
// console.log(doesntHaveIt)

// const totalIntegers = (arr) => {
//         if (arr.length === 0) return 0; // stops when length is 0
//         let total = 0;
//         let first = arr.shift(); // take first from arr

//         if (Array.isArray(first)) {  // if first is not a number (but another array) run function again (adding it to total)
//             total += totalIntegers(first);

//         } else if (Number.isInteger(first)) { // if first is a number add 1 to the total
//             total += 1;
//         }
//         return total + totalIntegers(arr) // run function again
// }

// let seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7

// console.log(seven)

// let squares = [[[[[[[[[1]]]]]]]]];

// const sumSquares = (arr) => {

//     if (arr.length === 0) return 0 // exit out of function
//     let total = 0;
//     let first = arr.shift()   // take first part

//     if (Array.isArray(first)) {
//         total += sumSquares(first);  // if not number run again adding to total

//     } else if (Number.isInteger(first)) {
//         total += (first * first)   // if number times it by itself and add to total
//     }
//     return total + sumSquares(arr)   run again adding to total

// }

// let totalCombined = sumSquares(squares)
// console.log(totalCombined)

// const replicate = (rep, num) => {
//     if (rep <= 0) return [];

//    return  [num].concat(replicate(rep - 1, num));
// };

// let test = replicate(3, 5)
// console.log(test)





