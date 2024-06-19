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

///////////////////////////////////////////////////////////
// Change button color and body background
const btnNight = document.getElementById("night_mode");
const mountains = document.querySelectorAll(".mountain1");
const building = document.querySelectorAll(".building");
const windows = document.querySelectorAll(".window");

let btnActivated = false;
const mountainN1 = mountains[0];
const mountainN2 = mountains[1];
const mountainN3 = mountains[2];
const mountainN4 = mountains[3];
const building1 = building[0];
const building2 = building[1];
const building3 = building[2];
const building4 = building[3];
const building5 = building[4];
const building6 = building[5];
const building7 = building[6];

btnNight.onclick = function() {
    if (btnActivated == false) {
        btnActivated = true; 
        btnNight.style.backgroundColor = "#333"; // Cambiar el color del botón también
        mountainN1.setAttribute('style', 'fill: rgb(19, 19, 39);');
        mountainN2.setAttribute('style', 'fill: rgb(29, 29, 49);');
        mountainN3.setAttribute('style', 'fill: rgb(39, 39, 59);');
        mountainN4.setAttribute('style', 'fill: rgb(49, 49, 69);');
           
        building1.setAttribute('style', 'fill: rgb(19, 57, 125);');
        building2.setAttribute('style', 'fill: rgb(3, 57, 125);');
        building3.setAttribute('style', 'fill: rgb(67, 121, 125);');
        building4.setAttribute('style', 'fill: rgb(67, 121, 125);');
        building5.setAttribute('style', 'fill: rgb(0, 29, 57);');
        building6.setAttribute('style', 'fill: rgb(40, 40, 40);');
        building7.setAttribute('style', 'fill: rgb(7, 26, 61);');
        
    
    
    windows.forEach(element => {
        element.style.fill = 'rgb(190, 185, 185)';
    });
    } else {
        btnActivated = false;
        btnNight.style.backgroundColor = "#fff"; // Restablecer el color del botón
        mountainN1.setAttribute('style', 'fill: rgb(129, 129, 149);');
        mountainN2.setAttribute('style', 'fill: rgb(139, 139, 159);');
        mountainN3.setAttribute('style', 'fill: rgb(149, 149, 169);');
        mountainN4.setAttribute('style', 'fill: rgb(159, 159, 179);');
        building1.setAttribute('style', 'fill: rgb(149, 187, 255);');
        building2.setAttribute('style', 'fill: rgb(133, 187, 255);');
        building3.setAttribute('style', 'fill: rgb(197, 251, 255);');
        building4.setAttribute('style', 'fill: rgb(197, 251, 255);');
        building5.setAttribute('style', 'fill: rgb(117, 159, 187);');
        building6.setAttribute('style', 'fill: rgb(170, 170, 170);');
        building7.setAttribute('style', 'fill: rgb(137, 156, 191);');
        windows.forEach(element => {
            element.style.fill = 'rgb(101, 136, 131)';
        });
       };
    
}




