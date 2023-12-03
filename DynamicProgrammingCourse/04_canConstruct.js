/*
Time Stamp: 2:12:30

Write a function canConstruct(target, wordBank)
Accepts target string and array of strings

Should return Boolean -> true if 'target' can be formed by concatenating strings from 'wordBank'

May  reuse elements of 'wordBank' as many times as needed


Pseudo Coding 
Base Case: Return true if target is empty 

Visualize the problem as a tree: Main node is target string. 

Only branch children if we have matching prefix in wordBank
Then best case is empty string return true. If cant breakdown, return false

If one child is true then return true to parent node. 



*/



const canConstruct = (target, wordBank) => {
    // Base Case: Empty string
    if (target === ''){
        return true;
    }

    // Loop through all possible words in the wordBank. 
    for (let word of wordBank) {
        // lets see if we can find the substring is a prefix to another string 
        if (target.indexOf(word) === 0) {

            // var for string after removing prefix. Using slice, by starting at word.length and obtaining remaing characters.  
            const suffix = target.slice(word.length);

            // If recursive call is true then I know that the original target can also be made. Due to the suffix being made and the word used to generate the suffix is also in the wordBank then the entire Target can be formed. 
            if (canConstruct(suffix, wordBank) === true) {
                return true;
            }
        }
}
    // Only after trying all possible words in the wordBank, return false. 
    return false;
}


/*
// TESTING CANCONSTRUCT() function
console.log(canConstruct("ab", ["a", "b"]));

console.log(canConstruct("aa", ["a", "b"]));

console.log(canConstruct("aab", ["a", "b"]));

console.log(canConstruct("aaab", ["a", "b"]));

console.log(canConstruct("aabaa", ["a", "b"]));

console.log(canConstruct("eeeeeeeeeeeeeeeeeeef", ["e", "ee", "eeee", "eeeeeee", "rrrrrrrrrr", "aaaaaa"]));

*/




/*
Summarize The Solution & Generalize the Problem for optimization
canConstruct = (target, wordBank)

Consider both data sets in their worst case scenario.
m = target.length
n = wordBank.length

Height of tree is m. 
Branching factor = n 

Time Complexity when visualized with a tree is branching factor to the height power.
O(n^m) time

Checking back at the code we perform a target.slice method. At worse case be slicing will be length of target contributing to the complexity. max length of m -> Affecting the time complexity.

O(n^m * m) time


Space Comlexity:

The max call stacks before reacing the base case or Height of tree(stack) is m. O(m) space. 

Cosidering other growing structures, would be the target.slice method. Tend to be length of m, and has to be maintained throughout the recursion. 

Each m stack frame will have to store a string of length m. So 
m * m = m ^ 2

O(m ^ 2) space



        Big O Notation
Function: canConstruct = (target, wordBank)

Brute Force Approach: 

Time Complexity: O(n^m * m) time

Space Complexity: O(m ^ 2) space


Lets try to solve the problem with memoization.

    Steps on Memoization Approach:
1. add memo object to the function
2. add if statement to check if target is in memo object. If it is then return memo[target].
3. Pass down memo to recursive calls 
4. Store data in memo object. Where there are recursive return. Now store that return value in memo before you complete the return. 


*/





const memoizeCanConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[ target];
    if (target === ''){
        return true;
    }

    // Loop through all possible words in the wordBank. 
    for (let word of wordBank) {
        // lets see if we can find the substring is a prefix to another string 
        if (target.indexOf(word) === 0) {

            // var for string after removing prefix. Using slice, by starting at word.length and obtaining remaing characters.  
            const suffix = target.slice(word.length);

            // If recursive call is true then I know that the original target can also be made. Due to the suffix being made and the word used to generate the suffix is also in the wordBank then the entire Target can be formed. 
            if (memoizeCanConstruct(suffix, wordBank, memo) === true) {
                memo[target] = true;
                return true;
            }
        }
}
    // Only after trying all possible words in the wordBank, return false.
    memo[target] = false; 
    return false;
}

//Testing memoizeCanConstruct() function

console.log(memoizeCanConstruct("ab", ["a", "b"]));
console.log(memoizeCanConstruct("aa", ["a", "b"]));
console.log(memoizeCanConstruct("aab", ["a", "b"]));
console.log(memoizeCanConstruct("aaab", ["a", "b"]));
console.log(memoizeCanConstruct("aabaa", ["a", "b"]));
console.log(memoizeCanConstruct("eeeeeeeeeeeeeeeeeeef", ["e", "ee", "eeee", "eeeeeee", "rrrrrrrrrr", "aaaaaa"]));


/*
Time Stamp: 2:37:30

Improved the functions time complexity by memoizing the function moving from an exponential time to polynomial time.

        Big O Notation
Function: canConstruct = (target, wordBank)

Memoization Approach
Time Complexity: O(n * m ^ 2) time
Space Complexity: O(m ^ 2) space


Brute Force Approach 
Time Complexity: O(n^m * m) time
Space Complexity: O(m ^ 2) space


*/