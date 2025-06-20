// 4. Validación de acceso con rol
// Como administrador del sistema, quiero validar si un usuario tiene credenciales y rol de
// superusuario para permitir o denegar el acceso a funcionalidades críticas.

const usuario_1 = 'admin';
const password_1 = '201480';

const usuario_2 = 'user';
const password_2 = '45237';

let acceso = false;
let usario_count = 0;
// declaring the variable
// initializing the variable

let attempts = 0;



while(acceso == false){

    let entrada1 = prompt("Ingrese su usuario: ");
    let entrada2 = prompt("Ingrese su contraseña: ");

    if (entrada1 === usuario_1 ){
        if( entrada2 === password_1 && usario_count < 3){
            alert(`Se te ha otorgado acceso al sistema como administración. You're superadmin. Llevas ${attempts}`);
            acceso = true;
            break;
        }
        else {
            alert("you user is blok or the password and user is incorret ")
            usario_count ++; 
        }
    } 
    else if(entrada1 === usuario_2 && entrada2 === password_2 ){
        alert(`Has ingresado al sistema como usuario sin permisos sin edición. Llevas ${attempts}`);
        acceso = true;
        break;
    }
    else {
        acceso = false;
        attempts ++;
        alert(`Se ha presentado un error. Llevas ${attempts}`);
    }

}