# Projeto CarShop API

Projeto realizado durante o módulo de Back-end do curso de desenvolvimento web da Trybe.

## O que foi feito

Neste projeto, apliquei os princípios de Programação Orientada a Objetos (POO) para a construção de uma API com CRUD para gerenciar uma concessionária de veículos. Utilizei o banco de dados MongoDB através do framework do Mongoose. Além disso, foram utilizadas as ferramentas Docker e Docker Compose para facilitar o processo de desenvolvimento e implantação da aplicação. A metodologia TDD (Test Driven Development) foi aplicada para garantir a qualidade do código e a robustez da aplicação.

Nesta aplicação, é possível realizar as operações básicas de um banco de dados: CRUD.

A aplicação foi desenvolvida com:

- Node.js
- TypeScript
- Mongoose
- POO
- S.O.L.I.D
- Arquitetura MSC
- Docker
- Docker Compose
- Express

## Como rodar o projeto

Configurações mínimas para execução do projeto:

- Sistema Operacional Distribuição Unix
- Node versão 16.14.0 LTS
- Docker
- Docker-compose versão >=1.29.2

Com Docker:

1. Certifique-se de que seu docker-compose está na versão 1.29 ou superior. Veja a documentação para instruções de instalação.
2. Execute os comandos:
    - docker-compose up -d
    - docker exec -it car_shop bash
    - PORT=3001
    - npm test

Localmente:

1. É necessário ter um banco de dados (MySQL) instalado localmente.
2. Execute os comandos:
    - npm install (na raiz do projeto)
    - npm run dev
    - PORT=3001
    - npm test

## Habilidades

- Conectar sua aplicação e fazer consultas ao banco de dados MongoDB utilizando o Mongoose;
- Realizar uma análise de regras de negócios com foco na construção de aplicações orientadas a objetos;
- Aplicar a arquitetura em camadas MSC utilizando MongoDB com Mongoose, Node.js com TypeScript e programação orientada a objetos.
