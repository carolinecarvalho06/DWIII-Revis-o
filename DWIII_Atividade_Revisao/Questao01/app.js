const fs = require('fs'); // Importa o módulo fs para interagir com o sistema de arquivos [cite: 129, 145]

// Realiza a leitura assíncrona do arquivo de configuração [cite: 156]
fs.readFile('config.json', 'utf-8', (err, data) => {
  if (err) { // Lida com possíveis erros durante a leitura [cite: 158]
    console.error("Erro ao ler o arquivo:", err);
    return; // Encerra a execução caso ocorra um erro [cite: 161]
  }

  // Converte a string JSON lida em um objeto JavaScript nativo
  const config = JSON.parse(data);

  // Exibe a mensagem formatada no console com os dados do arquivo
  console.log(`Configuração carregada para o curso ${config.curso} no campus ${config.campus}`);
});