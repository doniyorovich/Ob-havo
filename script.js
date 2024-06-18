const URL = "https://api.openweathermap.org/data/2.5/weather?q=olmaliq&units=metric&appid=941cbdb9278b117a9ef8d6ea82f0a7ba";

const URLDAYS = "https://api.openweathermap.org/data/2.5/forecast?q=olmaliq&units=metric&appid=941cbdb9278b117a9ef8d6ea82f0a7ba";

const eTempTitle = document.querySelector(".temp-title");
const elTempText = document.querySelector(".temp-text");
const elSiteTitle = document.querySelector(".site-title");
const elHumitidyText = document.querySelector(".humitidy-text");
const elAirText = document.querySelector(".air-text");
const elWindText = document.querySelector(".wind-text");

const elTempImg = document.querySelector(".temp-img");
async function getWeather () {
    try {
        let res = await fetch(URL);
        
        let data = await res.json();

        if(data.weather[0].main == 'Clouds') {
            document.body.style.backgroundImage = "url('./images/bulut.gif')";
            elTempImg.src = "./images/clouds.gif"
        }

        if(data.weather[0].main == 'Rain') {
            document.body.style.backgroundImage = "url('./images/bg2.gif')";
            elTempImg.src = "./images/rain.gif"
        }

        if(data.weather[0].main == 'Thunderstorm') {
            document.body.style.backgroundImage = "url('./images/lightning.gif')";
            elTempImg.src = "./images/storm.gif"
        }

        if(data.weather[0].main == 'Snow') {
            document.body.style.backgroundImage = "url('./images/snow.gif')";
            elTempImg.src = "./images/snowflake.gif"
        }

        if(data.weather[0].main == 'Clear') {
            document.body.style.backgroundImage = "url('./images/sun.jpeg')";
            elTempImg.src = "./images/sun.gif"
        }
        
        elTempText.innerHTML = Math.floor(data.main.temp) + " ℃";
        eTempTitle.innerHTML = data.name;
        elSiteTitle.innerHTML = data.name;
        elHumitidyText.innerHTML = data.main.humidity + " %";
        elAirText.innerHTML = data.main.pressure + "PS";
        elWindText.innerHTML = data.wind.speed + "km/h";
        
    } catch (error) {
        console.log(error);
    }
}

getWeather()


const elForm = document.querySelector(".form");
const elInp = document.querySelector(".form-inp");

async function searchWeather (input) {
    try {
        let res = await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=941cbdb9278b117a9ef8d6ea82f0a7ba`);
        
        let data = await res.json();
        console.log(data);
        
        if(data.weather[0].main == 'Clouds') {
            document.body.style.backgroundImage = "url('./images/bulut.gif')";
            elTempImg.src = "./images/clouds.gif"
        }

        if(data.weather[0].main == 'Rain') {
            document.body.style.backgroundImage = "url('./images/bg2.gif')";
            elTempImg.src = "./images/rain.gif"
        }

        if(data.weather[0].main == 'Thunderstorm') {
            document.body.style.backgroundImage = "url('./images/lightning.gif')";
            elTempImg.src = "./images/storm.gif"
        }

        if(data.weather[0].main == 'Snow') {
            document.body.style.backgroundImage = "url('./images/snow.gif')";
            elTempImg.src = "./images/snowflake.gif"
        }

        if(data.weather[0].main == 'Clear') {
            document.body.style.backgroundImage = "url('./images/sun.jpeg')";
            elTempImg.src = "./images/sun.gif"
        }
        
        elTempText.innerHTML = Math.floor(data.main.temp) + " ℃";
        eTempTitle.innerHTML = data.name;
        elSiteTitle.innerHTML = data.name;
        elHumitidyText.innerHTML = data.main.humidity + " %";
        elAirText.innerHTML = data.main.pressure + "PS";
        elWindText.innerHTML = data.wind.speed + "km/h";
        
    } catch (error) {
        console.log(error);
    }
}

elForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    
    searchWeather(elInp.value);
    
    elInp.value = '';
})

const elDaysWrapper = document.querySelector(".days-wrapper");

async function getWeatherData() {
    try {
        let res = await fetch(URLDAYS);
        
        let data = await res.json();
        
        console.log(data);

        data.list.splice(0, 7) .forEach(item => {
            const newBox = document.createElement("div");
            const newTitle = document.createElement("h3");
            const newText = document.createElement("p");

            newBox.appendChild(newText);
            newBox.appendChild(newTitle);
            elDaysWrapper.appendChild(newBox);

            newBox.classList.add("days-box");
            newText.classList.add("days-text");
            newTitle.classList.add("days-title")

            newTitle.innerHTML = item.main.temp + " ℃";
            newText.innerHTML = item.dt_txt;
        })
        
        
    } catch (error) {
        console.log(error);
    }
}

getWeatherData()