// 1. Crea un objeto con 3 propiedades.
const objeto1 = {
    nombre : 'Diego',
    apellido : 'Vallejo',
    nomCompleto : function (){
        console.log( this.nombre , this.apellido );
        
    }
}

// 2. Accede y muestra su valor
console.log( objeto1.nombre );
console.log( objeto1.apellido );
objeto1.nomCompleto();

console.log("------------------");


// 3. Agrega una nueva propiedad.
objeto1.edad = 29;
objeto1["ciudad"] = 'Medellin';
console.log( objeto1.edad );
console.log( objeto1.ciudad );

console.log("------------------");


// 4. elimina una de las primeras 3 propiedades.
delete objeto1.nomCompleto;
console.log( objeto1 );

console.log("------------------");


//5. Agrega una funcion e invocala.
objeto1.nomEdad = function(){
    console.log( `Soy ${this.nombre} y tengo ${this.edad} años.` );
};

objeto1.nomEdad();

console.log("------------------");

// 6. Itera las propiedades del objeto.
for (const propiedad in objeto1){
    console.log( `${propiedad}: ${objeto1[propiedad]}` );
}

console.log("------------------");

// 7. Crea un objeto anidado.
objeto1.estudios = {
    colegio : "San Ignacio Loyola",
    universidad : "Udenar",
    universidad2 : "Poli"
};

// 8. Accede y muestra el valor de las propiedades anidadas
console.log( objeto1.estudios );
console.log( objeto1.estudios.universidad2 );

// 9. Comparar 2 propiedades del objeto para ver si son iguales.
console.log( objeto1.estudios.universidad === objeto1.estudios.universidad2 );


