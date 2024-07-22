
# Book Management API

Esta é uma API para gerenciar livros, construída com Node.js, Express e MongoDB.

## Descrição do Projeto

Esta API permite que você gerencie um catálogo de livros, incluindo operações de criação, leitura, atualização e exclusão (CRUD).

## Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/get-started)

Além disso, é bom ter um editor para trabalhar com o código, como o [VSCode](https://code.visualstudio.com/).

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/BrunoWAS/project_bookmanagement.git
   cd project_bookmanagement
   ```

2. Instale as dependências do projeto:

   ```bash
   npm install
   ```

## Configuração do Ambiente

### Executando o MongoDB com Docker

1. Certifique-se de que o Docker está em execução na sua máquina.

2. Execute o seguinte comando para iniciar um contêiner MongoDB:

   ```bash
   docker run --name mongodb -p 27017:27017 -d mongo
   ```

   Isso criará um contêiner do MongoDB ouvindo na porta padrão 27017.

### Variáveis de Ambiente

- Crie um arquivo `.env` na raiz do projeto e configure as seguintes variáveis:

   ```
   MONGO_URI=mongodb://localhost:27017/bookdb
   PORT=3000
   ```

   Certifique-se de que o `MONGO_URI` está apontando para o seu contêiner MongoDB.

## Executando o Projeto

1. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

   Isso iniciará o servidor com o `nodemon`, permitindo a recarga automática durante o desenvolvimento.

2. Acesse a API no endereço `http://localhost:3000`.

## Testando a API

Você pode usar o Postman ou qualquer outra ferramenta de sua escolha para testar os endpoints da API. A API suporta as seguintes operações:

- **GET** /books - Retorna todos os livros
- **GET** /books/:id - Retorna um livro específico
- **POST** /books - Adiciona um novo livro
- **PUT** /books/:id - Atualiza um livro existente
- **DELETE** /books/:id - Remove um livro


