
// creacion de variables con prompt
let num1 = parseFloat(prompt("Ingresa un numero."));
let num2 = parseFloat(prompt("Ingresa otro numero."));

let operacion = prompt("Selecciona operacion: suma, resta, multiplicacion o division");

let resultado;


// Creacion de funciones
function sumar (numero1, numero2){
    let suma = numero1 + numero2;
    return suma;
}

function diferencia (numero1, numero2){
    let resta = numero1 - numero2;
    return resta;
}

function multi(numero1, numero2){
    let multiplicacion = numero1 * numero2;
    return multiplicacion;
}

function division_d (numero1, numero2){
    let division = numero1 / numero2;
    return division;
}



// Aplicacion de condicional
switch (operacion) {
    case 'suma':
        resultado = sumar (num1, num2);
        alert("El resultado de la suma es: " + resultado);
        break;

    case 'resta':
        resultado = diferencia(num1, num2);
        alert("El resultado de la resta es: " + resultado);
        break;

    case 'multiplicacion':
        resultado = multi(num1, num2);
        alert("El resultado de la multiplicacion es: " + resultado);
        break;

    case 'division':
        resultado = division_d(num1, num2);
        alert("El resultado de la division es: " + resultado);
        break;

    default:
        alert("Operacion fallida !");
}