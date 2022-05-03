function verificaTipoDeDado(dado) {
  if(typeof dado ==='string') {
    console.log("Este dado é uma string");
  } else if (typeof dado === 'number') {
    console.log("Este dado é uma number");
  } else if (typeof dado === 'boolean') {
    console.log("Este dado é uma boolean");
  }
}

verificaTipoDeDado(true);
verificaTipoDeDado(23);
verificaTipoDeDado('teste');