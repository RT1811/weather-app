import { GIPHY_API_KEY } from "./config.js";

const conditionQueryMap = {
    "clear-day": "sunny weather sky nature",
    "clear-night": "clear night sky stars",
    "partly-cloudy-day": "cloudy weather sky",
    "partly-cloudy-night": "cloudy night sky",
    "cloudy": "overcast weather clouds sky",
    "rain": "rain weather nature",
    "snow": "snowfall weather nature",
    "wind": "windy weather trees",
    "fog": "fog weather nature",
};

export async function getWeatherGif(icon) {
    const query = conditionQueryMap[icon] || "weather";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${encodeURIComponent(query)}&limit=1&rating=g`;

    const response = await fetch(url);

    if(!response.ok) {
        throw new Error(`Giphy request failed: ${response.status}`);
    }

    const data = await response.json();

    if (data.data.length === 0) {
        return null;
    }

    return data.data[0].images.original.url;
}