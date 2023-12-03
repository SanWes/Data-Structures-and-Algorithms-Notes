/*
Write a function allConstruct(target, wordBank) that accepts a target string and an array of strings.

Function should return a 2D array containing all of the ways the target can be constructed by concatenating elements from the wordBank array.

Each element of the 2D array should represent one combination that constructs the 'target' string.

May reuse elements of 'wordBank' as many times as needed.

Example:

allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]) -> 
2
        [ [     "purp", 
                "p", "ur", "le"
            ]]




allConstruct("abcdef", ["ab", "babc", "cd", "def", "abcd"]) -> 

[ 
    [ab, cd, ef],
    [ab, c, def],
    [abc, def],
    [abcd, ef]
]


Pseudo Coding : 

Base Case []. 

Combine each subarray by concating them into one cohesive array with all possible combinations. 

when each leaf returns back to the parent keep track of the "edge" label not the "node" label. 


*/


const allConstruct = (target, wordBank) => {

    // Base Case if target is an empty string. return  two dimensional empty array. 
    if (target === '') return [[]];

    const result = [];


    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            //Get everything after the word
            const suffix = target.slice(word.length);
            //call fn recursively on this suffix
            const suffixWays = allConstruct(suffix, wordBank);
            const targetWays = suffixWays.map(way => [word, ...way]);
            // spread operator helps reduce nesting within our results array

            //Add Completed Target way to the result array
            result.push(...targetWays);
        }
    }

    return result;
}


console.log("TEST CASES for allConstruct() function");
console.log(allConstruct('purple', ['purp', "p", 'ur', 'le', 'purpl']));

console.log(allConstruct("abcdef", ["ab", "babc", "cd", "def", "abcd"]));

console.log(allConstruct("skateboard", ["bo", "rt", "boar", "skate", "boar"]));

console.log(allConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));
console.log(allConstruct("algorithmsandproblems", ["a", "lgor", "ith", "m", "sand", "pr", "oblems"]));



//MEMOIZATION APPROACH: 




const memoizedAllConstruct = (target, wordBank, memo = {}) => {

    if ( target in memo) return memo[target];
    if (target === '') return [[]];

    const result = [];


    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            //Get everything after the word
            const suffix = target.slice(word.length);
            //call fn recursively on this suffix
            const suffixWays = memoizedAllConstruct(suffix, wordBank, memo);
            const targetWays = suffixWays.map(way => [word, ...way]);
            // spread operator helps reduce nesting within our results array

            //Add Completed Target way to the result array
            result.push(...targetWays);
        }
    }

    memo[target] = result;
    return result;
}


console.log("TEST CASES for memoizedAllConstruct() function");
console.log(memoizedAllConstruct('purple', ['purp', "p", 'ur', 'le', 'purpl']));

console.log(memoizedAllConstruct("abcdef", ["ab", "babc", "cd", "def", "abcd"]));

console.log(memoizedAllConstruct("skateboard", ["bo", "rt", "boar", "skate", "boar"]));

console.log(memoizedAllConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));
console.log(memoizedAllConstruct("algorithmsandproblems", ["a", "lgor", "ith", "m", "sand", "pr", "oblems"]));




/*
Time Stamp: 3:08:30

allConstruct  

m = target.length
n = wordBank.length 


Brute Force Approach:

Big O Notation:
O(n^m) time 

O(m) space



*/