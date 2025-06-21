// 4. Validación de acceso con rol
// Como administrador del sistema, quiero validar si un usuario tiene credenciales y rol de
// // superusuario para permitir o denegar el acceso a funcionalidades críticas.

// const usuario_1 = 'admin';
// const password_1 = '201480';
// let usario_count = 0;


const users = {

    admin : {
        usuario : 'admin',
        password : '201480',
        usuario_count : 0,
        acceso : true,
    },

    usuario2 : {
        usuario : 'user',
        password : '45237',
        usuario_count : 0,
        acceso : true,
    }

}


function chequear (entrada1, entrada2){
    alert(`${entrada1} ${entrada2}`);
    const key = (entrada1 in users ) ? true : false;
    let entrada = Object.values(users.entrada1)
    alert(`${entrada}`)
    //const key_pass = (entrada2 in users.entrada1.password ) ? true : false;
    
    //alert(`${key} xx ${key_pass}`);
}




// Loop
while (true){

    let entrada1 = prompt("Ingrese su usuario: ");
    let entrada2 = prompt("Ingrese su contraseña: ");
    chequear(entrada1, entrada2)
    if (entrada1 === users.admin.usuario && users.admin.acceso === true){
        if( entrada2 === users.admin.password && users.admin.usuario_count <= 2){
            alert(`Eres administrador.`);
            break;
        }
        else if (users.admin.usuario_count === 2){
            users.admin.acceso = false;

            alert("Tu cuenta ha sido bloqueada. ")
        }
        else {
            alert("Tu contraseña no es correcta.");
            users.admin.usuario_count ++; 
        }
    } 
    else {
        alert(`Se ha presentado un error.Contacta a sistemas.`);
    }

}