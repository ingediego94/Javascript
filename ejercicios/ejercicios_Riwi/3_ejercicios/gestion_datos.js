// TRAINING M3W2
// BY: DIEGO VALLEJO
// CLAN: HOPPER

// 1. Welcome greet
console.log("Welcome to our management of Objects, Sets & Maps.");


// 2. Three products in an object
const products = {
    1 : {id: 1, name: "spoon", price:4.50},
    2 : {id: 2, name: "fork", price:3.75},
    3 : {id: 3, name: "vase", price:5.21},
    4 : {id: 4, name: "spoon", price:4.50},
};

// 3. Print products
console.log("Products Object: " , products);
console.log();

// 4. Convert to a set
const setProducts = new Set(Object.values(products).map(product => product.name));
console.log("Set unique products: " , setProducts);
console.log();


// 5. A map to add categories:
const mapProducts = new Map([
    ["Cluttery", "spoon"],
    ["Decoration", "vase"],
    ["Basic-cluttery", "fork"]
]);

console.log("Map of products and categories: ", mapProducts);
console.log("------------------------------------------------------");


// 6. Validating and printing all elements of each object.

    // Iterate objects of products in order to print them.

console.log("Tested and validated this software and its data: ");

console.log("Products list (Object): ");
for (const id in products) {
    console.log( `ID Product: ${id}, Details:`, products[id] );
}
console.log();

    // Iterate Set using for of:
console.log("Unique products set list: ");
for (const product of setProducts){
    console.log( "Unique product:" , product );
}
console.log();


    // Iterating the map using forEach
console.log("Categories and products (Map): ");
mapProducts.forEach((product, categorie) => {
    console.log(`Categorie: ${categorie}, Product: ${product}`);
});


