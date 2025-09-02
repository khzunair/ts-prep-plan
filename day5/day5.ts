// let arr: number[] = [5, 2, 9, 1];
// // Built-in Sort
// console.log(arr.sort((a,b)=> b-a))


// let words: string[] = ["apple", "banana", "kiwi"];
// // sort by length
// console.log(words.sort((a, b) => a.length - b.length));


// let array1: number[] = [12,232,43,35,45,2,64,98]
// console.log(LinearSearch(array1,2))

// function LinearSearch(array1: number[], tect: number): string{
//     for(let item in array1){
//         if(array1[item] === tect){
//             return item;
//         }   
//     }
//             return '-1';
// }



// // Binary Search
// function binarySearch(arr, target){
//     let left = 0;
//     let right = arr.length - 1; 
//     let count = 0
//     while(left <= right){
//         count++
//         console.log(count)
//     let mid = Math.floor((left + right)/2) ;
//             if(arr[mid] === target){
//         return 'found';
//     } else if(target < arr[mid]){
//         right = mid - 1
//     } else {
//         left = mid + 1
//     }
//     }
//         return 'not found'

    
// }

// console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 7))


// Binary Search
function binarySearch(arr: number[], target: number): string {
    let left = 0;
    let right = arr.length - 1; 
    let count = 0;

    while (left <= right) {
        count++;
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            console.log("Binary Search steps taken:", count);
            return "found";
        } else if (target < arr[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    console.log("Binary Search steps taken:", count);
    return "not found";
}

// Linear Search
function linearSearch(arr: number[], target: number): string {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count++;
        if (arr[i] === target) {
            console.log("Linear Search steps taken:", count);
            return "found";
        }
    }
    console.log("Linear Search steps taken:", count);
    return "not found";
}

// Generate a long sorted array
const N = 50_000_000; // 50 million elements
const arr: number[] = Array.from({ length: N }, (_, i) => i + 1);

// Choose a target (near the end for worst case in linear search)
const target = N - 1;

// Binary Search timing
let start = performance.now();
let resultB = binarySearch(arr, target);
let end = performance.now();
console.log("Binary Search result:", resultB);
console.log("Binary Search time:", ((end - start) / 1000).toFixed(6), "seconds");

// Linear Search timing
start = performance.now();
let resultL = linearSearch(arr, target);
end = performance.now();
console.log("Linear Search result:", resultL);
console.log("Linear Search time:", ((end - start) / 1000).toFixed(6), "seconds");












