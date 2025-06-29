
// Funciones de orden superior
// Son funciones que reciben como argumento a otras funciones
// Es necesario que la funcion grande, reciba tanto la otra funcion como
// Sus parametros para no presentar errores

const myFunc4 = (name) => console.log(`Hola ${name}`);

function aplicarFunc (func, param){
    func(param);
}

aplicarFunc(myFunc4("Funcion de orden superior"))

