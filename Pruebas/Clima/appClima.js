const API_key = "069f2a1737dadc173328a5735661062f";
const city = prompt("De que ciudad deseas consultar el clima?");


async function clima() {
    try {
        const evaluacion = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric&lang=es`)
        const response = await evaluacion.json()
          console.log(
    `
            Ciudad: ${response.name}.
            Clima: ${response.weather[0].description}.
            Temperatura: ${response.main.temp}°C.
            Sensación termica: ${response.main.feels_like}°C.
            Temperatura max: ${response.main.temp_max}°C.
            Temperatura min: ${response.main.temp_min}°C.
            Velocidad viento: ${response.wind.speed} m/sg.
            Dirección viento: ${response.wind.deg}°.
            `);   
  

    
    } catch (error)
    {
        console.log(error);
        
    }
}

clima();
