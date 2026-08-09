# Weather App

A simple weather application built as part of [The Odin Project](https://www.theodinproject.com/) JavaScript curriculum.

The app allows users to search for a location and view its current weather conditions. It also uses the GIPHY API to display a GIF based on the current weather.

## Features

* Search weather by location
* Display current temperature
* Display weather condition
* Display feels-like temperature
* Display humidity
* Display wind speed
* Toggle between Celsius and Fahrenheit
* Fetch weather-related GIFs from GIPHY
* Loading indicator while data is being fetched
* Error handling for failed API requests
* Responsive layout

## Built With

* HTML
* CSS
* JavaScript
* Webpack
* npm
* Visual Crossing Weather API
* GIPHY API

## What I Learned

This project helped me practice:

* Working with asynchronous JavaScript
* Using `async` and `await`
* Fetching data from external APIs
* Handling API responses and errors
* Processing large API responses into useful application data
* Using multiple APIs in a single project
* Separating application logic into JavaScript modules
* Dynamically updating the DOM
* Managing application state
* Working with API keys
* Using Webpack to bundle a JavaScript application

## Project Structure

```text
src/
├── index.js
├── weatherService.js
├── giphyService.js
├── render.js
├── template.html
├── styles.css
└── config.js
```

`config.js` contains the API keys used by the application and is excluded from Git using `.gitignore`.

## Running Locally

Clone the repository:

```bash
git clone https://github.com/RT1811/weather-app.git
```

Enter the project directory:

```bash
cd weather-app
```

Install dependencies:

```bash
npm install
```

Create your `src/config.js` file and add your API keys.

```js
export const API_KEY = "YOUR_VISUAL_CROSSING_API_KEY";
export const GIPHY_API_KEY = "YOUR_GIPHY_API_KEY";
```

Start the development server:

```bash
npm run dev
```

To create a production build:

```bash
npm run build
```

## Live Demo

[Live Demo Here.](https://rt1811.github.io/weather-app/)

## Acknowledgements

* [The Odin Project](https://www.theodinproject.com/)
* [Visual Crossing Weather](https://www.visualcrossing.com/)
* [GIPHY Developers](https://developers.giphy.com/)
