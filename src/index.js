// src/index.js
import "./styles.css";
import { getWeatherData, extractWeatherData } from "./weatherService.js";

const searchForm = document.querySelector('#search-form');
const locationInput = document.querySelector('#location-input');

searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const location = locationInput.value.trim();
    if (!location) return;

    try {
        const rawData = await getWeatherData(location);
        const weather = extractWeatherData(rawData);
        console.log(weather);
    } catch (error) {
        console.log(error);
    }
});

