const apikey = "75cc078f5ddc416da48dc1e8303215dc";
const apilink = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const btnn = document.querySelector(".weather button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkwheather() {
    const searchInput = document.getElementById("inputt").value;

    let reponse = await fetch(apilink + searchInput + `&appid=${apikey}`);
    if (reponse.status == 404) {
        document.querySelector(".invalid").style.display = "block";
        document.querySelector(".divv").style.display = "none";
    }
    else {
        let data = await reponse.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + `°C`;
        document.querySelector(".humidity").innerHTML = data.main.humidity;
        document.querySelector(".wind").innerHTML = data.wind.speed + ' km/h';

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "img/clouds.png"
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "img/clear.png"
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "img/rain.png"
        }

        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "img/drizzle.png"
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "img/mist.png"
        }

        document.querySelector(".divv").style.display = "block";
        document.querySelector(".invalid").style.display = "none";
    }
}
btnn.addEventListener("click", () => {
    checkwheather()
})

