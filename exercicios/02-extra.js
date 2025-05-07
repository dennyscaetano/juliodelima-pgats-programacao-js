function contarVogais(texto) {
    let contador = 0;
    const vogais = 'aeiou';
  
    for (let i = 0; i < texto.length; i++) {
      if (vogais.includes(texto[i])) {
        contador++;
      }
    }
  
    return contador;
  }
  
  const resultado = contarVogais("texto exemplo para contar vogais contidas");
  console.log(resultado);