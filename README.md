# Permalist
Este projeto é uma aplicação simples de lista de tarefas (todo list) utilizando Express, PostgreSQL e EJS para renderização no servidor.

# Descrição
A aplicação permite adicionar, editar e excluir tarefas de uma lista, com os dados sendo armazenados em um banco de dados PostgreSQL.

# Funcionalidades
 - Exibição de itens cadastrados no banco de dados.

- Adição de novos itens na lista.

- Edição de itens existentes.

- Exclusão de itens da lista.

# Tecnologias
- Node.js: Ambiente de execução para JavaScript no lado do servidor.

- Express: Framework para criar o servidor HTTP.

- PostgreSQL: Banco de dados relacional para armazenar as tarefas.

- EJS: Motor de template para renderização no servidor.

- body-parser: Middleware para parsing de dados enviados no corpo da requisição HTTP.

# Pré-requisitos
- Antes de rodar o projeto, é necessário:

- Ter o Node.js e npm instalados.

- Ter o PostgreSQL instalado e configurado localmente.

- Criar um banco de dados chamado permalist e uma tabela items com a seguinte estrutura:

``
CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL
);
``
