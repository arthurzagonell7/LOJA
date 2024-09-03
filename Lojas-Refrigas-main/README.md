[Node.js]
[MySQL]

   DB_HOST= localhost
   DB_USER= root
   DB_PASSWORD= root
   DB_NAME= lojavirtual
   PORT= 3000

Instale o express: npm i express

Configuração do Banco de Dados

CREATE TABLE Usuarios (
    UsuarioID INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(100) NOT NULL,
    Email VARCHAR(100) UNIQUE NOT NULL,
    Senha VARCHAR(255) NOT NULL,
    Endereco VARCHAR(255),
    DataCadastro DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Produtos (
    ProdutoID INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(100) NOT NULL,
    Descricao TEXT,
    Preco DECIMAL(10, 2) NOT NULL,
    Estoque INT NOT NULL,
    CategoriaID INT
);

Testando as APIs

Inicie o servidor Express com o seguinte comando: npm start

(http://localhost:3000/)

Exemplos de Requisições

1. Cadastrar Usuário

- Endpoint: POST /usuarios/cadastrar
- Corpo da Requisição:


   {
     "nome": "João",
     "email": "joao@example.com",
     "senha": "senha123",
     "endereco": "Rua Exemplo, 123"
   }


2. Listar Usuários

- Endpoint: POST /usuarios/listar
- Corpo da Requisição:

   {
     "email": "joao@example.com",
     "senha": "senha123",
     "nome": "João"
   }


3. Editar Usuário

- Endpoint: PUT /usuarios/editar/:id
- Corpo da Requisição:

   {
     "name": "João Silva"
   }
 

4. Deletar Usuário

-Endpoint: DELETE /usuarios/deletar/:id



5. Cadastrar Produto

- Endpoint: POST /produtos/cadastrar`
- Corpo da Requisição:

   {
     "nome": "Produto Exemplo",
     "descricao": "Descrição do produto",
     "preco": 99.99,
     "estoque": 10
   }
  

6. Editar Produto

- Endpoint: POST /produtos/editar/:id
- Corpo da Requisição:

   {
     "name": "Produto Exemplo Atualizado"
   }

7. Listar Produtos

- Endpoint: POST /produtos/listar
- Corpo da Requisição:


   {
     "nome": "Produto Exemplo"
   }


8. Deletar Produto
Endpoint: DELETE /produtos/deletar/:id