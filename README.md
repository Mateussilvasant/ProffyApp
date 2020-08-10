
<p align="center">
    <img alt="NextLevelWeek" title="#NextLevelWeek" src="https://github.com/Mateussilvasant/ProffyApp/blob/master/web/src/assets/images/landing.svg" />
</p>

<h2 align="center"> 
	  Aplicação Proffy  <a href="">
  <img alt="Versão v1.0" src="https://img.shields.io/badge/Vers%C3%A3o-v1.0-lightgrey">
</a>
</h2>

<h2>Status:     <a href="">
  <img alt="Desenvolvimento: 100%" src="https://img.shields.io/badge/Desenvolvimento-100%25-blue">
</a>
 </h2> 




<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-contribuidores">Contribuidores</a> • 
 <a href="#-autor">Autor</a> • 
 <a href="#user-content--licença">Licença</a>
</p>


##  Sobre o projeto

Proffy é uma forma de conectar professores e alunos, professores que queiram dar aulas podem cadastrar-se na plataforma e alunos podem escolher
professores de acordo com matéria desejada, horário de disponibilidade e assim entrar em contato direto com professor escolhido.

Projeto desenvolvido durante o evento **NLW - Next Level Week #2** oferecida pela [Rocketseat](https://rocketseat.com.br/).
O NLW é uma experiência online com muito conteúdo prático, desafios e hacks onde o conteúdo fica disponível durante uma semana.

---

## ⚙️ Funcionalidades

- [x] Professores  podem se cadastrar na plataforma web enviando:


  - [x] o link de uma imagem de perfil
  
  - [x] nome completo, número do WhatsApp e biografia
  
  - [x] selecionar a matéria e informar o custo da aula
  
  - [x] além de selecionar dia e hora disponíveis para aula a ser cadastrada.
    
- [x] Alunos podem acessar diretamente a página de professores onde poderá filtrar por


  - [x] matéria como por Ex(Matemática, Química, Física e etc.)
  
  - [x] dia da semana por Ex(Segunda-feira, Terça-feira... por diante)
  
  - [x] horário que deseja ter a aula.
  
  - [x] Alunos podem também conectar com professor escolhido e entrar em contato diretamente com ele via WhatsApp


- [x] Os usuários tem acesso ao aplicativo móvel, onde podem:

  - [x] filtrar professores por matéria, dia da semana e horário assim como na versão web
  
  - [x] acessar os professores favoritos
  
  - [x] adicionar um professor nos favoritos ou remove-lo dos favoritos
  
  - [x] assim como na versão web poderá também conectar e entrar contato direto com professor escolhido.

---

## 🚀 Como executar o projeto

Este projeto é divido em três partes:
1. Backend (pasta server) 
2. Frontend (pasta web)
3. Mobile (pasta mobile)

💡Tanto o Frontend quanto o Mobile precisam que o Backend esteja sendo executado para funcionar.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🎲 Rodando o Backend (servidor)

```bash

# Clone este repositório
$ git clone https://github.com/Mateussilvasant/ProffyApp.git

# Acesse a pasta do projeto no terminal/cmd
$ cd ProffyApp

# Vá para a pasta server
$ cd server

#depois vá para pasta api
$ cd api

# Instale as dependências
$ yarn install

# Execute a aplicação em modo de desenvolvimento
$ yarn start

# O servidor inciará na porta:3333 - acesse http://localhost:3333 


#### 🧭 Rodando a aplicação web (Frontend)

```bash

# Acesse a pasta do projeto no seu terminal/cmd
$ cd ProffyApp

# Vá para a pasta da aplicação Front End
$ cd web

# Instale as dependências
$ yarn install

# Execute a aplicação em modo de desenvolvimento
$ yarn start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000

```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Website**  ([React](https://reactjs.org/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)**
-   **[Axios](https://github.com/axios/axios)**

> Veja o arquivo  [package.json](https://github.com/Mateussilvasant/ProffyApp/blob/master/web/package.json)

#### [](https://github.com/tgmarinho/Ecoleta#server-nodejs--typescript)**Server**  ([NodeJS](https://nodejs.org/en/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Express](https://expressjs.com/)**
-   **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
-   **[KnexJS](http://knexjs.org/)**
-   **[Mysql](https://github.com/mysqljs/mysql)**

> Veja o arquivo  [package.json](https://github.com/Mateussilvasant/ProffyApp/blob/master/server/api/package.json)

#### [](https://github.com/tgmarinho/Ecoleta#mobile-react-native--typescript)**Mobile**  ([React Native](http://www.reactnative.com/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Expo](https://expo.io/)**
-   **[Expo Google Fonts](https://github.com/expo/google-fonts)**
-   **[React Navigation](https://reactnavigation.org/)**
-   **[React Native SVG](https://github.com/react-native-community/react-native-svg)**
-   **[Axios](https://github.com/axios/axios)**

> Veja o arquivo  [package.json](https://github.com/Mateussilvasant/ProffyApp/blob/master/mobile/package.json)

#### [](https://github.com/tgmarinho/Ecoleta#utilit%C3%A1rios)**Utilitários**

-   Protótipo:  **[Figma](https://www.figma.com/)**  →  **[Protótipo Web (Proffy)](https://www.figma.com/file/TIcmgMyNaa2Qcb0l6bemRH/Proffy-Web-(Copy)?node-id=0%3A1)** &&  **[Protótipo Mobile (Proffy)](https://www.figma.com/file/7jbvh2rlemuvtWI37JQJAz/Proffy-Mobile-(Copy)?node-id=0%3A1)**
-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**  → Extensions:  **[SQLite](https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite)**
-   Teste de API:  **[Insomnia](https://insomnia.rest/)**
-   Fontes:  **[Archivo](https://fonts.google.com/specimen/Archivo)**,  **[Poppins](https://fonts.google.com/specimen/Poppins)**


---

## 👨‍💻 Contribuidores

<table>
  <tr>
    <td align="center"><a href="https://github.com/Mateussilvasant"><img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/26354464?s=460&u=47e7e207e0eda6904f2115979e5a14acef263a1e&v=4" width="100px;" alt=""/><br /><sub><b>Mateus Silva</b></sub></a><br />
  </tr>
</table>

##  Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
> Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](./CONTRIBUTING.md)

---

##  Autor

 <img style="border-radius: 50%;" src="https://avatars2.githubusercontent.com/u/26354464?s=460&u=47e7e207e0eda6904f2115979e5a14acef263a1e&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Mateus Silva</b></sub></a></a>
 <br />

[![Linkedin Badge](https://img.shields.io/badge/-Mateus-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/mateus-silva-b79054128/)](https://www.linkedin.com/in/mateus-silva-b79054128/) 

---

##  Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito por Mateus Silva, agradeço a visita... 👋🏽 [Entre em contato!](https://www.linkedin.com/in/mateus-silva-b79054128/)

---
