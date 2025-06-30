// Exportacion de modulos:
// poder utilizar parte de un codigo escrito en un .js en otro .js

// Exportar funciones:
export function suma( a , b ) {
    return a + b;
}

console.log( suma( 5, 10) );

/// ------------------------------------

// Exportar Propiedades y/o variables:

export const PI = 3.1416;

export let nombreVariable = 'Variable a exportar';


// Exportación por defecto: }
    // Solo se usa para cuando de todo este archivo solo quiero exportar unicamente una
    // cosa. NO PODEMOS TENER MAS DE UN "export default", esto es un error.
    // Por defecto solo podemos exportar FUNCIONES O CLASES no variables ni constantes.
export default function substraction( a , b ){
    return a - b;
};

// exportando clases
export class Circulo{

    constructor(radio) {
        this.radio = radio
    }

    area (){
        return Math.PI * Math.pow(this.radio, 2);
    }
}

