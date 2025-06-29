
// crear un nuevo array de los numeros mayores a 10

const numeros = [2,34,12,1,4,6,32,6,2,34,6,8,9,10,5,34,223,122];

const mayores = [];

for(numero of numeros){
    
    numero>10? mayores.push(numero) : null;
    
}

console.log(mayores);