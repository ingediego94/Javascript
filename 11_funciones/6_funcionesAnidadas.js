
// funciones anidadas

function externa(){
    console.log("Función externa");
    function interna(){
        console.log("Función interna");
        
    }
    interna()
}

externa();  

// como interna está dentro de externa, por eso permite ejecutar las dos
 // solo llamando a externa(), esto debido al scope