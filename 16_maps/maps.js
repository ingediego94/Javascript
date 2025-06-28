// MAPS

// Un Map es una colección de pares clave-valor en la que tanto las claves 
// como los valores pueden ser de cualquier tipo. A diferencia de los objetos,
//  los maps permiten usar cualquier tipo de dato como clave. 

let myMap1 = new Map();

// Agregamos otra clave-valor al map
myMap1.set('name', 'Antony');
myMap1.set(123, 'ID');
console.log( myMap1 );


// creamos otro map con varios elementos a la vez

// Declararlo
let myMap = new Map();

// Inicializarlo
myMap = new Map([
    ['name' , 'diego'],
    ['age' , 23],
    ['city' , 'Medellin'],
]);


// Imprimir todo el map
console.log( myMap );


// Imprimir una sola clave
console.log( myMap.get('name') );


// .set()   = Agregar datos al map
myMap.set('nickname' , 'Apu');
console.log( myMap );

// .set()   = Modificar una clave ya existente
myMap.set('age' , 30);      // cambiamos de 23 a 30
console.log( myMap );

// .delete()    = borrar una clave - valor
myMap.delete('nickname');
console.log( myMap );

// .size        = Obtener el tamaño del mapa
console.log( myMap.size );      // 3

// .has()       = Conocer si tiene una clave
console.log( myMap.has('name') );
console.log( myMap.has('sport') );

// .get()       = Conocer el valor de una clave
console.log( myMap.get("name") );

// .keys()      = Conocer todas las claves
console.log( myMap.keys() );

// .values()    = conocer todos los valores
console.log( myMap.values() );

// .entries()   = Retorna todos los pares de clave - valor
console.log( myMap.entries() );


// .clear()     = Eliminar todo el contenido del map
console.log( myMap.clear() );       // retorna undefined


