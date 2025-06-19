// Verificacion multiple:
// Como estudiante, quiero ingresar un número y saber si es divisible por 3, 5 o ambos, para practicar lógica matemática.

let numero = Number(prompt("Ingresa un número:"));
let resul_3 = numero % 3;
let resul_5 = numero % 5;


if (resul_3 == 0 && resul_5 == 0) {
    document.writeln(`El número es divisible entre 3 y entre 5.`);
}
else if (resul_3 == 0){
    document.writeln(`El número ${numero} si es divisible entre 3.`);
} 
else if (resul_5 == 0){
    document.writeln(`El número ${numero} si es divisible entre 5.`);
}

else{
    document.writeln(`El número ${numero} no es divisible ni entre 5 ni entre 3.`);
    
}
