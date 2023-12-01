/*
Write function 'howSum(targetSum, numbers)' 
Return an array of any combination of elements that add up to the targetSum. 
If not available, return null. 

If there are multiple combos possible, return any ONE of them.




howSum(7, [5,3, 4, 7 ]) // -> [7]
howSum(7, [5,3, 4, 7 ]) // -> [3, 4]
howSum(8, [2, 3, 5 ]) //  -> [2, 2, 2, 2]
howSum(8, [2, 3, 5 ]) // -> [3, 5]
howSum(7, [2, 4 ]) // ->  null
howSum(0, [1, 2, 3 ]) // -> []



Similar to prev, except it is not a boolean return this time. 



if at least one of the branches is !null then over rides and becomes that [n]


Memoization RECIPE

1. Make it work [BRUTE FORCE APPROACH] : 
    - Visualize the problem as a tree 
    - implement the tree using recursion
    - test a base case to end the recursion with Brute Force approach

2. Make it efficient
    - add a memo object with a default value at the top call
    - add a base case to return memo values 
    - store retrun values into the memo 


*/




const howSum = (targetSum, numbers) => {
if(targetSum === 0 ) return [];
if (targetSum < 0 ) return null;

for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = howSum(remainder, numbers);
    if (remainderResult !== null) {
        return [...remainderResult, num];
    }
}


return null;
};


// console.log(howSum(7, [2,3]));  // [3, 2, 2]
// console.log(howSum(7, [5,3,4,7])); // [4, 3]
// console.log(howSum(7, [2,4])); // null
// console.log(howSum(8, [2,3,5])); // [2, 2,2,2]
// console.log(howSum(300, [7,14])); // null -> Slow Response 


/*

Time Complexity 
m = target sum 
n= numbers.length 


Brute Force Approach 
time : O(n^m * m)
space: O(m)



Time to Memoize and optimize solution


*/


const memoizeHowSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[ targetSum];

    if(targetSum === 0 ) return [];
    if (targetSum < 0 ) return null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = memoizeHowSum(remainder, numbers, memo);
        if (remainderResult !== null) {
            memo[targetSum] = [...remainderResult, num];
            return memo[targetSum] ;
        }
}

    memo[targetSum] = null
    return null;
};

console.log("MEMOIZED HOW SUM : ");
console.log(memoizeHowSum(7, [2,3]));  // [3, 2, 2]
console.log(memoizeHowSum(7, [5,3,4,7])); // [4, 3]
console.log(memoizeHowSum(7, [2,4])); // null
console.log(memoizeHowSum(8, [2,3,5])); // [2, 2,2,2]
console.log(memoizeHowSum(300, [7,14]), "MEMOIZE FOR FASTER RESPONSE" ); // null -> MUCH FASTER Response 


/*

Time Complexity 
m = target sum 
n= numbers.length 


Brute Force Approach 
time : O(n^m * m)
space: O(m)

Memoized Approach
time: O(n * m^2)
space: O(m*m) 


*/