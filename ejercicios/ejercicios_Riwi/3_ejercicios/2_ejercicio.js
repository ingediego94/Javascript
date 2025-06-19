// Comparador de 3 numeros:

let numero1 = Number(prompt("Ingresa un numero:"));
let numero2 = Number(prompt("Ingresa un numero:"));
let numero3 = Number(prompt("Ingresa un numero:"));

if (numero1 == numero2 && numero2== numero3){
  document.writeln(`Todos los numeros son iguales: (${numero1}, ${numero2}, ${numero3})`);
}
else if(numero1 > numero2 && numero1 >numero3 ){
  document.writeln(`El número ${numero1} es el mayor de todos.`);
} 
else if (numero2 > numero1 && numero2 > numero3) {
  document.writeln(`El numero ${numero2} es el mayor de todos.`);
} 
else if (numero3 > numero1 && numero3 > numero2){
  document.writeln(`El número ${numero3} es el mayor de todos.`);
}
else if (numero1 == numero2){
  document.writeln(`Los numeros ${numero1} y ${numero2} son iguales.`);
}
else if (numero1 == numero3) {
  document.writeln(`Los números ${numero1} y ${numero3} son iguales.`);
} 
else if (numero2 == numero3){
document.writeln(`Los números ${numero2} y ${numero3} son iguales`);
}
else {
  document.writeln(`Error`);
}