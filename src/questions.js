class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }
}

function binarySearch(array, value, start, end) {
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length : end;

  if (start > end) {
    return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];

  console.log(start, end);
  if (item == value) {
    return index;
  } else if (item < value) {
    return binarySearch(array, value, index + 1, end);
  } else if (item > value) {
    return binarySearch(array, value, start, index - 1);
  }
}

console.log('8', binarySearch([3, 5, 6, 8, 11, 12, 14, 15, 17, 18], 8));
console.log('16', binarySearch([3, 5, 6, 8, 11, 12, 14, 15, 17, 18], 16));

// to find the value of 8:
// first call start: arr position [0]
// first call end: arr position [10]

// second call start: arr position [0]
// second call end: arr position [4]

// third call start: arr position [3]
// third call end: arr position [4]

// Result is arr position [3]
// --------------------------------------------------------------
// to find the value of 16:
// first call start: arr position [0]
// first call end: arr position [10]

// second call start: arr position [6]
// second call end: arr position [10]

// third call start: arr position [6]
// third call end: arr position [7]

// forth call start: arr position [7]
// forth call end: arr position [7]

// Result is arr position [-1] indication that 16 was not found

// -----------------------------------------------------------------
// Question 2 Adding a React UI

// For exercises 1 and 2, you will be using a search algorithm to search for an item in a dataset. You will be testing the efficiency of 2 search algorithms, linear search and binary search. You will also have a UI (a simple textbox will do) through which you will be sending your input that you want to search. There is no server-side to this program. All of this should be done using React.

// 1) Linear search

// Given the following dataset, find out how many tries it took to search for a particular item in the dataset. If the item is not in the dataset, provide a message and indicate how many searches it took to find that out.

// 89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5,

// It took 100 steps to realize 8 was not found
// Found 44 in 50 steps

// 2) Binary search

// Use the same front end and the dataset from the previous exercise for this exercise. Use array.sort to sort the dataset. Then implement a binary search to find a particular value in the dataset. Display how many tries it took to search for a particular item in the dataset using binary search. If the item is not in the dataset, provide a message and indicate how many searches it took to find that out.

// It took 6 steps to realize 8 was not found
// Found 44 in 6 steps

// -----------------------------------------------------------------------
// Question 3 Find a book

// Imagine you are looking for a book in a library with a Dewey Decimal index. How would you go about it? Can you express this process as a search algorithm? Implement your algorithm to find a book whose Dewey and book title is provided.




