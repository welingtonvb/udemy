const cachorro = {
  raca: 'SRD',
  uivar: function() {
    console.log("Auuuuuuuuuuuuuuuuuuuuuuu");
  },
  rosnar: function() {
    console.log("grrrrrr")
  },
  setRaca: function(raca) {
    this.raca = raca;
  },
  getRaca: function() {
    return "A raça é " + this.raca;
  }

}

console.log(cachorro.raca);

cachorro.setRaca('Totó');

console.log(cachorro.raca);

console.log(cachorro.getRaca());