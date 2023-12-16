const http = require('http')


const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welcome to our page')
    }
    else if(req.url==='/about'){
        res.end('This is some of our information')
    }else{
    res.write(`
    <h1>Opps!</h1>
    <p>The page you are looking for not found</p>
    <a href="/">Back home</a>
    `)
    res.end()
    }
    
})

server.listen(4000)