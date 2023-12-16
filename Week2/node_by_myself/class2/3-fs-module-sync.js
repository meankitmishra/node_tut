const {readFileSync, writeFileSync, write} = require('fs')

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log(first,second);

writeFileSync('./content/result_sync.txt', `Here is the result: ${first}, ${second}`) 
//for appending we use flag 

// writeFileSync('./content/result_sync.txt',`Here is the result: ${first}, ${second} `, { flag: 'a'} ) 
