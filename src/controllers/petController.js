const db = require('../database/db');
//Refatorando o código para implementação do SQL...
const listarPets = async (req, res) => {
  try {
    const pets = await db('pets').select('*');
    res.json(pets);
  } catch (error) {
    res.status(500).json({mensagem: "Erro ao listar os pets."});
  }
};

const adicionarPet = (req, res) => {
  const novoPet = petService.addPet(req.body);
  res.status(201).json(novoPet);
};

const atualizarPet = (req, res) => {
  const { id } = req.params;
  const atualizado = petService.updatePet(parseInt(id), req.body);
  if (!atualizado) return res.status(404).json({ mensagem: 'Cadastro não encontrado!' });
  res.json(atualizado);
};

const deletarPet = (req, res) => {
  const { id } = req.params;
  petService.deletePet(parseInt(id));
  res.status(204).send();
};

module.exports = {
  listarPets,
  adicionarPet,
  atualizarPet,
  deletarPet
};