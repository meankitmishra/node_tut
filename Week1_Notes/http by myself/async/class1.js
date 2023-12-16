const waitinMs = 100
const callback = ()=>{
    console.log("I prind third");
}
console.log("I print first");


setTimeout(callback,waitinMs);

console.log("I print second");