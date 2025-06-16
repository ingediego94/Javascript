/* Caracteres especiales (Escape Sequences):
A veces, necesitamos incluir (o escapar) caracteres especiales dentro de una cadena, como comillas dobles, 
saltos de línea, o caracteres no imprimibles. Para esto, utilizamos escape sequences, que comienzan con una 
barra invertida (\) para indicar que el carácter que sigue debe tratarse de manera especial. 

\'      = Comilla simple.
\"      = Comilla doble.
\\      = Barra invertida.
\n      = Salto de linea.
\t      = Tabulador.
\r      = Retorno de carro.
\b      = Retroceso (backspace).
\f      = Salto de página (form feed).
\uXXXX  = Caracter Unicode (donde XXXX es el código hexadecima).

*/

console.log("Ella dijo: \'Hola\' ");
console.log("Ella dijo: \"Hola\" ");
console.log("Esto es una barra invertida: \\");
console.log("Primera línea \n Segunda linea (con salto).");
console.log("Columna 1 \t Columna 2");
console.log("Linea 1\rLinea 2");
console.log("Hola\bMundo");
console.log("Primera página\fSegunda página.");
console.log("Para el simbolo: \u00A9 ");


