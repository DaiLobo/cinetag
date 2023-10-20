<div align="center">
  <img src="https://github.com/DaiLobo/cinetag/assets/47689708/25aa36bc-f7b5-4d0c-ac31-3d018cef6763" alt="Cine Tag">
</div>

<h4 align="center"> 
	📌 Concluído: Acesse o projeto <a href="https://cinetag-murex.vercel.app">Cine Tag</a>
</h4>

## 📝 Sobre

Esta aplicação feita com React permite aos usuários explorar vídeos por meio de cards, favoritando e assistindo aos vídeos caso clique em algum card. Os usuários podem marcar vídeos como favoritos e assisti-los com facilidade, simplificando a gestão de conteúdo de vídeo.

<br>

![image](https://github.com/DaiLobo/cinetag/assets/47689708/1f43111c-3abd-4361-81dd-162e791f27f7)

<br>

## :bookmark: Índice

<br>
<p align="center">
 <a href="#-pré-requisitos">Pré-requisitos</a> •
 <a href="#-instalação">Instalação</a> • 
 <a href="#-executando-o-projeto">Executando o Projeto</a> • 
 <a href="#-rotas">Rotas</a> • 
 <a href="#-funcionalidades-do-projeto">Funcionalidades do projeto</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#%EF%B8%8F-autora">Autora</a>
</p>
<br>

## 📋&nbsp; Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

## 🔧 Instalação

```bash
# Clone este repositório
$ git clone https://github.com/seu-usuario/cinetag.git

# Acesse a pasta do projeto no terminal/cmd
$ cd cinetag

# Instale as dependências
$ yarn
```

## 🎬 Executando o Projeto

```bash
yarn start
```
A aplicação estará disponível em http://localhost:3000.

<hr/>

## 🗺 Rotas

- Página Inicial (/)
    - Apresenta um cabeçalho com links "Início" (/) e "Favoritos" (/favoritos) e um banner.
    - Oferece uma seleção de cards relacionados a vídeos, onde a imagem representa o autor do vídeo e o título é o nome do vídeo, com a opção de favoritar.
- Página Favoritos (/favoritos)
    - Exibe os cards que foram marcados como favoritos na página inicial.
- Página de Player (/[id])
    - Apresenta o player de vídeo do YouTube para assistir o conteúdo do card selecionado.
 
<hr/>

## 👨🏾‍💻 Funcionalidades do projeto

Esta é uma aplicação completa em React que oferece uma experiência de navegação intuitiva. A página inicial apresenta uma série de cards, cada um deles direcionando o usuário para uma página exclusiva com seu respectivo vídeo. Além disso, a aplicação inclui uma página de "Favoritos", na qual são exibidos os cards que foram marcados como favoritos na página inicial.

Para aprimorar a funcionalidade de favoritos e o gerenciamento de rotas dinâmicas, esta aplicação utiliza o Context API do React. Isso permite compartilhar as informações dos cards favoritados em toda a aplicação, tornando o processo de adição e remoção de favoritos mais eficiente. Além disso, as rotas dinâmicas são usadas para redirecionar o usuário para o vídeo associado ao card, proporcionando uma experiência de visualização perfeita e personalizada.

<hr/>

## 🛠 Tecnologias
<div align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" width="52" alt="react logo"  />
  <img src="https://github.com/DaiLobo/ola-mundo/assets/47689708/e198f1e6-5325-44e1-9689-ba8162b954c5" height="40" width="40" alt="react-router-dom logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" width="52" alt="js logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" height="40" width="52" alt="figma logo"   />        
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height="40" width="52" alt="git logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" height="40" width="52" alt="github logo" />                                   
</div>
<hr/>

## ✒️ Autora
Desenvolvido com 💜 por Diana Rose
