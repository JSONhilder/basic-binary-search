let myArray = [];
for (let i = 0; i < 100000; i++) {
    myArray.push(i);
};
//let guess = myArray[Math.floor(Math.random() * myArray.length)];
let guess = 91
console.log("computer guessed: " + guess);

console.time('find x');
for( let i = 0; i < myArray.length; i++) {
   
    if(i === guess) {
        console.log('found guess: ' + guess);
    }
};
console.timeLog('find x');