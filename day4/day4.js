// Concepts for Day 4  
// 1. Maps in TypeScript: Use Map when you need to store key-value frequency.
// 2. Sets in TypeScript: Use Set when you need to track unique values.
// Map
var myMap = new Map();
myMap.set("apple", 2);
myMap.get("apple"); // 2
myMap.has("apple"); // true
// Sets 
var uniqueSet = new Set();
uniqueSet.add(1);
uniqueSet.add(2);
uniqueSet.has(1); // true
function getFrequency(str) {
    var map = new Map();
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        map.set(char, (map.get(char) || 0) + 1);
    }
    return map;
}
function hasDuplicate(arr) {
    var seen = new Set();
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        if (seen.has(num))
            return true;
        seen.add(num);
    }
    return false;
}
// problem 1: Given an integer array nums, return true if any value appears at least twice in the array, and false if every element is distinct.
// Input: nums = [1,2,3,1]
// Output: true
// Explanation: 1 appears twice.
function containsDuplicate(nums) {
    var map = new Map();
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var item = nums_1[_i];
        if (map.has(item)) {
            return true;
        }
        map.set(item, 1);
    }
    return false;
}
console.log("PROBLEM 1: Find If array has duplicate elements using MAP");
console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
console.log(containsDuplicate([1, 2, 3, 4]));
function firstRepeatingChar(s) {
    var uniqueSet = new Set();
    var splitted_array = s.split('');
    for (var _i = 0, splitted_array_1 = splitted_array; _i < splitted_array_1.length; _i++) {
        var char = splitted_array_1[_i];
        // console.log(char)
        if (uniqueSet.has(char))
            return char;
        uniqueSet.add(char);
    }
    return '_';
}
console.log(firstRepeatingChar("aajdiwjdwod"));
console.log(firstRepeatingChar("abcde"));
console.log("PROBLEM 3: Are Arrays Equal (Regardless of Order)?");
function arraysEqualIgnoreOrder(arr1, arr2) {
    if (arr1.length !== arr2.length)
        return false;
    var freq = new Map();
    // Count frequency of each number in arr1
    for (var _i = 0, arr1_1 = arr1; _i < arr1_1.length; _i++) {
        var num = arr1_1[_i];
        freq.set(num, (freq.get(num) || 0) + 1);
    }
    // Subtract frequency for numbers in arr2
    for (var _a = 0, arr2_1 = arr2; _a < arr2_1.length; _a++) {
        var num = arr2_1[_a];
        if (!freq.has(num) || freq.get(num) === 0) {
            return false; // Extra element or wrong count
        }
        freq.set(num, freq.get(num) - 1);
    }
    // If all counts are zero, arrays are equal
    return true;
}
console.log(arraysEqualIgnoreOrder([1, 2, 3, 4, 3], [1, 2, 3, 4, 3])); // true
console.log(arraysEqualIgnoreOrder([1, 2, 3], [3, 2, 2])); // false
console.log(arraysEqualIgnoreOrder([1, 1, 2], [2, 1, 1])); // true
