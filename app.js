const submit_btn = document.querySelector(".submitbtn");
let country = document.querySelector(".country_input");
// let country_value = country.value;

// submit_btn.onclick = () => {
//   console.log(country.value);
// };

const link = `https://api.openweathermap.org/data/2.5/weather?q=Gedaref&appid=cd0a2e51ddd4eb15646abbb8be2e5131`;

let requset = new XMLHttpRequest();

requset.open("GET", link, true);

requset.onload = function () {
    let obj = JSON.parse(this.response);
    console.log(obj);
    document.querySelector(
        "#location"
    ).innerHTML = `${obj.sys.country}, ${obj.name}`;
    document.querySelector(".describtion").innerHTML = obj.weather[0].description;
    document.querySelector("#temp").innerHTML =
        Math.trunc(obj.main.temp - 273.15) + "c";
    console.log(obj.weather[0].description);

    let percentage = obj.main.temp - 273.15;
    console.log(Math.trunc(percentage));
    //   document.querySelector("#icon").src =
    //     "https://www.openweathermap.org/img/w/" + obj.weather[0].icon + ".png";

    if (this.status == 200) {} else {
        document.querySelector(".error").innerHTML = obj.message;
    }

    //   GET WEATHER SPEED AND DIRECTION
    const wind_speed = document.querySelector("#speed_count");
    const wind_direction = document.querySelector("#wind_direction");

    wind_speed.innerHTML = `${obj.wind.speed} mph`;
    wind_direction.innerHTML = `${obj.wind.deg} deg`;

    // CONVERT SUNRISE AND SUNSET UNIX

    // SUNRISE
    const sunrise = obj.sys.sunrise;
    const raisedate = new Date(sunrise * 1000);

    // SUNSET
    const sunset = obj.sys.sunset;
    const setdate = new Date(sunset * 1000);

    let sunries_time = document.querySelector(".sunries_time");
    let sunset_time = document.querySelector(".sunset_time");

    sunries_time.innerHTML = raisedate;
    sunset_time.innerHTML = setdate;



    /* ############################## ICONS ############################ */
    //   CHANGE ICON WHEN WEATHER STATUS CHANGED
    let weather_status = (document.querySelector(".describtion").innerHTML =
            obj.weather[0].description),
        status_image = document.querySelector("#icon");

    if (weather_status == "overcast clouds") {
        status_image.src = "./images/snow.png";
    }
    if (weather_status == "haze") {
        status_image.src = "./images/haze.png";
    }
    if (weather_status == "clear sky") {
        status_image.src = "./images/clearsky.png";
    }
    if (weather_status == "scattered clouds") {
        status_image.src = "./images/scattered_thunderstorms.png";
    }
    if (weather_status == "moderate rain") {
        status_image.src = "./images/rain.png";
    }
    if (weather_status == "heavy intensity rain") {
        status_image.src = "./images/storm.png";
    }
    if (weather_status == "broken clouds") {
        status_image.src = "./images/clouds.png";
    }
    if (weather_status == "light rain") {
        status_image.src = "./images/lightrain.png";
    }
};

requset.send();