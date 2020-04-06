/* 
Binary Search Algorithm - 
Given an array of n length, find the guessed x number in the least amount of iterations possible.
SET UP START 
Create an array of 100 items and Create a random guess
*/
let myArray = [];
for ( let i = 1; i < 101; i ++) {
    myArray.push(i);
}; 
let guess = myArray[Math.floor(Math.random() * myArray.length)];
console.log("computer guessed: " + guess);
/* SETUP END*/

// ALGORITHM Function
function findGuess(x) {
    // If found === false run the do/while loop
    var found = false;
    //Array lowerbound - lowest possible number 
    var low = 0;
    // Array upperbound - highest possible number
    var high = myArray.length;

    do {
        // Get the starting point/middle of the array always round so the index can be found
        let mid = Math.floor(low + (high - low ) / 2);

        // If the middle index value of the "current range" array is less than guess make our + 1 to our lowerbound
        if(myArray[mid] < x) {
            console.log("A little higher")
            low = mid + 1;
        };
        // If the middle index value of the "current range" array is less than guess make our - 1 to our upperbound
        if (myArray[mid] > x) {
            console.log("A little lower")
            high = mid - 1;
        };
        // Number found!
        if (myArray[mid] === x) {
            console.log("Found guessed at array index: " + mid);
            found = true;
        };
        /* 
        If not found start the loop again and run the middle calculations again with the new bounds 
        So every iteration we essentially half the array by going to the middle of the range.
        Each time we start again we go either left or right depending on < or >
        */
    } while (!found);
};

findGuess(guess);