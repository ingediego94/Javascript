Es muy similar a Local Storage, pero con una diferencia clave: los datos guardados en Session Storage solo se mantienen disponibles durante la sesión actual del navegador. Una vez que el navegador se cierra, los datos se eliminan automáticamente.

- Almacena datos también en pares clave-valor.
- Los datos solo están disponibles mientras la ventana o pestaña esté abierta.
- También tiene un límite de aproximadamente 5MB.
- Los datos son específicos para cada sesión del navegador y no son compartidos entre diferentes pestañas o ventanas.

Métodos clave del Session Storage:

setItem(key, value): Guarda datos en Session Storage.

getItem(key): Recupera los datos guardados.

removeItem(key): Elimina un dato específico almacenado.

clear(): Elimina todos los datos almacenados en Session Storage.

        sessionStorage.setItem('coder','Diego');
        
        sessionStorage.getItem('coder');
        
        sessionStorage.removeItem('coder');
        
        sessionStorage.clear();