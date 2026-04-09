# FATEC Diadema - Desenvolvimento Web III 🌐

Este repositório reúne as atividades práticas e projetos de revisão desenvolvidos para a disciplina de **Desenvolvimento Web III**. O foco principal é a exploração de ambientes **Node.js** e o ecossistema **Java/Spring**.

## 🚀 Tecnologias Utilizadas

<div align="center">
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white" />
  <img src="https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white" />
  <img src="https://img.shields.io/badge/json-5E5E5E?style=for-the-badge&logo=json&logoColor=white" />
</div>

---

## 📂 Conteúdo do Repositório

### 🟢 Atividades Node.js (Revisão P1)
Resolução de exercícios práticos focados em infraestrutura e backend básico:

* **Manipulação de Arquivos (FS):** Leitura assíncrona de arquivos `config.json` e exportação de relatórios `.txt` a partir de dados em `.csv`.
* **Gestão de Logs:** Implementação de sistema de logs com persistência de dados em `log.txt`, utilizando `fs.appendFile` para registrar acessos com data e hora local.
* **Servidores HTTP Nativos:** Criação de APIs sem frameworks externos, configurando manualmente `Content-Type` para respostas em **HTML** e **JSON**.
* **Roteamento Institucional:** Lógica de tratamento de URLs (`req.url`) e gerenciamento de códigos de status HTTP (200 OK, 404 Not Found).

### ☕ Projetos Java / Spring Boot
* **Arquitetura em Camadas:** Organização de projetos seguindo os padrões **Entity**, **Repository**, **Service** e **Resource**.
* **Persistência:** Integração com bancos de dados e mapeamento objeto-relacional (ORM).

---

## 🛠️ Como Executar os Projetos Node.js

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/carolinecarvalho06/Dev.WebIII_RevisaoProva.git](https://github.com/carolinecarvalho06/Dev.WebIII_RevisaoProva.git)
    ```
2.  **Acesse a pasta da questão desejada:**
    ```bash
    cd Questao05
    ```
3.  **Inicie o projeto e execute:**
    ```bash
    npm install
    npm run export # Exemplo para a Questão 05
    ```

## 📝 Scripts Disponíveis
* `npm start`: Inicia o servidor principal.
* `npm run export`: Gera relatórios automatizados de alunos.

---
<p align="center">
  Desenvolvido por <strong>Caroline Carvalho</strong> ✨
