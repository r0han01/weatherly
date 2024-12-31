# Weather App 🌦️

A simple weather application that fetches and displays real-time weather information for any city using the OpenWeatherMap API.

![ScreenShot Tool -20241231041332](https://github.com/user-attachments/assets/03d14795-1893-4df1-98fc-1850ed19ad93)

## **Features**
- Search for weather information by city name.
- Displays temperature, weather description, humidity, and wind speed.
- Responsive design for seamless use on desktop and mobile devices.

---

## **Getting Started**

Follow these steps to set up and run the project on your local machine.

### **Prerequisites**
- [Node.js](https://nodejs.org/) installed on your machine.
- An OpenWeatherMap account to generate an API key.

---

### **OpenWeatherMap API Setup**

1. Visit [OpenWeatherMap API](https://openweathermap.org/api).
2. Sign up for an account (or log in if you already have one).
3. Go to your account settings and select the "API Keys" section.
4. Generate a new API key and copy it.
5. Save this key to your `.env` file as:

   ```plaintext
   API_KEY=your_openweathermap_api_key
### API Endpoint
- The app uses the following OpenWeatherMap API endpoint:

```plaintext
https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric
```
- Replace `{city name}` with the desired city's name.
- Replace `{API key}` with your OpenWeatherMap API key.
#### Project Setup
- Clone the repository:

```bash
git clone https://git@github.com:r0han01/weatherly.git
```
- cd weatherly

### Install dependencies:

```bash
npm install
```
- Create a .env file in the root of the project and add your OpenWeatherMap API key:

```plaintext
API_KEY=your_openweathermap_api_key
```
### Start the server:

```bash
node app.js
```
- Open the app in your browser:

```plaintext
http://localhost:3000
```
#### Project Structure
```plaintext
Weather-App/
│
├── app.js               # Backend server
├── index.html           # Frontend HTML file
├── script.js            # Frontend JavaScript
├── styles.css           # Frontend CSS
├── .env                 # Environment variables (API key)
├── .gitignore           # Files to ignore in Git
├── package.json         # Project dependencies
└── node_modules/        # Installed modules
```

Screenshots
- ![ScreenShot Tool -20241231041406](https://github.com/user-attachments/assets/6f4ebff5-a510-4e1e-af58-c8b786858c72)

License
This project is licensed under the MIT License. See the LICENSE file for details.
