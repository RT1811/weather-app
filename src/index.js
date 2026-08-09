// src/index.js
import "./styles.css";
import { getWeatherData, extractWeatherData } from "./weatherService.js";
import { renderWeather, renderWeatherGif } from "./render.js";
import { getWeatherGif } from "./giphyService.js";

let currentWeather = null;
let currentUnit = "C";

const searchForm = document.querySelector('#search-form');
const locationInput = document.querySelector('#location-input');
const unitToggle = document.querySelector('#unit-toggle');
const loadingMessage = document.querySelector("#loading-message");

searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const location = locationInput.value.trim();
    if (!location) return;

    loadingMessage.classList.remove('hidden');

    try {
        const rawData = await getWeatherData(location);
        currentWeather = extractWeatherData(rawData);
        renderWeather(currentWeather, currentUnit);
    } catch (error) {
        console.log(error);
        return;
    } finally {
        loadingMessage.classList.add('hidden');
    }

    try {
        const gifUrl = await getWeatherGif(currentWeather.icon);
        renderWeatherGif(gifUrl);
    } catch (error) {
        console.error('Gif fetch failed:', error);
        renderWeatherGif(null);
    }
});

unitToggle.addEventListener('click', () => {
    currentUnit = currentUnit === "C" ? "F" : "C";
    unitToggle.textContent = currentUnit === "C" ? "show °F" : "show °C";

    if (currentWeather) {
        renderWeather(currentWeather, currentUnit);
    }
});

