// Concepts for Day 4  

// 1. Maps in TypeScript: Use Map when you need to store key-value frequency.

// 2. Sets in TypeScript: Use Set when you need to track unique values.

// Map
const myMap = new Map<string, number>();
myMap.set("apple", 2);
myMap.get("apple"); // 2
myMap.has("apple"); // true



// Sets 
const uniqueSet = new Set<number>();
uniqueSet.add(1);
uniqueSet.add(2);
uniqueSet.has(1); // true


function getFrequency(str: string): Map<string, number> {
  const map = new Map<string, number>();
  for (const char of str) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  return map;
}

function hasDuplicate(arr: number[]): boolean {
  const seen = new Set<number>();
  for (const num of arr) {
    if (seen.has(num)) return true;
    seen.add(num);
  }
  return false;
}











// problem 1: Given an integer array nums, return true if any value appears at least twice in the array, and false if every element is distinct.
// Input: nums = [1,2,3,1]
// Output: true
// Explanation: 1 appears twice.



function containsDuplicate(nums: number[]): boolean {
    const map = new Map<number, number>()
    
    for (let item of nums){
        if(map.has(item)){
            return true
        }
        map.set(item, 1)
    }
    return false;

}

console.log("PROBLEM 1: Find If array has duplicate elements using MAP")
console.log(containsDuplicate([1,2,3,1]))
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))
console.log(containsDuplicate([1,2,3,4]))





function firstRepeatingChar(s: string): string {
    const uniqueSet = new Set<string>(); 
    let splitted_array = s.split('')
    for(let char of splitted_array){
        // console.log(char)
        if (uniqueSet.has(char)) return char
            uniqueSet.add(char)
    }
    return '_'
}


console.log(firstRepeatingChar("aajdiwjdwod"))
console.log(firstRepeatingChar("abcde"))




console.log("PROBLEM 3: Are Arrays Equal (Regardless of Order)?");

function arraysEqualIgnoreOrder(arr1: number[], arr2: number[]): boolean {
    if (arr1.length !== arr2.length) return false;

    let freq = new Map<number, number>();

    // Count frequency of each number in arr1
    for (let num of arr1) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    // Subtract frequency for numbers in arr2
    for (let num of arr2) {
        if (!freq.has(num) || freq.get(num)! === 0) {
            return false; // Extra element or wrong count
        }
        freq.set(num, freq.get(num)! - 1);
    }

    // If all counts are zero, arrays are equal
    return true;
}

console.log(arraysEqualIgnoreOrder([1, 2, 3, 4, 3], [1, 2, 3, 4, 3])); // true
console.log(arraysEqualIgnoreOrder([1, 2, 3], [3, 2, 2])); // false
console.log(arraysEqualIgnoreOrder([1, 1, 2], [2, 1, 1])); // true
