## Usar addEventListener()

La forma más recomendada y flexible es usar el método addEventListener(). Esto permite agregar varios eventos al mismo elemento sin sobrescribir los anteriores.

        let mi_boton = document.querySelector('button');

        mi_boton.addEventListener('click', function(){
            document.innerHTML = "";
        });