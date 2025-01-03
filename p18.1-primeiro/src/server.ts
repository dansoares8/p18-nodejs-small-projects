import { createServer } from 'node:http';

const server = createServer((req, res) => {
    res.end("OLA MUNDOOOOO! Brasil");
});

server.listen(3000, () => {
    console.log('Servidor funcionando em http://localhost:3000');
});

