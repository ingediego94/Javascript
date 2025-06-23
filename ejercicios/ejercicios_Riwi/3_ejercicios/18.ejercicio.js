// Buscar producto en inventario
// Como gestor de tienda online, quiero encontrar un producto por su código 
// dentro del inventario para mostrar su información al cliente.

const products = [
    {
        codigo: 'AA01',
        nombre: 'guayos',
        precio: 175
    },
    {
        codigo: 'AA03',
        nombre: 'camisa',
        precio: 89.2
    },
    {
        codigo: 'AAR78',
        nombre: 'calcetines',
        precio: 10
    },
    {
        codigo: 'BA43',
        nombre: 'canilleras',
        precio: 50
    },
    {
        codigo: 'C23A',
        nombre: 'pantaloneta',
        precio: 85.35
    },    
    {
        codigo: 'CF26',
        nombre: 'silbato',
        precio: 5.77
    }
]

let searcher = 'silbato';



// 2 OPTION:
let founded1 = null;
let founded2 = null;
let founded3 = null;

for (let i=0; i < products.length; i++){
    if(products[i].nombre == searcher){
        founded1 = products[i];
        founded2 = products[i].precio
        founded3 = products[i].codigo
        break;
    }
}

// console.log(founded1);
console.log(`El silbato tiene un precio de $ ${founded2}.`);
console.log(` Identificado con el codigo: ${founded3}.`);

console.log(" ---------------------------------");



// 2 OPTION:        print the whole object
const result = products.find(product => product.nombre === searcher);

console.log(result);
