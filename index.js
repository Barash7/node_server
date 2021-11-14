const http = require('http')

const listener = (req, res) => {
    res.writeHead(200)
    res.end('Hello world 1234')
}

const server = http.createServer(listener)
server.listen(8080)