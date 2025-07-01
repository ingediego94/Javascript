
// Promesas
// Busca solucionar el problema de los callback hell.
// La promesa es un valor que puede estar disponible ahora, en el futuro o nunca

// tiene una parte para cuando se resuelva(resolve) y otra para cuando se rechace (reject)

const promesa = new Promise((resolve, reject) =>{
    setInterval(() => {
        const ok = false;
        if (ok) {
            resolve("Operacion exitosa")
        } else {
            reject("Se ha producido un error")
        }
    }, 4000)
}) 

promesa
    .then(result => {
        console.log(result)
    })
    .catch(error =>{
        console.log(result)
    });

console.log("Fin del programa");
