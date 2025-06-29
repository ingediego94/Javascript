// 5. Crea una funcion que reciba un numero y devuelva true si es primo, 
// y false en caso contrario.

let numero = 3;

function numeroPrimo(num){
    let primo = true;

    for(let  i = 2; i < num; i ++){

        if(num % i === 0){
            primo = false;
            break;
        }    
    }

console.log( `El ${num} es primo? ${primo}`);

}


numeroPrimo(numero);