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
  //implementação de validação de campo simples

  const {
    nomeTutor,
    contatoTutor,
    nomePet,
    especie,
    raca,
    dataEntrada,
    dataSaida
  } = dados;

  if(
    !nomeTutor ||
    !contatoTutor ||
    !nomePet ||
    !especie ||
    !raca ||
    !dataEntrada ||
    !dataSaida 
  ) {
    throw new Error('Todos os campos devem ser preenchidos.');
  }


  const novoPet = {
    nomeTutor: nomeTutor,
    contatoTutor: contatoTutor,
    nomePet: nomePet,
    especie,
    raca,
    dataEntrada: dataEntrada,
    dataSaida: dataSaida,
    diariasAteAgora: calcularDiariasAteAgora(dados.dataEntrada),
    diariasTotaisPrevistas: calcularDiarias(dados.dataEntrada, dados.dataSaida)
  };

  const [id] = await db('pets').insert(novoPet);
  return { id, ...novoPet };
}

// Atualizar os pets existentes no SQL
async function updatePet(id, novosDados) {
  const petAtual = await db('pets').where({ id }).first();
  if (!petAtual) return null;

  const entrada = novosDados.dataEntrada || petAtual.dataEntrada;
  const saida = novosDados.dataSaida || petAtual.dataSaida;

  const petAtualizado = {
    ...petAtual,
    ...novosDados,
    dataEntrada: entrada,
    dataSaida: saida,
    diariasAteAgora: calcularDiariasAteAgora(entrada),
    diariasTotaisPrevistas: calcularDiarias(entrada, saida)
  };

  await db('pets').where({ id }).update(petAtualizado);
  return { id, ...petAtualizado };
}

// Deletar os pets no SQL
async function deletePet(id) {
  await db('pets').where({ id }).del();
}

module.exports = { getPets, addPet, updatePet, deletePet };