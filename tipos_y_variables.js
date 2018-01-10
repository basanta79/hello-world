var numero=1;

console.log(numero);
console.log(typeof(numero));
numero = "hola";
console.log(typeof(numero));


console.log("texto de prueba".split(" "));

var TextoLargo1=
   "texto1\n" +
   "texto2\n";

console.log(TextoLargo1);

var TextoLargo2 = [
  'linea1',
  'linea2'
].join('\n');

console.log(TextoLargo2);

var objeto = {
  numero:1,
  texto:'hola',
  sumaDos: function(a){
    return a+2;
  }
}

console.log(objeto.numero);
console.log(objeto.texto);
console.log(objeto.sumaDos(4));
