/*
Time Stamp: 4:20:30

Transition to strings tabulation. 


Using canConstruct function from earlier. 


Write a function canConstruct(target, wordBank)
Accepts target string and array of strings

Should return Boolean -> true if 'target' can be formed by concatenating strings from 'wordBank'

May  reuse elements of 'wordBank' as many times as needed



Pseudo Coding 
Base Case: index 0 is true 

table length = target.length

Big O Notation: 
m = target
n = wordBank.length


Time Complexity: 
O(m^2 * n)

Space Complexity:
O(m) 


*/

const canConstructTabulate = (target, wordBank) => {
    const table = Array(target.length + 1).fill(false);
    table[0] = true;

    for (let i = 0; i <= target.length; i++){
        if (table[i] === true) {
            for (let word of wordBank) {
                // if the word matches the characters starting at position i 
                if (target.slice(i, i + word.length) === word) {
                    table[i + word.length] = true; 
                }
            }
        }
    }

    return table[target.length];
}


// Testing Can Construct Tabulation
console.log("Testing Can Construct Tabulation");
console.log(canConstructTabulate("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true

console.log(canConstructTabulate("aab", ["a", "b"]));

console.log(canConstructTabulate("aaab", ["a", "b"]));

console.log(canConstructTabulate("aabaa", ["a", "b"]));

console.log(canConstructTabulate("eeeeeeeeeeeeeeeeeeef", ["e", "ee", "eeee", "eeeeeee", "rrrrrrrrrr", "aaaaaa"]));

console.log("=========================================================");


/*
Revisit Count Construct problem
Time Stamp: 4:38:00

Write a function countConstruct(target, wordBank)

Accepts target string and array of strings

Should return # of ways that 'target' can be formed by concatenating elements from 'wordBank' array

May reuse elements of 'wordBank' as many times as needed

example:
countConstruct(abcdef, [ab, abc, cd, def, abcd]) -> 1 way possible

Pseudo Coding 

Base Case: 
Empty string
index 0 = 1. 
all other cells = 0. 

4:44:44

Big O Notation

m = target
n= wordBank.length 

O(m^2 * n) time
O(m) space 


*/

const countConstructTabulate = (target, wordBank) => {
    const table = Array(target.length + 1).fill(0);
    table[0] = 1; // 1 way to make the empty string

    for (let i = 0; i < target.length; i++) {
        for (let word of wordBank) {
            if (target.slice(i, i + word.length) === word) {
                table[i + word.length] += table[i]; // increment by the amount that is in your current position 'table[i]'
            }
        }
    }

    
    return table[target.length];
};


//TEST CASES for countConstructTabulate() function
console.log("TEST CASES for countConstructTabulate() function");
console.log(countConstructTabulate("aaaaaaaaaaaaaaaaaaaaaaaaaa",["a", "a", "aa", "aaaa"]));
console.log(countConstructTabulate("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(countConstructTabulate("abcdef", ["ab", "babc", "cd", "def", "abcd"]));
console.log(countConstructTabulate("skateboard", ["bo", "rt", "boar", "skate", "boar"]));
console.log(countConstructTabulate("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));




/*
Revisit allConstruct and use Tabulation

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
size of table = target.length 
index 0 starts with an empty [] as base case

m = target.length 
n = wordBank.lenght

O(n^m) time 
Due to exponential amount of combinations needing to be returned and constructed piece by piece.

O(n^m) space 


*/

const allConstructTabulate = (target, wordBank) => {
    const table = Array(target.length +1)
        .fill()
        .map(() => []);

    table[0] = [[]]

    for ( let i = 0; i < target.length; i ++){
        for (let word of wordBank) {
            //based on words that match my current position
            if (target.slice(i, i + word.length) === word) {
                //Take all combos in my current position and add current word to each combo. add them to the list in the further position.
                const newCombinations = table[i].map(subArray => [ ...subArray, word]);

                //Some data might already exists at this position so instead of overriding existing one, use .push. Avoid further nesting of data by using spread operator ...newCombos.
                table[i + word.length].push(...newCombinations);
            }
        }
    }
    return table[target.length];
};


console.log("TEST CASES for allConstructTabulate() function");
console.log(allConstructTabulate('purple', ['purp', "p", 'ur', 'le', 'purpl']));

console.log(allConstructTabulate("abcdef", ["ab", "babc", "cd", "def", "abcd"]));

console.log(allConstructTabulate("skateboard", ["bo", "rt", "boar", "skate", "boar"]));

console.log(allConstructTabulate("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));
console.log(allConstructTabulate("algorithmsandproblems", ["a", "lgor", "ith", "m", "sand", "pr", "oblems"]));



// Time complexity will be more than exponential

/*
Dynamic Programming: Closing thoughts 

Attack problem by noticing any overlapping subproblems. 
Decide what is the trivially smallest input. - Base Case 

Think recursively using memoization 
Think iteratively to use tabulation

Draw a strategy first!!!



*/