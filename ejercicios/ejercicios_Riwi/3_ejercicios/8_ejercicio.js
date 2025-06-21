// Words counter

let words = "Hola como estas,  quiero felicitarte";

function evaluate_words(input){
    let numberWords = input.trim().split(/\s+/);
    return numberWords.length;
}

// words.trim() = Elimina los espacios en blanco al principio y al final del texto.
// .split(/\s+/)  = Divide el string en un array usando una expresión regular (/\s+/) como separador.
//                  \s+ significa: uno o más espacios, tabulaciones o saltos de línea.Divide un string en partes 
//                  (array de strings) cada vez que encuentra uno o más espacios en blanco



function evaluate_chars (input){
    let result = input.length;
    return result;
}


console.log("El texto tiene: " + evaluate_words(words) + " palabras.");
console.log("El texto tiene: " + evaluate_chars(words) + " caracteres.");
