/**
 * describe -> agrupador de testes
 * it       -> implementação de um teste
 * expect   -> comparação de valores
 */
import { exibirNomeDogFormatado } from "../conceitos/testes-de-unidade.js";
import assert from "node:assert";
describe(`Testes do Projeto`, () => {
  it(`deve exibir o nome do dog com letras maiúsculas`, () => {
    assert.strictEqual(exibirNomeDogFormatado(`bEnTo`), `BENTO`);
  });
  it(`primeiro teste`, () => {});
  it(`segundo teste`, () => {
    throw new Error(`Simulação de erro de teste`);
  });
});
