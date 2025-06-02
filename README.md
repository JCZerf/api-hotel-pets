# API-HOTEL-PETS

Essa API foi criada com o objetivo de gerenciar registro dos animais hospedados no **Hotel Pets**, com banco de dados **SQLite** integrado.

## Funcionalidades

+ Listar os pets cadastrados (GET ('/dadosPets))
+ Cadastrar novos pets (POST ('/dadosPets))
+ Atualizar pets cadastrados pelo ID (PUT ('/dadosPets/:id))
+ Deletar pet do cadastro pelo ID (DELETE ('/dadosPets/:id))
+ Cálculo automático das diárias passadas e total previsto de diárias
+ Verificação dos campos nos métodos (POST) e (PUT)

## Os pets possuem os seguintes dados armazenados

+ ID (Gerado automaticamente pelo SQL(Banco de dados))
+ Nome do tutor
+ Contato do tutor
+ Nome do pet
+ Espécie
+ Raça
+ Data de entrada
+ Data de saída
+ Quantidade de diárias já passadas (Calculada de forma automatica)
+ Total previsto de diárias (Calculada de forma automatica)

## Exemplo do JSON das informações acima
 
```json

 {
  "nomeTutor": "José Carlos",
  "contatoTutor": "35992581913",
  "nomePet": "Julie",
  "especie": "Gato",
  "raca": "SRD",
  "dataEntrada": "2025-05-29",
  "dataSaida": "2025-06-05"
}

```

## Detalhes técnicos

+ Construção do projeto realizada com **Node.js** e **Express**
+ Banco de dados com **SQLite**
+ **Knex.js** com query biulder para facilitar as operações no SQL
+ Funções para calcular diárias com base nas datas fornecidas
+ Estrutura modular, separando rotas, controllers e serviços para facitar manutenção

### Como usar

+ Clone o repositório
+ Execute o **npm install** para as dependências
+ Rode as migrations do SQL com **npx knex migrate:lateste** para a criação das tabelas
+ Inicie o servidor com **node index.js**
+ Teste as rotas usando **Insomnia**(Onde meus testes foram realizados), ou similar

## 🎥 Apresentação do Projeto

Este repositório foi desenvolvido como parte de um teste técnico para a empresa **Pluritech**, com foco na construção de uma API RESTful utilizando **Node.js**, **Express** e **SQLite**.

📌 **Apresentação da API (Back-end - Node.js):**  
[🔗 Clique aqui para assistir no YouTube](https://youtu.be/rcMRmQym-RU)

🛠 A aplicação **mobile Flutter** (Front-end) será demonstrada em um segundo vídeo, a ser disponibilizado em breve.



