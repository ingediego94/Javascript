// It's a block of code that will be excecuted when you call it.
// It's divided in parameters and arguments.

// PARAMETERS:
//      function nameOfFunction(parameter1, parameter2, parameter3) {
  //        code to be executed
//      }

// ARGUMENTS:
// let z = nameOfFunction(argument1, argument2);



// Function is called, the return value will end up in x
let x = myFunction(4, 3);

function myFunction(a, b) {
// Function returns the product of a and b
  return a * b;
}




//EXAMPLE 2:
// Convert Fahrenheit to Celsius:

function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

let value = toCelsius(77);