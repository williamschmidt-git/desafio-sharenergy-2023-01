# Desafio para o processo seletivo SHARENERGY 2023/01

Olá!
Este repositório é a minha versão para o desafio do processo seletivo da ShareEnergy.

## Tecnologias utilizadas
<ul>
  <li>NestJs</li>
  <li>Typescript</li>
  <li>Jest</li>
  <li>React</li>
  <li>Vite</li>
</ul>

## Aplicação

#### Deploy
[**FRONTEND**](https://interesting-animal-production.up.railway.app/)
<br>
[**BACKEND**](https://teal-wheel-production.up.railway.app/)

# O Desafio

Construir uma aplicação web (frontend e backend) capaz de realizar a comunicação com APIs distintas, além de um CRUD.

## Aplicação

- A página inicial da aplicação deve ser uma `Login Page`;
- O usuário deve ser capaz de se autenticar utilizando o username `desafiosharenergy` e password `sh@r3n3rgy`, também, deve existir a possibilidade do usuário utilizar o `remember me` para realizar logins automáticos, sem a necessidade de digitar username e password após o primeiro acesso;
- Após o Login, a página principal deve conter uma listagem de usuários gerada a partir da api [Random User Generator](https://randomuser.me/), a lista deve conter a foto do usuário, nome completo, email, username e idade. Além disso, os requests devem ser páginados, porém, é de critério do participante do desafio a quantidade de resultados a serem exibidos por página e variações para o mesmo. Também, deve haver uma search para buscar usuários por nome, email ou username;
- Em uma segunda página, o usuário deve ser capaz de selecionar um status code http qualquer, e, após a seleção, deve ser retornada uma imagem da api [HTTP Cat](https://http.cat/) relacionada ao status escolhido, caso não exista tal imagem, deve ser retornada uma imagem de not found à critério de escolha do participante do desafio;
- Em uma terceira página, deve haver um botão de refresh que, ao ser clicado, deve retornar uma imagem aleatória da api [Random Dog](https://random.dog/);
- Em uma quarta página, deve haver uma lista de clientes, através da qual o usuário deve ser capaz de cadastrar novos clientes, visualizar informações de um cliente específico, atualizar um cliente e deletar clientes. O cadastro deve possuir nome, email, telefone, endereço e cpf.

### Requisitos da aplicação e de código

- Interface amigável, bonita e limpa
- Responsividade
- Clean Code

### Ferramentas e Stack a ser utilizado

- ReactJS para o frontend
- NodeJS (com ou sem frameworks) ou Golang para o backend
- MongoDB
- TypeScript
- HTML e CSS

### Aprimoramentos adicionais da aplicação (opcional)

A aplicação criada para o desafio pode ser aprimorada com recursos pensados por você. A seguir, foram listadas algumas sugestões do que poderia ser feito:

- Testes
- Documentação

### Mas, afinal, quais ferramentas a Sharenergy utiliza?

* [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) e [Typescript](https://www.typescriptlang.org/)
* Front-end: [ReactJS](https://reactjs.org/) e [React Native](https://reactnative.dev/)
* Back-end: [Node.js](https://nodejs.org/en/), [NestJS](https://nestjs.com/) e [Go](https://golang.org/)
* Banco de dados: [MongoDB](https://www.mongodb.com/) do lado do servidor e [Minimongo](https://guide.meteor.com/collections.html) do lado do cliente (cache)
* Gerenciamento de Containers: [Docker](https://www.docker.com/)
* Gerenciamento de Repositórios: [NX](https://nx.dev/)
* UI: [Tailwind CSS](https://tailwindcss.com/) e [Material-UI V4](https://v4.mui.com/)
* Sistema Operacional (principal): [Linux](https://www.linux.org/), também sendo possível utilizar o [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/) (WSL)

## O que devo entregar?

Esperamos de você duas entregas: o código no GitHub e um vídeo explicativo no YouTube.

### Instruções

- Faça um fork desse repositório.
- Em seguida, crie uma branch, cujo nome é o seu nome completo, no seguinte formato: meu-nome-completo.
- Resolva o desafio realizando versionamento local e remoto. Fique à vontade em criar outras branches durante o desenvolvimento do código.
- Inclua no README.md uma breve instrução de instalação e de execução da aplicação criada.
- Faça um vídeo que explique o que você fez no desafio, com duração aproximada de 5 minutos. A facecam é opcional, mas bem-vinda. O vídeo deve ser postado no YouTube (pode deixar como não listado) e seu link deve ser colocado no README.md.
- Ao finalizar o desafio, faça um pull request de sua branch para esse repositório.

### Prazo limite de entrega

O pull request com sua solução do desafio deve ser feito até a data especificada no corpo do email que você recebeu com a descrição do desafio.
