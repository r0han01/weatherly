require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const fetch = require('node-fetch'); // Ensure node-fetch is installed

const app = express();
const PORT = 3000; // You can change the port if needed

// Middleware to parse incoming JSON data (if necessary)
app.use(express.json());

// Serve static files (if your frontend files are in the same directory)
app.use(express.static(__dirname));

// Weather API endpoint
app.get('/weather', async (req, res) => {
    const city = req.query.city; // Get the city name from the query parameter
    const API_KEY = process.env.API_KEY; // Access the API key from the .env file
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

    if (!city) {
        return res.status(400).json({ error: 'City name is required' });
    }

    try {
        // Fetch weather data from OpenWeatherMap API
        const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        if (!response.ok) {
            throw new Error('City not found');
        }

        const data = await response.json();
        res.json(data); // Send the weather data to the client
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
