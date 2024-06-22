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
            <p class= "temperature"> ${temperatura.toFixed(1)} °C </p>
            <p class= "day_description"> ${descripcion}</p>
            
        `; //<p class= "humidity"> ${humidity}</p>
        //<p class= "pressure"> ${pressure}</p> Agregar despues nuevamente
        document.getElementById('weather').innerHTML = climaHTML;
        return descripcion;
    })
    .then(descripcion => {
        const weatherImg = document.querySelector(".weather-icon");
        const dayOrNight = new Date();
        const sunOrMoon = dayOrNight.getHours();
        console.log(sunOrMoon);

        
        function sunOrMoonClear () {
            if (sunOrMoon <=5 || sunOrMoon >= 20) {
                weatherImg.src = "images/black_moon_night.png";
            } else {
                weatherImg.src = "images/sun_sunny.png";
            }
        }
        function sunOrMoonCloudy () {
            if (sunOrMoon <=5 || sunOrMoon >= 20) {
                weatherImg.src = "images/cloudy_moon_night.png";
            } else {
                weatherImg.src = "images/cloudy_sunny.png";
            }
        }
        function sunOrMoonCloudyRainy () {
            if (sunOrMoon <=5 || sunOrMoon >= 20) {
                weatherImg.src = "images/cloudy_moon_rainy.png";
            } else {
                weatherImg.src = "images/cloud_raining_sun.png";
            }
        }
        function sunOrMoonIcon () {
            switch (descripcion.toLowerCase()) {
                //clear
                case ("clear sky"):
                    sunOrMoonClear();
                    break;
                //clouds
                case ("few clouds"):
                    sunOrMoonCloudy();
                    break;
                case ("scattered clouds"):
                    console.log(`${descripcion}`);
                    weatherImg.src = "images/cloudy_weather.png";
                    break;
                case ("broken clouds"):
                    console.log(`${descripcion}`);
                    weatherImg.src = "images/cloudy_weather.png";
                    break;
                case ("overcast clouds"):
                    console.log(`${descripcion}`);
                    weatherImg.src = "images/cloudy_weather.png";
                    break;
    
                //rain
                case ("light rain"):
                    sunOrMoonCloudyRainy();
                    break;
                case ("moderate rain"):
                    sunOrMoonCloudyRainy();
                    break;
                case ("heavy intensity rain"):
                    sunOrMoonCloudyRainy();
                    break;
                case ("very heavy rain"):
                    sunOrMoonCloudyRainy();
                    break;
                case ("extreme rain"):
                    sunOrMoonCloudyRainy();
                    break;
    
                case ("freezing rain"):
                    console.log(`${descripcion}`);
                    weatherImg.src = "images/freezing.png";
                    break;
                case ("light intensity shower rain"):
                    console.log(`${descripcion}`);
                    weatherImg.src = "images/raining.png";
                    break;
                case ("shower rain"):
                    console.log(`${descripcion}`);
                    weatherImg.src = "images/raining.png";
                    break;
                case ("heavy intensity shower rain"):
                    console.log(`${descripcion}`);
                    weatherImg.src = "images/raining.png";
                    break;
                case ("ragged shower rain"):
                    console.log(`${descripcion}`);
                    weatherImg.src = "images/raining.png";
                    break;
                //snow
                case ("light snow"):
                    console.log(`${descripcion}`);
                    weatherImg.src = "images/freezing.png";
                    break;
                case ("snow"):
                    console.log(`${descripcion}`);
                    weatherImg.src = "images/freezing.png";
                    break;
                default:
                    console.log("case not recognized");
                    weatherImg.src = "images/sun_sunny.png";
            
                }
        }
        setInterval(sunOrMoonIcon, 60000);
        sunOrMoonIcon();
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



function totalDark() {  // 0%
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
};

//10%
function Dark10p() {  // 10%
    mountainN1.setAttribute('style', 'fill: rgb(30, 30, 51);');
    mountainN2.setAttribute('style', 'fill: rgb(40, 40, 61);');
    mountainN3.setAttribute('style', 'fill: rgb(50, 50, 71);');
    mountainN4.setAttribute('style', 'fill: rgb(60, 60, 81);');
    building1.setAttribute('style', 'fill: rgb(32, 68, 137);');
    building2.setAttribute('style', 'fill: rgb(15, 68, 137);');
    building3.setAttribute('style', 'fill: rgb(80, 134, 137);');
    building4.setAttribute('style', 'fill: rgb(80, 134, 137);');
    building5.setAttribute('style', 'fill: rgb(12, 41, 68);');
    building6.setAttribute('style', 'fill: rgb(53, 53, 53);');
    building7.setAttribute('style', 'fill: rgb(20, 39, 74);');
    windows.forEach(element => {
        element.style.fill = 'rgb(181, 177, 177)';
    });

};
//30%
function Dark30p() {  //30%
    mountainN1.setAttribute('style', 'fill: rgb(55, 55, 77);');
    mountainN2.setAttribute('style', 'fill: rgb(65, 65, 87);');
    mountainN3.setAttribute('style', 'fill: rgb(75, 75, 97);');
    mountainN4.setAttribute('style', 'fill: rgb(85, 85, 107);');
    building1.setAttribute('style', 'fill: rgb(58, 92, 161);');
    building2.setAttribute('style', 'fill: rgb(41, 92, 161);');
    building3.setAttribute('style', 'fill: rgb(106, 160, 161);');
    building4.setAttribute('style', 'fill: rgb(106, 160, 161);');
    building5.setAttribute('style', 'fill: rgb(35, 64, 91);');
    building6.setAttribute('style', 'fill: rgb(77, 77, 77);');
    building7.setAttribute('style', 'fill: rgb(44, 63, 98);');
    windows.forEach(element => {
        element.style.fill = 'rgb(162, 157, 157)';
    });

}
//50%
function Dark50p() {  //50%
    mountainN1.setAttribute('style', 'fill: rgb(74, 74, 94);');
    mountainN2.setAttribute('style', 'fill: rgb(84, 84, 104);');
    mountainN3.setAttribute('style', 'fill: rgb(94, 94, 114);');
    mountainN4.setAttribute('style', 'fill: rgb(104, 104, 124);');
    building1.setAttribute('style', 'fill: rgb(84, 118, 185);');
    building2.setAttribute('style', 'fill: rgb(67, 118, 185);');
    building3.setAttribute('style', 'fill: rgb(132, 186, 185);');
    building4.setAttribute('style', 'fill: rgb(132, 186, 185);');
    building5.setAttribute('style', 'fill: rgb(59, 88, 115);');
    building6.setAttribute('style', 'fill: rgb(101, 101, 101);');
    building7.setAttribute('style', 'fill: rgb(68, 87, 122);');
    windows.forEach(element => {
        element.style.fill = 'rgb(145, 142, 142)';
    });

}
//70%
function Dark70p() {  //70%
    mountainN1.setAttribute('style', 'fill: rgb(93, 93, 113);');
    mountainN2.setAttribute('style', 'fill: rgb(103, 103, 123);');
    mountainN3.setAttribute('style', 'fill: rgb(113, 113, 133);');
    mountainN4.setAttribute('style', 'fill: rgb(123, 123, 143);');
    building1.setAttribute('style', 'fill: rgb(110, 144, 211);');
    building2.setAttribute('style', 'fill: rgb(93, 144, 211);');
    building3.setAttribute('style', 'fill: rgb(158, 212, 211);');
    building4.setAttribute('style', 'fill: rgb(158, 212, 211);');
    building5.setAttribute('style', 'fill: rgb(83, 112, 139);');
    building6.setAttribute('style', 'fill: rgb(125, 125, 125);');
    building7.setAttribute('style', 'fill: rgb(92, 111, 146);');
    windows.forEach(element => {
        element.style.fill = 'rgb(126, 122, 122)';
    });
    
}
//90%
function Dark90p() {  //90%
    mountainN1.setAttribute('style', 'fill: rgb(113, 113, 132);');
    mountainN2.setAttribute('style', 'fill: rgb(123, 123, 142);');
    mountainN3.setAttribute('style', 'fill: rgb(133, 133, 152);');
    mountainN4.setAttribute('style', 'fill: rgb(143, 143, 162);');
    building1.setAttribute('style', 'fill: rgb(136, 170, 237);');
    building2.setAttribute('style', 'fill: rgb(119, 170, 237);');
    building3.setAttribute('style', 'fill: rgb(184, 238, 237);');
    building4.setAttribute('style', 'fill: rgb(184, 238, 237);');
    building5.setAttribute('style', 'fill: rgb(107, 136, 163);');
    building6.setAttribute('style', 'fill: rgb(149, 149, 149);');
    building7.setAttribute('style', 'fill: rgb(116, 135, 170);');
    windows.forEach(element => {
        element.style.fill = 'rgb(109, 106, 106)';
    });
    
}

function day() {  //100%
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
}
// Managing events each hour

//// Getting current hour
function checkTime() {
    const date = new Date();
    const hour = date.getHours();
    switch (hour) {
    
        case 0:
            console.log("son las 12 AM");
            document.body.style.backgroundPosition = '50% 0%';
            totalDark();
            break;
        case 1:
            console.log("es la 1 AM");
            document.body.style.backgroundPosition = '50% 0%';
            totalDark();
            break;
        case 2:
            console.log("son las 2 AM");
            document.body.style.backgroundPosition = '50% 0%';
            totalDark();
            break;
        case 3:
            console.log("son las 3 AM");
            document.body.style.backgroundPosition = '50% 0%';
            totalDark();
            break;
        case 4:
            console.log("son las 4 AM");
            document.body.style.backgroundPosition = '50% 10%';
            Dark10p();
            break;
        case 5:
            console.log("son las 5 AM");
            document.body.style.backgroundPosition = '50% 30%';
            Dark30p();
            break;
        case 6:
            console.log("son las 6 AM");
            document.body.style.backgroundPosition = '50% 50%';
            Dark50p();
            break;
        case 7:
            console.log("son las 7 AM");
            document.body.style.backgroundPosition = '50% 70%';
            Dark70p();
            break;
        case 8:
            console.log("son las 8 AM");
            document.body.style.backgroundPosition = '50% 90%';
            Dark90p();
            break;
        case 9:
            console.log("son las 9 AM");
            document.body.style.backgroundPosition = '50% 100%';
            day();
            break;
        case 10:
            console.log("son las 10 AM");
            document.body.style.backgroundPosition = '50% 100%';
            day();
            break;
        case 11:
            console.log("son las 11 AM");
            document.body.style.backgroundPosition = '50% 100%';
            day();
            break;
        case 12:
            console.log("son las 12 PM");
            document.body.style.backgroundPosition = '50% 100%';
            day();
            break;
        case 13:
            console.log("es la 1 PM");
            document.body.style.backgroundPosition = '50% 100%';
            day();
            break;
        case 14:
            console.log("son las 2 PM");
            document.body.style.backgroundPosition = '50% 100%';
            day();
            break;
        case 15:
            console.log("son las 3 PM");
            document.body.style.backgroundPosition = '50% 100%';
            day();
            break;
        case 16:
            console.log("son las 4 PM");
            document.body.style.backgroundPosition = '50% 100%';
            day();
            break;
        case 17:
            console.log("son las 5 PM");
            document.body.style.backgroundPosition = '50% 90%';
            Dark90p();
            break;
        case 18:
            console.log("son las 6 PM");
            document.body.style.backgroundPosition = '50% 70%';
            Dark70p();
            break;
        case 19:
            console.log("son las 7 PM");
            document.body.style.backgroundPosition = '50% 50%';
            Dark50p();
            break;
        case 20:
            console.log("son las 8 PM");
            document.body.style.backgroundPosition = '50% 30%';
            Dark30p();
            break;
        case 21:
            console.log("son las 9 PM"); 
            document.body.style.backgroundPosition = '50% 10%';
            Dark10p();
            break;
        case 22:
            console.log("son las 10 PM");
            document.body.style.backgroundPosition = '50% 0%';
            totalDark();
            break;
        case 23:
            console.log("son las 11 PM");
            document.body.style.backgroundPosition = '50% 0%';
            totalDark();
            break;
            default:
                console.log(`la hora actual es: ${hour}`);
        }        
}
setInterval(checkTime, 60000);
checkTime();

