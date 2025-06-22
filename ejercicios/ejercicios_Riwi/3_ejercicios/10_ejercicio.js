

// Juego piedra, papel o tijera
// Como jugador, quiero competir contra la computadora en un juego de piedra, papel o tijera
// para divertirme y practicar lógica condicional.

let rand = Math.floor(Math.random() * 3);

if (rand === 0){
    console.log("ROCK 👊");
}
else if (rand === 1){
    console.log("PAPPER 🫱");
}
else if (rand === 2){
    console.log("SISORS ✌️");
}
else {
    console.log("Error !");
    
}

