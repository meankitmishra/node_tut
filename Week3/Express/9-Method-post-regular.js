const express = require ('express')
let { people } = require ('./data')


const app = express()

app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended: false}))

app.post('/login',(req,res)=>{
    const {name} = req.body;
    if(name){
        console.log(name);
        return res.status(200).send(`Welcome ${name}`)
    }
    console.log(name);
    res.status(401).send('Please provide the credentials')
})

 
app.listen(3000,()=>{
    console.log("Server is listening on port 3000...");
})