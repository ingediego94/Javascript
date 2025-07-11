## Modificacion del contenido

- textContent: Cambia o recupera el contenido textual de un elemento, sin afectar el HTML.

        let tituloPrincipal = document.getElementById('main_title');
        
        main_title.textContent = "nuevo contenido";

- innerHTML: Permite obtener o cambiar el contenido HTML dentro de un elemento. Se pueden incluir etiquetas HTML.

        let miEtiqueta = document.getElementsByTagName('my-tag');
        
        myTag[0].innerHTML = '<strong>RIWI</strong>';

- outerHTML: Similar a innerHTML, pero afecta el elemento completo, incluyendo la etiqueta HTML del propio elemento.

        let elementClass = document.querySelector('.clase');
        
        elementClass.outerHTML = '<section>NUEVA SECCION</section>';


## Modificacion de atributos

- setAttribute(): Agrega o modifica un atributo de un elemento.

        let mainTitle = document.getElementById('main-title');
        
        mainTitle.textContent = "nuevo contenido";

- getAttribute(): Recupera el valor de un atributo.

        let myTag = document.getElementsByName('my-tag');
        myTag[0].innerHTML = '<section>RIWI</section>';

- removeAttribute(): Elimina un atributo del elemento.

        let elementClass = document.querySelector('.clase');
        elementClass.outerHTML = '<section>NUEVA SECCION</section>';


## Modificacion de estilos:

- style: Permite modificar directamente los estilos de un elemento a través de la propiedad style. Solo aplica estilos en línea.

        let box = document.querySelector('.my-box');

        box.style.backgroundColor = "blue";
        box.style = 'width : 200px;';