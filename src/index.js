// src/index.js
import "./styles.css";
import { getWeatherData, extractWeatherData } from "./weatherService.js";
import { renderWeather } from "./render.js";

let currentWeather = null;
let currentUnit = "C";

const searchForm = document.querySelector('#search-form');
const locationInput = document.querySelector('#location-input');
const unitToggle = document.querySelector('#unit-toggle');

searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const location = locationInput.value.trim();
    if (!location) return;

    try {
        const rawData = await getWeatherData(location);
        currentWeather = extractWeatherData(rawData);
        renderWeather(currentWeather, currentUnit);
    } catch (error) {
        console.log(error);
    }
});

unitToggle.addEventListener('click', () => {
    currentUnit = currentUnit === "C" ? "F" : "C";
    unitToggle.textContent = currentUnit === "C" ? "show °F" : "show °C";

    if (currentWeather) {
        renderWeather(currentWeather, currentUnit);
    }
});

