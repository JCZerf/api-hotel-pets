const express = require('express'); //importando o módulo express para facilitar a criação da API...
const petRoutes = require('./routes/petRoutes');


const app = express(); //Definir a porta em que vai rodar a API
app.use(express.json()); //Dizendo ao express o formato de arquivo que vai ser usado nas requisições
app.use('/', petRoutes);

module.exports = app;