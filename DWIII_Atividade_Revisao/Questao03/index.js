const http = require('http'); // Cria o servidor HTTP

const server = http.createServer((req, res) => { 
  const path = req.url;

  // Rota Raiz (/)
  if (path === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1>Portal de APIs Acadêmicas</h1>');
  } 
  // Rota /instituicao
  else if (path === '/instituicao') {
    const dadosInstituicao = {
      nome: "Faculdade Tecnológica de São Paulo",
      cidade: "São Paulo",
      status: "online"
    };
    
    // Configura o Content-Type para JSON
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify(dadosInstituicao)); // Converte o objeto JavaScript em uma string JSON
  } 
  // Rota não encontrada (404)
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Recurso não encontrado.');
  }
});

const PORT = 3000;

// Inicia o servidor na porta especificada
server.listen(PORT, () => { 
  console.log(`Servidor rodando em http://localhost:${PORT}/`); 
});