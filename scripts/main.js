var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

var weather = {};

function checkWeather(zip) {
    if (weather[zip]) {
        displayWeather(weather[zip])
    } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                var apiResult = JSON.parse(this.responseText);
                weather[zip] = apiResult.weather[0].description;
                displayWeather(weather[zip]);
            }
        };
        xmlhttp.open('GET', `http://api.openweathermap.org/data/2.5/weather?q=${zip},us&appid=6efff70fe1477748e31c17d1c504635f`, true);
        xmlhttp.send();
    }
}

function displayWeather(weather) {
    alert(weather);
}
