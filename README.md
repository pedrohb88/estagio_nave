<h1 align="center">Welcome to estagio_nave 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>
<p>
  <a href="https://documenter.getpostman.com/view/11275522/Tz5jfLnA" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
</p>

> Desafios para a vaga de estágio em Back-end na Nave
> 
## Sumário

  - [Desafios de lógica](#desafios_logica)
  - [API](#api)
    - [Documentação](#docs)
    - [Como rodar localmente](#how_to)
  - [Exercícios Bônus de Banco de dados](#exercicios_bonus)

## Desafio de Lógica<a name="desafios_logica"></a> 
As resoluções dos desafios de lógica podem ser encontradas em: [Desafios de lógica - Codesandbox](https://codesandbox.io/s/teste-estagio-nave-y88zb)

## API<a name="api"></a> 
A API está publicada no seguinte endereço: 
> [http://estagio-nave.herokuapp.com/api](http://estagio-nave.herokuapp.com/api)

> Banco de dados utilizado: PostgreSQL

E sua documentação completa pode ser encontrada em [Documentação](#docs).

### Documentação<a name="docs"></a> 
A documentação completa da API, assim como de todas as suas rotas, formato de requests e exemplos de respostas, foram gerados utilizando [Postman](https://www.postman.com/), e podem ser encontrados em: [Documentação - Postman](https://documenter.getpostman.com/view/11275522/Tz5jfLnA).

### Como rodar localmente<a name="how_to"></a> 
Apesar da API estar publicada em produção, caso queira rodar localmente, proponho duas formas:

> Em ambas as maneiras, a API ficará disponível em `localhost:5000/api`, sendo assim, é importante que a porta `5000` esteja aberta e disponível

#### Com Docker
Tendo o `docker-compose` instalado, basta executar o comando:

```
npm run start-docker
```

ou 

```
docker-compose up
```

#### Sem Docker
Caso não queira utiliza docker, é necessário ter acesso a algum banco de dados PostgreSQL (local ou remoto), e siga os seguintes passos: 

Crie um arquivo `.env` na raíz do projeto com a seguinte configuração
```
PG_HOST=host
PG_DATABASE=nome do banco
PG_USER=usuário do banco
PG_PASSWORD=senha do banco
```

Instale as dependências
```
npm install
```

Inicie a API
```
npm start
```

## Exercícios Bônus de Banco de Dados<a name="exercicios_bonus"></a> 
Os scripts SQL de resolução dos exercícios de banco de dados se encontram na pasta [exercicios_bonus_db](https://github.com/pedrohb88/estagio_nave/tree/main/exercicios_bonus_db).

- [eb1](https://github.com/pedrohb88/estagio_nave/blob/main/exercicios_bonus_db/eb1.sql)
- [eb2](https://github.com/pedrohb88/estagio_nave/blob/main/exercicios_bonus_db/eb2.sql)
- [eb3](https://github.com/pedrohb88/estagio_nave/blob/main/exercicios_bonus_db/eb3.sql)
- [eb4](https://github.com/pedrohb88/estagio_nave/blob/main/exercicios_bonus_db/eb4.sql)
- [eb5](https://github.com/pedrohb88/estagio_nave/blob/main/exercicios_bonus_db/eb5.sql)

## Author

👤 **Pedro Leal**

* Github: [@pedrohb88](https://github.com/pedrohb88)
* LinkedIn: [@leal-pedro](https://linkedin.com/in/leal-pedro)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
