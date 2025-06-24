
// Un método es una función que pertenece a un objeto. Nos permite realizar 
// acciones sobre los datos de ese objeto o manipular sus propiedades, encapsulando
// //  comportamientos de manera eficiente. 
    // ¿Qué es un método en JavaScript y cuál es su función dentro de un objeto?  
    // Un método es una función asociada a un objeto que realiza acciones sobre sus propiedades

const car = {
    make : 'Tesla',
    model : 'Model-3',
    year : 2020,

    // Shorthand method to describe the car
    getDescription(){
        return `This car is a ${this.year} ${this.make} ${this.model}`;
    },

    // Traditional method declaration to update the model
    updateModel: function(newModel){
        this.model = newModel;
        return `The model has been updated to ${this.model}.`;
    }
};