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
Ao logar, utilizar o login ```desafiosharenergy``` e senha ```sh@r3n3rgy```
<br>
[**Aplicação**](https://interesting-animal-production.up.railway.app/)
<br>

### Endpoints
*POST*
<br>
Rota login 
<br>
```https://teal-wheel-production.up.railway.app/auth/login```
<br>
<br>
*GET & POST*
<br>
Listar e Criar cliente
<br>
```https://teal-wheel-production.up.railway.app/customers```
<br>
**JSON FORMAT TO POST & PUT CUSTOMER**:
```
{
  "address": "address",
  "email": "customer@email.com",
  "phone_number": "0000000000",
  "customer_name": "customer",
  "cpf": "00000000000"
}
```
*GET & DELETE & PUT/PATCH*
<br>
Listar, atualizar ou deletar cliente específico
<br>
```https://teal-wheel-production.up.railway.app/customers/from/:email```
<br>
Substituir ```:email``` pelo email do cliente


## Sobre o desafio
Primeiramente quero agradecer a oportunidade de realizar o desafio. Ressalto que recentemente, iniciei estudos em NestJs e aqui eu consegui os estudos do mesmo. O backend foi desenvolvido seguindo conceitos e paradigmas como **POO**, **SOLID**, E **TDD**. Nos testes, foi utilizado a ferramenta **Jest** e o conceito de **in-memory-database** para não instanciar nenhum banco de dados. Também foi criado **view-models** e **DTOs** para desacoplamento e formatação de dados. No frontend, foi utilizado **Vite** ao invés de **create-react-app**, por questões de performance, visto que é uma aplicação pequena.
