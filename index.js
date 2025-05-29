const express = require('express'); //importando o módulo express para facilitar a criação da API...
const app = express(); //Definir a porta em que vai rodar a API
const port = 3000;

app.use(express.json()); //Dizendo ao express o formato de arquivo que vai ser usado nas requisições

app.get('/', (req, res) => { //Definindo a rota para o endereço da raiz da API
    res.send('API para o Hotel Pets ativa!'); //Enviar uma resposta simples
}); 

app.listen(port, () => {
    console.log(`Servidor online http:/localhost:${port}`); //Fazendo o servidor escutar a porta escolhida
})

let nomeTutor = [
    { id: 1, nome: 'José Calos'}
];

app.get('/hotelPets', (req, res) => {
    res.json(nomeTutor);
});

app.post('/hotelPets', (req, res) => {
    const novoTutor = {
        id: nomeTutor.length + 1,
        nome: req.body.nome
    }
      nomeTutor.push(novoTutor);
      res.status(201).json(novoTutor);
});