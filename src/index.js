// src/index.js
import "./styles.css";
import { API_KEY } from "./config.js";

async function getWeatherData(location) {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}?unitGroup=metric&key=${API_KEY}&contentType=json`;

    const response  = await fetch(url);

    if (!response.ok) {
        throw new Error(`Weather Request Failed: ${response.status}`);
    }

    const data = await response.json();
    return data;
}

getWeatherData("London").then((data) => console.log(data.currentConditions));