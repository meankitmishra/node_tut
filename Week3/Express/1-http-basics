const http = require ('http')

const server = http.createServer((req,res)=>{


    if(req.url === '/'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1> Home Page </h1>')
        res.end()
    }

    else if(req.url === '/about'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>this is some of our information</h1>')
        res.end()
    }

    else {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>404 Page not found</h1>')
        res.end()    
    }
}).listen(3000)