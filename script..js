function formatDate(time) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let hours = currentTime.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }

    let minutes = currentTime.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    let day = days[currentTime.getDay()];

    return `${day} ${hours}:${minutes}`;
}

function displayWeatherCondition(response) {
    document.querySelector("#city-name").innerHTML = response.data.name;
    document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);
    document.querySelector("#humidity").innerHTML = `${response.data.main.humidity}%`;
    document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed) + "km/h";
    document.querySelector("#description").innerHTML = response.data.weather[0].main;
}

function searchCity(city) {
    let apiKey = "30d51b8f5d573674a85c2b8f5f80916d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
    debugger;
    event.preventDefault();
    // let cityElement = document.querySelector("#city-name");
    // let cityInput = document.querySelector("#city-input");
    // cityElement.innerHTML = cityInput.value;
    let city = document.querySelector("#city-input").value;
    searchCity(city);
}


//Feature1
let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

//Feature2
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

//Bonus Feature
let temperatureElement = document.querySelector("#temperature");
let temperature = temperatureElement.innerHTML;
console.log(temperature);

function searchLocation(position) {
    let apiKey = "30d51b8f5d573674a85c2b8f5f80916d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    console.log(apiUrl);
    axios.get(apiUrl).then(displayWeatherCondition);
}

function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
}

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

searchCity("New York");


// //Challenge2
// function showPosition(response) {
//     let city = document.querySelector("#city-name");
//     city.innerHTML = "#city-name";
// }

// function getCurrentPosition(){
//     navigator.geolocation.getCurrentPosition(showPosition);
// }



// let currentPositionButton = document.querySelector(".btn-success");
// currentPositionButton.addEventListener("click", getCurrentPosition);

//Prostsze rozwiazanie bez uzywania funkcji, ktore tez dziala(challenge1)
// let dateElement = document.querySelector("#date");

// let currentTime = new Date();
// let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// let hours = currentTime.getHours();
// if (hours < 10) {
//     hours = `0${hours}`;
// }

// let minutes = currentTime.getMinutes();
// if (minutes < 10) {
//     minutes = `0${minutes}`;
// }

// let day = days[currentTime.getDay()];


// console.log(day);
// dateElement.innerHTML = `${day} ${hours}:${minutes}`;



