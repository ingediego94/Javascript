
// 1. Usa desestructuracion para extraer los dos primeros elementos de un array.

const array = [1,2,3];

    // aplicando desestructuracion
let = [num1, num2] = array;
console.log( num1 );    //1
console.log( num2 );    //2

console.log("-----------------------");


// 2. Usa desestr. en un array y asigna un valor predeterminado a una variable.
let = [num11, num12, num13, num14=1520] = array;
console.log(num11);     //1
console.log(num12);     //2
console.log(num13);     //3
console.log(num14);     //1250

console.log("-----------------------");


// 3. Usa desestr. para extraer dos propiedades de un objeto.
const  obj = {
    juego : 'Call Of Duty',
    anno : 2005,
    multijugador : true
};

    // Aplicando desestr.
let = {juego, multijugador} = obj;
console.log( juego );
console.log( multijugador );


console.log("-----------------------");


// 4. Usa desestr. para extraer dos propiedades de un obj. y asignalas 
// a nuevas variables con nombres diferentes.
let = {juego : game, anno : year} = obj;
console.log( game );
console.log( year );

console.log("-----------------------");

// 5. Usa desestr. para extraer dos propiedades de un objeto anidado
const usuario = {
    nombre : 'diego',
    edad : 29,
    estudios : {
        colegio : 'Militar Armada de Colombia',
        universidad_1 : ' Udenar',
        universidad_2 : 'EIA',
        posgrados : {
            especializacion : 'Ingenieria de software',
            maestria : 'Ciencia de datos',
            PhD : 'Ciencias físicas e ingeniería.'
        }
    }
};

let = { estudios: {colegio:school}, estudios:{posgrados:{maestria:masterDegree}}} = usuario;
console.log( school );
console.log( masterDegree );



