function insertionSort(arr) {
    // Loop through each element in the array starting from index 1
    for (let i = 1; i < arr.length; i++) {
        let currentElement = arr[i]; // Element to be inserted
        let j = i - 1; // Index of the element just before the current element

        // Move elements of arr[0..i-1] that are greater than currentElement
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > currentElement) {
            arr[j + 1] = arr[j]; // Shift element to the right
            j--; // Move leftwards in the array
        }

        // Insert the current element into its correct position
        arr[j + 1] = currentElement;
    }

    return arr;
}

// Example usage:
let arr = [5, 3, 8, 4, 2];
console.log("Original array:", arr);
let sortedArr = insertionSort(arr);
console.log("Sorted array:", sortedArr);
