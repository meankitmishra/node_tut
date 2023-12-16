//settimeout and setinterval

function sumAll(index){
    let sum=0;
    for(let i = 0; i<=index; i++){
        sum+=i;
    }
    return sum;
}
function printWhenDone(){
    console.log("10 secs have passed");
}

setTimeout(printWhenDone,10*1000);


console.log(sumAll(100));
console.log(sumAll(100));

