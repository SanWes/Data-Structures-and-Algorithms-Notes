# Data Structures and Algorithm Notes

This repository contains essential resources and detailed notes on various Data Structures and Algorithms concepts. Whether you're a beginner or seeking a refresher, these materials aim to assist in understanding fundamental concepts and problem-solving techniques.

## Table of Contents

1. [Dynamic Programming](#dynamic-programming)
2. [Memoization](#memoization)
3. [Tabulation](#tabulation)
4. [Fibonacci Sequence](#fibonacci-sequence)
4. [Memoization vs. Tabulation for Fibonacci](#memoization-vs.-tabulation-for-fibonacci)


---

## Dynamic Programming

- **Resource**: [Dynamic Programming - Learn to Solve Algorithmic Problems & Coding Challenges](https://www.youtube.com/watch?v=oBt53YbR9Kk&t=1922s&ab_channel=freeCodeCamp.org)
- **Overview**: Dynamic Programming involves breaking down complex problems into simpler subproblems and storing their solutions to avoid redundant computations. It's a powerful technique used to solve optimization problems efficiently.

---

## Memoization

- **Definition**: Memoization is a technique that involves storing the results of expensive function calls and returning the cached result when the same inputs occur again. It helps improve the performance of algorithms by avoiding redundant calculations.

- **Key Aspects**: 
    -Recursive Approach: Often implemented using recursion.
    -Caching Results: Stores computed results in memory.
    -Recursion: Involves recursive calls to solve subproblems.
    -Space Efficiency: Can potentially save space by storing only necessary results.
    -Optimal for Top-Down Problems: Suited for problems where overlapping subproblems exist.


- **Memoization RECIPE**:
1. Make it work [BRUTE FORCE APPROACH]  
    - Visualize the problem as a tree 
    - implement the tree using recursion
    - test a base case to end the recursion with Brute Force approach

2. Make it efficient
    - add a memo object with a default value at the top call
    - add a base case to return memo values 
    - store retrun values into the memo 

---
## Tabulation

- **Definition**: Tabulation, also known as the bottom-up approach, involves solving a problem by filling a table (usually an array or matrix) iteratively. It starts by solving the smallest subproblems and progressively builds up towards the final solution. The results of smaller subproblems are stored in a table and used to solve larger subproblems until the overall problem is solved.

- **Key Aspects**:
    -Iterative Approach: Solves problems by building the solution from the bottom up, often using loops.
    -Table Storage: Stores intermediate results in a table or array.
    -No Recursion: Doesn't involve recursion; instead, it uses loops to fill the table.
    -Efficient Space Usage: Requires space proportional to the size of the table created.
    -Optimal for Bottom-Up Problems: Suited for problems that can be naturally divided into smaller subproblems.



- **Tabulation Recipe** 
Most efficient all in one solution. vs the memoization approach where we use brute force first. 
1. Visualize the problem as a table
2. Size the table based on the inputs. Account of +1 if needed
3. Initialize the table with default values. Boolean or Number.
4. Seed the trivial answer into the table. Where you automatically know the answer, then exapand from there. 
5. Iterate through the table and fill in the rest of the table. Come up with logic to help.
6. Fill further positions based on the current position. 

---

## Fibonacci Sequence

- **Definition**: The Fibonacci Sequence is a series of numbers where each number is the sum of the two preceding ones, typically starting with 0 and 1. The sequence begins: 0, 1, 1, 2, 3, 5, 8, 13, 21, and so on.

- **Application**: Understanding the Fibonacci Sequence is crucial in algorithmic problem-solving and recursion-based solutions.



## **Memoization vs. Tabulation for Fibonacci**:

Memoization stores computed values in a cache and uses recursion, optimizing repeated function calls for specific inputs.
Tabulation constructs a table iteratively, filling in values in a bottom-up manner, avoiding recursion entirely.
Space and Time Complexity:

Memoization might save space by storing only necessary values for specific inputs.
Tabulation, while potentially using more space due to the table, provides a predictable space complexity and is often more efficient when memory consumption isn't a constraint.


- **Dynamic Programming: Closing thoughts**

Attack problem by noticing any overlapping subproblems. 
Decide what is the trivially smallest input. - Base Case 

Think recursively using memoization 
Think iteratively to use tabulation

Draw a strategy first!!!



---

This README serves as a guide to the topics covered within this repository. Each section contains resources, definitions, and applications related to the respective topic. Explore the provided materials to deepen your understanding of Data Structures and Algorithms.

Feel free to contribute additional content or organize notes under respective subfolders to enhance the repository's comprehensiveness.

---

Thank you for exploring these resources! We hope they aid in your journey to mastering Data Structures and Algorithms.
