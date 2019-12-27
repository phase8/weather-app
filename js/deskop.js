let deskop = document.querySelector('.deskop');
let deskop_leftbox_inputcontainer_citiselect_submit = document.querySelector('.deskop_leftbox_inputcontainer_citiselect_submit');
let deskop_leftbox_inputcontainer_citiselect_text = document.querySelector('.deskop_leftbox_inputcontainer_citiselect_text');
let deskop_rightbox_citybox_iconcontainer = document.querySelector('.deskop_rightbox_citybox_iconcontainer');
let deskop_rightbox_citybox_city = document.querySelector('.deskop_rightbox_citybox_city');
let deskop_rightbox_citybox_description = document.querySelector('.deskop_rightbox_citybox_description');
let deskop_rightbox_tempbox_celsius = document.querySelector('.deskop_rightbox_tempbox_celsius');
let deskop_rightbox_tempbox_tempmin = document.querySelector('.deskop_rightbox_tempbox_tempmin');
let deskop_rightbox_tempbox_tempmax = document.querySelector('.deskop_rightbox_tempbox_tempmax');
let deskop_rightbox_tempbox_cisnienie = document.querySelector('.deskop_rightbox_tempbox_cisnienie');
let deskop_rightbox_tempbox_wilgotnosc = document.querySelector('.deskop_rightbox_tempbox_wilgotnosc');
let deskop_rightbox_tempbox_wiatr = document.querySelector('.deskop_rightbox_tempbox_wiatr');
let deskop_nextdaybox_day1_day = document.querySelector('.deskop_nextdaybox_day1_day');
let deskop_nextdaybox_day1_weathericonbox = document.querySelector('.deskop_nextdaybox_day1_weathericonbox');
let deskop_nextdaybox_day1_tempbox_tempminmax = document.querySelector('.deskop_nextdaybox_day1_tempbox_tempminmax');
let deskop_nextdaybox_day2_weathericonbox = document.querySelector('.deskop_nextdaybox_day2_weathericonbox');
let deskop_nextdaybox_day2_tempbox_tempminmax = document.querySelector('.deskop_nextdaybox_day2_tempbox_tempminmax');
let deskop_nextdaybox_day3_weathericonbox = document.querySelector('.deskop_nextdaybox_day3_weathericonbox');
let deskop_nextdaybox_day3_tempbox_tempminmax = document.querySelector('.deskop_nextdaybox_day3_tempbox_tempminmax');
let deskop_nextdaybox_day4_weathericonbox = document.querySelector('.deskop_nextdaybox_day4_weathericonbox');
let deskop_nextdaybox_day4_tempbox_tempminmax = document.querySelector('.deskop_nextdaybox_day4_tempbox_tempminmax');
let deskop_nextdaybox_day5_weathericonbox = document.querySelector('.deskop_nextdaybox_day5_weathericonbox');
let deskop_nextdaybox_day5_tempbox_tempminmax = document.querySelector('.deskop_nextdaybox_day5_tempbox_tempminmax');
let deskop_leftbox_inputcontainer_localise_submit = document.querySelector('.deskop_leftbox_inputcontainer_localise_submit');
let deskop_rightbox_noticecontainer = document.querySelector('.deskop_rightbox_noticecontainer');

function displayBlock() {
    return deskop.style.display = "block";
}
displayBlock()
console.log("deskop")

