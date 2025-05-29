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

let dadosPets = [
    { id: 1, 
      nomeTutor: 'José Calos',
      contatoTutor: 35992581913,
      nomePet: 'Julie', 
      especie: 'Gato',
      raca: 'SRD', //Significa sem raça definida
      dataEntrada: '29-05-2025',
      dataSaida: null,
      diariasAteAgora: 2,
      diariasTotaisPrevistas: 3, 
    }
];

app.get('/dadosPets', (req, res) => {
    res.json(dadosPets);
});

app.post('/dadosPets', (req, res) => {
    const novoPet = {
        id: dadosPets.length + 1,
        nomeTutor: req.body.nomeTutor,
        contatoTutor: req.body.contatoTutor,
        nomePet: req.body.nomePet,
        especie: req.body.especie,
        raca: req.body.raca,
        dataEntrada: req.body.dataEntrada,
        dataSaida: req.body.dataSaida,
        diariasAteAgora: req.body.diariasAteAgora,
        diariasTotaisPrevistas: req.body.diariasTotaisPrevistas
    }
      dadosPets.push(novoPet);
      res.status(201).json('Dados do novo pet: ', novoPet);
});