// Se evalua la conducion, donde se ejecuta al menos una vez las instrucciones.
// break: Detiene la ejecución del bucle inmediatamente. 
// continue: Salta la iteración actual y continúa con la siguiente. 


let i = 1;

do{
    console.log(i + " ");
    i++;
} while(i <= 10);




console.log("------------------------");



// Ejemplo 2:
let option;

do {
    console.log("1. Say Hello.");
    console.log("2. Exit.");
    
    option = 1;  // Simulate user input.

    if (option == 1){
        console.log("Hello");
    }

    break;
} while (option !== 2);
