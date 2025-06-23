// Validar estructura de correo
// Como desarrollador de un formulario de contacto, quiero validar que 
// el correo electrónico ingresado tenga un formato válido para evitar errores de envío.

let emails = [
    'dieego11go@gmail.com',
    'carlos43gmail.com',
    'dianaCarlosama23@gmailcom',
    'ofelia.zqw@.com',
    'guandolo@hotmail.com',
    'iphone23@apple.com.co',
    '23carros.dubai@emiratesarab.gov',
    'cazatormentas@tormentascom'
];


let goodEmails = [];
let wrongEmails = [];


// RegEx to validate if an email is valid:
function validate (text){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    let emailOk = emailRegex.test(text) ? true : false;

    return emailOk;
}


for (email of emails){

    if (validate(email) === true){
        goodEmails.push(email);
    }
    else {
        wrongEmails.push(email);
    }


    
}

console.log(`Good emails are: `);
console.log(goodEmails);


console.log("---------------------------");


console.log(`Wrong emails are: `);
console.log(wrongEmails);








    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Aquí se declara una expresión regular (regex), que sirve para verificar el formato de un correo electrónico.

    // 🧠 Explicación detallada del patrón:
        //          Parte del regex	Significado
        //          ^	Inicio de la cadena
        //          [^\s@]+	Uno o más caracteres que no sean espacios (\s) ni @
        //          @	El carácter arroba obligatorio
        //          [^\s@]+	De nuevo, uno o más caracteres que no sean espacios ni @
        //          \.	Un punto literal (el separador entre dominio y extensión, como .com)
        //          [^\s@]+	Uno o más caracteres válidos luego del punto
        //          $	Fin de la cadena
