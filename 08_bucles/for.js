let cont = 1;

// for (incializacion ; condicion ; incremento){}


// for (let cont = 1; cont <= 100; cont ++){
//     console.log(cont + " ");
// }


/* 
    // BREAK:   Aqui se sale por completo del ciclo.

for (let cont = 1; cont <= 100; cont ++){
    if (cont == 80){
        break;
    }
    console.log(cont + " ");
}

*/



    // CONTINUE:   Aqui solo se salta una itearacion del ciclo

for (let cont = 1; cont <= 20; cont ++){
    if (cont == 10){
        continue;
    }
    console.log(cont + " ");
}

for (let i = 0; i<5; i++){
    console.log(i);
    continue;
    i++;
}

