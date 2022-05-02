let nome = "Fulano";
let idade = 28;

if ( nome != undefined && nome == "Ciclano") {
  console.log("Nome está definido")
} else if (nome == "Fulano" && nome.length > 5 && idade == 50) {
  console.log("O nome é Fulano");
} else {
  console.log("Não é Fulano");
}

// sem else
if ( 1 > 2) {
  console.log("Teste")
} else if ( 1 == 1) {
  console.log("Testando");
}