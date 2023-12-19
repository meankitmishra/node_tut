const http = require ('http')

const { readFileSync } = require ('fs')

//get all files
const homePage = readFileSync('./navbar-app/index.html')
const aboutPage= readFileSync('./about.html')
const errorPage = readFileSync('./error.html')
const homePageStyles = readFileSync('./navbar-app/styles.css')
const logo = readFileSync('./navbar-app/logo.svg')
const navbarlogic = readFileSync('./navbar-app/browser-app.js')


const server = http.createServer((req,res)=>{

    const url = req.url

    if(url === '/'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(homePage)
        res.end()
    }

    else if(url === '/about'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(aboutPage)
        res.end()
    }

    else if(url === '/styles.css'){
        res.writeHead(200, {'content-type': 'text/css'})
        res.write(homePageStyles)
        res.end()
    }

    else if(url === '/logo.svg'){
        res.writeHead(200, {'content-type': 'image/svg+xml'})
        res.write(logo)
        res.end()
    }

    else if(url === '/browser-app.js'){
        res.writeHead(200, {'content-type': 'text/javascript'})
        res.write(navbarlogic)
        res.end()
    }

    else {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(errorPage)
        res.end()    
    }
}).listen(3000)