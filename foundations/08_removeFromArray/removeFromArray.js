// first solution
// const removeFromArray = function(arr, ...args) {
    
//     for (let i = 0; i < arr.length; ++i) {
//         for (let j = 0; j < args.length; ++j) {

//             if (arr[i] === args[j]) {
//                 arr.splice(i, 1);
//                 i--; // go back with the index because the array is modified
//             }
//         }
//     }
//     return arr;
// };

// optimal solution
const removeFromArray = function(arr, ...args) {
    return arr.filter((item) => !args.includes(item));
}

// Do not edit below this line
module.exports = removeFromArray;
