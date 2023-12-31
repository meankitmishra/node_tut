const express = require ('express')
let { people } = require ('./data')


const app = express()
// static assets
app.use(express.static('./methods-public'))
// parse from data
app.use(express.urlencoded({extended: false}))
// parse json
app.use(express.json())

app.get('/api/people',(req,res)=>{
    res.status(200).json({success: true, data: people});
})

app.post('/api/people',(req,res)=>{
    const {name}=req.body
    if(!name){
        return res.status(400).json({success:false,msg:"please provide name value"})
    }
    res.status(201).json({success:true , person: name})
})

app.put('/api/people/:id',(req,res)=>{
    const {id} = req.params
    const {name} = req.body
    const person = people.find((person)=>person.id===Number(id))
    if(!person){
        return res.status(404).json({success:false , msg:`please provide with id ${id}`})
    }
    const newPeople = people.map((person)=>{
        if(person.id === Number(id)){
            person.name = name
        }
    })
    res.status(200).json({success:true , data:newPeople})
})

app.delete('/api/people/:id',(req,res)=>{
    const person = people.find((person)=>person.id===Number(req.params.id))
    if(!person){
        return res.status(404).json({success: false , msg:`no person with id ${eq.params.id}`})
    }
    const newPeople = people.filter((person)=>person.id !== Number(req.paramsid)
    )
    res.status(200).json({ success: true , data: newPeople })
})

app.post('/login',(req,res)=>{
    const {name} = req.body;
    if(name){
        console.log(name)
        return res.status(200).send(`Welcome ${name}`)
    }
    console.log(name);
    res.status(401).send('Please provide the credentials')
})

 
 
app.listen(3000,()=>{
    console.log("Server is listening on port 3000...");
})