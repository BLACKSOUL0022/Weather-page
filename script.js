const apiKey = 'a2e0c89d04591e14058d6d687c73bf5b'; // clave API
const lat = 32.525; // Latitud de Tijuana
const lon = -117.0; // Longitud de Tijuana

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
fetch(url)
    .then(response => response.json())
    .then(data => {
        const { name, main, weather } = data;
        const temperatura = main.temp - 273.15; // Convertir de Kelvin a Celsius
        const descripcion = weather[0].description;
        const humidity = main.humidity;
        const pressure = main.pressure;
        // <h2>Clima en ${name}</h2>, agregar despues dentro de "climaHTML"
        const climaHTML = `
            <p class= "temperature"> ${temperatura.toFixed(1)} °C</p>
            <p class= "day_description"> ${descripcion}</p>
            
        `; //<p class= "humidity"> ${humidity}</p>
        //<p class= "pressure"> ${pressure}</p> Agregar despues nuevamente

        document.getElementById('weather').innerHTML = climaHTML;
    })
    .catch(error => {
        console.error('Error:', error);
    });

// Background change

const btnNight = document.getElementById("night_mode");

btnNight.onclick = function() {
    btnActivated = !btnActivated; // Alternar el estado del botón
    if (btnActivated) {
        btnNight.style.backgroundColor = "#fff"; // Cambiar el color del botón también
    } else {
        btnNight.style.backgroundColor = "#333"; // Restablecer el color del botón
    }
};
