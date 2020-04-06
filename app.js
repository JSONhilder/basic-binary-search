// SETUP 
let myArray = [];
for (let i = 0; i < 100000; i++) {
    myArray.push(i);
};
//let guess = myArray[Math.floor(Math.random() * myArray.length)];
let guess = 91
console.log("computer guessed: " + guess);
// SETUP FINISH

// ALGORITHM Function
function findGuess(num) {

    let found = false;
    let low = 0;
    let high = myArray.length;
    console.time('found guess')
    do {
        let mid = Math.floor(low + (high - low) / 2);

        if (myArray[mid] < num) {
            //console.log("A little higher")
            low = mid + 1;
        } else if (myArray[mid] > num) {
            //console.log("A little lower")
            high = mid - 1;
        };

        if (myArray[mid] === num) {
            console.log("Found guessed at array index: " + mid);
            found = true;
        };

    } while (!found);
    console.timeLog('found guess')
};

findGuess(guess);