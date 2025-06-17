// An object it's the same than a dictionary in pyhton.

let carro = {
    'marca' : 'Fiat',
    'cilindraje' : 1500,
    'modelo' : 2025,
    'pasajeros' : 4
}

// How to print the whole object. 
console.log(carro);


// How to access to an specific key
console.log(carro.cilindraje);
console.log(carro["cilindraje"]);       // Both do the same.





// We can store methods inside Ojbects:
let person = {
    'name' : 'Diego',
    'lastName' : 'Vallejo',
    'age' : 29, 
    'eyeColor' : 'brown',
    'fullName' : function() {
        return this.firstName + " " + this.lastName;
    }
}

console.log(person);

/*
In the example above, this refers to the person object:

this.firstName means the firstName property of person.

this.lastName means the lastName property of person.
*/