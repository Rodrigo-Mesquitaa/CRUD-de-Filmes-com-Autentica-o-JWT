# CRUD-de-Filmes-com-Autentica-o-JWT
Este é um exemplo de aplicação Node.js usando Nest.js para implementar um CRUD (Create, Read, Update, Delete) de filmes com autenticação JWT. A aplicação também inclui validação de informações, dockerização e testes para garantir o seu funcionamento correto.


### Tecnologias Utilizadas
. Tecnologias Utilizadas
. Nest.js
. TypeORM
. JWT (JSON Web Tokens)
. Docker
. Redis
. PostgreSQL
. Jest (para testes unitários e de integração)
. Supertest (para testes de integração)
. class-validator (para validação de dados)
. bcrypt (para hash de senhas)

### Pré-requisitos

- Node.js (v14+)
- Docker
- Docker Compose

### Instalação
1. Clone este repositório:

git clone https://github.com/Rodrigo-Mesquitaa/CRUD-de-Filmes-com-Autentica-o-JWT.git

2. Acesse o diretório do projeto:

npm install

### Configuração

1. Renomeie o arquivo .env.example para .env e configure as variáveis de ambiente conforme necessário, incluindo as informações de conexão com o PostgreSQL e Redis, e a chave secreta para JWT.

2. Certifique-se de que o PostgreSQL e o Redis estejam em execução, ou utilize o Docker Compose para iniciar os serviços:

docker-compose up -d

### Banco de Dados
O banco de dados PostgreSQL será criado automaticamente com as migrações do TypeORM. Certifique-se de que o PostgreSQL esteja em execução e configurado corretamente conforme as variáveis de ambiente definidas no arquivo .env.

### Execução
Para iniciar a aplicação, execute o seguinte comando:

npm run start:dev

A aplicação estará disponível em 'http://localhost:3000.'

### Uso
Acesse a documentação da API em http://localhost:3000/api/docs para obter detalhes sobre os endpoints e como usá-los.

Para autenticar-se e obter um token JWT, envie uma solicitação POST para /auth/login com as credenciais de usuário. Use o token JWT recebido para acessar os endpoints protegidos.

### Testes

Para executar os testes unitários, use o seguinte comando:

- npm run test

- npm run test:e2e

### Contribuição
Sinta-se à vontade para enviar pull requests, reportar problemas ou propor novos recursos!

Este README fornece instruções detalhadas sobre como configurar, executar e usar a aplicação, incluindo informações sobre as tecnologias utilizadas, configurações, banco de dados e testes. Certifique-se de personalizá-lo conforme necessário para o seu projeto específico.