
function nombre(){
    let name = 'Diego';

    return function(){
        
        console.log( `${name}  Vallejo` );
    };
}

const miNombre = nombre();

miNombre();
