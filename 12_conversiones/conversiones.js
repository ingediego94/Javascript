// CONVERSIONES IMPLICITAS - COERSIÓN
let numero1 = "2014";
console.log(parseInt(numero1));

let numero2 = "3.1416";
console.log(parseFloat(numero2));

// otra forma
const valor1 = "5";
const valor2 = 10;
let suma = valor1 + valor2;

let sumar = Number(valor1) + valor2;

console.log(suma);      //resultado: "510"
console.log(sumar);     //resultado: 15




// CONVERSIONES EXPLICITAS - CASTING
let num = 123;
console.log(String(num));


// Coversion a boolean
let variable = "";      // "" es un string vacío, por lo tanto se considera falso
let variable_2 = "Hola" // "Hola" es un string no vacío, por lo tanto se considera verdadero
let booleano_1 = 1;     // 1 lo considera verdadero
let booleano_2 = 0;     // 0 lo considera falso

console.log( Boolean(variable) );
console.log( Boolean(variable_2) );
console.log( Boolean(booleano_1) );
console.log( Boolean(booleano_2) );
