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
[**App**](https://interesting-animal-production.up.railway.app/)
<br>

#### Endpoints
**POST** 
<br>
Rota login ```https://teal-wheel-production.up.railway.app/auth/login```
<br>
<br>
**GET & POST**
<br>
Listar e Criar cliente
<br>
```https://teal-wheel-production.up.railway.app/customers```
<br>
<br>
**GET & DELETE & PUT/PATCH**
<br>
Listar, atualizar ou deletar cliente específico
<br>
```https://teal-wheel-production.up.railway.app/customers/from/email```

# O Desafio

Construir uma aplicação web (frontend e backend) capaz de realizar a comunicação com APIs distintas, além de um CRUD.

## Aplicação

- A página inicial da aplicação deve ser uma `Login Page`;
- O usuário deve ser capaz de se autenticar utilizando o username `desafiosharenergy` e password `sh@r3n3rgy`, também, deve existir a possibilidade do usuário utilizar o `remember me` para realizar logins automáticos, sem a necessidade de digitar username e password após o primeiro acesso;
- Após o Login, a página principal deve conter uma listagem de usuários gerada a partir da api [Random User Generator](https://randomuser.me/), a lista deve conter a foto do usuário, nome completo, email, username e idade. Além disso, os requests devem ser páginados, porém, é de critério do participante do desafio a quantidade de resultados a serem exibidos por página e variações para o mesmo. Também, deve haver uma search para buscar usuários por nome, email ou username;
- Em uma segunda página, o usuário deve ser capaz de selecionar um status code http qualquer, e, após a seleção, deve ser retornada uma imagem da api [HTTP Cat](https://http.cat/) relacionada ao status escolhido, caso não exista tal imagem, deve ser retornada uma imagem de not found à critério de escolha do participante do desafio;
- Em uma terceira página, deve haver um botão de refresh que, ao ser clicado, deve retornar uma imagem aleatória da api [Random Dog](https://random.dog/);
- Em uma quarta página, deve haver uma lista de clientes, através da qual o usuário deve ser capaz de cadastrar novos clientes, visualizar informações de um cliente específico, atualizar um cliente e deletar clientes. O cadastro deve possuir nome, email, telefone, endereço e cpf.

### Instruções

- Faça um fork desse repositório.
- Em seguida, crie uma branch, cujo nome é o seu nome completo, no seguinte formato: meu-nome-completo.
- Resolva o desafio realizando versionamento local e remoto. Fique à vontade em criar outras branches durante o desenvolvimento do código.
- Inclua no README.md uma breve instrução de instalação e de execução da aplicação criada.
- Faça um vídeo que explique o que você fez no desafio, com duração aproximada de 5 minutos. A facecam é opcional, mas bem-vinda. O vídeo deve ser postado no YouTube (pode deixar como não listado) e seu link deve ser colocado no README.md.
- Ao finalizar o desafio, faça um pull request de sua branch para esse repositório.

### Prazo limite de entrega

O pull request com sua solução do desafio deve ser feito até a data especificada no corpo do email que você recebeu com a descrição do desafio.
