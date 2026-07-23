# Mind Blog Backend

Backend da aplicação Blog System, desenvolvido como parte de um case técnico. A API permite o gerenciamento de usuários e artigos, incluindo autenticação com JWT, upload de imagens e controle de acesso baseado em autenticação.

## Tecnologias 🚀

- Node.js
- Express
- TypeScript
- MySQL
- JWT (JSON Web Token)
- bcrypt
- multer
- mysql2

## Funcionalidades

### Usuários

- Cadastro de usuários
- Listagem de usuários
- Busca de usuário por ID
- Senhas criptografadas com bcrypt
- Validação de email duplicado

### Autenticação

- Login utilizando email e senha
- Geração de token JWT
- Rotas protegidas por autenticação
- Identificação do usuário autenticado

### Artigos

- Listagem de artigos
- Busca de artigo por ID
- Criação de artigos
- Atualização de artigos
- Exclusão de artigos
- Upload de imagem (banner)

### Autorização

Usuários autenticados podem:

- Criar artigos
- Editar apenas os próprios artigos
- Excluir apenas os próprios artigos.

## Estrutura do projeto

```text
src
├── config
├── middleware
├── modules
│   ├── articles
│   └── users
├── types
├── app.ts
└── server.ts
```

## Instalação

Clone o repositório:

```bash
git clone <url-do-repositorio>
```

Instale as dependências:

```bash
npm install
```

## Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=blog_bd

JWT_SECRET=sua_chave_secreta
```

## Executando o projeto

Modo de desenvolvimento:

```bash
npm run dev
```

Compilar o projeto:

```bash
npm run build
```

Executar a versão compilada:

```bash
npm start
```

## Endpoints

### Autenticação

| Método | Rota |
|---------|------|
| POST | `/auth/login` |

### Usuários

| Método | Rota |
|---------|------|
| GET | `/users` |
| GET | `/users/:id` |
| POST | `/users` |

### Artigos

| Método | Rota |
|---------|------|
| GET | `/articles` |
| GET | `/articles/:id` |
| POST | `/articles` |
| PUT | `/articles/:id` |
| DELETE | `/articles/:id` |

## Upload de imagens

As imagens são armazenadas localmente na pasta:

```text
uploads/
```

e disponibilizadas através da rota:

```text
/uploads/<nome-da-imagem>
```

## Segurança

- Senhas criptografadas utilizando **bcrypt**.
- Autenticação baseada em **JWT**.
- Rotas protegidas por middleware de autenticação.
- Apenas o autor pode editar ou excluir os próprios artigos.

## Banco de dados

O projeto utiliza **MySQL**.

O arquivo de dump do banco de dados acompanha a entrega do projeto para facilitar a configuração do ambiente.

## Autor

Desenvolvido por **Sthefany Souza** como parte de um case técnico para processo seletivo.

LinkedIn: https://www.linkedin.com/in/sthefany-souza-silva

