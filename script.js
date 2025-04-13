async function getWeather() {
    const location = document.getElementById('locationInput').value;
    const apiKey = 'a9c9d97c1e3143b4b8092312251304';
    const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=1&aqi=yes&alerts=yes`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        document.getElementById('location').textContent = data.location.name;
        document.getElementById('temperature').textContent = `Temperature: ${data.current.temp_c}°C`;
        document.getElementById('conditionText').textContent = data.current.condition.text;

        const astro = data.forecast.forecastday[0].astro;

        document.getElementById('sunrise').textContent = `Sunrise: ${astro.sunrise}`;
        document.getElementById('sunset').textContent = `Sunset: ${astro.sunset}`;
        document.getElementById('moonrise').textContent = `Moonrise: ${astro.moonrise}`;
        document.getElementById('moonset').textContent = `Moonset: ${astro.moonset}`;
        document.getElementById('wind').textContent = `Wind Speed: ${data.current.wind_kph} km/h`;
        document.getElementById('humidity').textContent = `Humidity: ${data.current.humidity}%`;


        document.getElementById('weatherIcon').src = `https:${data.current.condition.icon}`;

    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('Could not retrieve weather data. Please try a different location.');
    }
}