
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
    }
];


const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve (usuarios);
    } , 1500);
  });
}
getData().then((usuarios) => 
{
  for (usuario of usuarios){
    console.log(usuario["nombre"]);
  }
}

);