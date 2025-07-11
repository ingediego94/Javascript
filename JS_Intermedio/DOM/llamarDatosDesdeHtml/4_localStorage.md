## Local Storage

Es una API del navegador que te permite almacenar datos de manera persistente en el dispositivo del usuario. Es decir, la información guardada no se elimina cuando el usuario cierra la página o el navegador, a menos que se elimine manualmente.

- Almacena datos en pares clave-valor.
- La información persiste entre sesiones (incluso si cierras el navegador).
- Tiene un límite de almacenamiento de aproximadamente 5MB.
- Los datos son accesibles desde cualquier página del mismo origen (dominio).

Métodos clave del Local Storage:

setItem(key, value): Guarda datos en Local Storage.
getItem(key): Recupera los datos guardados.
removeItem(key): Elimina un dato específico almacenado.
clear(): Elimina todos los datos almacenados en Local Storage.

        localStorage.setItem('name','Diego');
        
        localStorage.getItem('name');
        
        localStorage.removeItem('name');
        
        localStorage.clear();