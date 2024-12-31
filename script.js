const API_URL = '/weather'; // Backend endpoint for fetching weather data

async function fetchWeather() {
    const city = document.getElementById('city').value;
    const weatherInfo = document.getElementById('weather-info');
    const details = document.getElementById('details');

    if (!city) {
        details.textContent = 'Please enter a city name.';
        return;
    }

    try {
        // Make a request to the backend to fetch weather data
        const response = await fetch(`${API_URL}?city=${city}`);
        if (!response.ok) throw new Error('City not found');

        const data = await response.json();
        const { name, main, weather, wind } = data;

        weatherInfo.innerHTML = `
            <h2>${name}</h2>
            <p>Temperature: ${main.temp}°C</p>
            <p class="weather-c">Weather: ${weather[0].description}</p>
            <p>Humidity: ${main.humidity}%</p>
            <p>Wind Speed: ${wind.speed} m/s</p>
        `;
    } catch (error) {
        details.textContent = error.message;
    }
}
