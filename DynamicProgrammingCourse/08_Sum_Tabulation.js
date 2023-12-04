/*
Tabulation of canSum Function: 


Write a function 'canSum(targetSum, numbers)' :
    Should return a boolean indicating wether or not it is possible to generate the target sum using numbers from the array. 

    May use an eleent of the array as many times as needed. Assume all inputs are nonnegative numbers.


Pseudo Code:
    To begin with size of table, 
    Create an array with length of targetSum + 1. 

    What to store inside. What type should answer be in the long run? Boolean, in this case. Initialize to false. 

    Seed Values / Base Cases: 
    targetSum = 0 would be true. 

Example:
canSum(7, [5, 3, 4]) -> true

0   1	2	3	4	5	6	7
T	F	F	F	F	F	F	F

Time Stamp 3:45:00 

Bio O Notation:

m = targetSum
n = numbers.length


O(m * n) time
O(m) space = size of the table 

Time Complexity explanation: 
As we iterate through the array, we need to look ahead for every single element in the numbers array with a nested loop on the table, and a nested loop through every number of the numbers array. 

*/

const tabulateCanSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(false); // initialize the table with false values
    table[0] = true; // base logic case
    // console.log(table);
    for ( let i = 0; i <= targetSum; i++) {
        if (table[i] === true) {
            for (let num of numbers) {
                table[i + num] = true;
            }
        }
    }

    return table[targetSum];
}



// Testing tabulateCanSum
console.log("Testing tabulateCanSum");
console.log(tabulateCanSum(300, [7, 14])); // false
console.log(tabulateCanSum(7, [2, 3])); // true
console.log(tabulateCanSum(7, [5, 3, 4, 7])); // 
console.log(tabulateCanSum(17, [7, 3, 14, 73])); // 
console.log(tabulateCanSum(5, [4, 2, 6, 100, 1])); // 



/*

TABULATE HOW SUM FUNCTION:

Write function 'howSum(targetSum, numbers)' 
Return an array of any combination of elements that add up to the targetSum. 
If not available, return null. 

If there are multiple combos possible, return any ONE of them.



Pseudo Code:


To begin with size of table, 

Create an array with length of targetSum + 1. 

What to store inside. What type should answer be in the long run? NUMBER: an array of values that add to target value

Seed Values / Base Cases: 
- Initialize all values as null.
- given target sum of 0. empty array []
- current position posible, then position x position later is possible. Then add this x to the array []. 


BIO O NOTATION: 

m = targetSum 
n = numbers.length

Polynomial Complexity
O(m^2 * n) time
O(m^2) space




*/

const howSumTabulate = ( targetSum, numbers) => {
    const table = Array (targetSum + 1).fill(null);
    table[0] = [];

    for ( let i = 0; i <= targetSum; i++){
        if (table[i] !== null){
            for (let num of numbers){
                table[i + num] = [ ...table[i], num];
            }
        }
    }
    
    console.log("Target Sum: ",`${targetSum}, How to Sum: `);
    return table[targetSum];
}



// Testing Tabulate howSumTabulate
console.log("Testing Tabulate howSumTabulate");
console.log(howSumTabulate(7, [2, 4]));
console.log(howSumTabulate(300, [7, 14])); 
console.log(howSumTabulate(7, [2, 3])); // 
console.log(howSumTabulate(7, [5, 3, 4, 7])); // 
console.log(howSumTabulate(17, [7, 3, 14, 73])); // 
console.log(howSumTabulate(5, [4, 2, 6, 100, 1])); // 



/*
BEST SUM TABULATED

Write a function 'bestSum(targetSum, numbers)'
Should return an array containing the SHORTEST combination of numbers that add up to targetSum. 

If there is a tie return any of the shortest

bestSum(8, [2, 3, 5]) ->[3, 5]

size of table 8 + 1 
base value with index 0 an []
all else = null 

from 0 - > loop thru numbers arr [2,3,5] and add that to the [].
0 -> 2 = [2] and so forth recursively.


Then compare the length of each one and keep the shortest one


Bio O Notation:
O(m^2 * n) time 
O(m^2) space

*/

const bestSumTabulate = (targetSum, numbers) => {
    const table = Array(targetSum + 1 ).fill(null);
    table[0] = [];

    for (let i = 0; i <= targetSum; i++){
        if (table[i] !== null) {
            for (let num of numbers) {
                const combination = [ ...table[i], num]
                // if this current combo is shorter than stored one
                if ( !table[i + num] || table[i + num].length > combination.length ){
                    table[i + num] = combination;
                }
            }
        }
    }

    return table[targetSum];
}

// Testing Tabulate bestSumTabulate
console.log("Testing Tabulate bestSumTabulate");
console.log(bestSumTabulate(7, [2, 4]));
console.log(bestSumTabulate(300, [7, 14, 25])); 
console.log(bestSumTabulate(7, [2, 3])); // 
console.log(bestSumTabulate(7, [5, 3, 4, 7])); // 
console.log(bestSumTabulate(17, [7, 3, 14, 73])); // 
console.log(bestSumTabulate(5, [4, 2, 6, 100, 1])); // 



