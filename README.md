# Story Sense RPG

Protótipo navegável em HTML, CSS e JavaScript para uma aplicação de apoio a mestres de RPG de mesa.

O projeto tem como objetivo demonstrar uma aplicação que utiliza conceitos de inteligência artificial para auxiliar mestres na criação de campanhas, personagens, desafios, pistas e one-shots personalizadas com base no perfil narrativo dos jogadores.

> Nesta etapa, o projeto não possui backend, banco de dados ou integração real com IA.  
> As páginas serão navegáveis e os dados serão simulados no próprio front-end.

---

## 1. Objetivo do Projeto

O Story Sense RPG é uma aplicação pensada para apoiar mestres de RPG durante a preparação de mesas narrativas.

A ideia central é permitir que o mestre:

- Cadastre mesas de RPG;
- Registre jogadores participantes;
- Apresente termos de consentimento e privacidade;
- Simule uma etapa de escuta e análise da mesa;
- Gere perfis narrativos dos jogadores;
- Receba sugestões de personagens, desafios, pistas e conflitos;
- Monte one-shots completas;
- Revise e edite o material antes de usar em jogo.

---

## 2. Contexto da Aplicação

Durante uma mesa de RPG, cada jogador possui um estilo diferente de participação.

Alguns jogadores gostam de investigação.  
Outros preferem combate.  
Alguns focam em interpretação, drama, mistério, enigmas ou interação social.

O Story Sense propõe uma solução em que a IA auxiliaria o mestre a entender melhor esses estilos e transformar essas informações em material narrativo útil.

Nesta versão inicial, a aplicação será apenas um protótipo visual navegável.

---

## 3. Escopo desta Versão

Esta primeira versão contempla apenas o front-end.

### Incluído nesta etapa

- Páginas HTML separadas;
- Estrutura organizada de pastas;
- Navegação entre páginas;
- Layout base da aplicação;
- Telas de cadastro e consulta;
- Dados simulados;
- Botões e fluxos visuais;
- Área de revisão do mestre;
- Exemplo de one-shot no estilo D&D.

### Fora do escopo nesta etapa

- Backend;
- Login real;
- Banco de dados;
- Captura real de câmera;
- Captura real de microfone;
- Processamento real de IA;
- Armazenamento de dados sensíveis;
- Integração com APIs externas.

---

## 4. Tecnologias Utilizadas

O protótipo será desenvolvido com:

- HTML5;
- CSS3;
- JavaScript puro;
- Estrutura de páginas separadas;
- Dados simulados em arquivos JSON.

Futuramente, o projeto poderá receber:

- Backend em Python, Flask ou Node.js;
- Banco de dados;
- Sistema de autenticação;
- API de IA;
- Controle real de permissões;
- Armazenamento seguro de consentimentos.

---

## 5. Estrutura de Pastas

```txt
storySenseRPG/
│
├── README.md
│
├── index.html
├── login.html
├── dashboard.html
│
├── pages/
│   ├── mesas/
│   ├── consentimento/
│   ├── analise/
│   ├── gerador/
│   ├── oneshot/
│   ├── revisao/
│   └── configuracoes/
│
├── static/
│   ├── css/
│   ├── js/
│   ├── img/
│   └── data/