let pessoa = {
  nome: "Fulano"
}

let pessoa2 = pessoa;

let pessoa3 = {
  nome: "Fulano"
}

console.log(pessoa == pessoa2);
console.log(pessoa3 == pessoa);
console.log(pessoa3 == pessoa2);

pessoa2.nome = "Ciclano";

console.log(pessoa.nome);

pessoa.nome = "Beltrano";

console.log(pessoa2.nome);