
// toFixed(n)    : Redondea un numero a n decimales y lo convierte en string.
// toString()    : Convierte un número en una cadena de texto

let num = 123.45699;
const num2 = 10;

console.log(num.toFixed(2) + num2);   //Lo concatena como texto.

console.log((num + num2).toFixed(2));  //Los suma y luego redondea.

console.log(num.toString());  //Lo convierte a texto



