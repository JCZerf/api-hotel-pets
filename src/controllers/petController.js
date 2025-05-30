const petService = require('../services/petService');

const listarPets = (req, res) => {
  res.json(petService.getPets());
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