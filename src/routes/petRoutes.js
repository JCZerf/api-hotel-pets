const express = require('express'); //importando o módulo express para facilitar a criação da API...
const router = express.Router();
const petController = require('../controllers/petController');

router.get('/', (req, res) => 
res.send('API para o Hotel Pets Ativa!'));
router.get('/dadosPets', petController.listarPets);
router.post('/dadosPets', petController.adicionarPet);
router.put('/dadosPets/:id', petController.atualizarPet);
router.delete('/dadosPets/:id', petController.deletarPet);

module.exports = router;