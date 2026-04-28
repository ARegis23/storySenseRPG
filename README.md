# Story Sense RPG

Protótipo web navegável de uma aplicação com IA para auxiliar mestres de RPG na criação de campanhas personalizadas a partir do perfil narrativo dos jogadores.

## Objetivo

O projeto demonstra como uma aplicação poderia apoiar o mestre em uma mesa de RPG, simulando um fluxo com:

- criação da mesa;
- aceite de consentimento dos jogadores;
- observação visual da socialização inicial;
- painel com perfis narrativos sugeridos;
- geração de campanha, NPCs, cenas e desafios.

> Esta versão não possui backend, autenticação, banco de dados ou captura real de áudio e vídeo. O objetivo é demonstrar telas, fluxo, requisitos e experiência visual para apresentação acadêmica e portfólio.

## Telas do protótipo

1. Início
2. Como funciona
3. Funcionalidades principais
4. Login do mestre
5. Criar nova mesa
6. Consentimento dos jogadores
7. Observação da mesa
8. Painel do mestre
9. Campanha gerada

## Tecnologias

- React
- Vite
- CSS puro
- Lucide React

## Como rodar no VS Code

Instale as dependências:

```bash
npm install
```

Rode o projeto:

```bash
npm run dev
```

Abra o link mostrado no terminal, geralmente:

```txt
http://localhost:5173
```

## Estrutura

```txt
story-sense-rpg/
├── public/
├── src/
│   ├── components/
│   ├── data/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
└── README.md
```

## Observação ética

O Story Sense RPG é apresentado como uma ideia de solução com IA, mas qualquer versão real precisaria garantir consentimento claro, privacidade, transparência, controle dos dados e opção de recusa dos jogadores.
