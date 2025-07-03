let movie = prompt("pelicula:");


let allDataRequest = `http://www.omdbapi.com/?apikey=a31f5235&s={${movie}}`;

const moviesList = [];

async function getData() {
    try{
        const evaluar = await fetch(allDataRequest);
        const response = await evaluar.json()
        
        for (let i = 0; i < response.Search.length; i++){

            const obj = {
                Title: response.Search[i].Title,
                Year: response.Search[i].Year,
                Type: response.Search[i].Type,
                Poster: response.Search[i].Poster
            };
            
            moviesList.push(obj);
            console.log(response.Search[i].Poster);
        }
     

        console.log(moviesList);
        showMovies(moviesList);

    } catch (error){
        console.error("Se ha presentado un error en la recopilación de datos.");
    }
}



function showMovies(moviesList){
    const contenedor = document.getElementById('movies-container');

    moviesList.forEach(element => {
        const target = document.createElement('div');

        target.classList.add('target');

        target.innerHTML = `
        <img src="${element.Poster}" alt="${element.Title}">
        <h3>${element.Title}</h3>
        <p>${element.Year}</p>
        <p>${element.Type}</p>
        `;

        contenedor.appendChild(target);

    });
}


getData();