// searching by city name
deskop_leftbox_inputcontainer_citiselect_submit.addEventListener('click', function (name) {
    fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + deskop_leftbox_inputcontainer_citiselect_text.value + '&appid=50a7aa80fa492fa92e874d23ad061374&lang=pl&units=metric')
        .then(response => response.json())
        .then(data => {
            let iconId = data.list[0].weather[0].icon
            let city = data.city.name;
            let description = data.list[0].weather[0].description
            let tempValue = data.list[0].main.temp;
            let temprouded = Math.round(tempValue);
            let temp_min = data.list[0].main.temp_min;
            let tempminrouded = Math.round(temp_min);
            let temp_max = data.list[0].main.temp_max;
            let tempmaxrouded = Math.round(temp_max);
            let pressure = data.list[0].main.pressure;
            let humidity = data.list[0].main.humidity;
            let speed = data.list[0].wind.speed;
            let speedrounded = Math.round(speed);
            let iconId_day1 = data.list[1].weather[0].icon;
            let temp_min_day1 = data.list[1].main.temp_min;
            let temp_min_day1_rounded = Math.round(temp_min_day1);
            let temp_max_day1 = data.list[1].main.temp_max;
            let temp_max_day1_rounded = Math.round(temp_max_day1);
            let iconId_day2 = data.list[2].weather[0].icon;
            let temp_min_day2 = data.list[2].main.temp_min;
            let temp_min_day2_rounded = Math.round(temp_min_day2);
            let temp_max_day2 = data.list[2].main.temp_max;
            let temp_max_day2_rounded = Math.round(temp_max_day2);
            let iconId_day3 = data.list[3].weather[0].icon;
            let temp_min_day3 = data.list[3].main.temp_min;
            let temp_min_day3_rounded = Math.round(temp_min_day3);
            let temp_max_day3 = data.list[3].main.temp_max;
            let temp_max_day3_rounded = Math.round(temp_max_day3);
            let iconId_day4 = data.list[4].weather[0].icon;
            let temp_min_day4 = data.list[4].main.temp_min;
            let temp_min_day4_rounded = Math.round(temp_min_day4);
            let temp_max_day4 = data.list[4].main.temp_max;
            let temp_max_day4_rounded = Math.round(temp_max_day4);
            let iconId_day5 = data.list[5].weather[0].icon;
            let temp_min_day5 = data.list[5].main.temp_min;
            let temp_min_day5_rounded = Math.round(temp_min_day5);
            let temp_max_day5 = data.list[5].main.temp_max;
            let temp_max_day5_rounded = Math.round(temp_max_day5);

            deskop_rightbox_citybox_description.innerHTML = description
            deskop_rightbox_citybox_iconcontainer.innerHTML = `<img class="deskop_rightbox_citybox_weathericon" src="icons/${iconId}.png"/>`;
            deskop_rightbox_citybox_city.innerHTML = city;
            deskop_rightbox_tempbox_celsius.innerHTML = temprouded + "°C";
            deskop_rightbox_tempbox_tempmin.innerHTML = "temp. min " + tempminrouded + "°C";
            deskop_rightbox_tempbox_tempmax.innerHTML = "temp. max " + tempmaxrouded + "°C";
            deskop_rightbox_tempbox_cisnienie.innerHTML = "ciśnienie " + pressure + " hPa"
            deskop_rightbox_tempbox_wilgotnosc.innerHTML = "wilgotność " + humidity + "%"
            deskop_rightbox_tempbox_wiatr.innerHTML = "wiatr " + speedrounded + "&nbsp;km/h"
            deskop_nextdaybox_day1_weathericonbox.innerHTML = `<img class="deskop_nextdaybox_day1_weathericon" src="icons/${iconId_day1}.png"/>`;
            deskop_nextdaybox_day1_tempbox_tempminmax.innerHTML = "temp. min " + temp_min_day1_rounded + "°C " +
                "temp. max " + temp_max_day1_rounded + "°C";
            deskop_nextdaybox_day2_weathericonbox.innerHTML = `<img class="deskop_nextdaybox_day2_weathericon" src="icons/${iconId_day2}.png"/>`;
            deskop_nextdaybox_day2_tempbox_tempminmax.innerHTML = "temp. min " + temp_min_day2_rounded + "°C " +
                "temp. max " + temp_max_day2_rounded + "°C";
            deskop_nextdaybox_day3_weathericonbox.innerHTML = `<img class="deskop_nextdaybox_day3_weathericon" src="icons/${iconId_day3}.png"/>`;
            deskop_nextdaybox_day3_tempbox_tempminmax.innerHTML = "temp. min " + temp_min_day3_rounded + "°C " +
                "temp. max " + temp_max_day3_rounded + "°C";
            deskop_nextdaybox_day4_weathericonbox.innerHTML = `<img class="deskop_nextdaybox_day4_weathericon" src="icons/${iconId_day4}.png"/>`;
            deskop_nextdaybox_day4_tempbox_tempminmax.innerHTML = "temp. min " + temp_min_day4_rounded + "°C " +
                "temp. max " + temp_max_day4_rounded + "°C";
            deskop_nextdaybox_day5_weathericonbox.innerHTML = `<img class="deskop_nextdaybox_day5_weathericon" src="icons/${iconId_day5}.png"/>`;
            deskop_nextdaybox_day5_tempbox_tempminmax.innerHTML = "temp. min " + temp_min_day5_rounded + "°C " +
                "temp. max " + temp_max_day5_rounded + "°C";
            deskop_leftbox_inputcontainer_citiselect_text.value = "";
        })
        .catch(err => alert("Nie ma takiego miasta. Wprowadź poprawną nazwę miasta"));
})

