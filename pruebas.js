

// const calculo = new Promise((resolve, reject) => {
    
// })
let min = 1;
let max = 6;


for (let i = 1; i < 25; i++){
    setTimeout(() => {
        const edad = Math.floor( Math.random() * (max - min + 1)) + min;
        console.log( `${i}.` , edad );
    }, i* 500);
    
}


