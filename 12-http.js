//http module

const http = require('http')

const server = http.createServer((req,res)=>{

    if(req.url === '/'){
        res.end('Welcome to homepage')
    }

    if(req.url === '/about'){
        res.end('Welcome to the about page')
    }
    
    res.end(`
    <h1> OOps !</h1>

    <p> It seems the page you are looking for does not exist</p>
    <a href="/">back to homepage</a>
    `)
})

server.listen(5000)