// searching by  latitude and longitude
deskop_leftbox_inputcontainer_localise_submit.addEventListener('click', function (name) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(setPosition, showError);
    } else {
        deskop_rightbox_noticecontainer.style.display = "block";
    }
})

function setPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    console.log(latitude)
    console.log(longitude)
    getWeather(latitude, longitude);
}

function showError(error) {
    deskop_rightbox_noticecontainer.style.display = "block";
}

function getWeather(latitude, longitude) {
    fetch('http://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=50a7aa80fa492fa92e874d23ad061374&lang=pl&units=metric')
        .then(response => response.json())
        .then(data => {
            let iconId = data.list[0].weather[0].icon
            let city = data.city.name;
            let description = data.list[0].weather[0].description
            let tempValue = data.list[0].main.temp;
            let temprouded = Math.round(tempValue);
            let temp_min = data.list[0].main.temp_min;
            let tempminrouded = Math.round(temp_min);
            let temp_max = data.list[0].main.temp_max;
            let tempmaxrouded = Math.round(temp_max);
            let pressure = data.list[0].main.pressure;
            let humidity = data.list[0].main.humidity;
            let speed = data.list[0].wind.speed;
            let speedrounded = Math.round(speed);
            let iconId_day1 = data.list[1].weather[0].icon;
            let temp_min_day1 = data.list[1].main.temp_min;
            let temp_min_day1_rounded = Math.round(temp_min_day1);
            let temp_max_day1 = data.list[1].main.temp_max;
            let temp_max_day1_rounded = Math.round(temp_max_day1);
            let iconId_day2 = data.list[2].weather[0].icon;
            let temp_min_day2 = data.list[2].main.temp_min;
            let temp_min_day2_rounded = Math.round(temp_min_day2);
            let temp_max_day2 = data.list[2].main.temp_max;
            let temp_max_day2_rounded = Math.round(temp_max_day2);
            let iconId_day3 = data.list[3].weather[0].icon;
            let temp_min_day3 = data.list[3].main.temp_min;
            let temp_min_day3_rounded = Math.round(temp_min_day3);
            let temp_max_day3 = data.list[3].main.temp_max;
            let temp_max_day3_rounded = Math.round(temp_max_day3);
            let iconId_day4 = data.list[4].weather[0].icon;
            let temp_min_day4 = data.list[4].main.temp_min;
            let temp_min_day4_rounded = Math.round(temp_min_day4);
            let temp_max_day4 = data.list[4].main.temp_max;
            let temp_max_day4_rounded = Math.round(temp_max_day4);
            let iconId_day5 = data.list[5].weather[0].icon;
            let temp_min_day5 = data.list[5].main.temp_min;
            let temp_min_day5_rounded = Math.round(temp_min_day5);
            let temp_max_day5 = data.list[5].main.temp_max;
            let temp_max_day5_rounded = Math.round(temp_max_day5);

            deskop_rightbox_citybox_description.innerHTML = description
            deskop_rightbox_citybox_iconcontainer.innerHTML = `<img class="deskop_rightbox_citybox_weathericon" src="icons/${iconId}.png"/>`;
            deskop_rightbox_citybox_city.innerHTML = city;
            deskop_rightbox_tempbox_celsius.innerHTML = temprouded + "°C";
            deskop_rightbox_tempbox_tempmin.innerHTML = "temp. min " + tempminrouded + "°C";
            deskop_rightbox_tempbox_tempmax.innerHTML = "temp. max " + tempmaxrouded + "°C";
            deskop_rightbox_tempbox_cisnienie.innerHTML = "ciśnienie " + pressure + " hPa"
            deskop_rightbox_tempbox_wilgotnosc.innerHTML = "wilgotność " + humidity + "%"
            deskop_rightbox_tempbox_wiatr.innerHTML = "wiatr " + speedrounded + "&nbsp;km/h"
            deskop_nextdaybox_day1_weathericonbox.innerHTML = `<img class="deskop_nextdaybox_day1_weathericon" src="icons/${iconId_day1}.png"/>`;
            deskop_nextdaybox_day1_tempbox_tempminmax.innerHTML = "temp. min " + temp_min_day1_rounded + "°C " +
                "temp. max " + temp_max_day1_rounded + "°C";
            deskop_nextdaybox_day2_weathericonbox.innerHTML = `<img class="deskop_nextdaybox_day2_weathericon" src="icons/${iconId_day2}.png"/>`;
            deskop_nextdaybox_day2_tempbox_tempminmax.innerHTML = "temp. min " + temp_min_day2_rounded + "°C " +
                "temp. max " + temp_max_day2_rounded + "°C";
            deskop_nextdaybox_day3_weathericonbox.innerHTML = `<img class="deskop_nextdaybox_day3_weathericon" src="icons/${iconId_day3}.png"/>`;
            deskop_nextdaybox_day3_tempbox_tempminmax.innerHTML = "temp. min " + temp_min_day3_rounded + "°C " +
                "temp. max " + temp_max_day3_rounded + "°C";
            deskop_nextdaybox_day4_weathericonbox.innerHTML = `<img class="deskop_nextdaybox_day4_weathericon" src="icons/${iconId_day4}.png"/>`;
            deskop_nextdaybox_day4_tempbox_tempminmax.innerHTML = "temp. min " + temp_min_day4_rounded + "°C " +
                "temp. max " + temp_max_day4_rounded + "°C";
            deskop_nextdaybox_day5_weathericonbox.innerHTML = `<img class="deskop_nextdaybox_day5_weathericon" src="icons/${iconId_day5}.png"/>`;
            deskop_nextdaybox_day5_tempbox_tempminmax.innerHTML = "temp. min " + temp_min_day5_rounded + "°C " +
                "temp. max " + temp_max_day5_rounded + "°C";
        })
        .catch(err => alert("Coś poszło nie tak. Odśwież stronę i spróbuj ponownie"));
}

function GetTime1() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let day = date.getDate();
    let dayday = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();
    if (minute < 10) minute = "0" + minute;
    let days = new Array("niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota", "niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek");
    let months = new Array("stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia");
    let showdate = days[dayday] + ', ' + day + ' ' + months[month] + ' ' + year + " " + hour + ':' + minute
    let day1 = days[dayday + 1]
    let day2 = days[dayday + 2]
    let day3 = days[dayday + 3]
    let day4 = days[dayday + 4]
    let day5 = days[dayday + 5]
    document.querySelector('.deskop_rightbox_clock').innerHTML = showdate
    document.querySelector('.deskop_nextdaybox_day1_day').innerHTML = day1
    document.querySelector('.deskop_nextdaybox_day2_day').innerHTML = day2
    document.querySelector('.deskop_nextdaybox_day3_day').innerHTML = day3
    document.querySelector('.deskop_nextdaybox_day4_day').innerHTML = day4
    document.querySelector('.deskop_nextdaybox_day5_day').innerHTML = day5
    setTimeout(GetTime1, 60000);
}
GetTime1();