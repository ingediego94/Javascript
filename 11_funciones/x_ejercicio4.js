// 4. Crea una funcion que reciba un array de strings y devuelva un nuevo array 
// con los strings en mayusculas.

const textos = ['hola', 'mundo', 'moures', 'developer'];

function enMayusculas(arrayDeTextos){
    let i = 0;
    const textoMayusculas = [];

    while (i < arrayDeTextos.length){

        textoMayusculas.push(arrayDeTextos[i].toLocaleUpperCase());

        i++;
    }

    console.log(textoMayusculas);
}


enMayusculas(textos);