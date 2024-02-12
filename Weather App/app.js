const api_url =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const api_key = "a565061db4dff908cfc34643a4883b5c";
const searchBtn = document.querySelector(".searchBtn");
const cityInput = document.querySelector(".input-city");
const weatherIcon = document.querySelector(".weather-img");

async function checkWeather(city) {
  const response = await fetch(api_url + city + `&appid=${api_key}`);
  if (response.status == 404) {
    console.log("error");
    document.querySelector(".error").style.display = "block";
  } else {
    const data = await response.json();

    document.querySelector("#city").innerText = data.name;
    document.querySelector("#temp").innerText =
      Math.round(data.main.temp) + "°C";
    document.querySelector("#humidity-value").innerText =
      data.main.humidity + "%";
    document.querySelector("#speed-value").innerText = data.wind.speed + "km/h";

    if (data.weather[0].main === "clouds")
      weatherIcon.src = "assets/clouds.png";
    else if (data.weather[0].main === "clear")
      weatherIcon.src = "assets/clear.png";
    else if (data.weather[0].main === "mist")
      weatherIcon.src = "assets/mist.png";
    else if (data.weather[0].main === "snow")
      weatherIcon.src = "assets/snow.png";
    else if (data.weather[0].main === "drizzle")
      weatherIcon.src = "assets/drizzle.png";
    else weatherIcon.src = "assets/rain.png";

    document.querySelector("#weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(cityInput.value);
});
