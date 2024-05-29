//Write a function `binarySearch(arr, target)` that implements the binary search algorithm to find the index of `target` in a sorted array `arr`. Return -1 if `target` is not found.
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // Check if the target is found at the middle index
        if (arr[mid] === target) {
            return mid;
        }

        // If the target is greater, ignore left half
        if (arr[mid] < target) {
            left = mid + 1;
        }
        // If the target is smaller, ignore right half
        else {
            right = mid - 1;
        }
    }

    // If target is not found in the array
    return -1;
}

// Example usage:
const dictionary = ["apple", "banana", "cherry", "grape", "orange"];
const targetWord = "cherry";
const index = binarySearch(dictionary, targetWord);
if (index !== -1) {
    console.log(`"${targetWord}" found at index ${index}`);
} else {
    console.log(`"${targetWord}" not found in the dictionary`);
}
