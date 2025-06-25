// Función que simula un pedido de comida
function ordenarComida(platillo) {
    return new Promise((resolve, reject) => {
    console.log(`Pedido de ${platillo} recibido, procesando...`);
    
    // Simulamos un proceso que toma tiempo (como preparar la comida)
    setTimeout(() => {
      // Simulamos disponibilidad de ingredientes con un número aleatorio
        const hayIngredientes = Math.random() > 0.2;
        
        if (hayIngredientes) {
            resolve(`¡Tu pedido de ${platillo} está listo para delivery!`);
        } else {
            reject(`Lo sentimos, no tenemos ingredientes para preparar ${platillo}.`);
        }
        }, 2000); // 2 segundos de espera
    });
}

// Consumir la promesa (hacer un pedido)
console.log("Realizando pedido...");

ordenarComida("Pizza Margarita")
    .then(mensaje => {
        console.log(mensaje);
        console.log("El repartidor está en camino.");
    })
    .catch(error => {
        console.log(error);
        console.log("¿Deseas ordenar algo más?");
    })
    .finally(() => {
        console.log("Gracias por usar nuestro servicio de delivery.");
    });

// Mientras tanto, el código síncrono sigue ejecutándose
console.log("Puedes seguir navegando en nuestra app mientras preparamos tu pedido.");
