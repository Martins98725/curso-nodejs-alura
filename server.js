import http from 'http';

const server = http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('Curso node.js')
});

const port = 3000

server.listen(port, () =>{
    console.log('Servidor rodando na porta 3000')
});