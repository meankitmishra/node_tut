//asynchronus javascript

// To take advantage of the asynchronus nature of javascript we use callbacks

//here is an example of asynchronus javascript

const fs = require('fs');

function sumAll(index){
    let sum=0;
    for(let i = 0; i<=index; i++){
        sum+=i;
    }
    return sum;
}

console.log(sumAll(100));
console.log(sumAll(100));

// Specify the file path
function fileisread(err, data) {
    if (err) {
      console.error('An error occurred:', err);
    } else {
        console.log('This is from async');
        console.log(sumAll(data));
    }
  }
// Use the fs.readFile function for asynchronous file reading
fs.readFile('chocolate.txt', 'utf8', fileisread);

console.log(sumAll(100));
console.log(sumAll(100));
console.log(sumAll(100));

console.log('Reading file asynchronously. This message may appear before the file content.');

