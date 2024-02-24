function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  let hour = date.getHours();
  let minute = date.getMinutes();

  if (hour < 10) {
    hour = `0${hour}`;
  }

  if (minute < 10) {
    minute = `0${minute}`;
  }

  return `${day}, ${hour}:${minute},`;
}

function updateWeather(response) {
  let cityElement = document.querySelector(".city");
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind-speed");
  let conditionElement = document.querySelector("#weather-details-description");
  let timeElement = document.querySelector("#date-time");
  let date = new Date(response.data.time * 1000);
  let iconElement = document.querySelector("#icon");

  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}">`;
  timeElement.innerHTML = formatDate(date);
  conditionElement.innerHTML = response.data.condition.description;
  windSpeedElement.innerHTML = `${response.data.wind.speed} mph`;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  temperatureElement.innerHTML = Math.round(temperature);
  cityElement.innerHTML = response.data.city;
}

function searchCity(city) {
  let apiKey = "3abd40f778e68af1d547coc6ct4952fd";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(updateWeather);
}

function searchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchSubmit);

function displayForecast() {
    let days = ['Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let forecastHtml = "";

    days.forEach(function(day)
    forecastHtml = forecastHtml +
    `<div class="forecast">
       <div class="forecast-day">Thu</div>
       <div class="forecast-icon">☀️</div>
       <div class="forecast-temps">
         <span class="forecast-temps-both forecast-temps-max"><strong>
         18°</strong></span>
         <span class="forecast-temps-both forecast-temps-min">12°</span>
       </div>
     </div>`;
});

let forecastElement = document.querySelector("#forecast");
forecastElement.innerHTML = forecastHtml;
}


searchCity("Atlanta");




   
     
 
