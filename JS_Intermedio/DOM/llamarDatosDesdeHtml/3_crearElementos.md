## Crear Elementos

Puedes crear nuevos elementos HTML dinámicamente usando document.createElement() y luego agregar estos elementos al DOM con appendChild() o insertBefore().

        let nuevoParrafo = document.createElement('p');

        nuevoParrafo.textContent = 'Este es un nuevo parrafo';

        document.body.appendChild(nuevoParrafo);
        
        document.body.insertBefore(nuevoParrafo);