console.log("Hello World!");

const API_KEY = config.WEATHER_API_KEY;

let input = document.querySelector(".zipcode");
let btn = document.querySelector(".search-button");
let img = document.querySelector(".weather-icon");

function getWeatherData(zipcode) {
let API_ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&units=metric&APPID=${API_KEY}`;
  fetch(API_ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);

        document.querySelector(".temperature").textContent = Math.round(data.main.temp) + "°C";
        document.querySelector(".city_name").textContent = data.name;
        img.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    })
    .catch((error) => {
      console.error("error:", error);
    });
  }

function getZipCode(e) {
  e.preventDefault();

  let ZIP_CODE = input.value;
  getWeatherData(ZIP_CODE);
}

btn.addEventListener("click", getZipCode);
