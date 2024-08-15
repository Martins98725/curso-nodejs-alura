import http from 'http';

const port = 3000

const routes = {
    '/': "Curso de node.js",
    '/livros': 'teste de livros'
};  

const server = http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end(routes[req.url])
});

server.listen(port, () =>{
    console.log('Servidor rodando na porta 3000')
});