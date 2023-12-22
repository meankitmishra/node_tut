const express = require ('express')
const { products } = require ('./data')
const app = express()

app.get('/',(req,res)=>{
    res.json(products)
})

app.all('*',(req,res)=>{
    res.status(404).send( '<h1>Page not found</h1>' )
})

app.listen(3000,()=>{
    console.log('Server is listening on port 3000')
})