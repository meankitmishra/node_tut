const express = require ('express')
const { products } = require ('./data')
const app = express()

// req => middlewares =>  res

const logger = (req,res,next)=>{
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method , url, time);
    next();
}

app.get('/',logger,(req,res)=>{
    res.status(200).send('Home')
})

app.get('/about',logger,(req,res)=>{
    res.status(200).send('About')
})

app.get('*',(req,res)=>{
    res.status(404).send('page not found')
})
 
app.listen(3000,()=>{
    console.log("Server is listening on port 3000...");
})