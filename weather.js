const date = document.querySelector(".date");
const weatherCondition = document.querySelector(".weathercondition");
const cityName = document.querySelector(".cityName");
const time = document.querySelector(".time");
const humidity = document.querySelector(".humidity");
const pressure = document.querySelector(".pressure");
const wind = document.querySelector(".wind");
const image = document.querySelector(".image");
const temp = document.querySelector(".temp");
const tempFeel = document.querySelector(".tempFeel");
const reload = document.querySelector(".reload");

const apiKey = "ec98ec1ab92867727ec82a71fd41c66a";

fetchData();

async function fetchData() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Asheville,us&appid=${apiKey}`
    );

    if (!response.ok) {
      throw new Error("Could not fetch resource!");
    }

    const data = await response.json();

    console.log(data);

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const weekDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const localDate = new Date();

    const month = localDate.getMonth();

    const todayDate = localDate.getDate();

    const day = localDate.getDay();

    const year = localDate.getFullYear();

    date.textContent = `${months[month]} ${todayDate}, ${year} - ${weekDays[day]}`;

    let hours = localDate.getHours();
    let minutes = localDate.getMinutes();

    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (hours < 10) {
      hours = "0" + hours;
    }

    time.textContent = `${hours}:${minutes}`;

    const meltingTemp = 273.15;

    weatherCondition.textContent = `Weather-Condition: ${data.weather[0].main}`;
    cityName.textContent = `City Name: ${data.name}`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    pressure.textContent = `Pressure: ${data.main.pressure}hPa`;
    wind.textContent = `Wind: ${data.wind.speed}km/h`;
    temp.textContent = `Temp: ${Math.round(
      data.main.temp - meltingTemp
    )} Celcius`;
    tempFeel.textContent = `Temp feels: ${Math.round(
      data.main.feels_like - meltingTemp
    )} Celcius`;
  } catch (error) {
    console.error("There was a problem with your fetch data", error);
  }
}

reload.addEventListener("click", function () {
  fetchData();
});
