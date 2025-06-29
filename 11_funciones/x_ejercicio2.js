// 2. Crea una funcion que reciba un array de numeros y devuelva el mayor de ellos.

const numeros = [3, 1, -5, 6, 9, 23, 65, 4, 0];


function detectarMayor (array){

    let mayor = array[0];

    for ( let i = 1; i < array.length; i++){

        if(array[i] > mayor){
            mayor = array[i];
        }
    }

    console.log(mayor);
}

detectarMayor(numeros);