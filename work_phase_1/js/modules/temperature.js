function fetchTemperature() {
    // Get the temperature value element from the DOM
    const temperatureValue = document.getElementById("temperature-value");
    const windSpeedValue = document.getElementById("wind-speed-value");

    // This checks if the temperature widget is in the DOM
    if (!temperatureValue || !windSpeedValue) {
        console.error("Weather Data widget not found in the DOM.");
        return;
    }

    // This is the information for our location (Brisbane, Australia)
    const latitude = -27.4705;
    const longitude = 153.0260;

    // Corrected API URL
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json(); // Convert the response to JSON - an object
        })
        .then(data => { 
            const temperature = data.current_weather.temperature;
            const windSpeed = data.current_weather.windspeed; // Current wind speed
            temperatureValue.textContent = temperature; // Update UI
            windSpeedValue.textContent = windSpeed;
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            temperatureValue.textContent = "N/A";
            windSpeedValue.textContent = "N/A"; // Handle errors gracefully
        });
}

export { fetchTemperature };
