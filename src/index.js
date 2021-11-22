const apiKey = "560bdf986e36b4947bb03df589d103d1";
let endpoint = "http://api.openweathermap.org/data/2.5/weather?q=Eastvale&units=imperial&APPID=";

window.onload = function() {
    grabData(); // API fetch and calls addWeatherInfo
};

// Create an h4 and write the weather info
function addWeatherInfo(temperature, sky, skyDescription) {
    let content = document.getElementById('content');
    content.innerHTML = '';
    let tempText = document.createElement('h4');
    tempText.innerHTML = "The current temperature is " + temperature + "\nThe sky is " + sky + " and " + skyDescription;
    console.log("Test " + temperature);

    content.appendChild(tempText);
    console.log(temperature);
}

// Grab the data and call addWeatherInfo
grabData = async () => {
    const response = await fetch(endpoint + apiKey, {mode: 'cors'});
    const weatherData = await response.json();
    addWeatherInfo(weatherData.main.temp, weatherData.weather[0].main, weatherData.weather[0].description);
}
