
const usuarios = [
    {
      id: "1",
      nombre: "Carlos",
      email: "carlosj18@gmail.com",
      edad: 18
    },
    {
      id: "2",
      nombre: "Lucía",
      email: "lucia.ma25@hotmail.com",
      edad: 25
    },
    {
      id: "3",
      nombre: "Andrés",
      email: "andres_23@gmail.com",
      edad: 23
    },
    {
      id: "4",
      nombre: "Mariana",
      email: "mariana.rios89@yahoo.com",
      edad: 31
    } 
];


const getUsuarios = () => {
    return usuarios;
}

console.log( getUsuarios() );
