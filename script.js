const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "bbb99cad7amsh06746efdafe81a2p182050jsna8706a989092",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeathr = (city) => {
  console.log(city);
  document.getElementById("cityName").innerText = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      document.getElementById("cloud_pct").innerText = response.cloud_pct;
      document.getElementById("temp").innerText = response.temp;
      document.getElementById("min_temp").innerText = response.min_temp;
      document.getElementById("max_temp").innerText = response.max_temp;

      document.getElementById("feels_like").innerText = response.feels_like;
      document.getElementById("humidity").innerText = response.humidity;

      document.getElementById("wind_speed").innerText = response.wind_speed;
      document.getElementById("wind_degrees").innerText = response.wind_degrees;

      document.getElementById("sunrise").innerText = response.sunrise;
      document.getElementById("sunset").innerText = response.sunset;
    })
    .catch((err) => console.error(err));
};
getWeathr("Delhi");
search_btn.addEventListener("click", (e) => {
  e.preventDefault();
  getWeathr(search_bar.value);
});
