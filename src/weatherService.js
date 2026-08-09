import { API_KEY } from "./config.js";

export async function getWeatherData(location) {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}?unitGroup=metric&key=${API_KEY}&contentType=json`;

    const response  = await fetch(url);

    if (!response.ok) {
        throw new Error(`Weather Request Failed: ${response.status}`);
    }

    const data = await response.json();
    return data;
}

export function extractWeatherData(rawData) {
    return {
        location: rawData.resolvedAddress,
        tempC: rawData.currentConditions.temp,
        feelsLikeC: rawData.currentConditions.feelslike,
        humidity: rawData.currentConditions.humidity,
        windSpeed: rawData.currentConditions.windspeed,
        condition: rawData.currentConditions.conditions,
        icon: rawData.currentConditions.icon,
        description: rawData.description,
    };
}