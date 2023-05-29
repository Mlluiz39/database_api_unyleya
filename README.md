# API de Produtos

Essa é uma API para gerenciar produtos, utilizando as seguintes dependências:

- [express](https://expressjs.com/): Framework web para Node.js.
- [Sequelize](https://sequelize.org/): ORM (Object-Relational Mapping) para trabalhar com bancos de dados relacionais.
- [cors](https://www.npmjs.com/package/cors): Middleware para habilitar o CORS (Cross-Origin Resource Sharing).
- [dotenv](https://www.npmjs.com/package/dotenv): Carrega variáveis de ambiente de um arquivo `.env`.
- [pg](https://www.npmjs.com/package/pg): Cliente PostgreSQL para Node.js.
- [pg-hstore](https://www.npmjs.com/package/pg-hstore): Serializador/desserializador de dados JSON para o PostgreSQL.
- [multer](https://www.npmjs.com/package/multer): Middleware para lidar com upload de arquivos.
- [Yup](https://github.com/jquense/yup): Biblioteca para validação de dados.

## Instalação

Certifique-se de ter o Node.js e o PostgreSQL instalados em sua máquina antes de prosseguir.

1. Clone o repositório do projeto:
git clone https://github.com/Mlluiz39/database_api_unyleya


2. Acesse o diretório do projeto:


cd database_api_unyleya


3. Instale as dependências utilizando o npm ou yarn:


4. Crie um arquivo `.env` na raiz do projeto e configure as variáveis de ambiente necessárias. 

### Veja um exemplo abaixo:


DB_HOST=localhost

DB_PORT=5432

DB_NAME=nomedobanco

DB_USER=seuusuario

DB_PASSWORD=suasenha


5. Crie um banco de dados PostgreSQL correspondente ao nome configurado em `DB_NAME`.


6. Execute as migrações do banco de dados para criar as tabelas necessárias:


npx sequelize-cli db:migrate
yarn sequelize-cli db:migrate


7. Inicie o servidor com os comandos abaixo:


npm start
yarn start


Agora a API estará rodando em `http://localhost:3000`.

## Rotas

A API expõe as seguintes rotas:

- `GET /produtos`: Retorna todos os produtos.
- `GET /produtos/:id`: Retorna um produto pelo seu ID.
- `POST /produtos`: Cria um novo produto.
- `PUT /produtos/:id`: Atualiza um produto existente.
- `DELETE /produtos/:id`: Deleta um produto.

## Contribuição

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver alguma sugestão, por favor, abra uma issue ou envie um pull request para este repositório.

## Licença

Este projeto está licenciado sob a licença [MIT](LICENSE).

