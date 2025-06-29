// 3. Crea una funcion que reciba un string y devuelva el numero de vocales que contiene,

const cadenaTexto = "Este es un mundo LLENO DE ALEGRIA".toLowerCase();

function contadorVocales(texto){

    let contador = 0;

    for (letra of texto){
        
        if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u'){
            contador ++;
        }
        
    }

    console.log(`La frase tiene ${contador} vocales.`);
}

contadorVocales(cadenaTexto);