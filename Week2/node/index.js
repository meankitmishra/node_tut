const express = require("express")

const app = express()

const port = 3000

app.get('/' , (req,res) => {
    res.send('The sum is '+ sumAll(1,100))
})

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})

function sumAll(number1,number2){
    let sum=0;
    for (number1;number1<=number2;number1++){
        sum+=number1;
    }
    return sum;
}

console.log(sumAll(1,100));