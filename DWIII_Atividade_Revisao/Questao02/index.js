const fs = require('fs'); // Módulo essencial para manipular arquivos [cite: 129, 145]

const arquivoLog = 'log.txt';
const dataAtual = new Date().toLocaleString('pt-BR');
const novaEntrada = `Novo acesso registrado em: ${dataAtual}\n`;

// A função fs.appendFile verifica se o arquivo existe. 
// Se existir, ela adiciona o texto ao final; se não existir, ela cria o arquivo automaticamente.
fs.appendFile(arquivoLog, novaEntrada, (err) => {
  if (err) {
    console.error("Erro ao processar o log:", err);
    return;
  }
  console.log("Log atualizado com sucesso!");
});