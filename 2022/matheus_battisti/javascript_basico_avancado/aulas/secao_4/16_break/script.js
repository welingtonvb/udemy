let nome = "Fulano";

for(let i = 0; i < 10; i = i + 1) {

  if(i == 3) {
    nome = "joão";
  }

  if (i == 5 && nome == "joão") {
    console.log("O nome é joão, pode parar");
    break;
  }

  console.log(i);
}
