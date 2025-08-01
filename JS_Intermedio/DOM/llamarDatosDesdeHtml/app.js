// Esperamos que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('btnCapturar');
    const input = document.getElementById('miInput');  // Capturamos el campo de entrada
    const titulo = document.getElementById('tituloPrincipal');


    // Asignamos un evento 'click' al botón
    boton.addEventListener('click', () => {
        const valorInput = input.value;  // Obtenemos el valor del input
        console.log('Valor ingresado:', valorInput);

        // Asignamos el valor a una variable
        let miVariable = valorInput;  
        console.log('Variable con valor capturado:', miVariable);
    });

    // Obtenemos el texto de h1
    const textoTitulo = titulo.textContent;
    console.log(titulo);

});





