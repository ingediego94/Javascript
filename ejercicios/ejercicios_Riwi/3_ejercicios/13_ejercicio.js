

let cadena = "como estas, espero que muy bien carlos";

function primerCaracterNoRepetido(texto) {
    const charCounts = {};

    for (const char of texto) {
        charCounts[char] = (charCounts[char] || 0) + 1;
    }

    for (const char of texto) {
        if (charCounts[char] === 1) {
        return char;
        }
    }

    return null;
}

console.log("El primer caracter no repetido es:");

console.log( primerCaracterNoRepetido(cadena) );
