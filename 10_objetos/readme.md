
# JavaScript Object Methods
Methods are actions that can be performed on objects.
Methods are function definitions stored as property values.

We can store methods inside Ojbects:
let person = {
    'name' : 'Diego',
    'lastName' : 'Vallejo',
    'age' : 29, 
    'eyeColor' : 'brown',
    'fullName' : function() {
        return this.firstName + " " + this.lastName;
    }
}

In the example above, this refers to the person object:

this.firstName means the firstName property of person.

this.lastName means the lastName property of person.

Objects are containers for Properties and Methods.
Properties are named Values.
Methods are Functions stored as Properties.
Properties can be primitive values, functions, or even other objects.

In JavaScript, almost "everything" is an object.

Objects are objects
Maths are objects
Functions are objects
Dates are objects
Arrays are objects
Maps are objects
Sets are objects
All JavaScript values, except primitives, are objects.