# Weather App

This project is a simple weather app that displays the current weather conditions for a specific city. Users can type the name of a city in the search bar, and upon clicking the search button, the app retrieves and displays the weather data, including temperature, humidity, and wind speed.

## Features

- **City Search**: Enter a city's name to get current weather information.
- **Current Temperature**: Displays the temperature in Celsius.
- **Weather Conditions**: Shows an icon representing the current weather (e.g., sunny, cloudy).
- **Additional Information**:
  - **Humidity**: Displays the current humidity percentage.
  - **Wind Speed**: Displays the current wind speed in km/h.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **API**: OpenWeatherMap API (or any other weather API) to fetch real-time weather data.
- **Design**: The design uses modern, vibrant gradients and minimalistic UI for a clean and visually appealing experience.
- **Build Tools**: Vite (or similar build tool)

## How It Works

1. The user enters the name of a city in the search bar.
2. On clicking the search button, the app sends an API request to the weather service (e.g., OpenWeatherMap API).
3. The app retrieves and displays:
   - Temperature in Celsius
   - Weather icon representing current conditions
   - Humidity percentage
   - Wind speed in km/h
4. The data is presented in an elegant card layout.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
   
   ```
2. Install Dependencies:
   ```bash
   npm install
   
   ```
3. Build the project:
   ```bash
   npm run build
   
   ```
4. Run the project in development mode:
   ```bash
   npm run dev
   
   ```
5. Open the provided localhost link (e.g., http://localhost:3000) in your browser to view the app.

## Usage

1. Type a city name in the search bar.
2. Click on the search button to fetch the current weather for the city.

## Future Enhancements

- Add support for geolocation to fetch weather for the user's current location.
- Display more detailed weather forecasts (e.g., 5-day forecast).
- Include error handling for invalid city names or API request failures.
