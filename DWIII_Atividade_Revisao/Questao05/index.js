const fs = require('fs'); // Módulo para manipulação de arquivos 

const arquivoOrigem = 'estudantes.csv';
const arquivoDestino = 'export_relatorio.txt';
const dataAtual = new Date().toLocaleDateString('pt-BR');

// Cabeçalho personalizado solicitado
const cabecalho = `Relatório Gerado para FATEC - ${dataAtual}\n\n`;

// 1. Lemos o conteúdo original do arquivo CSV 
fs.readFile(arquivoOrigem, 'utf-8', (err, conteudoOriginal) => {
    if (err) {
        console.error("Erro ao ler o arquivo de estudantes:", err);
        return;
    }

    // 2. Concatenamos o cabeçalho com os dados lidos
    const conteudoFinal = cabecalho + conteudoOriginal;

    // 3. Geramos o novo arquivo export_relatorio.txt
    fs.writeFile(arquivoDestino, conteudoFinal, (err) => {
        if (err) {
            console.error("Erro ao gerar o relatório:", err);
            return;
        }
        console.log(`Relatório exportado com sucesso para: ${arquivoDestino}`);
    });
});