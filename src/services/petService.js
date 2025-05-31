const db = require('../database/db');

function calcularDiarias(entrada, saida) {
  if (!saida) return null;
  const dataEntrada = new Date(entrada);
  const dataSaida = new Date(saida);
  if (dataSaida < dataEntrada) return 0;
  return Math.floor((dataSaida - dataEntrada) / (1000 * 60 * 60 * 24));
}

function calcularDiariasAteAgora(entrada) {
  const dataEntrada = new Date(entrada);
  const hoje = new Date();
  if (dataEntrada > hoje) return 0;
  return Math.floor((hoje - dataEntrada) / (1000 * 60 * 60 * 24));
}
//Buscar os pets registrados
async function getPets() {
  return await db('pets').select('*');
}
//Adicionar os novos pets
async function addPet(dados) {
  const novo = {
    ...dados,
    diariasAteAgora: calcularDiariasAteAgora(dados.dataEntrada),
    diariasTotaisPrevistas: calcularDiarias(dados.dataEntrada, dados.dataSaida)
  };

  const [id] = await db('pets').insert(novo);
  return { id, ...novo };
}

function updatePet(id, novosDados) {
  const pet = pets.find(p => p.id === id);
  if (!pet) return null;

  const entrada = novosDados.dataEntrada || pet.dataEntrada;
  const saida = novosDados.dataSaida || pet.dataSaida;

  Object.assign(pet, {
    ...pet,
    ...novosDados,
    dataEntrada: entrada,
    dataSaida: saida,
    diariasAteAgora: calcularDiariasAteAgora(entrada),
    diariasTotaisPrevistas: calcularDiarias(entrada, saida)
  });

  return pet;
}

function deletePet(id) {
  pets = pets.filter(p => p.id !== id);
}

module.exports = { getPets, addPet, updatePet, deletePet };