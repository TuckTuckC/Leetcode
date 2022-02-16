// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.


// My Solution
var longestCommonPrefix = function(strs) {
    let prefix = '';
    let shortestStr = strs[0];


    // If there is only one string, return that string
    if (strs.length === 1) {
        return strs[0]
    }

    // Find shortest string
    for (i in strs) {
        strs[i].length < shortestStr.length ? shortestStr = strs[i] : null;
    };

    // Iterate over the chracters until you hit the last letter of the shortest string
    for (let char = 0; char < shortestStr.length; char++) {
        let first = null;

        // Iterate over the strings in the array
        for (let str = 0; str < strs.length; str++) {

            // Find the first character
            if (str === 0) {
                first = strs[str][char];

            // Compare the currect string's character to the first character
            } else if (strs[str][char] === strs[str - 1][char]) {

                // If the last string's character matches, add it to the prefix
                if (str === strs.length - 1) {
                    prefix += strs[str][char]
                }
            } else return prefix

        }
    }
    return prefix;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));

// ----------------------------------------------------------------

// Shortest answer
var longestCommonPrefix2 = function(strs) {
    'use strict';

    // If strs does not exist, return ''
    if (strs === undefined || strs.length === 0) { return ''; }
    
    // Compare previous string to next string, return when done with everything inside
    return strs.reduce((prev, next) => {
        let i = 0;

        // While previous char and next char exist, and they are equal, continue to the next char
        while (prev[i] && next[i] && prev[i] === next[i]) i++;

        // Slice the previous string from the beginning to the point where the characters were not equal anymore
        return prev.slice(0, i);
    });
};

console.log(longestCommonPrefix2(["flower","flow","flight"]));