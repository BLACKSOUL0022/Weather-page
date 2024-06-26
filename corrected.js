//////////////////////////////////////////////
//General data
const apiKey = 'a2e0c89d04591e14058d6d687c73bf5b'; // API Key
let latitude;
let longitude;
//////////////////////////////////////////////
// Checking navegator compatibility and getting coord
async function gettingCoordinates() {
    return new Promise ((resolve, reject) => {
        if ("geolocation" in navigator) {
            // Getting user's location
            navigator.geolocation.getCurrentPosition(function(position) {
              // Getting coords
            resolve({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude    
            })   
            }, reject);
          } else {
            reject(console.log("Geolocalización no es compatible en este navegador"));
          }
    })
}

//////////////////////////////////////////////
// Getting weather Data from the API call
async function gettingWeatherData() {
    try {
        const coordinate = await gettingCoordinates();
        const url = await `https://api.openweathermap.org/data/2.5/weather?lat=${coordinate.latitude}&lon=${coordinate.longitude}&appid=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        const { name, main, weather } = data;
        const temperature = main.temp - 273.15; // K to C
        const description = weather[0].description;
        const humidity = main.humidity;
        const pressure = main.pressure;
        const climaHTML = `<p class= "temperature"> ${temperature.toFixed(1)} °C </p>
        <p class= "day_description"> ${description}</p>`; 
        document.getElementById('weather').innerHTML = climaHTML;
        document.getElementById('city_name').innerHTML = data.name;
        return {
            name,
            temperature,
            description,
            humidity,
            pressure
        };
    } catch (error) {
        console.error('Error al obtener los datos del clima:', error);
        return null; 
    }
}

//////////////////////////////////////////////
// Prints the data received by the API call (temp)
async function printData() {  
    const theData = await gettingWeatherData();
    if (theData) {
        console.log(theData);
        console.log(theData.name);
    } else {
        console.log('No se pudo obtener los datos del clima');
    }
}

//////////////////////////////////////////////
//Changes on the page depending on weather and time
async function pageUpdates() { 
    const theData = await gettingWeatherData();
    const dayOrNight = new Date();
    const sunOrMoon = dayOrNight.getHours();
    console.log(sunOrMoon);

    const weatherImages = {  //Day data
        // Clear
        "clear sky": ["images/sun_sunny.png", "images/black_moon_night.png"],
        // Clouds
        "few clouds": ["images/cloudy_sunny.png", "images/cloudy_moon_night.png"],
        "scattered clouds": "images/cloudy_weather.png",
        "broken clouds": "images/cloudy_weather.png",
        "overcast clouds": "images/cloudy_weather.png",
        // Rain
        "light rain": ["images/cloud_raining_sun.png", "images/cloudy_moon_rainy.png"],
        "moderate rain": ["images/cloud_raining_sun.png", "images/cloudy_moon_rainy.png"],
        "heavy intensity rain": ["images/cloud_raining_sun.png", "images/cloudy_moon_rainy.png"],
        "very heavy rain": ["images/cloud_raining_sun.png", "images/cloudy_moon_rainy.png"],
        "extreme rain": ["images/cloud_raining_sun.png", "images/cloudy_moon_rainy.png"],
        "freezing rain": "images/freezing.png",
        "light intensity shower rain": "images/raining.png",
        "shower rain": "images/raining.png",
        "heavy intensity shower rain": "images/raining.png",
        "ragged shower rain": "images/raining.png",
        // Snow
        "light snow": "images/freezing.png",
        "snow": "images/freezing.png"
    };
    function getDayOrNightImage(images) { //Secondary function
        if (Array.isArray(images)) {  //Check if its an array to decide which image to use
            
            return sunOrMoon <= 5 || sunOrMoon >= 20 ? images[1] : images[0];
            
        }
        return images;
    }
    function sunOrMoonIcon() {  //Main function
        const image = getDayOrNightImage(weatherImages[theData.description.toLowerCase()]);
        const weatherImg = document.querySelector(".weather-icon");
        if (image) {
            weatherImg.src = image; //if there's an statement for the current weather, shows their image
        } else {
            console.log("case not recognized");
            weatherImg.src = "images/sun_sunny.png";
        }
    }
    sunOrMoonIcon();

}

///////////////////////////////////////////////////////////
//// Old code
const github = document.getElementById("github");
const gmail = document.getElementById("gmail");
const whatsapp = document.getElementById("whatsapp");
const personal_page = document.getElementById("personal_page");

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

    github.src = "social_icons/github_icon2.png";
    gmail.src = "social_icons/gmail_icon2.png";
    whatsapp.src = "social_icons/whatsapp_icon2.png";
    personal_page.src = "social_icons/fox_icon2.png";
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

    github.src = "social_icons/github_icon2.png";
    gmail.src = "social_icons/gmail_icon2.png";
    whatsapp.src = "social_icons/whatsapp_icon2.png";
    personal_page.src = "social_icons/fox_icon2.png";
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

    github.src = "social_icons/github_icon2.png";
    gmail.src = "social_icons/gmail_icon2.png";
    whatsapp.src = "social_icons/whatsapp_icon2.png";
    personal_page.src = "social_icons/fox_icon2.png";
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

    github.src = "social_icons/github_icon2.png";
    gmail.src = "social_icons/gmail_icon2.png";
    whatsapp.src = "social_icons/whatsapp_icon2.png";
    personal_page.src = "social_icons/fox_icon2.png";
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
    
    github.src = "social_icons/github_icon.png";
    gmail.src = "social_icons/gmail_icon.png";
    whatsapp.src = "social_icons/whatsapp_icon.png";
    personal_page.src = "social_icons/fox_icon.png";
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

    github.src = "social_icons/github_icon.png";
    gmail.src = "social_icons/gmail_icon.png";
    whatsapp.src = "social_icons/whatsapp_icon.png";
    personal_page.src = "social_icons/fox_icon.png";
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

        github.src = "social_icons/github_icon.png";
        gmail.src = "social_icons/gmail_icon.png";
        whatsapp.src = "social_icons/whatsapp_icon.png";
        personal_page.src = "social_icons/fox_icon.png";    
}

//// Old code ^^^
// Managing events each hour
//// Getting current hour
function checkTime() {
    const date = new Date();
    const hour = date.getHours();
    console.log(hour);

    if ((hour >= 0 && hour < 4) || (hour > 21 && hour < 24)) {
        document.body.style.backgroundPosition = '50% 0%';    // change 0
        totalDark();
    } else {
        switch (hour) {
            case 4:
            case 21:
                document.body.style.backgroundPosition = '50% 10%';    // change 1
                Dark10p();
                break;
            case 5:
            case 20:
                document.body.style.backgroundPosition = '50% 30%';    // change 2
                Dark30p();
                break;
            case 6:
            case 19:
                document.body.style.backgroundPosition = '50% 50%';    // change 3
                Dark50p();
                break;
            case 7:
            case 18:
                document.body.style.backgroundPosition = '50% 70%';    // change 4
                Dark70p();
                break;
            case 8:
            case 17:
                document.body.style.backgroundPosition = '50% 90%';    // change 5
                Dark90p();
                break;
            default:
                document.body.style.backgroundPosition = '50% 100%';   // change 6
                day();
        }
    }
}

//Ejecuta todas las funciones cada 60 segundos (colocar esto al final para no llenar el script de asincronias)
function globalWork() {
    gettingCoordinates();
    pageUpdates();
    printData();
    checkTime();
}
setInterval(globalWork, 60000);
globalWork();


