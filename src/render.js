function celciusToFarenheit(celcius) {
    return (9*celcius)/5 + 32;
}

function renderWeather(weather, unit) {
    const temp = unit === "F" ? celciusToFarenheit(weather.tempC) : weather.tempC;
    const feelsLike = unit === "F" ? celciusToFarenheit(weather.feelsLikeC) : weather.feelsLikeC;

    document.querySelector('#location-name').textContent = weather.location;
    document.querySelector('#temperature').textContent = `${temp.toFixed(1)}°${unit}`;
    document.querySelector('#feels-like').textContent = `Feels like ${feelsLike.toFixed(1)}°${unit}`;
    document.querySelector('#condition').textContent = weather.condition;
    document.querySelector('#humidity').textContent = `Humidity: ${weather.humidity}%`;
    document.querySelector('#wind-speed').textContent = `Wind: ${weather.windSpeed} km/h`;
}

export {renderWeather};