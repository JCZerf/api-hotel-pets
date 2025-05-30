let pets = [
  {
    id: 1,
    nomeTutor: 'José Carlos',
    contatoTutor: 35992581913,
    nomePet: 'Julie',
    especie: 'Gato',
    raca: 'SRD',
    dataEntrada: '2025-05-29',
    dataSaida: '2025-05-30',
    diariasAteAgora: 1,
    diariasTotaisPrevistas: 1,
  }
];

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

function getPets() {
  return pets;
}

function addPet(dados) {
  const novo = {
    id: pets.length + 1,
    ...dados,
    diariasAteAgora: calcularDiariasAteAgora(dados.dataEntrada),
    diariasTotaisPrevistas: calcularDiarias(dados.dataEntrada, dados.dataSaida)
  };
  pets.push(novo);
  return novo;
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