const apiKey = "04d83e178f1adba2e7b68e5d3adf55e3"; // Replace this with your real OpenWeatherMap API key

function getWeather() {
  const city = document.getElementById("cityInput").value;
  if (!city) {
    document.getElementById("weatherResult").innerHTML = `<p>Please enter a city name.</p>`;
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then((data) => {
      const result = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
        <p><strong>Weather:</strong> ${data.weather[0].description}</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
      `;
      document.getElementById("weatherResult").innerHTML = result;
    })
    .catch((error) => {
      document.getElementById("weatherResult").innerHTML = `<p>${error.message}</p>`;
    });
}
