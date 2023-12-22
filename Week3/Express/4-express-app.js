const express = require ('express')
const path = require ('path')

const app = express()
//setup static and middlewares

app.use(express.static('./public'))

app.get('/',(req,res)=>{
    //res.status(200).sendFile(path.resolve(__dirname,'./navbar-app/index.html'))

    // adding to static assets
    // SSR
})

app.get('/about',(req,res)=>{
    res.status(200).send('Here is some of the information')
})

app.all('*',(req,res)=>{
    res.status(404).send( '<h1>Page not found</h1>' )
})

app.listen(3000,()=>{
    console.log('Server is listening on port 3000')
})