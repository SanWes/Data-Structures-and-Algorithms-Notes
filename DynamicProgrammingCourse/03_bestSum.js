/*
Write a function 'bestSum(targetSum, numbers)'
Should return an array containing the SHORTEST combination of numbers that add up to targetSum. 

If there is a tie return any of the shortest

Example: 
bestSum (7, [5, 3, 4, 7]) -> [7]
bestSum (8, [2, 3, 5,]) -> [3,5]


Memoization RECIPE

1. Make it work [BRUTE FORCE APPROACH] : 
    - Visualize the problem as a tree 
    - implement the tree using recursion
    - test a base case to end the recursion with Brute Force approach

2. Make it efficient
    - add a memo object with a default value at the top call
    - add a base case to return memo values 
    - store retrun values into the memo 


2 hr : 02 min  Mark in video


*/



const bestSum = ( targetSum, numbers) => {
    if (targetSum === 0 ) return [];
    if ( targetSum < 0) return null;

    let shortestCombination = null;

    // loop with 'of' to get the elements 
    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderCombination = bestSum(remainder, numbers);
        if (remainderCombination !== null) {
            const combination = [ ...remainderCombination, num];
            // if the combo is shorter than current shortest, update it
            // edge case: Cant do .length of a null value
            
            if (shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        }
    }


    
    return shortestCombination
};

/* 

// BEST SUM TESTING 

console.log(bestSum(7, [5,3, 4, 7])); // [7]
console.log(bestSum(8, [2,3, 5])); // [3, 5]
console.log(bestSum(8, [1, 4, 5])); // [4,4]
console.log(bestSum(100, [1, 2, 5, 25])); // [4,4]  Slow Response 




m == target sum 
n = numbers.length 

Brute Force 
time: O(n^m * m)
space: O(m^2)  Each stack frame have to store an array as we recurse

Lets MEMOIZE the function


*/



const memoizeBestSum = ( targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0 ) return [];
    if ( targetSum < 0) return null;

    let shortestCombination = null;

    // loop with 'of' to get the elements 
    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderCombination = memoizeBestSum(remainder, numbers, memo);
        if (remainderCombination !== null) {
            const combination = [ ...remainderCombination, num];
            // if the combo is shorter than current shortest, update it
            // edge case: Cant do .length of a null value
            
            if (shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        }
    }


    
    memo[targetSum] = shortestCombination;
    return shortestCombination;
};



console.log("MEMOIZATION TESTING");
console.log(memoizeBestSum(7, [5,3, 4, 7])); // [7]
console.log(memoizeBestSum(8, [2,3, 5])); // [3, 5]
console.log(memoizeBestSum(8, [1, 4, 5])); // [4,4]
console.log(memoizeBestSum(100, [1, 2, 5, 25])); // [4,4] 


/* 

m == target sum 
n = numbers.length 

Brute Force 
time: O(n^m * m)
space: O(m^2)  Each stack frame have to store an array as we recurse

Optimized Memoized Approach  
time: O(m^2 * n)  Improved from exponential to polynomial time complexity 
space: O(m^2)


*/