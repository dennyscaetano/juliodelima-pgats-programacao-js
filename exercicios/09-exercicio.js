// Lista de brinquedos
const brinquedos = ["Bola", "Osso", "Corda", "Sino"];

// Função para entregar brinquedos
function entregarBrinquedos(lista) {
  lista.forEach((brinquedo) => {
    console.log(`Entregando: ${brinquedo}`);
  });
}

// Chama a função para entregar os brinquedos
entregarBrinquedos(brinquedos);
console.log("Todos os brinquedos foram entregues com sucesso!");
