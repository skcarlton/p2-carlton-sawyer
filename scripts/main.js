const coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        const content = this.nextElementSibling;
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
        const xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                const apiResult = JSON.parse(this.responseText);
                weather[zip] = apiResult.weather[0].description;
                displayWeather(weather[zip]);
            }
        };
        xmlhttp.open('GET', `http://api.openweathermap.org/data/2.5/weather?q=${zip},us&appid=912cec00df98ad83cbadee49b0e6070c`, true);
        xmlhttp.send();
    }
}

function displayWeather(weather) {
    alert(weather);
}

// Submenu functionality
function showSubmenu() {
    const submenu = document.getElementById('submenu');
    if (!submenu.classList.contains('header-submenu')) {
        submenu.classList.add('header-submenu');
    }
}

function hideSubmenu() {
    const submenu = document.getElementById('submenu');
    if (submenu.classList.contains('header-submenu')) {
        submenu.classList.remove('header-submenu');
    }
}

// On navigation check if the url contains an id, if yes open the accordion
const id = window.location.href.split('#');
if (id[1]) {
    document.getElementById(id[1]).click();
}

// pop up add
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
setTimeout(() => {
    modal.style.display = "block";
}, 10000);
if (span) {
    span.onclick = function() {
        modal.style.display = "none";
    };
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
