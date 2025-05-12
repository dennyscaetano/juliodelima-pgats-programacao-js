/**
    
    * O método forEach() executa uma função fornecida uma vez para cada elemento do array.
    Matheus
    Renata
    Leandro
    Ana
    Lucas

    paraCada (item da) listaDeAlunos
      // dar uma nota aleatória

 */

const listaDeAlunos = [
  {
    nome: "Matheus",
    nota: 7,
  },
  {
    nome: "Renata",
    nota: 8,
  },
  {
    nome: "Leandro",
    nota: 9,
  },
  {
    nome: "Ana",
    nota: 10,
  },
  {
    nome: "Lucas",
    nota: 6,
  },
];

listaDeAlunos.forEach((aluno) => {
  console.log(`Dando nota para o aluno ${aluno.nome} tem a nota ${aluno.nota}`);
  // darNotaAleatoria(aluno)
});

const dadosDeTeste = [
  {
    nomePet: "Pipoca",
    peso: 12.6,
    porte: "M",
    resultadoEsperado: "",
  },
  {
    nomePet: "Bola",
    peso: 5.2,
    porte: "P",
    resultadoEsperado: "",
  },
  {
    nomePet: "Rex",
    peso: 20.3,
    porte: "G",
    resultadoEsperado: "",
  },
];
