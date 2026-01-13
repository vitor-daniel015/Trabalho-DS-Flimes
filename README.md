
# Trabalho DS - Portal de Filmes e Cadastro

Este é um projeto de desenvolvimento web que consiste em um portal de filmes integrado a um sistema de cadastro de usuários. A aplicação consome a API do TMDB (The Movie Database) para exibir filmes populares e realizar buscas, além de utilizar o Firebase Firestore para persistência de dados dos usuários.

## 📋 Sobre o Projeto

O projeto foi dividido em duas partes principais:
1.  **Backend (Node.js + Express):** Responsável por intermediar as chamadas à API do TMDB (para proteger as chaves de acesso) e gerenciar o banco de dados Firebase para cadastro e consulta de usuários.
2.  **Frontend (HTML/CSS/JS):** Interface do usuário para navegação, busca de filmes e formulários de cadastro.

### 🚀 Funcionalidades

* **Filmes Populares:** Exibição automática dos filmes mais populares do momento na página inicial.
* **Busca de Filmes:** Barra de pesquisa para encontrar filmes específicos utilizando a API do TMDB.
* **Cadastro de Usuários:** Formulário para registrar usuários com nome, e-mail, localização, idade e filme favorito.
* **Consulta de Usuários:** Listagem de todos os usuários cadastrados no banco de dados.

## 🛠 Tecnologias Utilizadas

* **Backend:**
    * [Node.js](https://nodejs.org/)
    * [Express](https://expressjs.com/)
    * [Firebase Admin SDK](https://firebase.google.com/docs/admin/setup) (Firestore)
    * [Node-fetch](https://www.npmjs.com/package/node-fetch) (para requisições HTTP externas)
    * [Cors](https://www.npmjs.com/package/cors)
* **Frontend:**
    * HTML5
    * CSS3
    * JavaScript (Vanilla)

## 📂 Estrutura de Arquivos

```text
Trabalho-vividio/
├── public/                 # Arquivos do Frontend
│   ├── assets/
│   │   ├── css/            # Estilos (index.css)
│   │   └── js/             # Lógica do Frontend (main.js)
│   ├── cadastro.html       # Página de cadastro
│   ├── consulta.html       # Página de listagem de usuários
│   └── index.html          # Página inicial (Portal de Filmes)
│
├── server/                 # Arquivos do Backend
│   ├── index.js            # Servidor Express e rotas da API
│   ├── package.json        # Dependências do projeto
│   └── .env                # Variáveis de ambiente (se aplicável)
│
└── .gitignore

```

## ⚙️ Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:

* [Node.js](https://nodejs.org/en/) (versão LTS recomendada)
* Gerenciador de pacotes `npm` (geralmente vem com o Node.js)

## 🔧 Instalação e Configuração

### 1. Configurando o Backend

Navegue até a pasta do servidor e instale as dependências:

```bash
cd Trabalho-vividio/server
npm install

```

**Nota Importante sobre o Firebase:**
O arquivo `index.js` espera encontrar uma chave de conta de serviço do Firebase para autenticação (arquivo `.json`).

1. Certifique-se de ter o arquivo `ds-atividade-firebase-adminsdk-fbsvc-e4051963b7.json` (ou atualize o caminho no `index.js` para o nome correto da sua credencial).
2. Coloque este arquivo dentro da pasta `server/`.

### 2. Executando o Servidor

Ainda na pasta `server`, inicie a API:

```bash
npm start

```

O servidor rodará na porta **8080** (`http://localhost:8080`).

> **Atenção:** O servidor backend precisa estar rodando para que o frontend funcione corretamente (tanto para buscar filmes quanto para salvar usuários).

### 3. Executando o Frontend

Como o frontend é feito com HTML estático, você pode abrir os arquivos diretamente no navegador, mas é recomendável usar uma extensão como o **Live Server** (VS Code) ou abrir manualmente o arquivo:

1. Vá até a pasta `public/`.
2. Abra o arquivo `index.html` no seu navegador.

## 📡 Endpoints da API (Backend)

O servidor local disponibiliza as seguintes rotas:

| Método | Rota | Descrição |
| --- | --- | --- |
| `GET` | `/apiKp/tmdb/popular` | Retorna a lista de filmes populares do TMDB. |
| `GET` | `/api/tmdb/search?q={termo}` | Busca filmes pelo nome. |
| `POST` | `/api/register` | Cadastra um novo usuário no Firestore. |
| `GET` | `/api/users` | Retorna todos os usuários cadastrados. |

## 📝 Autor

Desenvolvido por Vitor Daniel
