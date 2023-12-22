const express = require ('express')
const { products } = require ('./data')
const app = express()
const logger = require ('./logger')
const authorize = require ('./authorize')

// req => middlewares =>  res

//app.use([logger,authorize]) // they will get applied in the they are written i.e logger 1st then authorize

app.get('/',(req,res)=>{
    res.status(200).send('Home')
})

app.get('/about',[logger,authorize],(req,res)=>{
    res.status(200).send('About')
})

app.get('*',(req,res)=>{
    res.status(404).send('page not found')
})
 
app.listen(3000,()=>{
    console.log("Server is listening on port 3000...");
})