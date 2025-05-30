const app = require('./src/app');
const port = 3000;
//Aqui ficou responsável por separar e usar minhas rotas
app.listen(port, () => {
    console.log(`Servidor online http:/localhost:${port}`); //Fazendo o servidor escutar a porta escolhida
});