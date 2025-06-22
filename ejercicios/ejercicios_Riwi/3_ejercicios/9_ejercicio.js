// Validación de contraseña segura
// Como desarrollador de formularios, quiero verificar que una contraseña contenga caracteres
// seguros para evitar vulnerabilidades.

const users = [
    {
        user: "laura490",
        data: { correo: "laura490@hotmail.com", 
                password: "36Rp%HA3qB2%O&!" }
    },
    {
        user: "lucas416",
        data: { correo: "lucas416@outlook.com", password: "cqkpvg" }
    },
    {
        user: "ana55",
        data: { correo: "ana55@hotmail.com", password: "aP_@w0UZP" }
    },
    {
        user: "sofia544",
        data: { correo: "sofia544@outlook.com", password: "fiCzcHU" }
    },
    {
        user: "sofia587",
        data: { correo: "sofia587@hotmail.com", password: "bRyS)aG*jxYXL80&" }
    },
    {
        user: "mario987",
        data: { correo: "mario987@yahoo.com", password: "89466" }
    },
    {
        user: "ana779",
        data: { correo: "ana779@gmail.com", password: "*fClL5YV" }
    },
    {
        user: "lucas185",
        data: { correo: "lucas185@hotmail.com", password: "96620" }
    },
    {
        user: "pedro382",
        data: { correo: "pedro382@hotmail.com", password: "H+)mNqmtQ6Kq$H_j" }
    },
    {
        user: "ana227",
        data: { correo: "ana227@outlook.com", password: "bdwase" }
    },
    {
        user: "pedro854",
        data: { correo: "pedro854@yahoo.com", password: "KagH2^H_yF&OQsUA" }
    },
    {
        user: "valeria675",
        data: { correo: "valeria675@yahoo.com", password: "keGvJtv" }
    },
    {
        user: "diego105",
        data: { correo: "diego105@hotmail.com", password: "LWU7nZtObbwz!" }
    },
    {
        user: "laura502",
        data: { correo: "laura502@gmail.com", password: "rL9IUa" }
    },
    {
        user: "ana853",
        data: { correo: "ana853@outlook.com", password: "E!wAJhbIhR92@jD" }
    },
    {
        user: "lucas162",
        data: { correo: "lucas162@yahoo.com", password: "fqwczh" }
    },
    {
        user: "valeria266",
        data: { correo: "valeria266@hotmail.com", password: "6g4BT!@8" }
    },
    {
        user: "valeria881",
        data: { correo: "valeria881@gmail.com", password: "08278" }
    },
    {
        user: "juan918",
        data: { correo: "juan918@outlook.com", password: "(z+Wxk^DAX8Z" }
    },
    {
        user: "ana453",
        data: { correo: "ana453@yahoo.com", password: "OFCg3f" }
    },
    {
        user: "carla554",
        data: { correo: "carla554@hotmail.com", password: "_S7W6DJrDJYCTx84" }
    },
    {
        user: "mario663",
        data: { correo: "mario663@outlook.com", password: "WEH3An" }
    },
    {
        user: "ana284",
        data: { correo: "ana284@outlook.com", password: "tqN@tl%JmpP3LI" }
    },
    {
        user: "carla897",
        data: { correo: "carla897@gmail.com", password: "jcztoq" }
    },
    {
        user: "valeria46",
        data: { correo: "valeria46@yahoo.com", password: "gy0#@Kpq*f$" }
    },
    {
        user: "diego462",
        data: { correo: "diego462@gmail.com", password: "Te4AQf" }
    },
    {
        user: "diego136",
        data: { correo: "diego136@hotmail.com", password: "$#kIbk16H6W6" }
    },
    {
        user: "diego92",
        data: { correo: "diego92@gmail.com", password: "85251" }
    },
    {
        user: "valeria389",
        data: { correo: "valeria389@yahoo.com", password: "B3e#_ln_TqSze1" }
    },
    {
        user: "carla494",
        data: { correo: "carla494@gmail.com", password: "QibCBJU" }
    }
];



// RegEx to validate if a text has Mayusc
function Mayusc_ (text){
    let result = /[A-Z]/.test(text);
    return result;
}


// RegEx to validate if a text has numbers
function Numbers_ (text){
    let result = /[0-9]/.test(text);
    return result;
}


// RegEx to validate if a text has special characters
function SpecialCharacters (text){
    let result = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(text);
    return result;
}


// Function to validate if text has at least 8 characters
function Eight_Characters (text){
    let result = text.length >= 8 ? true : false;       // Ternary Operator
    return result;
}


// Global function to know if a password is secure or not.
function Total_Validation(text){

    const result = Mayusc_(text) && Numbers_ && SpecialCharacters(text) && Total_Validation;

    return result ? "Secure Password" : "Insecure Password";

}


// Printing data: user, password and status to know is secure or not.
for (let i = 0; i < users.length; i++){
    console.log(` User: ${users[i].user}`);
    console.log(`Password: ${users[i].data.password}`);
    console.log(`Status: ${Total_Validation(users[i].data.password)}`);
    console.log("-----");
    
}
