const express = require ('express')
const app = express()

app.get('/',(req,res)=>{
    res.status(200).send('Home Page')
})

app.get('/about',(req,res)=>{
    res.status(200).send('Here is some of the inforation')
})

app.all('*',(req,res)=>{
    res.status(404).send( '<h1>Page not found</h1>' )
})

app.listen(3000,()=>{
    console.log('Server is listening on port 3000')
})