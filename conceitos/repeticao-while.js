/**
 * 
    enquanto (pet não estiver cansado); faca {
        dat uma volta na quadra
    }
 * 
 */

let voltasAteFicarCansado = 5;
let quantidadeVoltasAtual = 0;

while (quantidadeVoltasAtual < voltasAteFicarCansado) {
  console.log(
    "Dar uma volta na quadra - estou iniciando a volta " +
      (quantidadeVoltasAtual + 1),
  );
  quantidadeVoltasAtual++;
}
console.log("Estou cansado, não posso mais correr");
