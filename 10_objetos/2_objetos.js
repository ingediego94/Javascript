// We have the next code:

//Create an Object
const person = {
    firstName:"John",
    lastName:"Doe",
    age:50, eyeColor:"blue"
}

// Try to create a copy
const x = person;

// This will change age in person:
x.age = 10;

// If we modify age into x, we are modifying person, because 
// both are addresed to the same memory space, if we modify 
// some of them, we will be modifying both.