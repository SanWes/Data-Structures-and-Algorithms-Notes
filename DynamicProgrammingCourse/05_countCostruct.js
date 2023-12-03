/*
Time Stamp: 2:38:00

Write a function countConstruct(target, wordBank)

Accepts target string and array of strings

Should return # of ways that 'target' can be formed by concatenating elements from 'wordBank' array

May reuse elements of 'wordBank' as many times as needed

example:
countConstruct(abcdef, [ab, abc, cd, def, abcd]) -> 1 way possible

Pseudo Coding 

Base Case: for scenario where can break down further then return 0. 
if it goes down to Empty string return 1. 

Add up total amount to the parent at top of tree. 

*/


const countConstruct = (target, wordBank) => {
    if (target === '') return 1;

    // Keep track of loop counts 
    let totalCount = 0;


    for ( let word of wordBank ) {
        if ( target.indexOf(word) === 0 ) {
            // Var for Ways to generat suffix with the rest of the target 
            const numWaysForRest = countConstruct(target.slice(word.length), wordBank); // returns a number 
            totalCount += numWaysForRest;
        }
    }

    return totalCount;
}

//TEST CASES for countConstruct() function
console.log("TEST CASES for countConstruct() function");
console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(countConstruct("abcdef", ["ab", "babc", "cd", "def", "abcd"]));
console.log(countConstruct("skateboard", ["bo", "rt", "boar", "skate", "boar"]));
console.log(countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));




//MEMOIZATION APPROACH: 

// Steps on Memoization Approach:
// 1. add memo object to the function
// 2. add if statement to check if target is in memo object. If it is then return memo[target].
// 3. Pass down memo to recursive calls 
// 4. Store data in memo object. Where there are recursive return. Now store that return value in memo before you complete the return. 

const memoizeCountConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === '') return 1;

    // Keep track of loop counts 
    let totalCount = 0;


    for ( let word of wordBank ) {
        if ( target.indexOf(word) === 0 ) {
            // Var for Ways to generat suffix with the rest of the target 
            const numWaysForRest = memoizeCountConstruct(target.slice(word.length), wordBank, memo); // returns a number 
            totalCount += numWaysForRest;
        }
    }

    memo[target] = totalCount;
    return totalCount;
}

//TEST CASES for memoizeCountConstruct() function
console.log("TEST CASES for memoizeCountConstruct() function");
console.log(memoizeCountConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(memoizeCountConstruct("abcdef", ["ab", "babc", "cd", "def", "abcd"]));
console.log(memoizeCountConstruct("skateboard", ["bo", "rt", "boar", "skate", "boar"]));
console.log(memoizeCountConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));


/*
Big O Notation
countConstruct 
m = target.lenght
n = wordBank.length the array 

Brute Force Approach: 
O(n^m * m) time
O(m^2) space

Memoized Approach: 
O(n * m^2) time
O(m^2) space
*/