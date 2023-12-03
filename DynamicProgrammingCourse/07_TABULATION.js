/*Time Stamp 3:11:00

//TABULATION Strategy:

// Memoization is not the only way to optimize the solutions of problems.

// Warming up with fib(n)


The 0th # of the sequence is 0. 
The 1st # of the sequence is 1. 

To generate the next number of the sequence, we sum the previous two.


Step to Tabulation:

fib(6) -> 8
Get an array of 6 + 1. 



Big O Notation:
Time Complexity: O(n) time
Space Complexity: O(n) space

*/


const fib = (n) => {
    const table = Array(n + 1).fill(0);
    table[1] = 1;
    for ( i = 0; i <= n; i++) {
        //based on next position increment it by my current position
        table[i + 1] += table[i]
        table[i + 2] += table[i];
    }
    
    return table[n];
}

/*
//Tabulation Fibonacci Testing 
console.log("Tabulation Fibonacci Testing");
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(50));
*/

/*

Time Stamp 3:21:00

There are other ways to optimize the Tabulation of the problem. 
This would be for another lesson. Currently covering classic tabulation.


EXERCISE 1:
Grid Traveler function 

Say you are a traveler on a 2D grid. Begin on top-left corner and move only to the right or down. Goal is to reach bottom-right corner.

In how many ways can you reach goal on a grid with dimensions m * n?

write function 'gridTraveler(m, n)' to calculate. 


example:

gridTraveler(3, 3) -> 6
Base Cases: 
Where to begin table values with? good value is 0.
gridTaveler(1, 1) -> 1. Since no where else to go there.

Now begin from top left corner and move only to the right or down. Addidng values together as you do so.

    2D Array 4x4 Base Case: 

        0 1 2 3
      | - - - -
    0 | 0 0 0 0
    1 | 0 1 0 0
    2 | 0 0 0 0
    3 | 0 0 0 0
    
    2D Array 4x4 After adding values to the right and under recursively starting from 0,0:  

        0 1 2 3
      | - - - -
    0 | 0 0 0 0
    1 | 0 1 1 1
    2 | 0 1 2 3
    3 | 0 1 3 6

Big O Notation:
O(m * n) time
O(m * n) space



Bookmark: 3:30:00

*/


const gridTraveler = (m, n) => {
    const table = Array(m + 1)
    .fill()
    // insert starting values - base case 0's, and starting 1,1
    .map(() => Array(n + 1).fill(0) );
    table[1][1] = 1;

    // iterate through table and fill in other positions 
    // nested loops
    for (let i = 0; i <= m; i++){
        for (let j = 0; j <= n; j++){
            const current = table[i][j];
            if (j + 1 <= n ) table[i][j + 1] += current; // right neighbor with if statement for going out of bounds
            if (i + 1 <= m ) table[i + 1][j] += current; // down neighbor with if statement for going out of bounds
        }
    }
    // console.log(table);
    console.log("Returning total methods you can travel across the grid. Grid size: ",`(${m})x(${n})`);
    return table[m][n]; // bottom right corner of the grid

}


// Testing Tabulation Grid Traveler Function
console.log("Testing Tabulation Grid Traveler Function");
console.log(gridTraveler(3, 2)); // 3 
//5 more complex examples
console.log(gridTraveler(5, 3)); // 15
console.log(gridTraveler(4, 2));
console.log(gridTraveler(18, 18));



/*
Tabulation Recipe 

Most efficient all in one solution. vs the memoization approach where we use brute force first. 

1.Visualize the problem as a table
2. Size the table based on the inputs. Account of +1 if needed
3. Initialize the table with default values. Boolean or Number.
4. Seed the trivial answer into the table. Where you automatically know the answer, then exapand from there. 
5. Iterate through the table and fill in the rest of the table. Come up with logic to help.
6. Fill further positions based on the current position. 



*/