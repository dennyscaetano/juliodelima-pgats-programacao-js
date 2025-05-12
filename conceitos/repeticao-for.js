/**
    para, faca
        contador; condicao. manipulacao do contador (incremento ou decremento)

        quantidadeDePetiscos; quantidadeDePetiscos <= quantidadeCalculada; quantidadeDePetiscos++
 */
quantidadeCalculada = 3;

for (
  let quantidadeDePetiscos = 0;
  quantidadeDePetiscos < quantidadeCalculada;
  quantidadeDePetiscos++
) {
  console.log(`Dando o petisco ${quantidadeDePetiscos + 1}  para o cachorro`);
}
console.log("Barriga do pet estufou, agora vou brincar com o cachorro");
