const http = require('http'); 

const server = http.createServer((req, res) => {
  // É necessário definir a variável path usando req.url
  const path = req.url; 

  const headers = { 'Content-Type': 'text/plain; charset=utf-8' };

  if (path === '/fatec') {
    res.writeHead(200, headers);
    res.end("Bem-vindo à Faculdade de Tecnologia");
  } 
  else if (path === '/fecap') {
    res.writeHead(200, headers);
    res.end("Bem-vindo a FATEC Diadema");
  } 
  else {
    // Status 404 indica que o recurso não foi encontrado
    res.writeHead(404, headers);
    res.end("Recurso não encontrado no servidor");
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Roteador FATEC rodando em http://localhost:${PORT}/`);
});