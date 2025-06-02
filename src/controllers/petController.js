
const db = require('../database/db');
const petService = require('../services/petService');
//Refatorando o código para implementação do SQL...
const listarPets = async (req, res) => {
  try {
    const pets = await db('pets').select('*');
    res.json(pets);
  } catch (error) {
    res.status(500).json({mensagem: "Erro ao listar os pets."});
  }
}

const adicionarPet = async (req, res) => {
    try {
      const novoPet = await petService.addPet(req.body);
      res.status(201).json(novoPet);
    } catch (error) {
      if (error.message === 'Todos os campos devem ser preenchidos.') {
        return res.status(400).json({ erro: error.message });
      }
        res.status(500).json({ erro: 'Erro ao tentar atualizar o pet.' });
    }
};
    
const atualizarPet = async (req, res) => {
  try {
    const { id } = req.params;
    const atualizado = await petService.updatePet(parseInt(id), req.body);
      if (!atualizado) {
        return res.status(404).json({ mensagem: 'Cadastro não encontrado!' });
      }
    res.json(atualizado);
  } catch (error) {
      if (error.message === 'Todos os campos devem ser preenchidos.') {
        return res.status(400).json({ erro: error.message });
      }
        res.status(500).json({ erro: 'Erro ao tentar atualizar o pet.' });
    }
};

const deletarPet = async (req, res) => {
  try {
    const { id } = req.params;
    await petService.deletePet(parseInt(id));
    res.status(204).send(); 
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao tentar deletar o pet.' });
  }
};

module.exports = {
  listarPets,
  adicionarPet,
  atualizarPet,
  deletarPet
};