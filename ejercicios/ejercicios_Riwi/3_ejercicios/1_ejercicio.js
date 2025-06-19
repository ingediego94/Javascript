// Clasificacion de edades:
let edad = Number(prompt("Ingresa tu edad:"));

if (edad > 0 && edad <= 12) {
  document.writeln('Eres un niño.');
} else if (edad > 12 && edad <= 17) {
  document.writeln('Eres un adolescente.');
} else if (edad > 17 && edad <= 59) {
  document.writeln('Eres un adulto.');
} else if (edad > 59 && edad <= 120) {
  document.writeln('Eres un adulto mayor.');
} else if (edad <= 0 || edad > 120 ){
    document.writeln("No se encuentre dentro del rango de edad permitido. Revise.");
} else {
  document.writeln('Error en el ingreso de datos.');
}
