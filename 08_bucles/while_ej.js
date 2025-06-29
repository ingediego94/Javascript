
// invertir una cadena de texto.

const cadena = 'hola';
let invertida = '';
let i = cadena.length -1;

while(i>=0){
    invertida += cadena[i];
    i--;
}

console.log(invertida);
