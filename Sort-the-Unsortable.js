// In this challenge you will be given an array similar to the following:

// [[3], 4, [2], [5], 1, 6]


// In words, elements of the array are either an integer
//  or an array containing a single integer. We humans can 
//  clearly see that this array can reasonably 
// be sorted according to "the content of the elements" as:



// [1, [2], [3], 4, [5], 6]

// Create a function that, given an array similar to 
// the above, sorts the array
//  according to the "content of the elements".


// Examples

// sortIt([4, 1, 3]) ➞ [1, 3, 4]

// sortIt([[4], [1], [3]]) ➞ [[1], [3], [4]]

// sortIt([4, [1], 3]) ➞ [[1], 3, 4]

// sortIt([[4], 1, [3]]) ➞ [1, [3], [4]]

// sortIt([[3], 4, [2], [5], 1, 6]) ➞ [1, [2], [3], 4, [5], 6]


function customSort(arr) {
    return arr.sort((a, b) => {
        if (Array.isArray(a)) a = a[0];
        if (Array.isArray(b)) b = b[0];
        
        // Additional check using Array.isArray
        if (Array.isArray(a) && Array.isArray(b)) {
            return a[0] - b[0];
        }

        return a - b;
    });
}

// Example usage:
const result = customSort([[3], 4, [2], [5], 1, 6]);
console.log(result); 


// Certainly! You can use the Array.isArray method to check whether
//  an element is an array before comparing its content. 
//  Here's an updated version of the function:

// javascript
