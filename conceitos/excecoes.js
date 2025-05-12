/**
 *
 *
 *
 */

try {
  console.log(`Tentando alimentar o pet...`);
  //throw new Error(`Não consegui alimentar o pet`)
} catch (excecao) {
  console.log(excecao);
  console.log(excecao.name);
  console.log(excecao.message);
} finally {
  console.log(`SEMPRE SEREI EXECUTADO`);
}
