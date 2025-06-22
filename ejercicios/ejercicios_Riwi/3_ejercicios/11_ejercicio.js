// Invertir una cadena
// Como programador, quiero invertir una cadena sin funciones nativas para 
// entender mejor las estructuras de bucles y arreglos.

let InputText = "This is a string of text";

function StringInReverse(text){
    // Paso 1. Usa el método split() para devolver un nuevo arreglo
    let separation = text.split("");
    // Paso 2. Usa el método reverse() para invertir el nuevo arreglo creado
    let TextReverse = separation.reverse();
    // Paso 3. Usa el método join() para unir todos los elementos del arreglo en una cadena
    let InverseArray = TextReverse.join("");
    //Paso 4. Devolver la cadena invertida
    return InverseArray;
}


console.log(StringInReverse(InputText));


// We can do exactly the same with the next code:
let otraFormaResumida = InputText.split("").reverse().join("");
console.log(otraFormaResumida);
