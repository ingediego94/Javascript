
function oculto(name){
    let texto = "Este es un mensaje secreto.";

    return function(){
        return console.log(`Hola ${name}, ${texto}`);
    };

}

const decifrarMensaje = oculto('Carlos');

console.log( decifrarMensaje() );



// -----------------------------------------------
async function printNumbers(numFin) {
    for(let i = 0; i < numFin; i++ ){
        console.log(`${i}`);
    }
}