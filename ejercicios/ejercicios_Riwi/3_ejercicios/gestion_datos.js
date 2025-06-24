
// 1. Welcome greet
console.log("Welcome to our management of Objects, Sets & Maps.");


// 2. Three products in an object
const products = {
    1 : {id: 1, name: "spon", price:4.50},
    2 : {id: 2, name: "fork", price:3.75},
    3 : {id: 3, name: "vase", price:5.21},
    4 : {id: 4, name: "spon", price:4.50},
};

// 3. Print products
console.log("Products Object: " , products);

// 4. Convert to a set
const setProducts = new Set(Object.values(products).map(product => product.name));
console.log("Set unique products: " , setProducts);

