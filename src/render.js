function celsiusToFarenheit(celcius) {
    return (9*celcius)/5 + 32;
}

function renderWeather(weather, unit) {
    const temp = unit === "F" ? celsiusToFarenheit(weather.tempC) : weather.tempC;
    const feelsLike = unit === "F" ? celsiusToFarenheit(weather.feelsLikeC) : weather.feelsLikeC;

    document.querySelector('#location-name').textContent = weather.location;
    document.querySelector('#temperature').textContent = `${temp.toFixed(1)}°${unit}`;
    document.querySelector('#feels-like').textContent = `Feels like ${feelsLike.toFixed(1)}°${unit}`;
    document.querySelector('#condition').textContent = weather.condition;
    document.querySelector('#humidity').textContent = `Humidity: ${weather.humidity}%`;
    document.querySelector('#wind-speed').textContent = `Wind: ${weather.windSpeed} km/h`;
}

function renderWeatherGif(gifUrl) {
    const container = document.querySelector('#weather-gif-container');

    if (!gifUrl) {
        container.innerHTML  = ""
        return;
    }

    container.innerHTML = `<img src="${gifUrl}" alt="Weather visual" class="weather-gif">`;
}

export { renderWeather, renderWeatherGif };