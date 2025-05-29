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
    { id: 1, //Informações para realizar os testes do Get e Put
      nomeTutor: 'José Calos',
      contatoTutor: 35992581913,
      nomePet: 'Julie', 
      especie: 'Gato',
      raca: 'SRD', //Significa sem raça definida
      dataEntrada: '2025-05-29',
      dataSaida: '2025-05-30',
      diariasAteAgora: 1,
      diariasTotaisPrevistas: 1, 
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
        diariasAteAgora: calcularDiariasAteAgora(req.body.dataEntrada),
        diariasTotaisPrevistas: calcularDiarias(req.body.dataEntrada, req.body.dataSaida)
    }
      dadosPets.push(novoPet);
      res.status(201).json(novoPet);
});

app.put('/dadosPets/:id', (req, res) => {
    
    const id = parseInt(req.params.id);
    const dadosPet = dadosPets.find(t => t.id === id) 

    if (!dadosPet) {
    return res.status(404).json({ mensagem: 'Cadastro não encontrado!' }); 
  }  
       //armazenar os valores de entrada e saída pra evitar erros nos cálculos...

        const dataEntrada = req.body.dataEntrada || dadosPet.dataEntrada;
        const dataSaida = req.body.dataSaida || dadosPet.dataSaida;

        dadosPet.nomeTutor = req.body.nomeTutor || dadosPet.nomeTutor;
        dadosPet.contatoTutor = req.body.contatoTutor || dadosPet.contatoTutor;
        dadosPet.nomePet = req.body.nomePet || dadosPet.nomePet;
        dadosPet.especie = req.body.especie || dadosPet.especie;
        dadosPet.raca  = req.body.raca || dadosPet.raca;
        dadosPet.dataEntrada = dataEntrada;
        dadosPet.dataSaida = dataSaida;
        //Armazenando os valores das diarias nas variáveis para evitar erros....
        dadosPet.diariasAteAgora = calcularDiariasAteAgora(dataEntrada);
        dadosPet.diariasTotaisPrevistas = calcularDiarias(dataEntrada, dataSaida);

        res.json(dadosPet);
});

app.delete('/dadosPets/:id', (req, res) => {
    const id = parseInt(req.params.id);
    dadosPets = dadosPets.filter(t => t.id !== id) //Variação do operador para remover o ID informado
    res.status(204).send();
});

    function calcularDiarias(dataEntrada, dataSaida) {
        if(!dataSaida) return null;
        //Calcular as diarias de acordo com a entrada e saida 
        const entrada = new Date(dataEntrada);
        const saida = new Date (dataSaida);

        if(saida < entrada) return 0;

        const diferencaHora = saida - entrada;
        const diferencaDias = Math.floor(diferencaHora / (1000 * 60 * 60 * 24));

        return diferencaDias;
    }

        function calcularDiariasAteAgora(dataEntrada) {
        const entrada = new Date(dataEntrada)
        //Calcular as diarias até agora com a data da entrada e uma função pra data atual...
        const hoje = new Date();
        if(entrada > hoje) return 0;

        const diferencaHora = hoje - entrada;
        const diferencaDias = Math.floor(diferencaHora / (1000 * 60 * 60 * 24));

        return diferencaDias;
    }