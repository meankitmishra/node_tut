// JavaScript is a single threaded language
// single sequential flow of control
// JavaScript is a syncronous language with asyncronous capabilities
// A thread has a call stack and  meomory

//setTimeout and clearTimeout
//setTimeout =>>> sets a timerrr!!!!
//clearTimeout =>>> cancels the timer!!!
setTimeout(()=>{
    console.log("from callback");
},5000);

console.log("from global");
