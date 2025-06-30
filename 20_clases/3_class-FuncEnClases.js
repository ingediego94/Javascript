
class PersonaPorDefecto{
    constructor(nombre = "Sin nombre", edad = 0, alias = 'Sin alias'){
    this.nombre = nombre
    this.edad = edad
    this.alias = alias
    }

    caminar(){
        console.log("La persona camina");
    }

}

let persona4 = new PersonaPorDefecto('Andres', 14, 'Resado');
persona4.caminar();