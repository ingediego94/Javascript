// Transformar array de objetos a diccionario
// Convierte un array de objetos con id y valor en un objeto tipo diccionario 
// { id1: valor1, id2:  valor2, ... }.

// 1 OPTION:
const arrayToTransform = [
    {'id1': 18}, 
    {'id2': 23}, 
    {'id3': 77}, 
    {'id4': 96}, 
    {'id5': 45}, 
    {'id6': 1},
];

const result = Object.assign({}, ...arrayToTransform);

console.log("1 Option:");
console.log(result);
console.log("-------------");




// ---------------------------------------------------------------------------
// 2 OPTION:       []
const arrayToTransform_1 = ['id1', 18, 'id2', 23, 'id3', 77, 'id4', 96, 'id5', 45, 'id6', 1];
const obj1 = {}


for (let i = 0; i < arrayToTransform_1.length; i += 2){
    const key = arrayToTransform_1[i];
    const value = arrayToTransform_1[i+1];
    obj1[key] = value;
}

console.log("2 Option:");
console.log(obj1);
console.log("-------------");


// -----------------------------------------------------------------------------
// 3 OPTION:    new Map()


const arrayToTransform_2 = new Map([
    ['id1', 18], 
    ['id2', 23], 
    ['id3', 77], 
    ['id4', 96], 
    ['id5', 45], 
    ['id6', 1]]
);

const obj2 = Object.fromEntries(arrayToTransform_2);

console.log("3 Option:");
console.log(obj2);
console.log("-------------");



