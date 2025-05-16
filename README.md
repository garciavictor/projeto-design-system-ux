# Projeto Design System & UX - FIAP 8AOJR

Este projeto foi inicializado com [Vite](https://vitejs.dev/)

## 📋 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
*   [Node.js](https://nodejs.org/en/) (versão 18.x ou superior recomendada)
*   [npm](https://www.npmjs.com/) (geralmente instalado com o Node.js) ou [Yarn](https://yarnpkg.com/)

## ⚙️ Instalação

Siga os passos abaixo para configurar o ambiente de desenvolvimento:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/garciavictor/projeto-design-system-ux
    ```

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd projeto-design-system-ux
    ```

3.  **Instale as dependências:**
    Com npm:
    ```bash
    npm install
    ```
    Ou com Yarn:
    ```bash
    yarn install
    ```

## ▶️ Rodando o Projeto

Para iniciar o servidor de desenvolvimento:

Com npm:
```bash
npm run dev
```
Ou com Yarn:
```bash
yarn dev
```
Isso iniciará o servidor de desenvolvimento, geralmente em `http://localhost:5173`. Abra este endereço no seu navegador para ver a aplicação.

## 🧪 Rodando os Testes (Snapshot Testing)

Os testes implementados neste projeto são principalmente **Testes de Snapshot** utilizando Vitest. Eles capturam o estado da UI de seus componentes e os comparam com uma versão de referência armazenada.

1.  **Para executar os testes uma vez:**
    Com npm:
    ```bash
    npm test
    ```
    Ou com Yarn:
    ```bash
    yarn test
    ```
## 📁 Estrutura de Pastas

```
projeto-design-system-ux/
├── screen/              # Prints da implementação do prototipo
├── public/              # Arquivos estáticos públicos
├── src/
│   ├── components/      # Componentes React reutilizáveis
│   ├── styles/          # Arquivos de estilo globais
│   ├── App.jsx          # Componente principal da aplicação
│   └── main.jsx         # Ponto de entrada da aplicação
├── .eslintrc.cjs        # Configuração do ESLint
├── .gitignore           # Arquivos ignorados pelo Git
├── index.html           # Template HTML principal
├── package.json         # Metadados do projeto e dependências
├── README.md            # Este arquivo
└── vite.config.js       # Configuração do Vite

## ⭐ Figma

- Components -> https://www.figma.com/design/bid1aEYdZCppS5joKNY8NU/Projeto---Design-System---UX--8AOJR-?node-id=0-1&t=62xm44zvfTft9SdB-1
- Protótipo -> https://www.figma.com/design/bid1aEYdZCppS5joKNY8NU/Projeto---Design-System---UX--8AOJR-?node-id=32-49&t=62xm44zvfTft9SdB-1
