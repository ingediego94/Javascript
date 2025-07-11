 - document.getElementById({id})  
 Obtener dato mediante el ID:

        document.getElementById('tituloPrincipal');

- document.getElementsByClassName
({className})  
Obtener datos mediante la clase, devuelve una coleccion de datos:

        document.getElementsByClassName('riwi_class');

- document.getElementsByTagName
({tagName})  
Selecciona todos los elementos que tienen una etiqueta HTML específica. Retorna una colección de elementos.

        document.getElementsByTagName('mi_etiqueta');

- document.querySelector(selector)  
Selecciona el primer elemento que coincida con un selector CSS. Devuelve solo un elemento.

        let elementClass = document.querySelector('.clase');
        
        let elementId = document.querySelector('#id');

        let elementTag = document.querySelector('mi_etiqueta');

- document.querySelectorAll({selector})   
Selecciona todos los elementos que coinciden con un selector CSS. Retorna una NodeList (similar a un array).

        let elementsClasses = document.querySelectorAll('div.mi_clase');
        let elementsId = document.querySelectorAll('#mi_Id');
        let elementsTag = document.querySelectorAll('mi_etiqueta');