// Función que simula un pedido de comida
async function ordenarComidaAsync(platillo) {
    console.log(`Pedido de ${platillo} recibido, procesando...`);
    
  // Simulamos un proceso que toma tiempo (como preparar la comida)
    return new Promise((resolve, reject) => {
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

// Función que usa async/await para hacer el pedido
async function hacerPedido() {
    console.log("Realizando pedido...");
    
    try {
        // await pausa la ejecución hasta que la promesa se resuelva
        const mensaje = await ordenarComidaAsync("Pizza Margarita");
        console.log(mensaje);
        console.log("El repartidor está en camino.");
    } catch (error) {
        console.log(error);
        console.log("¿Deseas ordenar algo más?");
    } finally {
        console.log("Gracias por usar nuestro servicio de delivery.");
    }
}

// Llamamos a la función asíncrona
hacerPedido();

// Mientras tanto, el código síncrono sigue ejecutándose
console.log("Puedes seguir navegando en nuestra app mientras preparamos tu pedido.");
