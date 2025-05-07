const removerStrings = (lista) => {
    return lista.filter(item => typeof item === 'number');
  };
  
  const entrada = [99, 'Dennys', 32, 'javaScript', 45, 17, 'Samuel'];
  const resultado = removerStrings(entrada);
  
  console.log(resultado);