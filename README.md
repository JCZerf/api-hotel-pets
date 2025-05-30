# api-hotel-pets

API criada pra cadastrar, listar, atualizar e remover os registros dos animais hospedados no Hotel Pets.

Funcionalidades

GET /dadosPets – Lista todos os pets cadastrados.

POST /dadosPets – Cadastra um novo pet com as informações pedidas.

PUT /dadosPets/:id – Atualiza os dados de um pet usando o ID.

DELETE /dadosPets/:id – Remove o pet da lista pelo ID.


Sobre os Dados

Foi criada uma lista chamada dadosPets, que guarda os pets com os campos que o teste pediu, mais um extra que achei importante: o nome do pet.

Cada pet tem:

id

nomeTutor

contatoTutor

nomePet (extra)

especie

raca

dataEntrada

dataSaida

diariasAteAgora (calculado automaticamente)

diariasTotaisPrevistas (também calculado)


Funções

Usei duas funções simples pra calcular os dias:

calcularDiarias: pega a data de entrada e saída e retorna quantos dias o pet vai ficar.

calcularDiariasAteAgora: pega a data de entrada e conta até a data de hoje.


Tudo com new Date() e transformando os milissegundos em dias...

Observações

Deixei um pet fictício no array só pra facilitar os testes do GET e do PUT.

No PUT, precisei fazer uma modificação leve: se a data de entrada ou saída não vier no corpo da requisição, uso a que já estava lá pra não quebrar os cálculos.

Após finalizar a base do CRUD resolvi estruturar de forma modular para deixar o projeto mais parecido com o que farei num projeto real, o objetivo também é deixar mais claro, organizado e permitir melhorias de forma mais facilitada...

