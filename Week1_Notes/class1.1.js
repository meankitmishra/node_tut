//   What is Variable in JavaScript
//  -> A variable is a named storage for data. We can use variables to store data
//     we can declare variable using two differnt keyword "let" or "var"...
//     there is slight difference bettween var and let

//   What is a constant in javascript?
//  -> constant is an unchanging variable. declared with the help of "const" keyword
function fibonacci(index){
    let number1 = 0
    let number2 = 1
    if(index===0){
        return 0;
    }
    else if(index===1){
        return number1
    }
   
    else{

    let sum
    let i = 2
    for(i = 2; i < index ; i++) {
        sum=number1+number2
        number1=number2
        number2=sum
    }
}
    return number2
}

console.log(fibonacci((5)));

//second question sum of all numbers till a given number

function sumAll(index){
    let sum=0;
    for(let i = 0; i<=index; i++){
        sum+=i;
    }
    return sum;
}

console.log(sumAll(100));

/*
create aa pattern
*
**
***
****
*/

//1st let create a function to create a single line pattern

function singleLine(index){
    let answer=""
    for(let i = 0; i<index ; i++){
        answer = answer+"*"
    }
    return answer
}

function completePattern(index){
    for(let i = 1;i<=index; i++){
        console.log(singleLine(i));
    }
}

completePattern(3);

//  We can pass one funnction into another function as a parameter...


//JavaScript is a single threaded language.
